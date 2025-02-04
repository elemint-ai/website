import React from "react";
import dynamic from "next/dynamic";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      (cms as any).init({
        config: {
          load_config_file: false,
          backend: {
            name: "github",
            repo: "elemint-ai/website", // Path to your GitHub repository
            branch: "main",
            preview_context: "Cloudflare Pages",
          },
          // This line should *not* be indented
          publish_mode: "editorial_workflow",
          // This line should *not* be indented
          media_folder: "public/img/uploads", // Media files will be stored in the
          public_folder: "/img/uploads", // The src attribute for uploaded media will begin with /img/uploads
          collections: [
            {
              name: "blog", // Used in routes, e.g., /admin/collections/blog
              label: "Blog", // Used in the UI
              folder: "content/blog", // The path to the folder where the documents are stored
              create: true, // Allow users to create new documents in this collection
              slug: "{{year}}-{{month}}-{{day}}-{{slug}}", // Filename template, e.g., YYYY-MM-DD-title.md
              fields: [
                // The fields for each document, usually in front matter
                {
                  label: "Layout",
                  name: "layout",
                  widget: "hidden",
                  default: "blog",
                },
                { label: "Title", name: "title", widget: "string" },
                { label: "Publish Date", name: "date", widget: "datetime" },
                { label: "Featured Image", name: "thumbnail", widget: "image" },
                { label: "Body", name: "body", widget: "markdown" },
              ],
            },
          ],
        },
      });
    }) as any,
  // eslint-disable-next-line react/display-name
  { ssr: false, loading: () => <p>Loading Admin...</p> }
);

const Admin: React.FC = () => {
  return <CMS />;
};
export default Admin;
