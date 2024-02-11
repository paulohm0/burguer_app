import { ProductProps } from "@/utils/data/products";
import { ProductsCartProps } from "../cart-store";

export function add(product : ProductsCartProps[], newProduct: ProductProps ){
   const existingProduct = product.find(({ id }) => newProduct.id === id)

    if(existingProduct) {
        return product.map((product) => 
        product.id === existingProduct.id
        ? {...product, quantity : product.quantity + 1}
        : product)
    }

    return [...product, { ...newProduct, quantity: 1}]
}

export function remove(product: ProductsCartProps[], productRemoveId: string) {
    const updatedProducts = product.map((product) => 
        product.id === productRemoveId
            ? {
                ...product,
                quantity: product.quantity > 1 ? product.quantity - 1 : 0,
            }
        : product
    )
    return updatedProducts.filter((product) => product.quantity > 0)
}