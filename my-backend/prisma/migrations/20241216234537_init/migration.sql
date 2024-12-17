-- CreateTable
CREATE TABLE "TodoList" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,

    CONSTRAINT "TodoList_pkey" PRIMARY KEY ("id")
);
