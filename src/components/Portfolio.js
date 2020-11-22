import React, { Component } from 'react';
import "../styles/Portfolio.css"
import LetsCelebrate from "../assets/images/LetsCelebrate.png"
import WeatherDashboard from "../assets/images/WeatherDashboard.png"
import GamingGladiators from "../assets/images/gaminggladiators.png"
import WorkdayScheduler from "../assets/images/WorkDayScheduler.png"
import PasswordGenerator from "../assets/images/PasswordGenerator.png"
import TemplateEngine from "../assets/images/TemplateEngine.png"

export default class Portfolio extends Component {
    render() {
        return (

        <div class="container">
             <div class="row">
                <div class="col-md-12">
                    <h1> Portfolio </h1> 
                </div>
            </div>

            <div class="row">
                
                <div class="col-md-4">
                    <img src= {LetsCelebrate} alt="LetsCelebrate" class="img-thumbnail"></img>
                    <a class="nav-link" href="https://github.com/kbaur775/letscelebrate">Let's Celebrate!</a>
                    
                </div>
     
                <div class="col-md-4">
                    <img src={WeatherDashboard} alt="WeatherDashboard" class="img-thumbnail"></img>
                    <a class="nav-link" href="https://github.com/jeffreykornfeld/WeatherDashboard">Weather Dashboard</a>
                </div>
                
                <div class="col-md-4">
                    <img src={GamingGladiators} alt="GamingGladiators" class="img-thumbnail"></img>
                    <a class="nav-link" href="https://github.com/dktrcoco/GamingGladiator">Gaming Gladiator</a>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <img src={WorkdayScheduler} alt="WorkdayScheduler" class="img-thumbnail"></img>
                    <a class="nav-link" href="https://github.com/jeffreykornfeld/WorkDayScheduler">Workday Scheduler</a>
                </div>
                <div class="col-md-4">
                    <img src={PasswordGenerator} alt="PasswordGenerator" class="img-thumbnail"></img>
                    <a class="nav-link" href="https://github.com/jeffreykornfeld/PasswordGenerator">Password Generator</a>
                </div>
                <div class="col-md-4">
                    <img src={TemplateEngine} alt="TemplateEngine" class="img-thumbnail"></img>
                    <a class="nav-link" href="https://github.com/jeffreykornfeld/TemplateEngine_EmployeeSummary">Employee Summary Template Engine</a>
                </div>
            </div>
        </div>

        )
    }
}