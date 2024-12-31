import React from "react";

export const revalidate = 60;

const Home = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!users.status) throw Error("Failed to fetch Users");
  const userList: { name: string; email: string }[] = await users.json();
  console.log(userList);

  return (
    <div>
      <ul>
        {userList.map((user) => {
          return (
            <li key={user.email}>
              {user.name}-{user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
