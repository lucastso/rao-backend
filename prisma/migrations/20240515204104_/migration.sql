/*
  Warnings:

  - You are about to drop the column `employmentType` on the `JobPost` table. All the data in the column will be lost.
  - You are about to drop the column `restrictedLocations` on the `JobPost` table. All the data in the column will be lost.
  - Added the required column `contractType` to the `JobPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `JobPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobPost" DROP COLUMN "employmentType",
DROP COLUMN "restrictedLocations",
ADD COLUMN     "contractType" TEXT NOT NULL,
ADD COLUMN     "level" TEXT NOT NULL;
