import React from "react";
import Card from "./Card";
import LoadingScreen from "react-loading-screen";
export default function UserCardsList({ users, loading, gotUsers }) {
    if (loading && !gotUsers) {
        return (
            <>
                {console.log("Loading")}
                <LoadingScreen
                    loading={true}
                    bgColor="#f1f1f1"
                    spinnerColor="#9ee5f8"
                    textColor="#676767"
                    text="Fetching API data"
                />
                ;
            </>
        );
    } else {
        return (
            <>
                <div className="container-fluid row">
                    {users.map((user) => {
                        return <Card key={user.id} user={user} />;
                    })}
                </div>
            </>
        );
    }
}
