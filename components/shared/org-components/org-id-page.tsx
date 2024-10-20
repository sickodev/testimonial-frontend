"use client";

import { Button } from "@/components/ui/button";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import P from "@/components/ui/p";
import { Skeleton } from "@/components/ui/skeleton";
import { PersonIcon } from "@radix-ui/react-icons";
import { Copy } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const OrgIdContents = () => {
  const pathName = usePathname().split("/")[2];
  const [contents, setContent] = useState();
  return (
    <section className="rounded-lg">
      <div className="w-full h-48 border rounded-t-lg bg-gradient-to-b from-neutral-400 to-transparent"></div>
      <div className="flex flex-col md:flex-row justify-between items-center p-2">
        <H2>Company Name</H2>
        <p className="opacity-40">company-slug</p>
        <div className="flex items-center space-x-1 opacity-40">
          <Button variant="ghost">
            <Copy className="size-3" />
          </Button>
          <p>company-id</p>
        </div>
      </div>
      <hr />
      <div className="my-2 p-2 space-y-2 w-full">
        <div className="space-y-2">
          <div>
            <H3 className="opacity-60">Owner Details</H3>
            <hr />
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Label className="w-16">Owner</Label>
              <Input
                placeholder="Owner Name"
                disabled
                className="border w-full"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Label className="w-16">Website</Label>
              <Input placeholder="Website" disabled className="border w-full" />
            </div>
          </div>
        </div>
        <hr />
        <div className="my-2 space-y-2 w-full">
          <div className="flex items-center justify-between">
            <H3 className="opacity-60">Testimonials</H3>
            <p className="opacity-40 text-sm font-semibold">1100+ reviews</p>
          </div>
          <hr />
          <div className="my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgIdContents;

const SkeletonContent = () => {
  return <Skeleton />;
};

type TestimonialCardProps = {
  name: string;
  slug: string;
  id: string;
  ownerName: string;
  ownerWebsite: string;
};

const TestimonialCard = ({}: TestimonialCardProps) => {
  return (
    <div className="col-span-1 border p-2 rounded-xl filter shadow-md space-y-2">
      <div className="border border-primary/40 p-2 bg-primary-foreground text-primary text-justify text-md rounded-lg">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
          eius quo tempora nostrum repellendus fugiat, delectus ipsam laborum
          sapiente deserunt quos ullam expedita ipsum tenetur a? Vitae
          architecto quisquam quae.
        </p>
      </div>

      <div className="flex items-center space-x-6 px-2">
        <div className="h-10 w-10 rounded-full border bg-gradient-to-tr from-primary flex items-center justify-center">
          <PersonIcon className="size-6 text-secondary" />
        </div>
        <div className="">
          <P className="font-bold">Jane Doe</P>
          <P className="text-sm">
            Product Designer At{" "}
            <span className="dark:text-red-700 text-red-500">Adobe</span>
          </P>
        </div>
      </div>

      <div className="flex justify-end opacity-50">
        <Button variant="link">View Details</Button>
      </div>
    </div>
  );
};
