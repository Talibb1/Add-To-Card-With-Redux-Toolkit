import { useDispatch } from 'react-redux';
import { addToCards } from '../redux/features/cardSlice';
import { toast } from 'react-toastify';

const IncrementButton = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
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

  return (
    <button onClick={handleClick}>Increment</button>
  );
};

export default IncrementButton;
