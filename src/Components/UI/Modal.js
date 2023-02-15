import { Fragment } from "react"
import  ReactDOM  from "react-dom"
import './Modal.css'



const ModalOverlay=(props)=>{
    return <div className="modal">
        <div >{props.children}</div>
        </div>
}

const portalelement=document.getElementById('overlays')

const Modal=(props)=>{
return (
    <Fragment>
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalelement)}  
    </Fragment>
)
}

export default Modal