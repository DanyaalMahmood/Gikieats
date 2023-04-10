/*
  Warnings:

  - Added the required column `vendorid` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "vendorid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_vendorid_fkey" FOREIGN KEY ("vendorid") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
