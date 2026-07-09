function Card(props) {
    return (
        <div style={{border: "1px solid red", padding: "20px", margin: "20px"}}>
            <img src= {props.image} style = {{borderRadius: "50%"}} alt = ""/>
            <h3>Name: {props.name}</h3>
            <h4>Id: {props.id}</h4>
            <h3>Hobby: {props.hobby[0]}</h3>
            <button>{props.text}</button>
        </div>
    )
}

export default Card