import Address from "./Address";
import './component.css';
export function Client(props){
    const {nom, prenom, tel ,status, addresse} = props.monclient;
    return(
        <div>
            Nom : {nom}, Prénom : {prenom}, tel : {tel}
            <Address addresse={addresse}></Address>
            <span className={status ? 'green' : 'red'}>Statut : {status ? 'actif' : 'non actif'}</span>
            <button className="btn" type="submit">Modifier le statut</button>
        </div>
    )
}

export function onClick(){
    console.log("clic")
}