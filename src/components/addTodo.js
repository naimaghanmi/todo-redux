 import React, { Component } from 'react'
 import {connect} from "react-redux"
 import Modal from '../modal'
 import {addTask,remove,toggle_todo}from "../action/actions"
class addTodo extends Component {
    state={
        input:""
    }

    handleChange=(e)=>{
        this.setState({
            input:e.target.value
        })
    }

handleAdd=(e)=>{
    e.preventDefault();
        this.props.addTask({
        title:this.state.input,
        id:Math.random(),
        isComplete:false
    })
    this.setState({
        input:""
    })
}

    render() {
        return (
            <div className="List">
            <div className="addItem">
              <input value={this.state.input} onChange={this.handleChange}/>
              <i class="fas fa-plus-square"onClick={this.handleAdd}></i> 
            </div>
            <div className="todo">
           {this.props.todo.map((el,i)=>
          <div style={{backgroundColor: el.isComplete ? 'gray' : 'royalblue'}} className="item"key={el.id} >
              <i style={{color: el.isComplete ? 'chartreuse' : 'white'}}class="fas fa-check-circle"onClick={()=>{this.props.toggle_todo(i)}}></i>
        <p  style={{textDecoration: el.isComplete ? 'line-through' : 'none'}}>{el.title}</p>
        <div className="icone">
        <i class="fas fa-trash-alt" onClick={()=>{this.props.removeTask(i)}}></i>
        <Modal idtodo={el.id}/>
        </div>
                 </div>       
                )}
         </div>
          
            </div>
        )
    }
}


// redux

//  param1
const mapStateToProps=(state)=>{
    return { 
        todo: state.todo
    }
}
// parm2 addtask nom qlq
const mapDispatchToProps=(dispatch)=>{
    return {
        addTask:(payload)=>dispatch (addTask(payload)),
        removeTask:(payload)=>dispatch(remove(payload)),
        toggle_todo:(payload)=>dispatch(toggle_todo(payload))

    }
}

export default connect (mapStateToProps,mapDispatchToProps)(addTodo)