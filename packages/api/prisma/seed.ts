import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const places = [
  {
    id: 'cm4jvci640000qrx73fn10wh6',
    name: 'Cafe A',
    description: '家から一番近い',
    visitCount: 14,
  },
  {
    id: 'cm4jve9fe0000qrx7bzfx4ise',
    name: 'Cafe B',
    description: '居心地がいい',
    visitCount: 5,
  },
  {
    id: 'cm4jvee330000qrx7ahp2b8oj',
    name: 'Cafe C',
    description: '低価格',
    visitCount: 2,
  },
] satisfies Prisma.PlaceCreateManyInput[];

const visitHistories = [
  {
    id: 'cm5884ujg00009ux7bmzganj6',
    date: '2024-12-01 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm5886ma100009ux74k97fsos',
    date: '2024-12-02 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm5886s1900009ux750ziaysl',
    date: '2024-12-03 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm5886ylk00009ux739pl1su9',
    date: '2024-12-04 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm58870nf00009ux7gm1zhv49',
    date: '2024-12-05 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm588750200009ux76xo36e8t',
    date: '2024-12-06 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm58878id00009ux7cp1m98mh',
    date: '2024-12-07 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm5887eik00009ux7df0d6e58',
    date: '2024-12-08 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm5887h0m00009ux70eiw0jb3',
    date: '2024-12-09 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm5887jxk00009ux7d17m5cpv',
    date: '2024-12-10 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm5887miy00009ux70r752c9t',
    date: '2024-12-11 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm5887oqd00009ux7d4oj89k9',
    date: '2024-12-12 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm5887r4p00009ux73dqz0igh',
    date: '2024-12-13 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm5887tj100009ux74d305otx',
    date: '2024-12-14 12:00',
    placeId: 'cm4jvci640000qrx73fn10wh6',
  },
  {
    id: 'cm5887vre00009ux7b9e42fqd',
    date: '2024-12-15 12:00',
    placeId: 'cm4jve9fe0000qrx7bzfx4ise',
  },
  {
    id: 'cm5887y7200009ux7cdin4dpy',
    date: '2024-12-16 12:00',
    placeId: 'cm4jve9fe0000qrx7bzfx4ise',
  },
  {
    id: 'cm588808a00009ux7d6zn566c',
    date: '2024-12-17 12:00',
    placeId: 'cm4jve9fe0000qrx7bzfx4ise',
  },
  {
    id: 'cm58882h600009ux74j3w2njn',
    date: '2024-12-18 12:00',
    placeId: 'cm4jve9fe0000qrx7bzfx4ise',
  },
  {
    id: 'cm58884mw00009ux7g24p9poe',
    date: '2024-12-19 12:00',
    placeId: 'cm4jve9fe0000qrx7bzfx4ise',
  },
  {
    id: 'cm58886lh00009ux75qjs4arp',
    date: '2024-12-20 12:00',
    placeId: 'cm4jvee330000qrx7ahp2b8oj',
  },
  {
    id: 'cm5888av900009ux76azie73d',
    date: '2024-12-21 12:00',
    placeId: 'cm4jvee330000qrx7ahp2b8oj',
  },
] satisfies Prisma.VisitHistoryCreateManyInput[];

async function main() {
  console.log(`Start seeding ...`);

  for (const _place of places) {
    const place = await prisma.place.create({
      data: _place,
    });
    console.log(`Created place with id: ${place.id}`);
  }

  for (const _visitHistory of visitHistories) {
    const visitHistory = await prisma.visitHistory.create({
      data: _visitHistory,
    });
    console.log(`Created visit history with id: ${visitHistory.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
