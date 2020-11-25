import React from "react"
import "../styles/Project.css"

function Project(props) {
    console.log(props)
        return (
            <div class="col-md-4">
            <img src={props.src} alt={props.alt} class={props.class}></img>
            <a class="nav-link" href={props.href}>{props.text}</a>
            </div>
        )
  }

  export default Project