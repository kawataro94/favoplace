-- CreateTable
CREATE TABLE "PlaceThumbnail" (
    "id" TEXT NOT NULL,
    "pathname" TEXT NOT NULL,
    "placeId" TEXT,

    CONSTRAINT "PlaceThumbnail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlacePhoto" (
    "id" TEXT NOT NULL,
    "pathname" TEXT NOT NULL,
    "placeId" TEXT,

    CONSTRAINT "PlacePhoto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlaceThumbnail_pathname_key" ON "PlaceThumbnail"("pathname");

-- CreateIndex
CREATE UNIQUE INDEX "PlacePhoto_pathname_key" ON "PlacePhoto"("pathname");

-- AddForeignKey
ALTER TABLE "PlaceThumbnail" ADD CONSTRAINT "PlaceThumbnail_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlacePhoto" ADD CONSTRAINT "PlacePhoto_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE SET NULL ON UPDATE CASCADE;
