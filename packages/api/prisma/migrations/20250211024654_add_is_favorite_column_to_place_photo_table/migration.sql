/*
  Warnings:

  - Added the required column `isFavorite` to the `PlacePhoto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlacePhoto" ADD COLUMN     "isFavorite" BOOLEAN NOT NULL;
