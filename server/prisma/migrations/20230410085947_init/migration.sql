/*
  Warnings:

  - You are about to drop the column `vendorid` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_vendorid_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "vendorid";
