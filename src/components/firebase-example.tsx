import { ref, set, get, child, update, remove } from "firebase/database";
import { db } from "../firebase";
import { useState, useEffect } from "react";

type User = {
  username: string;
  email: string;
};

export const FirebaseExample = () => {
  const [users, setUsers] = useState<Record<string, User> | null>(null);
  const [newUser, setNewUser] = useState<User>({ username: "", email: "" });
  const [editingUser, setEditingUser] = useState<string | null>(null);

  const fetchUsers = async () => {
    const dbRef = ref(db);
    try {
      const snapshot = await get(child(dbRef, "users"));
      if (snapshot.exists()) {
        setUsers(snapshot.val());
      } else {
        console.log("No data available");
        setUsers({});
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = () => {
    const randomId = Math.random().toString(36).substring(2, 8);
    const userRef = ref(db, `users/${randomId}`);
    set(userRef, newUser)
      .then(() => {
        console.log("User added successfully");
        setNewUser({ username: "", email: "" });
        fetchUsers();
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  const updateUser = (userId: string) => {
    const userRef = ref(db, `users/${userId}`);
    update(userRef, users![userId])
      .then(() => {
        console.log("User updated successfully");
        setEditingUser(null);
        fetchUsers();
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  const deleteUser = (userId: string) => {
    const userRef = ref(db, `users/${userId}`);
    remove(userRef)
      .then(() => {
        console.log("User deleted successfully");
        fetchUsers();
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="border p-2 mr-2"
        />
        <button
          onClick={addUser}
          className="bg-green-500 text-white p-2 rounded"
        >
          Add User
        </button>
      </div>
      {users ? (
        <ul>
          {Object.entries(users).map(([key, user]) => (
            <li key={key} className="mb-2">
              {editingUser === key ? (
                <>
                  <input
                    type="text"
                    value={user.username}
                    onChange={(e) =>
                      setUsers({
                        ...users,
                        [key]: { ...user, username: e.target.value },
                      })
                    }
                    className="border p-1 mr-2"
                  />
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUsers({
                        ...users,
                        [key]: { ...user, email: e.target.value },
                      })
                    }
                    className="border p-1 mr-2"
                  />
                  <button
                    onClick={() => updateUser(key)}
                    className="bg-blue-500 text-white p-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingUser(null)}
                    className="bg-gray-500 text-white p-1 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  {user.username} - {user.email}
                  <button
                    onClick={() => setEditingUser(key)}
                    className="bg-yellow-500 text-white p-1 rounded ml-2 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(key)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};
