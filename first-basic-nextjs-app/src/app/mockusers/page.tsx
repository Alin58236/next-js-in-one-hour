import { revalidatePath } from "next/cache";


type MockUser = {
  id: number;
  name: string;
};

export default async function UsersMock() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(
    "https://6743bccbb7464b1c2a65b21c.mockapi.io/users"
  );

  const users = await response.json();

  async function addUser(formData : FormData) {
    
    "use server" //yes, we can also define server actions at the function level

    const name = formData.get("name");
    const res = await fetch(
        "https://6743bccbb7464b1c2a65b21c.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name})
        }
      );
      const newUser = await res.json();
      revalidatePath("/mockusers")
      console.log(newUser);
  }


  return (
    <div className="py-10">
      <form action={addUser} className="mb-4">
        <input
          type="text"
          name="name"
          required
          className="text-black border p-2 mr-2 br-10 rounded"
        ></input>
        <button type="submit" className="bg-vmsgreen text-white px-4 py-2 rounded"> Add User </button>
      </form>

      <div className="grid grid-cols-4 gap-4 py-10">
        {users.map((user: MockUser) => (
          <div
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-black"
          >
            {user.id} - {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
