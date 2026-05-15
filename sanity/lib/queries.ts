import { defineQuery } from "next-sanity";

export const SEITE_QUERY = defineQuery(`*[_type == "seite"][0]{
  heldBild,
  baeckerei{ bild, text },
  konditorei{ bild, text },
  cafe{ bild, text },
  familie{ text },
  oeffnungszeiten[]{ tag, zeiten },
  telefon,
  email,
  adresse
}`);

export const NEUIGKEITEN_QUERY = defineQuery(`*[_type == "neuigkeit"] | order(datum desc){
  _id,
  titel,
  beschreibung,
  bild,
  datum
}`);
