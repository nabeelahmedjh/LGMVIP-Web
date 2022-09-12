import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Users from "./Users";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const user = {
            id: uuidv4(),
            name: "Nabeel Ahmed",
            email: "abdulnabeel40@gmail.com",
            website: "nabeel.com",
            image: "https://statinfer.com/wp-content/uploads/dummy-user.png",
            gender: "Male",
            skills: ["Django", "React"],
        };
        setUsers((prev) => [...prev, user]);
    }, []);

    return (
        <div className="row">
            <Form users={users} setUsers={setUsers} />
            <Users users={users} />
        </div>
    );
}

export default App;
