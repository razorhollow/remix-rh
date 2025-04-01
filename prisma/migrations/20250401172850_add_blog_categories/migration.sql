-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BlogPost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT,
    "imageAlt" TEXT,
    "category" TEXT NOT NULL DEFAULT 'uncategorized',
    "subcategory" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_BlogPost" ("content", "createdAt", "excerpt", "id", "imageAlt", "imageUrl", "published", "slug", "title", "updatedAt") SELECT "content", "createdAt", "excerpt", "id", "imageAlt", "imageUrl", "published", "slug", "title", "updatedAt" FROM "BlogPost";
DROP TABLE "BlogPost";
ALTER TABLE "new_BlogPost" RENAME TO "BlogPost";
CREATE UNIQUE INDEX "BlogPost_slug_key" ON "BlogPost"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
