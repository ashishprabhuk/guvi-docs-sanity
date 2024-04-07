import sanityClient from "@sanity/client";
import sanityCli from "../guvi-sanity/sanity.cli";

export default sanityClient({
  projectId: "ehyvsqux",
  dataset: "production"
})