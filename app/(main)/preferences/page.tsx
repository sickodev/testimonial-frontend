import H2 from "@/components/ui/h2";
import P from "@/components/ui/p";
import { Select } from "@/components/ui/select";
import React from "react";
import ModeToggle from "./components/mode-toggle";

const PreferencesPage = () => {
  return (
    <main className="h-full w-full p-2">
      <H2 className="w-full border-b p-1">Preferences</H2>
      <div className="p-2 flex items-center justify-between">
        <div>
          <P className="text-lg">Toggle Dark Mode</P>
          <P className="text-sm font-light opacity-60">
            Switch between light and dark themes for a more comfortable viewing
            experience.
          </P>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
      <hr />
    </main>
  );
};

export default PreferencesPage;
