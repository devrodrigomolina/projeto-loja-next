import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import { Bag } from "phosphor-react";
import { useContext } from "react";
import React from "react";

import { ButtonCartContainer, HeaderContainer } from "./styles";
import Image from "next/image";
import { CartContext } from "@/src/contexts/CartContext";
import { Cart } from "../Cart/cart";

 

export default function Header() {
  const { pathname } = useRouter();
  // const { cartCount } = useShoppingCart();
  const { cartItems } = useContext(CartContext);
  // const showCartButton = pathname !== "/success";

  const cartCount = cartItems.length;

  return (
    <HeaderContainer>
      {/* <Image src={logoImg} alt="" /> */}

      <Dialog.Root>
        <Dialog.Trigger asChild>
          {/* <ButtonCartContainer>
            <Bag weight="bold" />
            <span>{cartCount}</span>
          </ButtonCartContainer> */}
          <ButtonCartContainer>
            <Bag weight="bold" />
            <span>{cartCount}</span>
          </ButtonCartContainer>
        </Dialog.Trigger>
        <Cart />
      </Dialog.Root>
    </HeaderContainer>
  );
}
