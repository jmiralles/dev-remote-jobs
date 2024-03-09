import type { Job } from "@/app/types";
import { JobCard } from "@/app/components/card";

export default async function Home() {
  const res = await fetch(`http://nextjs:3000/api/jobs`);

  if (!res.ok) {
    return <div>Failed to fetch {res.status}</div>;
  }

  const jobData: Job[] = await res.json();

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <div className="h-[80vh] p-4">
      
        {jobData.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}
