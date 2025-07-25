import { memo } from "react";
import type { UserEditProps } from "../../types/types";

const User = memo(
  ({ user, handleEditUser, handleDeleteUser }: UserEditProps) => {
    console.log("child component rendered", user.name);

    return (
      <div
        style={{
          width: "300px",
          backgroundColor: "lightblue",
          border: "1px solid black",
          padding: "10px",
          marginLeft: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>{user.name}</h3>
        <div>
          <button onClick={() => handleEditUser(user.id)}>Edit</button>
          <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
        </div>
      </div>
    );
  }
);

export default User;
