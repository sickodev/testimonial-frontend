import { AvatarIcon, GearIcon, ListBulletIcon } from "@radix-ui/react-icons";
import { Activity, Book, Bookmark, BookOpen, ChartBar, DollarSignIcon, LucideSidebar, Origami, } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="md:w-1/5 lg:w-1/6 p-2 space-y-12 hidden md:block">
      <div className="flex space-x-4 items-center border p-2 border-b-4 border-neutral-900 opacity-50">
        <LucideSidebar className="size-5" />
        <span className="">Sidebar</span>
      </div>
      <div className="p-4 bg-primary-foreground drop-shadow-lg rounded-lg border">
        <ol className="[&>li]:my-1 flex flex-col items-start w-full">
          <li className="duration-200 ease-linear transition-all hover:bg-primary hover:text-primary-foreground p-2 rounded-lg w-full border-b">
            <Link href={"/org"} className="flex items-center text-md space-x-2">
              <Origami className="size-5"/>
              <span>Organisations</span>
            </Link>
          </li>
          <li className="duration-200 ease-linear transition-all hover:bg-primary hover:text-primary-foreground p-2 rounded-lg w-full border-b">
            <Link href={"/activity"} className="flex items-center text-md space-x-2">
            <Activity className="size-5"/>
              <span>Activity</span>
            </Link>
          </li>
          <li className="duration-200 ease-linear transition-all hover:bg-primary hover:text-primary-foreground p-2 rounded-lg w-full border-b">
            <Link href={"/settings"} className="flex items-center text-md space-x-2">
              <GearIcon className="size-5"/>
              <span>Settings</span>
            </Link>
          </li>
          <li className="duration-200 ease-linear transition-all hover:bg-primary hover:text-primary-foreground p-2 rounded-lg w-full">
            <Link href={"/analytics"} className="flex items-center text-md space-x-2">
              <ChartBar className="size-5"/>
              <span>Analytics</span>
            </Link>
          </li>
        </ol>
      </div>
      <div className="p-4 bg-primary-foreground drop-shadow-lg rounded-lg border-accent border">
        <ul className="[&>li]:my-1">
        <li className="duration-200 ease-linear transition-all hover:bg-primary hover:text-primary-foreground p-2 rounded-lg w-full">
            <Link href={"/preferences"} className="flex items-center text-md justify-start space-x-4">
              <ListBulletIcon className="size-5"/>
              <span>Preferences</span>
            </Link>
          </li>
          <hr />
          <li className="duration-200 ease-linear transition-all hover:bg-primary hover:text-primary-foreground p-2 rounded-lg w-full">
            <Link href={"/user-profile"} className="flex items-center text-md justify-start space-x-4">
              <AvatarIcon className="size-5"/>
              <span>Account</span>
            </Link>
          </li>
          <hr />
          <li className="duration-200 ease-linear transition-all hover:bg-primary hover:text-primary-foreground p-2 rounded-lg w-full">
            <Link href={"/bookmarks"} className="flex items-center text-md justify-start space-x-4">
              <Bookmark className="size-5"/>
              <span>Bookmarks</span>
            </Link>
          </li>
          <hr />
          <li className="duration-200 ease-linear transition-all hover:bg-primary hover:text-primary-foreground p-2 rounded-lg w-full">
            <Link href={"/docs"} className="flex items-center text-md justify-start space-x-4">
              <BookOpen className="size-5"/>
              <span>Docs</span>
            </Link>
          </li>
          <hr />
          <li className="duration-200 ease-linear transition-all hover:bg-primary hover:text-primary-foreground p-2 rounded-lg w-full">
            <Link href={"/plans"} className="flex items-center text-md justify-start space-x-4">
              <DollarSignIcon className="size-5"/>
              <span>Plans</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
