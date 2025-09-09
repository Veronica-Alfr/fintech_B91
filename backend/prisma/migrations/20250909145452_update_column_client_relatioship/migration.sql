/*
  Warnings:

  - You are about to drop the column `user_id` on the `transactions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[client_id]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."transactions" DROP CONSTRAINT "transactions_user_id_fkey";

-- DropIndex
DROP INDEX "public"."transactions_user_id_key";

-- AlterTable
ALTER TABLE "public"."transactions" DROP COLUMN "user_id",
ADD COLUMN     "client_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "transactions_client_id_key" ON "public"."transactions"("client_id");

-- AddForeignKey
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
