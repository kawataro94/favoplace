/*
  Warnings:

  - You are about to drop the `PlaceThumbnail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `isThumbnail` to the `PlacePhoto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PlaceThumbnail" DROP CONSTRAINT "PlaceThumbnail_placeId_fkey";

-- AlterTable
ALTER TABLE "PlacePhoto" ADD COLUMN     "isThumbnail" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "PlaceThumbnail";
