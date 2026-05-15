import { defineType, defineField, defineArrayMember } from "sanity";

export const seite = defineType({
  name: "seite",
  title: "Seite",
  type: "document",
  fields: [
    defineField({
      name: "heldBild",
      title: "Titelbild",
      type: "image",
      description: "Das grosse Foto oben auf der Seite.",
      options: { hotspot: true },
    }),
    defineField({
      name: "baeckerei",
      title: "Bäckerei",
      type: "object",
      fields: [
        defineField({
          name: "bild",
          title: "Foto Backstube",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "text",
          title: "Beschreibung",
          type: "text",
          rows: 4,
          description: "Was backen Sie täglich? Kurze, herzliche Beschreibung.",
        }),
      ],
    }),
    defineField({
      name: "konditorei",
      title: "Konditorei",
      type: "object",
      fields: [
        defineField({
          name: "bild",
          title: "Foto Konditorei",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "text",
          title: "Beschreibung",
          type: "text",
          rows: 4,
          description: "Was bieten Sie in der Konditorei an?",
        }),
      ],
    }),
    defineField({
      name: "cafe",
      title: "Café",
      type: "object",
      fields: [
        defineField({
          name: "bild",
          title: "Foto Café",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "text",
          title: "Beschreibung",
          type: "text",
          rows: 4,
          description: "Was servieren Sie im Café?",
        }),
      ],
    }),
    defineField({
      name: "familie",
      title: "Familie und Team",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Text",
          type: "text",
          rows: 5,
          description: "Ein paar Sätze über Ihre Familie und Ihr Team.",
        }),
      ],
    }),
    defineField({
      name: "oeffnungszeiten",
      title: "Öffnungszeiten",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "tag", title: "Tag(e)", type: "string" }),
            defineField({ name: "zeiten", title: "Zeiten", type: "string" }),
          ],
          preview: {
            select: { title: "tag", subtitle: "zeiten" },
          },
        }),
      ],
    }),
    defineField({
      name: "telefon",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "E-Mail",
      type: "string",
    }),
    defineField({
      name: "adresse",
      title: "Adresse",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Seite" };
    },
  },
});
