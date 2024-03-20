//"use client";
import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  return <div>product details about {params.productId} </div>;
};

export default page;
