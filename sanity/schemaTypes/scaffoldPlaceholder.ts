import { defineField, defineType } from "sanity";

// Placeholder document type so Sanity Studio mounts on a fresh per-lead
// repo before the designer has added real schemas. Delete this file and
// remove its entry from `schemaTypes/index.ts` once you add the first
// real type for the lead.

export const scaffoldPlaceholder = defineType({
  name: "_scaffold",
  type: "document",
  title: "Scaffold (delete me)",
  fields: [
    defineField({
      name: "note",
      type: "string",
      title: "Note",
      description:
        "This document type ships with the scaffold so Studio mounts. " +
        "Delete this file and the import from schemaTypes/index.ts once " +
        "you have added a real schema for this lead.",
    }),
  ],
});
