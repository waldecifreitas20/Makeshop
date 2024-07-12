import { useContext, useState } from "react";
import { Row } from "../../../components/Row";
import { CartContext } from "../../../providers/cart.provider";
import { utils } from "../../../utils/utils";

interface PurchaseListProps {
  purchaseCost: number;
  shippingCost: number;
  items: Array<CartItem>
}

export function PurchaseList(props: PurchaseListProps) {

  const cart = useContext(CartContext);
  const rowStyle = `justify-between`;

  return (
    <section className="
    mt-10 mb-5
    bg-white 
    border  
    rounded-xl 
    py-4 px-2
    ">
      <article className="mb-4 text-gray-500 text-md">

        {
          cart.cartItems.map((item, i) => {
            return (
              <Row key={i} style={rowStyle}>
                <p>{item.product.manufacturer} x{item.qtd}</p>
                <p>R$ {utils.toCashFormat(item.product.price)}</p>
              </Row>
            );
          })
        }
        <Row style={rowStyle}>
          <p>Frete</p>
          <p>R$ {utils.toCashFormat(props.shippingCost)}</p>
        </Row>
      </article>
      
      <article>
        <Row style={rowStyle}>
          <p>Total Items</p>
          <p>{props.items.length}</p>
        </Row>

        <Row style={`${rowStyle} font-medium`}>
          <p>Valor Total</p>
          <p>R$ {utils.toCashFormat(props.purchaseCost)}</p>
        </Row>

      </article>
    </section>
  );
}