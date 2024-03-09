export const register = async () => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { Worker, Queue } = await import("bullmq");
    const { connection } = await import("./app/lib/redis");

    const myQueue = new Queue("fetch-remote-jobs", {
      connection,
    });

    const worker = new Worker(
      "fetch-remote-jobs",
      async () => {
        console.log("Running Cron Job...");
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
          pattern: "0 12 * * *",
        },
      }
    );
  }
};
