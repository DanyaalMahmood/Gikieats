-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "ordertime" DROP DEFAULT,
ALTER COLUMN "ordertime" SET DATA TYPE TEXT;