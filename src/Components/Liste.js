import { Component } from "react";
import Contact from "./Contact";
import { Client } from "./Client";
import "./component.css";
export default class Liste extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [
        {
          nom: "Michel",
          prenom: "Louise",
          tel: "inconnu",
          status: true,

          addresse: {
            rue: "boulevard des capucines",
            ville: " Vroncourt-la-Côte",
            cp: "52000",
          },
        },
        {
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
      ],
    };
  }
 
  render() {
    // const { nom, prenom, tel, status } = this.state.contacts;
    // let statut = {status}
    // statut = true ? "actif" : "inactif";
    //console.log(statut)
    //console.log(this.state.contacts.map((c,i) => <Status key={i} contacts={c} status={this.state.contacts.addresse}></Status> ));
    return (
      <div>
        {/* nom: {nom}, prenom: {prenom}, tel: {tel}, status: {status} */}
        {/* <Address addresse={this.state.contacts.addresse}></Address> */}
        {/* <Status status={this.state.contacts.addresse}></Status> */}
        {/* name: {this.state.contact.nom},firstname: {this.state.contact.prenom},tel: {this.state.contact.tel}
                 <Address addresse = {this.state.contact.addresse}></Address> */}
        {/* {this.state.contacts.map((c,i)=> <Contact key={i} contacts={c}></Contact>)} */}
        <h2>Exercice 1</h2>
        <Contact></Contact>
        <h2>Exercice 2</h2>
        {this.state.clients.map((client, i) => (
          <Client key={i} monclient={client}></Client>
        ))}
      </div>
    );
  }
}
