import React from "react";

import { ProductConsumer } from "../context";

export default function HomePage() {
  return (
    <ProductConsumer>
      {(value) => {
        return <div>home page {value}</div>;
      }}
    </ProductConsumer>
  );
}
