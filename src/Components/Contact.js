import { Component } from "react";
import Address from "./Address";
import Status from "./Status";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: {

        nom: "Michel",
        prenom: "Louise",
        tel: "inconnu",
        status: true,

        addresse: {
        rue: "boulevard des capucines",
        ville: " Vroncourt-la-Côte",
        cp: "52000",
          
        }, 

        nom: "Blanqui",
        prenom: "Auguste",
        tel: "inconnu",
        status: false,

        addresse: {
        rue: "Avenue des fusillés",
        ville: "Puget-Théniers",
        cp: "06400",
          
        },
      },
    };
  }

  render() {
    
    const { nom, prenom, tel, status } = this.state.contacts;
    // let statut = {status}
    // statut = true ? "actif" : "inactif";
    //console.log(statut)
    //console.log(this.state.contacts.map((c,i) => <Status key={i} contacts={c} status={this.state.contacts.addresse}></Status> ));
    return (
      <div>

        nom: {nom}, prenom: {prenom}, tel: {tel}, status: {status}
        <Address addresse={this.state.contacts.addresse}></Address>
        <Status status={this.state.contacts.addresse}></Status>
        {/* name: {this.state.contact.nom},firstname: {this.state.contact.prenom},tel: {this.state.contact.tel}
             <Address addresse = {this.state.contact.addresse}></Address> */}

      </div>
    );
  }
}
