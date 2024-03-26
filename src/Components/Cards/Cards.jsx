import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardsData from "./CardsData";
import { addToCards } from "../redux/features/cardSlice";
import { useDispatch } from "react-redux";

function Cards() {
  const [cardData] = useState(CardsData);
  const dispatch = useDispatch();

  const send = (element) => {
    dispatch(addToCards(element));
    toast.success(`${element.dish} Add To Cart!`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {cardData.map((element) => (
        <div className="col" key={element.id}>
          <div className="card h-100">
            <img
              src={element.imgdata}
              className="card-img-top"
              alt={element.title}
            />
            <div className="card-body">
              <h5 className="card-title">{element.dish}</h5>
              <h6 className="card-title">{element.price}</h6>
              <button
                type="button"
                onClick={() => send(element)}
                className="btn btn-primary"
              >
                Add To Cart
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
