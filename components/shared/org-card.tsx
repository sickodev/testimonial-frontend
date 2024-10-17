import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type OrgCardProps = {
  name: string;
  slug: string;
  pictureURL: string;
  testimonials: number;
};

const OrgCard = ({ name, slug, pictureURL,testimonials }: OrgCardProps) => {
  return (
    <Card>
      <CardContent className="p-2">
        <img src={pictureURL} alt="" className="w-full h-48 object-cover" />
      </CardContent>
      <hr />
      <CardHeader>
        <CardTitle className="text-xl">
          <span>{name}</span>
        </CardTitle>
        <CardDescription className="flex justify-between items-center">
          <span>{slug}</span>
          <span className="font-semibold">{testimonials} reviews</span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default OrgCard;
