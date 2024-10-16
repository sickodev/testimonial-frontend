"use client";

import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="p-2 w-full">
    <UserProfile
      path="/user-profile"
      routing="path"
      appearance={{
        elements: {
          cardBox: "md:max-w-[725px]",
        },
      }}
    ></UserProfile>
  </div>
);

export default UserProfilePage;
