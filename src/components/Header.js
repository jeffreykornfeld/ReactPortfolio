import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "../styles/Header.css"

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav class="navbar navbar-expand-xl navbar-dark bg-primary">
                    <a class="navbar-brand" href="#">Jeffrey Kornfeld</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbarLg">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse" id="collapsingNavbarLg">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About Me</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/repos">Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}