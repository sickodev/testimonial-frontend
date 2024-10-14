import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import H3 from "../ui/h3";

const OrgCard = () => {
  return (
    <Card>
      <CardContent className="p-2">
        <img
          src="https://plus.unsplash.com/premium_vector-1721219771657-0b6c64520575?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-48 object-contain"
        />
      </CardContent>
      <hr />
      <CardHeader>
        <CardTitle className="text-xl">
            <span>Glep Reviews</span>
        </CardTitle>
        <CardDescription className="flex justify-between items-center">
            <span>wireless-panda-rockstar</span>
            <span className="font-semibold">1100 reviews</span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default OrgCard;
