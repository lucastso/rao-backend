-- CreateTable
CREATE TABLE "JobPost" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "employmentType" TEXT NOT NULL,
    "primaryTag" TEXT NOT NULL,
    "tags" TEXT[],
    "restrictedLocations" TEXT[],
    "logo" TEXT NOT NULL,
    "highlightColor" TEXT NOT NULL,
    "salaryMin" INTEGER NOT NULL,
    "salaryMax" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "benefits" TEXT[],
    "howToApply" TEXT NOT NULL,
    "applyUrl" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "addonShowLogo" BOOLEAN NOT NULL,
    "addonShowToEmailSubscribers" BOOLEAN NOT NULL,
    "addonCreateQRCodeLink" BOOLEAN NOT NULL,
    "addonYellowHighlight" BOOLEAN NOT NULL,
    "addonStickFor24Hours" BOOLEAN NOT NULL,
    "addonStickFor7Days" BOOLEAN NOT NULL,
    "addonStickFor30Days" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "experienceYears" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "level" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "mainTools" TEXT[],
    "nationality" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "urlProfile" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "skills" TEXT[],
    "languages" TEXT[],
    "salaryRange" INTEGER NOT NULL,
    "hourRange" TEXT NOT NULL,
    "badges" TEXT[],
    "jobs" TEXT[],
    "sideProjects" TEXT[],
    "educacao" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "yearStart" INTEGER NOT NULL,
    "yearEnd" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Employment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SideProject" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "yearStart" INTEGER NOT NULL,
    "yearEnd" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "SideProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "yearStart" INTEGER NOT NULL,
    "yearEnd" INTEGER NOT NULL,
    "field" TEXT NOT NULL,
    "school" TEXT NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Employment" ADD CONSTRAINT "Employment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SideProject" ADD CONSTRAINT "SideProject_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
