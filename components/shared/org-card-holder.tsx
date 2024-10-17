"use client";
import React, { useEffect, useState } from "react";
import AddOrganisationDialog from "./add-organisation-dialog";
import Link from "next/link";
import OrgCard from "./org-card";
import axios, { AxiosResponse } from "axios";
import P from "../ui/p";
import { Organisation, Testimonials } from "@prisma/client";
import { Skeleton } from "../ui/skeleton";
import { useUser } from "@clerk/nextjs";
import H2 from "../ui/h2";

interface OrganisationWithTestimonials extends Organisation{
  testimonials: Testimonials[]
}

const OrgCardHolder = () => {
  const [orgs, setOrgs] = useState<OrganisationWithTestimonials[]>([]);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const data: AxiosResponse<OrganisationWithTestimonials[]> = await axios.get(
          `http://localhost:8080/org/${user?.id!}`
        );
        setOrgs(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [user?.id]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <SkeletonCardHolder />;
  }
  return (
    <div className="p-4 border rounded-md bg-primary-foreground/50 space-y-4">
      {loading === true ? (
        <SkeletonCardHolder />
      ) : (
        <>
          <div className="flex justify-between">
            <P className="opacity-60 font-extrabold">
              {orgs.length === 0
                ? "No organisation added."
                : `You have ${orgs.length} organisations.`}
            </P>
            <AddOrganisationDialog />
          </div>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {orgs.length == 0 ? (
              <H2>No organisations added.</H2>
            ) : (
              <>
                {orgs.map((org, idx) => (
                  <Link href={`org/${org.id}`} key={idx}>
                    <OrgCard
                      name={org.name}
                      slug={org.slug}
                      pictureURL={org.pictureURL}
                      testimonials={org.testimonials.length}
                    />
                  </Link>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default OrgCardHolder;

const SkeletonCardHolder = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <Skeleton className="w-1/3 h-8" />
        <Skeleton className="w-1/3 h-8" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
      </div>
    </div>
  );
};
