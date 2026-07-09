import { userState } from "react";

export default function User() {
    const [user, setUser] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";

    const getData = () => {
        return fetch(url).then((res) => res.json());
    };

    const fetchAndGetUser = async () => {
        try {
            const data = await getData();
            setUser(data); //update fn

            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Welcome to my User Page</h1>
            <button onclick={fetchAndGetUser}>FetchAndGetUser</button>

            <hr />

            {user.map((el) => (
                <div
                    style={{border: "1px solid red",padding: '30px', margin: '10px'}}
                >

                    <h1>Name: {el.name}</h1>
                    <h2>Email: {el.email} </h2>
                    <h2>UserId: {el.id} </h2>
                    <h2>Website: {el.website} </h2>
                    <button>More Info</button>
                </div>
            ))}
        </div>
    );
}