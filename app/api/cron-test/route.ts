import prisma from "../../lib/prisma";

const PROVIDER_VALUES = {
  name: "remotive",
  url: "https://remotive.com/",
  api_url:
    "https://remotive.com/api/remote-jobs?category=software-dev&limit=100",
};

type RemotiveJob = {
  id: number;
  url: string;
  title: string;
  company_name: string;
  company_logo_url: string;
  tags: string[];
  salary: string;
  publication_date: string;
  candidate_required_location: string;
};

type Data = {
  jobs: RemotiveJob[];
};

export async function GET() {
  console.log("FETCH FROM REMOTIVE!")
  const resp = await fetch(PROVIDER_VALUES.api_url);
  const data: Data = await resp.json();

  const provider = await prisma.provider.upsert({
    create: {
      name: PROVIDER_VALUES.name,
      url: PROVIDER_VALUES.url,
    },
    update: {},
    where: {
      name: PROVIDER_VALUES.name,
    },
  });

  for (const job of data.jobs) {
    try {
      const company = await prisma.company.upsert({
        create: {
          name: job.company_name,
          logo_url: job.company_logo_url,
        },
        update: {},
        where: {
          name: job.company_name,
        },
      });

      const location = await prisma.location.upsert({
        create: {
          name: job.candidate_required_location,
          code: job.candidate_required_location,
        },
        update: {},
        where: {
          name: job.candidate_required_location,
        },
      });

      let tags = [];
      for (const tagName of job.tags) {
        const tag = await prisma.tag.upsert({
          create: {
            name: tagName,
          },
          update: {},
          where: {
            name: tagName,
          },
        });
        tags.push(tag);
      }

      await prisma.job.upsert({
        update: {},
        create: {
          publication_date: new Date(job.publication_date),
          job_id: job.id.toString(),
          url: job.url,
          title: job.title,
          salary: job.salary,
          tags: {
            connect: tags.map((tag) => ({ id: tag.id })),
          },
          location: {
            connect: {
              id: location.id,
            },
          },
          provider: {
            connect: {
              id: provider.id,
            },
          },
          company: {
            connect: {
              id: company.id,
            },
          },
        },
        where: {
          job_id: job.id.toString(),
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  return Response.json(data);
}
