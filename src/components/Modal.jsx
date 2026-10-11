function Modal(){
  return (
      <>
        <div className="modal">
          <p className="modal__title">Are you sure?</p>
          <div className="modal__buttons">Cancel</div>
          <div className="modal__buttons">Confirm</div>
        </div>
        <div className="backdrop" />
      </>
  )
}

export default Modal;``