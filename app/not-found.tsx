"use client"
import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  function onClick(){
    router.push("/home")
  }
  return (
    <main className="h-full w-full flex-col flex items-center justify-center space-y-6">
      <div className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-transparent">
        <H1>Nothing to see here.</H1>
      </div>
      <div className="p-4 border-2 rounded-xl bg-primary-foreground">
        <H2>Are you sure you are at the right place?</H2>
      </div>
      <div className="w-full mt-8 flex space-x-4 items-center justify-center">
        <Button onClick={onClick} className="space-x-4 group">
          <ArrowLeftIcon className="size-5 group-hover:-rotate-45 transition duration-200 ease-linear" />
          <span>Head back home</span>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
