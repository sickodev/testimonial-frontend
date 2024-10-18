"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import H3 from "../ui/h3";
import { useForm } from "react-hook-form";
import { organisationSchema, OrganisationSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { RefreshCw, Send, X } from "lucide-react";
import { generateSlug } from "random-word-slugs";
import P from "../ui/p";
import { useAtomValue } from "jotai";
import { profileAtom } from "@/lib/atoms";
import axios from "axios";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AddOrganisationDialog = () => {
  const [mounted, setMounted] = useState(false);
  const [slug, setSlug] = useState("");
  const [picture, setPicture] = useState("");
  const atom = useAtomValue(profileAtom);
  const [initialOwnerId, setInitialOwnerId] = useState(atom?.id || "");
  const [dialogOpen, setDialogOpen] = useState(false);

  const router = useRouter();

  const form = useForm<OrganisationSchema>({
    resolver: zodResolver(organisationSchema),
    defaultValues: {
      name: "",
      website: "",
      pictureURL: picture,
      slug: slug,
      ownerId: initialOwnerId,
    },
  });

  async function onSubmit(values: OrganisationSchema) {
    try {
      await axios.post(`http://localhost:8080/org`, values);
      toast.success("Organisation has been created", {
        description: `${values.name} has been created`,
      });
      setDialogOpen(false);
      router.push("/org");
    } catch (error: any) {
      toast.error("Failed to create organisation", {
        description: error.message,
      });
    }
  }

  function setSlugName() {
    setSlug(generateSlug());
    setPicture(
      `https://picsum.photos/id/${Math.floor(
        Math.random() * 200
      )}/400?grayscale`
    );
  }

  function resetData() {
    form.reset();
  }

  useEffect(() => {
    form.setValue("slug", slug); // Update slug value in the form
  }, [slug, form]);

  useEffect(() => {
    form.setValue("pictureURL", picture); // Update picture value in the form
  }, [picture, form]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (atom?.id) {
      setInitialOwnerId(atom.id);
      form.setValue("ownerId", atom.id); // Set ownerId in the form when available
    }
  }, [atom?.id, form]);

  useEffect(() => {
    setSlug(generateSlug());
    setPicture(
      `https://picsum.photos/id/${Math.floor(
        Math.random() * 200
      )}/400?grayscale`
    );
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="space-x-2">
          <PlusIcon className="size-5" />
          <span>Add Organisation</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll max-h-full py-4">
        <DialogTitle className="sr-only">Add Organisation</DialogTitle>
        <DialogHeader>
          <H3>Add an Organisation</H3>
          <DialogDescription>
            Fill the form to add an organisation to your account.
          </DialogDescription>
        </DialogHeader>
        <hr />
        <div className="my-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organisation Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Funraa" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your organisation name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <div className="flex space-x-3">
                      <FormControl>
                        <Input
                          disabled
                          placeholder="monkey-shoulder-light"
                          value={slug}
                        />
                      </FormControl>
                      <Button
                        type="button"
                        onClick={setSlugName}
                        size="icon"
                        variant="outline"
                        className="p-2 text-green-700"
                      >
                        <RefreshCw className="size-5" />
                      </Button>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pictureURL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <img src={picture} alt="" className="my-1" />
                    <div className="flex space-x-3">
                      <FormControl>
                        <Input disabled value={picture} />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <div className="flex space-x-3">
                      <FormControl>
                        <Input
                          placeholder="https://www.funraa.io/"
                          {...field}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <hr />
              <P>This is the required details about your account</P>
              <FormField
                control={form.control}
                name="ownerId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Owner Id</FormLabel>
                    <div className="flex space-x-3">
                      <FormControl>
                        <Input disabled {...field} />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex justify-center space-x-4">
                <Button
                  onClick={resetData}
                  variant="secondary"
                  className="space-x-2"
                  type="reset"
                >
                  <X className="size-5" />
                  <span>Reset</span>
                </Button>
                <Button className="space-x-2" type="submit">
                  <Send className="size-5" />
                  <span>Submit</span>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddOrganisationDialog;
