
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
const {cards}= useSelector((state)=> state.cards)
const cardsCount = cards.length 
  return (
    <>
       <Navbar style={{ height: "60px", background: "black", color: "white" }}>
                <Container>
                <NavLink to="/" className="text-decoration-none mx-2">
                    <h3 className='text-light'>Ecommerce</h3>
                </NavLink>
                    <NavLink to="/Cards" className="text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={cardsCount}>
                        <i className="fa-light fa-cart-shopping"></i>
                        </span>
                    </div>
                    </NavLink>
                </Container>
            </Navbar>
    </>
  );
}

export default Header;