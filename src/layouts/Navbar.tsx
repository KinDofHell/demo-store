import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface NavbarProps {
  cart_items: number[];
  setInCart: Dispatch<SetStateAction<number[]>>;
}

const Navbar: FC<NavbarProps> = ({ cart_items, setInCart }) => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    setCartCount(cart_items.length);
    setCartTotal(cart_items.reduce((a: number, b: number) => a + b, 0));
  }, [cart_items]);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setInCart([]);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3 mb-5">
      <a className="navbar-brand text-white" href="#">
        DemoStore
      </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Pricing
            </a>
          </li>
        </ul>
      </div>
      <section className="text-white d-flex align-items-center justify-content-around">
        <h5 className="me-4">
          {cartCount > 0
            ? `${cartCount} item(s) in cart. Total: $${cartTotal}`
            : "Cart is empty"}
        </h5>
        {cartCount > 0 && (
          <button className="btn btn-danger" onClick={clearCart}>
            Clear cart
          </button>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
