"use client";

import { profileAtom } from "@/atoms";
import { User } from "@prisma/client";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

type ProfileUpdaterProps = {
  profile: User;
};

export const ProfileUpdater = ({ profile }: ProfileUpdaterProps) => {
  const setProfile = useSetAtom(profileAtom);

  useEffect(() => {
    if (profile) {
      setProfile(profile);
    }
  }, [profile, setProfile]);

  return null;
};
