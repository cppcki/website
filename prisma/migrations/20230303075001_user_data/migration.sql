/*
  Warnings:

  - A unique constraint covering the columns `[edu]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "apt" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "dob" TIMESTAMP(3),
ADD COLUMN     "edu" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "zipcode" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "User_edu_key" ON "User"("edu");
