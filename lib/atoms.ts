import { User } from "@prisma/client";
import { atomWithStorage } from "jotai/utils";

const profileAtom = atomWithStorage<User | null>("profile", null);
const themeAtom = atomWithStorage<'light'|'dark'>('theme', 'dark')

export { profileAtom, themeAtom };
