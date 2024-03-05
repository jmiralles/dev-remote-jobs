export const register = async () => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.log("Instrumentation!!!");
    const { Worker, Queue } = await import("bullmq");
    const { connection } = await import("./app/lib/redis");

    const myQueue = new Queue("fetch-remote-jobs", {
      connection,
    });

    const worker = new Worker(
      "fetch-remote-jobs",
      async () => {
        // fetch from remote
        console.log("Fetching remote jobs");
        const resp = await fetch("https://remoteok.io/api");
        const data = await resp.json();

        console.log(data);
      },
      {
        connection,
      }
    );

    worker.on("failed", (job, err) => {
      console.log(`Job ${job?.id} failed with error ${err.message}`);
    });

    await myQueue.add(
      "fetch-remote-jobs",
      {},
      {
        repeat: {
          every: 100000, // 100 seconds or now
        },
      }
    );
  }
};
