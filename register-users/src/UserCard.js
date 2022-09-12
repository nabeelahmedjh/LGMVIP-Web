import React from "react";
import "./UserCard.css";

export default function UserCard({ user }) {
    return (
        <div className=" container user-card">
            <div>
                <h2>{user.name}</h2>
                <span>{user.gender}</span>
                <a href={user.website}>
                    <h4>{user.website}</h4>
                </a>

                <p>Contact: {user.email}</p>
                <span className="skill">
                    {user.skills.map((skill) => `${skill} `)}
                </span>
            </div>
            <img className="avatar round" src={user.image} alt="avatar"></img>
        </div>
    );
}
