import React, { Component } from 'react';
import "../styles/Main.css"
import MePic from "../assets/images/BandW.jpg"

export default class Main extends Component {
    render() {
        return (


    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>About Me</h1>
            </div>
        
        </div>
        <div class="row">
            
                <img src= {MePic} alt="ActionShot"></img>
            
        </div>
        <div class="textbody">

            
                <p> I'm a musician of 20+ years and an asipiring web developer. I'm currently enrolled in a Northwestern University Coding Bootcamp.
                    Currently experienced with HTML, CSS, Javascript, APIs, OOP, NodeJS, express, MySQL, MVC (handlebars) and React. </p>
                <br></br>
                <a href="https://github.com/jeffreykornfeld"> My GitHub</a>
                <br></br> 
                <a href="https://docs.google.com/document/d/1TtBt-5gfJDf-YOtKAJd4mZWoXgQSjzv5tJUCAvzEYhY/edit?usp=sharing"> Resume</a>
                <br></br>
                <a href="https://www.linkedin.com/in/jeffrey-kornfeld/"> LinkedIn</a>
            
        </div>
    </div>


        )
    }
}