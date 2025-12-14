import { relations } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

// 親: カテゴリ（id, nameのみ）
export const categories = sqliteTable('categories', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID())
    .notNull(),
  name: text('name').notNull(),
});

// 子: 商品（id, name, categoryIdのみ）
export const products = sqliteTable('products', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID())
    .notNull(),
  name: text('name').notNull(),
  categoryId: text('category_id')
    .notNull()
    .references(() => categories.id, { onDelete: 'no action' }),
});

// リレーション（型安全なwith用）
export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));
export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}));
