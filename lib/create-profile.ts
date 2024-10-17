import { User } from "@clerk/nextjs/server";
import db from "./db";

export const createProfile = async (user: User) => {
  const profile = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.user.create({
    data: {
      id: user?.id,
      email: user.emailAddresses[0].emailAddress,
      name: user.firstName! + " " + user.lastName!,
      phone: user.phoneNumbers[0].phoneNumber,
      organisations: {
        create: [],
      },
    },
  });

  return newProfile;
};
