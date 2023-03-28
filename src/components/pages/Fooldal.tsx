import { Component } from "react";

export default class Fooldal extends Component {
    render() {
        return <>
            <div className="container-fluid">
                <h2>Üdvözöllek DJ Petrik weboldalán!</h2>
                <h4 className="fw-light text-center pt-5"><i>Válassz a fenti lehetőségek közül!</i></h4>
                <div className="pt-2 mt-4">
                    <img src={'dj.jpg'} alt="Dj Kép" className="img-fluid rounded" />
                </div>
            </div>
        </>
    }

}