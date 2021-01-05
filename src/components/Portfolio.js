import React, { Component } from 'react';
import "../styles/Portfolio.css"
import Project from "../components/Project"
import LetsCelebrate from "../assets/images/LetsCelebrate.png"
import WeatherDashboard from "../assets/images/WeatherDashboard.png"
import GamingGladiators from "../assets/images/gaminggladiators.png"
import WorkdayScheduler from "../assets/images/WorkDayScheduler.png"
import SimpleState from "../assets/images/simplestate.png"
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
 
                <Project src={LetsCelebrate} alt="LetsCelebrate" href="https://github.com/kbaur775/letscelebrate" text = "Let's Celebrate"/>
  
                <Project src={SimpleState} alt="SimpleState" href="https://github.com/JPBrickhouse/projectthree" text = "SimpleState"/>

                <Project src={GamingGladiators} alt="GamingGladiators" href="https://github.com/dktrcoco/GamingGladiator" text = "Gaming Gladiator"/>
            </div>
            <div class="row">
                
                    <Project src={WorkdayScheduler} alt="WorkdayScheduler" href="https://github.com/jeffreykornfeld/WorkDayScheduler" text = "Workday Scheduler"/>
          
               
                    <Project src={WeatherDashboard} alt="WeatherDashboard" href="https://github.com/jeffreykornfeld/WeatherDashboard" text = "Weather Dashboard"/>
              
             
                    <Project src={TemplateEngine} alt="TemplateEngine" href="https://github.com/jeffreykornfeld/TemplateEngine_EmployeeSummary" text = "Employee Summary"/>
              
            </div>
        </div>

        )
    }
}