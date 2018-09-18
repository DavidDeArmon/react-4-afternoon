import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import classList from './components/ClassList/ClassList.js'
import Student from './components/Student/Student.js'

export default(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/classList/:class" component={classList}/>
        <Route path="/student/:id" component={Student}/>


    </Switch>
)