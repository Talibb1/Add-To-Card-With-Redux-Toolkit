import "../Cards.css";
import { useSelector, useDispatch } from "react-redux";
import { RemoveAllCards, RemoveSingleCards, addToCards, deleteCards } from "../redux/features/cardSlice";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

const CartDetails = () => {
  const { cards } = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);


  const handelIncrement = (data) => {
    dispatch(addToCards(data));
    toast.info(`${data.dish} Increment`, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handelDecrement = (data) => {
    dispatch(deleteCards(data.id));
    toast.error(`${data.dish} Decrement`, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const handelSingelDecrement = (data) => {
    dispatch(RemoveSingleCards(data));
    toast.error(`${data.dish} Remove the Cards`, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
  }
  const handelAllDecrement = (data) => {
    dispatch(RemoveAllCards(data));
    toast.error("Remove the All Cards", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


  useEffect(() => {
    const total = () => {
      let totalPrice = 0;
      cards.forEach((ele) => {
        totalPrice += ele.price * ele.qnty;
      });
      setPrice(totalPrice);
    };
    
    total();
  }, [cards]);

  return (
    <>
      <ToastContainer />
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">
                  Cart Calculation{cards.length > 0 ? `(${cards.length})` : ""}
                </h5>
                {cards.length > 0 ? (
                  <button className="btn btn-danger mt-0 btn-sm" onClick={()=> handelAllDecrement()}>
                    <i className="fa fa-trash-alt mr-2"></i>
                    <span>EmptyCart</span>
                    
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {cards.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart"></i>
                          <p>Your Cart Is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        {" "}
                        <span id="amount" className="amount">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cards.map((data) => {
                      return (
                        <>
                          <tr key={data.id}>
                            <td>
                              <button
                                className="prdct-delete"
                                onClick={() => handelDecrement(data)}
                              >
                                <i className="fa fa-trash-alt"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src={data.imgdata} alt={data.title} />
                              </div>
                            </td>
                            <td>
                              <div className="product-name">
                                <p>{data.dish}</p>
                              </div>
                            </td>
                            <td>{data.price}</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button className="prdct-qty-btn" type="button" onClick={data.qnty <=1 ? ()=>handelDecrement(data):()=>handelSingelDecrement(data)}>
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  className="qty-input-box"
                                  disabled
                                  name=""
                                  value={data.qnty}
                                  id=""
                                />
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={() => handelIncrement(data)}
                                >
                                  <i className="fa fa-plus"></i>
                                </button>
                              
                              </div>
                            </td>
                            <td className="text-right">
                              PKR {data.qnty * data.price}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>
                        Items In Cart <span className="ml-2 mr-2"></span>
                        <span className="text-danger">{1}</span>
                      </th>
                      <th className="text-right">
                        Total Price<span className="ml-2 mr-2">:</span>
                        <span className="text-danger">PKR {price} </span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
