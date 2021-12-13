-- DropIndex
DROP INDEX "Customer_customer_unique_id_key";

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "customer_unique_id" DROP NOT NULL;
