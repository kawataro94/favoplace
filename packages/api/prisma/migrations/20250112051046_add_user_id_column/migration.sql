/*
  Warnings:

  - Added the required column `userId` to the `Place` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `VisitHistory` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Place_name_key";

-- AlterTable
ALTER TABLE "Place" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VisitHistory" ADD COLUMN     "userId" TEXT NOT NULL;
