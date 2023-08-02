import Navbar from "./Navbar.tsx";
import { Dispatch, FC, SetStateAction } from "react";

interface HeaderProps {
  cartCount: number[];
  setInCart: Dispatch<SetStateAction<number[]>>;
}

const Header: FC<HeaderProps> = ({ cartCount, setInCart }) => {
  return (
    <header>
      <Navbar cart_items={cartCount} setInCart={setInCart} />
    </header>
  );
};

export default Header;
