import React from "react";
import { useCart } from "react-use-cart";

const AddToCart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className="text-center my-5">YOUR CART IS EMPTY </h1>;

  return (
    <section className="py-5 container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h5>
            Cart {totalUniqueItems} total Items {totalItems}
          </h5>
          <table className="table table-hover table-light m-0 align-middle">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image}
                        alt="img"
                        style={{ height: "6rem" }}
                      />
                    </td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          removeItem(item.id);
                        }}
                        className="btn btn-danger ms-2"
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto my-5 ms-auto">
          <h1>Total Price : {cartTotal}</h1>
        </div>
        <div className="col-auto my-5">
          <button onClick={() => emptyCart()} className="btn btn-danger m-2">
            Clear Cart
          </button>
          <button className="btn btn-primary m-2">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
