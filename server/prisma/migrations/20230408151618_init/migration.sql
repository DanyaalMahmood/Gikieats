-- CreateTable
CREATE TABLE "User" (
    "regno" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hostel" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "phoneno" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("regno")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneno" INTEGER NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "availability" TEXT NOT NULL,
    "vendorid" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_vendorid_fkey" FOREIGN KEY ("vendorid") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
