/*
  Warnings:

  - You are about to alter the column `product_name_length` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `product_description_length` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `product_photos_qty` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `product_weight_g` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `product_length_cm` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `product_height_cm` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `product_width_cm` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Order_item" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "freight_value" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "product_name_length" SET DATA TYPE INTEGER,
ALTER COLUMN "product_description_length" SET DATA TYPE INTEGER,
ALTER COLUMN "product_photos_qty" SET DATA TYPE INTEGER,
ALTER COLUMN "product_weight_g" SET DATA TYPE INTEGER,
ALTER COLUMN "product_length_cm" SET DATA TYPE INTEGER,
ALTER COLUMN "product_height_cm" SET DATA TYPE INTEGER,
ALTER COLUMN "product_width_cm" SET DATA TYPE INTEGER;
