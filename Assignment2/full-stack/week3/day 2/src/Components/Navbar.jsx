import {useContext} from "react";
import {theme} from "../context/theme";

export default function Navbar()
{
    //3.useContext/ console value through contextAPI
    const data = useContext(theme);
    console.log(data);  //{}

    return <h1 style = {{color: data.clr}}>Hello from Navbar</h1>
}