"use client";

import { useEffect, useState } from "react";
import { MainContainer } from "./style";
import { api } from "@/services/api";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    await api.get("products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainContainer>
      <h1>Fake Store</h1>

      <div className="content">
        <div className="filters"></div>
        <div className="productsGrid">
          {products &&
            products.map((product: Product) => {
              return (
                <div key={product.id} className="productItem">
                  <Image
                    src={product.image}
                    alt="products"
                    width={70}
                    height={70}
                  />
                  <div className="productsDescription">
                    <div className="title">{product.title}</div>
                    <div className="productsInfo">
                      <div className="categoryAndRate">
                        <div className="category">{product.category}</div>
                        <div className="rates">
                          <span className="rate">{product.rating.rate}</span>
                        </div>
                      </div>
                      <div className="description">{product.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </MainContainer>
  );
}
