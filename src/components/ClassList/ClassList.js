import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state={
      students:[],
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then((response)=>{
      // console.log("response: ",response.data)
      this.setState({students:response.data})
    })
    
  }

  render() {
    let {students} = this.state
    let studentmap = students.map((e,idx)=>{
     return <Link to = {`/student/${e.id}`} key ={idx}><h3 >{e.first_name} {e.last_name}</h3></Link>
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentmap}
        <Link to = {`/`}><h2>Back</h2></Link>

      </div>
    )
  }
}