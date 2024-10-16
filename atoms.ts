import { User } from "@prisma/client";
import { atom } from "jotai";

const profileAtom = atom<User>();

export { profileAtom };
