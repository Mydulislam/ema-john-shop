import { getStoredCart } from "../utilities/fakedb";

const productsAndCartLoaders=async()=>{
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    const saveCart = getStoredCart();
    let paowaProductgulo = [];
    for(let id in saveCart){
        const jeiproductGuloace = products.find(product =>product.id === id);
        if(jeiproductGuloace){
            let quantity = saveCart[id]
            jeiproductGuloace.quantity = quantity;
            paowaProductgulo.push(jeiproductGuloace)
        }
    }
    return {products, paowaProductgulo}
}
export {productsAndCartLoaders}