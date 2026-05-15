import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

// Scaffold Studio config. Per-lead repos override `title` to the lead's
// business name. Schema types start empty; the per-lead designer adds
// document/object types shaped for that specific business.

export default defineConfig({
  name: "default",
  title: "Bäckerei Meyer",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
