-- CreateEnum
CREATE TYPE "public"."TransactionType" AS ENUM ('CREDIT', 'DEBIT');

-- CreateTable
CREATE TABLE "public"."transactions" (
    "id" SERIAL NOT NULL,
    "type" "public"."TransactionType" NOT NULL,
    "value" DECIMAL(10,2) NOT NULL,
    "parcelas" INTEGER NOT NULL,
    "user_id" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."clients" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transactions_user_id_key" ON "public"."transactions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "public"."clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- AddForeignKey
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
