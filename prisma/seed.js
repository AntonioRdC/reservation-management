const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const users = await Promise.all(
    Array.from({ length: 10 }, (_, index) => {
      return prisma.user.create({
        data: {
          id: `user-${index + 1}`,
          name: `User ${index + 1}`,
          email: `user${index + 1}@example.com`,
        },
      });
    }),
  );

  const spaces = await Promise.all(
    Array.from({ length: 10 }, (_, index) => {
      return prisma.space.create({
        data: {
          name: `Space ${index + 1}`,
          description: `Description for Space ${index + 1}`,
          capacity: 50 + index * 5,
        },
      });
    }),
  );

  const resources = await Promise.all(
    Array.from({ length: 10 }, (_, index) => {
      return prisma.resource.create({
        data: {
          name: `Resource ${index + 1}`,
          quantity: 100 + index * 10,
        },
      });
    }),
  );

  const bookings = await Promise.all(
    Array.from({ length: 10 }, (_, index) => {
      return prisma.booking.create({
        data: {
          spaceId: spaces[index].id,
          userId: users[index].id,
          startTime: new Date(2024, 11, index + 1, 9, 0),
          endTime: new Date(2024, 11, index + 1, 10, 0),
          image: `https://example.com/image${index + 1}.jpg`,
          category: index % 2 === 0 ? 'ONLINE_COURSE' : 'CONSULTANCY',
          status: 'REQUESTED',
        },
      });
    }),
  );

  await Promise.all(
    Array.from({ length: 10 }, (_, index) => {
      return prisma.resourceBooking.create({
        data: {
          bookingId: bookings[index].id,
          resourceId: resources[index].id,
        },
      });
    }),
  );
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
