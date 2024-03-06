import { useState } from "react";
export default function ProductCard({ product }) {
  let [currentImageIndex, setcurrentImageIndex] = useState(0);
  let [showDescription, showDescriptionFunction] = useState(false);
  let [itemsInCart, itemsInCartFunction] = useState(0);

  const handleAddToCartClick = () => {
    itemsInCartFunction((itemsInCart += 1));
    alert(`you have ${itemsInCart} added to your cart`);
  };
  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
        <br />
        <button
          onClick={() => setcurrentImageIndex((currentImageIndex += 1))}
          disabled={currentImageIndex >= product.imageUrls.length - 1}
        >
          Next
        </button>
        <button
          disabled={currentImageIndex <= 0}
          onClick={() => setcurrentImageIndex((currentImageIndex -= 1))}
        >
          Previous
        </button>
      </div>

      <h3>{product.name}</h3>
      <p>{showDescription ? product.description : " "}</p>
      <button onClick={() => showDescriptionFunction(!showDescription)}>
        {showDescription ? "Hide" : "Show"} Description
      </button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>
      <span>Items added to cart : {itemsInCart}</span>
      <br />
      {!product.isInStock && "The product is out of stock"}
      <br />
    </>
  );
}
