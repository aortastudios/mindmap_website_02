import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2026-01-31",
  dataset: "production",
  projectId: "5phjqfi7",
  useCdn: false,
});

const builder = createImageUrlBuilder(client);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
