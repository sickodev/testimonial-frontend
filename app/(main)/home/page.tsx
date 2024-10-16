import { profileAtom } from "@/atoms";
import { ProfileUpdater } from "@/components/shared/profile-updater";
import H1 from "@/components/ui/h1";
import { createProfile } from "@/lib/create-profile";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Home = async () => {
  const user = await currentUser();
  if (!user) {
    return redirect("/sign-in");
  }
  const profile = await createProfile(user);
  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <ProfileUpdater profile={profile} />
      <div className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-transparent">
        <H1>Nothing to show here.</H1>
      </div>
      <p className="my-4 opacity-50">Click on an option to view more.</p>
    </main>
  );
};

export default Home;
