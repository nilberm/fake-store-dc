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
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [textSearch, setTextSearch] = useState("");

  const getProducts = async () => {
    await api.get("products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
      setProductsFiltered(response.data);
    });
  };

  const handleSelectFilter = (value: string) => {
    if (value === "none") {
      setProductsFiltered(products);
    }

    if (value === "bestSellers") {
      const sorted = [...products].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
      setProductsFiltered(sorted);
    }

    if (value === "cheaper") {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setProductsFiltered(sorted);
    }

    if (value === "moreExpensive") {
      const sorted = [...products].sort((a, b) => b.price - a.price);
      setProductsFiltered(sorted);
    }
  };

  const handleChangeSearch = (text: string) => {
    setTextSearch(text);
    // Verifica se o texto de pesquisa está vazio
    if (text.trim() === "") {
      // Se estiver vazio, define os produtos filtrados como a lista completa de produtos
      setProductsFiltered(products);
    } else {
      // Caso contrário, filtra os produtos com base no texto de pesquisa
      const filtered = products.filter(
        (product) =>
          // Aqui você pode ajustar as condições de filtro conforme necessário,
          // como filtrar por título, descrição, categoria, etc.
          product.title.toLowerCase().includes(text.toLowerCase()) ||
          product.description.toLowerCase().includes(text.toLowerCase()) ||
          product.category.toLowerCase().includes(text.toLowerCase())
      );
      // Define os produtos filtrados com base no resultado da filtragem
      setProductsFiltered(filtered);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainContainer>
      <h1>Fake Store</h1>

      <div className="content">
        <div className="filters">
          <input
            type="text"
            placeholder="Search"
            onChange={(v) => handleChangeSearch(v.target.value)}
          />
          <select
            name="filters"
            id="filter"
            onChange={(v) => handleSelectFilter(v.target.value)}
          >
            <option value="none">Ordenar Por</option>
            <option value="bestSellers">Best Sellers</option>
            <option value="cheaper">Price: Low to High</option>
            <option value="moreExpensive">Price: High to Low</option>
          </select>
        </div>
        <div className="productsGrid">
          {productsFiltered.length > 0 ? (
            productsFiltered.map((product: Product) => {
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
                      <button type="button" className="productPrice">
                        $ {product.price}
                      </button>
                      <div className="description">{product.description}</div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="itemNotFound">No results for {textSearch} </div>
          )}
        </div>
      </div>
    </MainContainer>
  );
}
