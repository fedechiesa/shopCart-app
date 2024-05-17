import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext"
import Swal from "sweetalert2";

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(`Ha ocurrido un error al cargar los productos ${error}`);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Ha ocurrido un error al cargar los productos",
        });
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}
