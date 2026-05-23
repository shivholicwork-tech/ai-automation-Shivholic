import 'dotenv/config';

const boot = async (): Promise<void> => {
  // Queue processor bootstrap placeholder wired for BullMQ worker startup.
  // Replace with actual Queue instances and processors.
  // This process is intentionally minimal and production-safe.
  process.stdout.write('Worker process started. Configure BullMQ processors in src/queue.\n');

  process.on('SIGTERM', () => process.exit(0));
  process.on('SIGINT', () => process.exit(0));
};

void boot();
