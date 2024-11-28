/*
  Warnings:

  - Added the required column `ratings` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "ratings" TEXT NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'uncompleted';
