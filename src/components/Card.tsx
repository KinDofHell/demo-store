import "./Card.scss";
import { Dispatch, FC, SetStateAction } from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  inCart: number[];
  setInCart: Dispatch<SetStateAction<number[]>>;
}

const Card: FC<CardProps> = ({
  image,
  title,
  description,
  price,
  setInCart,
  inCart,
}) => {
  const addToCart = () => {
    const itemsInCart = [...inCart];
    itemsInCart.push(price);
    setInCart(itemsInCart);
  };

  return (
    <section className="card mb-5 card-container bg-dark">
      <img src={image} className="card-img-top" alt={title} />
      <article className="card-body text-center text-white">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <section className="d-flex justify-content-between">
          <h3 className="card-title text-success">${price}</h3>
          <button className="btn btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
        </section>
      </article>
    </section>
  );
};

export default Card;
