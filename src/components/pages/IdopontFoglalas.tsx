import { Component } from "react";

export default class IdopontFoglalas extends Component {
    handleSubmit(event: { preventDefault: () => void; }) {
        alert('Sikeres beküldés, köszönjük! ');
        event.preventDefault();
      }
    render() {
        return <>
            <div className="container">
                <h2 className="mb-3">Foglaljon időpontot</h2>
                <form id="form" onSubmit={this.handleSubmit} className='form-control'>
                    <label htmlFor="name">Név:</label><br />
                    <input type="text" id="name" name="name" placeholder="Adja meg a nevét" className="mt-3" required/><br />
                    <label htmlFor="date">Dátum:</label>
                    <input type='date' id="date" name="date" required className="mt-3"></input>
                    <label htmlFor="message">Leírás: </label><br />
                    <textarea name="message" form="form" id="message" className="mt-3" placeholder="Írja ide a rendezvény leírását..." required></textarea><br />
                    <input type="submit" value="Elküld" className="mt-3" />
                </form>
            </div>
           
        </>
    }
}