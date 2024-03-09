import prisma from "../lib/prisma";

async function fetchFromRemotive() {
  //const resp = await fetch("https://remoteok.io/api");
  // const data = await resp.json();
  //console.log(data);

  const jobs = await prisma.job.findMany();

  console.log(jobs)
}
