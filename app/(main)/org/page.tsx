import OrgCardHolder from "@/components/shared/org-card-holder";
import H2 from "@/components/ui/h2";
import P from "@/components/ui/p";
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
      <OrgCardHolder/>
    </main>
  );
};

export default OrgPage;
