"use client"
import React, { use } from "react"
import { useState, useEffect } from "react"

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default function UsersClient() {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users1231312");
                if (!response.ok) throw new Error("Something wrong with the API");
                const data = await response.json();
                setUsers(data);
            }
            catch (err) {
                setError("Failed to fetch users");
                if (err instanceof Error) {
                    setError(`Failed to fetch users: ${err.message}`);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }

    return (

        <ul className="space-y-9 p-4">
            {users.map((user) => (
                
                <li key={user.id} className="p-4 bg-slate-800 shadow-md rounded-lg text-green">{user.name} {user.email}</li>
                
            ))}
        </ul>

    )
};
