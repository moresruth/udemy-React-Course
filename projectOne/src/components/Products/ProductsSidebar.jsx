import React from "react";
import "./ProductsSidebar.css";

import rocket from "../../assets/rocket.png";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import Sidebar from "./../../../../responsive/src/components/Sidebar";

const ProductsSidebar = () => {
  return (
    <aside className="products_sidebar">
      <h2>Categories</h2>
      <div className="category_links">
        <LinkWithIcon
          title="Electronics"
          link="products"
          category="electronics"
          emoji={rocket}
          sidebar={true}
        />
      </div>
    </aside>
  );
};

export default ProductsSidebar;
