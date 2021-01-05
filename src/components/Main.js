import React, { Component } from 'react';
import "../styles/Main.css"
import MePic from "../assets/images/Headshot.jpg"

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
            <div class = "pic">
                <img src= {MePic} alt="Headshot"></img>
            
            </div>
        </div>
        <div class="textbody">

            
                <p> I'm an aspiring backend web developer with a background in music. In December 2020, I graduated with a certificate from Northwestern's Coding Bootcamp.
                   I have experience with the following languages: HTML, CSS, Javascript, APIs, OOP, NodeJS, Express, MySQL, MVC (handlebars) and React.
                 I also have a Bachelor's Degree in Music Composition from McNally Smith College of Music. </p>
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