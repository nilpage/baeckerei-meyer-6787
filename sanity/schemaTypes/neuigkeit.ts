import { defineType, defineField } from "sanity";

export const neuigkeit = defineType({
  name: "neuigkeit",
  title: "Neuigkeit",
  type: "document",
  fields: [
    defineField({
      name: "titel",
      title: "Titel",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "beschreibung",
      title: "Beschreibung",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "bild",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "datum",
      title: "Datum",
      type: "date",
    }),
  ],
  orderings: [
    {
      title: "Neueste zuerst",
      name: "datumDesc",
      by: [{ field: "datum", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "titel", subtitle: "datum" },
  },
});
