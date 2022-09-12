import React from "react";
import UserCard from "./UserCard";

export default function Users({ users }) {
    return (
        <>
            <div className="col-6">
                {users.map((user) => {
                    return <UserCard key={user.id} user={user} />;
                })}
            </div>
        </>
    );
}
