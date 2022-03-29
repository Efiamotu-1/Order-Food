import React from 'react'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'
import classes from './Modal.module.css'

const BackDrop = props => {
    return <div className = {classes.backdrop} onClick ={props.onClose}> 
    </div>
}

const ModalOverlay = props => {
return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>

</div>
}

const portalElements =  document.getElementById('overLays')                                                                                   

const Modal = props => {

return <Fragment>
    {ReactDOM.createPortal(<BackDrop onClose = {props.onClose}/>, portalElements) }
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements) }

</Fragment>
}

export default Modal;