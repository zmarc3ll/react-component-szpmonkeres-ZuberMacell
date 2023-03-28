import { Component } from "react";

export default class SzakmaiTapasztalat extends Component {
    render() {
        return <>
        <div className="container-fluid">
            <img src={'petrik.jpg'} alt="" className="img-fluid float-end rounded" id="szakmaiKep"/>
            <div className="row text-center .">
                <h3 className="pt-5 mt-5">Pro-bono bulik</h3>
                <ul id="noListStyle" className="pb-5 mb-5">
                    <li>Csibeavató, 2021. 08. 31.</li>
                    <li>Karácsonyi bál, 2021. 12. 22.</li>
                    <li>Farsangi mulatság, 2022. 02. 20.</li>
                </ul>
                <h3>Professzionális bulik</h3>
                <ul id="noListStyle">
                    <li>Tanárkarácsony, 2021. 12. 20.</li>
                    <li>Ballagás, 2022. 04. 30.</li>
                </ul>
            </div>
        </div> 
        </>
    }
}