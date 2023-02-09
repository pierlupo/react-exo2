export default function Status(props) {
    const {status} = props.status;
    
    return(
        <div> 
        status: {status? "actif" : "inactif"} 
        </div>
    )
}