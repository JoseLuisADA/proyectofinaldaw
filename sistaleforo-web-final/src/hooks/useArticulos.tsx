"use client"
import { useState, useEffect } from 'react';

const useArticulos = (page: number = 1, size: number = 10) => {
  const [articulos, setArticulos] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticulos = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/articulo?page=${page}&size=${size}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        const data = await response.json();
        console.log(data)
        if (!response.ok) {
          throw new Error(data.message || 'Error al obtener los artículos');
        }

        setArticulos(data.articulos);
        setTotal(data.total);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticulos();
  }, [page, size]);

  return { articulos, total, isLoading, error };
};

export default useArticulos;
