import "./App.scss";
import Header from "./layouts/Header.tsx";
import Card from "./components/Card.tsx";

import image1 from "../public/images/photo_2023-07-23_14-31-12.jpg";
import image2 from "../public/images/photo_2023-07-23_14-31-46.jpg";
import image3 from "../public/images/photo_2023-07-23_14-31-50.jpg";
import image4 from "../public/images/photo_2023-07-23_14-31-55.jpg";
import { Key, useEffect, useState } from "react";

const data = [
  {
    image: image1,
    title: "Item 1",
    description: "Description 1",
    price: 300,
  },
  {
    image: image2,
    title: "Item 2",
    description: "Description 2",
    price: 300,
  },
  {
    image: image3,
    title: "Item 3",
    description: "Description 3",
    price: 300,
  },
  {
    image: image4,
    title: "Item 4",
    description: "Description 4",
    price: 300,
  },
];

function App() {
  const [inCart, setInCart] = useState<number[]>([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(inCart));
  }, [inCart]);

  return (
    <div>
      <Header cartCount={inCart} setInCart={setInCart} />
      <main className="main-container">
        <section className="cards-section">
          {data.map((obj: any, index: Key) => (
            <Card
              image={obj.image}
              title={obj.title}
              description={obj.description}
              price={obj.price}
              key={index}
              inCart={inCart}
              setInCart={setInCart}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
