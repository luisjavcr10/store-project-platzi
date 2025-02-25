import { getProducts } from "@/services/shopify";
import { sessionShopify } from "@/services/shopify/utils/Session";

export async function GET() {
    const data = await getProducts(sessionShopify);
    return Response.json({ data});
}