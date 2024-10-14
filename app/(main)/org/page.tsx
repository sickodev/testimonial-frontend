import OrgCard from "@/components/shared/org-card";
import { Button } from "@/components/ui/button";
import H2 from "@/components/ui/h2";
import P from "@/components/ui/p";
import Link from "next/link";
import React from "react";

const OrgPage = () => {
  return (
    <main className="p-2 space-y-2">
      <div className="p-2 space-y-2">
        <H2>Your Organisations</H2>
        <P className="opacity-60">
          Manage and update your organizational affiliations in real-time,
          ensuring your profile accurately reflects your current involvement and
          accomplishments.
        </P>
        <hr />
      </div>
      <div className="p-4 border rounded-md bg-primary-foreground/50 space-y-4">
        <div className="flex justify-between">
          <P className="opacity-60 font-extrabold">You have 4 organisations.</P>
          {/* Add organisation dialog here */}
          <Button>Add Organisation</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <Link href={""}>
            <OrgCard />
          </Link>
          <Link href={""}>
            <OrgCard />
          </Link>
          <Link href={""}>
            <OrgCard />
          </Link>
          <Link href={""}>
            <OrgCard />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OrgPage;
