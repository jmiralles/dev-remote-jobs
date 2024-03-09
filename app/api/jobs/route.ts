import prisma from "../../lib/prisma";

export async function GET() {
  const jobs = await prisma.job.findMany({
    orderBy: {
      publication_date: "desc",
    },
    include: {
      company: {
        select: {
          name: true,
          logo_url: true,
        },
      },
      location: {
        select: {
          name: true,
        },
      },
      tags: {
        select: {
          name: true,
        },
      },
      provider: {
        select: {
          name: true,
          url: true,
        },
      },
    },
  });
  return Response.json(jobs);
}
