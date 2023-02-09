import { Component } from "react";
import Address from "./Address";




export default class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            contact : { 
                nom: "nom contact", 
                prenom: "prenom contact", 
                tel: "0123456789", 
                addresse: { rue: "ma rue", ville: "ma ville", cp: "59200" }
            } 
        }
    }

    render() {
        const {nom, prenom, tel} = this.state.contact;
        return(
            <div>
                Nom : {nom}, Prénom : {prenom}, Tel : {tel}
                <Address addresse={this.state.contact.addresse}></Address>
            </div>
        )
    }
       
   


}
