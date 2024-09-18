// /app/api/products/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 200 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 300 },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 400 },
    { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 500 },
    { id: 6, name: 'Product 6', description: 'Description of Product 6', price: 600 },
    // Add more products as needed
  ];

  return NextResponse.json(products);
}
