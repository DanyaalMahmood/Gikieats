-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_assigned_fkey";

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_assigned_fkey" FOREIGN KEY ("assigned") REFERENCES "Rider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
