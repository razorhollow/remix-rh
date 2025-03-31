import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.note.deleteMany({}).catch(console.error);
  await prisma.password.deleteMany({}).catch(console.error);
  await prisma.user.deleteMany({}).catch(console.error);
  await prisma.blogPost.deleteMany({}).catch(console.error);

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  // Add sample blog posts
  await prisma.blogPost.create({
    data: {
      title: "Getting Started with Remix",
      slug: "getting-started-with-remix",
      excerpt: "Learn how to build modern web applications with Remix",
      content: "Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, resilient, and user experience.",
      published: true,
    },
  });

  await prisma.blogPost.create({
    data: {
      title: "The Future of Web Development",
      slug: "future-of-web-development",
      excerpt: "Exploring upcoming trends and technologies in web development",
      content: "Web development is constantly evolving. From new frameworks to improved tooling, there's always something exciting on the horizon.",
      published: false,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
