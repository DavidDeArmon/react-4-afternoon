import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Student extends Component {
  constructor() {
    super()
    this.state={
      studentInfo:{},
    }

  }
  componentDidMount(){
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(response=>{
      console.log('student ',response.data)
      this.setState({studentInfo:response.data})
    }

    )
  }

  render() {
    let {studentInfo} = this.state ;
    console.log(studentInfo.last_name)
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{studentInfo.first_name} {studentInfo.last_name}</h1>
        <h3>Grade: {studentInfo.grade}</h3>
        <h3>Email: {studentInfo.email}</h3>
        <Link to = {`/classlist/${studentInfo.class}`}><h2>Back</h2></Link>
      </div>
    )
  }
}