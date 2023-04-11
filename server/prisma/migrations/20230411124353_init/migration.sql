/*
  Warnings:

  - You are about to drop the column `assigned` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `Rider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_assigned_fkey";

-- DropForeignKey
ALTER TABLE "Rider" DROP CONSTRAINT "Rider_vendorid_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "assigned";

-- DropTable
DROP TABLE "Rider";
