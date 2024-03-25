import React from "react";

const page = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  console.log(params);

  return (
    <div>
      Reviewrr {params.reviewId} for product {params.productId}
    </div>
  );
};

export default page;
