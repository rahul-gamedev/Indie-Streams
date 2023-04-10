import React from "react";

const ProfilePage = ({ currentUser }) => {
  console.log(currentUser);

  return (
    <div>
      <h1>Hello, {currentUser.name}</h1>
    </div>
  );
};

export default ProfilePage;
