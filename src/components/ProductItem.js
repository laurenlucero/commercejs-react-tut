import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ product }) => {
  const description = { __html: product.description };

  return (
    <div className="product">
      <img
        className="product__image"
        src={product.media.source}
        alt={`Image of ${product.name}`}
      />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p
          className="product__description"
          dangerouslySetInnerHTML={description}
        ></p>
        <div className="product__details">
          <p className="product__price">
            {product.price.formatted_with_symbol}
          </p>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object
};

export default ProductItem;
