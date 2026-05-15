import type { StructureResolver } from "sanity/structure";

// Default Studio nav. Per-lead repos override this with a structure
// shaped for the lead's own document types and naming.

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Inhalte")
    .items(S.documentTypeListItems());
