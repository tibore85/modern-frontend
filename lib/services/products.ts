import { products } from "@/data/products";
import { Product } from "@/lib/types/product";

export async function getProducts(): Promise<Product[]> {
    return products;
}

export async function getProductById(id: number): Promise<Product | undefined> {
    return products.find((p) => p.id === id);
}

export async function getProductsByCategory(
    category: string
): Promise<Product[]> {
    return products.filter((p) => p.category === category);
}

export async function getInStockProducts(): Promise<Product[]> {
    return products.filter((p) => p.inStock);
}
