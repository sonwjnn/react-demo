import { ref, set, get, child } from "firebase/database";
import { db } from "../firebase";
import { useState, useEffect } from "react";

type User = {
  username: string;
  email: string;
};

export const FirebaseExample = () => {
  const [users, setUsers] = useState<User | null>(null);

  useEffect(() => {
    // Fetch users data from Firebase
    const fetchUsers = async () => {
      const dbRef = ref(db);
      try {
        const snapshot = await get(child(dbRef, `users`));
        if (snapshot.exists()) {
          setUsers(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  // Function to add dummy data to Firebase
  const addRandomUser = () => {
    const randomId = Math.random().toString(36).substring(2, 8);
    const randomUser = {
      username: `User${randomId}`,
      email: `user${randomId}@example.com`,
    };

    const newUserRef = ref(db, `users/${randomId}`);
    set(newUserRef, randomUser)
      .then(() => console.log("Random user added successfully"))
      .catch((error) => console.error("Error adding random user:", error));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <button
        onClick={addRandomUser}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Dummy Data
      </button>
      {users ? (
        <ul>
          {Object.entries(users).map(([key, user]: [string, any]) => (
            <li key={key}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};
