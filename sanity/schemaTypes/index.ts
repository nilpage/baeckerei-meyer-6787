// Scaffold ships with no schema types. The per-lead designer creates
// document and object types here, shaped to fit the bespoke render and
// labeled in the lead's own world.
//
// Sanity Studio requires at least one type to mount, so the scaffold
// includes a placeholder `_scaffold` type that should be deleted (and
// removed from this array) once the first real type is added.

import { scaffoldPlaceholder } from "./scaffoldPlaceholder";

export const schemaTypes = [scaffoldPlaceholder];
