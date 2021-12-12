-- CreateTable
CREATE TABLE "Order" (
    "order_id" TEXT NOT NULL,
    "order_status" TEXT,
    "order_purchase_timestamp" TIMESTAMP(3),
    "order_approved_at" TIMESTAMP(3),
    "order_delivered_carrier_date" TIMESTAMP(3),
    "order_delivered_customer_date" TIMESTAMP(3),
    "order_estimated_delivery_date" TIMESTAMP(3),
    "customer_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" TEXT NOT NULL,
    "customer_unique_id" TEXT NOT NULL,
    "customer_city" TEXT,
    "customer_state" TEXT
);

-- CreateTable
CREATE TABLE "Order_item" (
    "order_item_id" INTEGER NOT NULL,
    "shipping_limit_date" TIMESTAMP(3),
    "price" INTEGER,
    "freight_value" INTEGER,
    "order_item_quantity" INTEGER,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "seller_id" TEXT NOT NULL,

    CONSTRAINT "Order_item_pkey" PRIMARY KEY ("order_item_id")
);

-- CreateTable
CREATE TABLE "Seller" (
    "seller_id" TEXT NOT NULL,
    "seller_city" TEXT,
    "seller_state" TEXT
);

-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "product_category_name" TEXT,
    "product_name_length" DOUBLE PRECISION,
    "product_description_length" DOUBLE PRECISION,
    "product_photos_qty" DOUBLE PRECISION,
    "product_weight_g" DOUBLE PRECISION,
    "product_length_cm" DOUBLE PRECISION,
    "product_height_cm" DOUBLE PRECISION,
    "product_width_cm" DOUBLE PRECISION
);

-- CreateTable
CREATE TABLE "Order_payment" (
    "payment_id" INTEGER NOT NULL,
    "payment_sequential" INTEGER,
    "payment_type" TEXT,
    "payment_installments" INTEGER,
    "payment_value" DOUBLE PRECISION,
    "order_id" TEXT NOT NULL,

    CONSTRAINT "Order_payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_order_id_key" ON "Order"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_customer_id_key" ON "Order"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customer_id_key" ON "Customer"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customer_unique_id_key" ON "Customer"("customer_unique_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_item_order_id_key" ON "Order_item"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_item_product_id_key" ON "Order_item"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_item_seller_id_key" ON "Order_item"("seller_id");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_seller_id_key" ON "Seller"("seller_id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_id_key" ON "Product"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_payment_order_id_key" ON "Order_payment"("order_id");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_item" ADD CONSTRAINT "Order_item_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_item" ADD CONSTRAINT "Order_item_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_item" ADD CONSTRAINT "Order_item_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Seller"("seller_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_payment" ADD CONSTRAINT "Order_payment_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;
