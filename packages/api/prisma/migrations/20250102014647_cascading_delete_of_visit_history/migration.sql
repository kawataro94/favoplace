-- DropForeignKey
ALTER TABLE "VisitHistory" DROP CONSTRAINT "VisitHistory_placeId_fkey";

-- AlterTable
ALTER TABLE "VisitHistory" ALTER COLUMN "placeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "VisitHistory" ADD CONSTRAINT "VisitHistory_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE SET NULL ON UPDATE CASCADE;
