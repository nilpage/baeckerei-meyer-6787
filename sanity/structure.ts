import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Bäckerei Meyer")
    .items([
      S.listItem()
        .title("Seite")
        .id("seite")
        .child(
          S.document()
            .schemaType("seite")
            .documentId("seite")
            .title("Seite bearbeiten"),
        ),
      S.divider(),
      S.documentTypeListItem("neuigkeit").title("Neuigkeiten"),
    ]);
