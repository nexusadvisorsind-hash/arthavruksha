import type { PuneAreaSlug } from "@/lib/pune-areas";

/**
 * Society and project names people ask about, by area. Names are listed so
 * readers can find the right area page; this is not a list of available
 * properties and implies no tie-up with any builder or society.
 */
export const PUNE_SOCIETIES: Partial<Record<PuneAreaSlug, string[]>> = {
  amanora: ["Amanora Future Towers", "Metro Tower", "Adreno Tower", "Neo Tower", "Gold Tower"],
  magarpatta: ["Cosmos", "Zinnia", "Jasminium", "Grevillea", "Heliconia", "Roystonea", "Laburnum", "Trillium", "Iris"],
  kharadi: ["Riverdale Heights", "Riverdale Grove", "Nirman Altius", "Zen Estate", "Nyati Elysia", "Tuscan Estate"],
  hadapsar: ["Joyville Hadapsar Annexe", "Samrat Garden", "Amar Courtyard", "Leisure Town"],
  "koregaon-park": ["Ganga Orchard", "Adani Atelier Green"],
  "viman-nagar": ["Lunkad Greenland", "Lunkad Queensland", "Neco Garden", "Mandke Armaan"],
  "kalyani-nagar": ["Bramha The Collection", "West View", "Sidharth Estate", "Goodwill Enclave"],
  mundhwa: ["Marvel Arco", "Sukhwani Emerald", "Desire Tower", "Ascent Tower"],
};
