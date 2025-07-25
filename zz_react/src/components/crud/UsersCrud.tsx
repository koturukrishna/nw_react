import React, { useCallback } from "react";
import User from "./User";
import type { UserType } from "../../types/types";

const UsersCrud = () => {
  const [users, setUsers] = React.useState<UserType[]>([
    { id: "1kr", name: "krishna" },
    { id: "2sr", name: "sravan" },
  ]);
  const [addUser, setAddUser] = React.useState<string>("");
  const [editUser, setEditUser] = React.useState<UserType>({
    id: "",
    name: "",
  });

  const handleAddUser = () => {
    if (addUser.trim() === "") {
      alert("Please enter a valid user name");
      return;
    }
    const newUser: UserType = {
      id: users.length + 1 + addUser.substring(0, 2), // Generate a random ID
      name: addUser,
    };
    setUsers([...users, newUser]);
    console.log(users);

    setAddUser(""); // Clear the input field after <adding> </adding>
    alert(`User ${newUser.name} added successfully!`);
  };

  const handleEditUser = useCallback(
    (id: string) => {
      const userToEdit = users.find((user) => user.id === id);
      console.log("User to edit:", userToEdit);
      if (userToEdit) {
        setEditUser(userToEdit);
        setAddUser(userToEdit.name); // Set the input field to the user's name for editing
      } else {
        alert("User not found");
      }
    },
    [users]
  );

  const handleUpdateUser = useCallback(() => {
    if (addUser.trim() === "") {
      alert("Please enter a valid user name");
      return;
    }

    const updatedUsers = users.map((user) => {
      if (user.id === editUser.id) {
        return { ...user, name: addUser }; // Update the user's name
      }
      return user; // Return the user unchanged if not the one being <edited></edited>
    });
    setUsers(updatedUsers);
    setAddUser(""); // Clear the input field after updating
  }, [addUser, editUser, users]);

  const handleDeleteUser = useCallback(
    (id: string) => {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      alert(`User with ID ${id} deleted successfully!`);
    },
    [users]
  );

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        marginLeft: "50px",
      }}
    >
      <div style={{ marginLeft: "50px" }}>
        <h3>Add new user</h3>
        <input
          type="text"
          value={addUser}
          style={{ width: "300px" }}
          onChange={(e) => setAddUser(e.target.value)}
        />
        <br />
        <br />
        <div>
          <button onClick={handleAddUser}>Add User</button>
          <button onClick={handleUpdateUser}>Update</button>
        </div>
      </div>
      <h3 style={{ marginLeft: "50px" }}>users display</h3>
      {users.length > 0 ? (
        <ol>
          {users.map((user) => (
            <li key={user.id}>
              <User
                user={user}
                handleEditUser={handleEditUser}
                handleDeleteUser={handleDeleteUser}
              ></User>
            </li>
          ))}
        </ol>
      ) : (
        <p>No users available</p>
      )}
      {/* Additional CRUD operations can be added here */}
    </div>
  );
};

export default UsersCrud;
