import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return <>
            <ul id="navbar">
                <li><Link to={'/'}>Főoldal</Link></li>
                <li><Link to={'/tapasztalat'}>Szakmai tapasztalat</Link></li>
                <li><Link to={'/idopont'}>Időpont foglalás</Link></li>
            </ul>
        </>
    }
}