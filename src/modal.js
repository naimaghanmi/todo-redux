import React from 'react';
import {edit_todo} from "./action/actions"
import {connect} from "react-redux"
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

 
class Mdl extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
      input:""
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  hundleChange=(e)=>{
      this.setState({
          input:e.target.value
      })
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
     <i class="far fa-edit" onClick={this.openModal} ></i>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <button onClick={this.closeModal}>close</button>
          <div>Edit doto </div>
    
            <input value={this.input} onChange={this.hundleChange} />
        <button onClick={()=>{this.props.updatetask(this.props.idtodo,this.state.input);this.closeModal()}}>Update</button>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps=dispatch=>{
    return {
        updatetask: (id,title)=>dispatch(edit_todo(id,title))
    }
}
const Modalcontainer=connect(null,mapDispatchToProps)(Mdl)
export default Modalcontainer