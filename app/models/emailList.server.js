import { prisma } from "~/db.server";

export function getEmailListItems() {
  return prisma.subscriber.findMany({
    select: { id: true, email: true },
    orderBy: { createdAt: "desc" },
  });
}

