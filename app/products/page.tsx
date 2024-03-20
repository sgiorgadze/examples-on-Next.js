import React from "react";
import Link from "next/link";

const Products = () => {
  let array = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" },
  ];

  return (
    <div>
      {array.map((item) => (
        <Link href={`products/${item.id}`}>
          <li>{item.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default Products;
