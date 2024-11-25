
type MockUser = {
    id: number,
    name: string
}

export default async function UsersMock() {

    await new Promise((resolve) => setTimeout(resolve,500))
    const response = await fetch("https://6743bccbb7464b1c2a65b21c.mockapi.io/users");
    const users = await response.json();

    return (
        <ul className="grid grid-cols-4 gap-4 py-10">
            {users.map((user : MockUser) => (
                <li key={user.id} className="p-4 bg-vmsgreen shadow-md rounded-lg text-gray-700">
                    {user.id} - {user.name}
                </li>
            ))}
        </ul>
    )
}