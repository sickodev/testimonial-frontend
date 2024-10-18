import { z } from "zod";

export const organisationSchema = z.object({
  ownerId: z.string(),
  pictureURL: z.string(),
  name: z.string({ message: "Name is empty" }),
  website: z
    .string({ message: "Website is empty" })
    .startsWith("https", { message: "Not a valid URL" }),
  slug: z.string(),
});
export type OrganisationSchema = z.infer<typeof organisationSchema>;
