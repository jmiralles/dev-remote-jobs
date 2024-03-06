import type { Job } from "@/app/types";

export default async function Home() {
  const res = await fetch(`http://nextjs:3000/api/jobs`);
  if (!res.ok) {
    return <div>Failed to fetch {res.status}</div>;
  }
  const jobData: Job[] = await res.json();
  console.log("jobData", jobData);
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <div className="h-[80vh] p-4">
        {jobData.map((job) => (
          <div className="flex justify-between" key={job.id}>
            <span>{job.title}</span>{" "}
            <span>salary: {job.salary ? job.salary : "Not specified"}</span>
            <a className="text-mandys-pink" href={job.url}>
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
