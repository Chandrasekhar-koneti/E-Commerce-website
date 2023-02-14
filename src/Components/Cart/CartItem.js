import Modal from "../UI/Modal"
import './CartItem.css'


const CartItem=(props)=>{
    const cartitems=[{
        id:'k1',title:'Colors',price:'100',
        imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'
    }].map((item)=><li key={item.id}>{item.title}{item.price}</li>)

    return(
        <Modal onclick={props.onClick}>
            <button style={{float:"right"}} onClick={props.onClick}>X</button>
            <h1 style={{ textAlign: 'center' }}>Cart List</h1>
            <span className="title">ITEM</span>
            <span className="price">PRICE</span>
            <span className="quantity">QUANTITY</span>
            {cartitems}
        <div>
            <button className="btn-order">Purchase</button>
        </div>
        </Modal>
    )
}

export default CartItem