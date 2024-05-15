/*
  Warnings:

  - You are about to drop the column `badges` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `educacao` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `jobs` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `sideProjects` on the `User` table. All the data in the column will be lost.
  - Added the required column `applicants` to the `JobPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobPost" ADD COLUMN     "applicants" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "badges",
DROP COLUMN "educacao",
DROP COLUMN "jobs",
DROP COLUMN "nationality",
DROP COLUMN "sideProjects";
