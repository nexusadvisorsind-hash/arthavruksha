import type { PuneAreaSlug } from "@/lib/pune-areas";

/**
 * Short, area-specific notes on 1, 2 and 3 BHK flats, shown as a section on each area page.
 * No rents, prices or availability are stated, because none is held to display.
 */
export const BHK_COPY: Record<PuneAreaSlug, { one: string; two: string; three: string }> = {
  amanora: {
    one: "A 1 BHK inside Amanora Park Town suits a single professional or a couple who want a short commute to Magarpatta or Kharadi and the township's shops and open spaces at their door.",
    two: "A 2 BHK is the size most families and sharers ask about in Amanora. Compare the tower, floor and parking, and ask what the maintenance covers.",
    three: "A 3 BHK in Amanora suits a larger family or a household that wants a spare room. Check the carpet area and the tower's age, because layouts differ between towers.",
  },
  magarpatta: {
    one: "A 1 BHK in Magarpatta City is often chosen by people who work in Cybercity and want to walk or cycle to the office. Societies differ in age and rules, so compare the exact society.",
    two: "A 2 BHK in Magarpatta suits a small family or a couple who work from home. Compare societies on age, parking and maintenance, and ask about tenant rules before you commit.",
    three: "A 3 BHK in Magarpatta suits a bigger family. Layouts and carpet areas differ between societies, so compare the actual area of the flat rather than the BHK label.",
  },
  hadapsar: {
    one: "A 1 BHK in Hadapsar is common among people who work at the industrial estate or in Magarpatta. Check the exact building and street, as these matter more than the area name.",
    two: "A 2 BHK in Hadapsar is the usual choice for small families. Societies range from older buildings to newer projects, so compare age, parking and maintenance.",
    three: "A 3 BHK in Hadapsar suits a larger family. Look at the project's possession date and RERA status if it is new, or the society documents if it is a resale flat.",
  },
  kharadi: {
    one: "A 1 BHK in Kharadi is popular with people who work in the nearby IT offices and want a short commute. Test the real travel time at your usual hour.",
    two: "A 2 BHK in Kharadi suits couples and small families. Newer projects dominate, so check the RERA registration and the possession date for a project.",
    three: "A 3 BHK in Kharadi suits a larger family or a household that wants a home office. Compare the carpet area and the amenities charges between projects.",
  },
  "koregaon-park": {
    one: "A 1 BHK in Koregaon Park is often an older building close to cafes and offices. Ask about the building's age, the lift and parking on that particular lane.",
    two: "A 2 BHK in Koregaon Park suits couples and small families who want a central address. Check the society's records and the monthly maintenance.",
    three: "A 3 BHK in Koregaon Park may be an apartment or a floor in a low-rise building. Check the title papers and the society's rules, especially in older buildings.",
  },
  "viman-nagar": {
    one: "A 1 BHK in Viman Nagar suits people who travel often or work near the airport and Nagar Road. Visit at different times of day, as noise and traffic vary by street.",
    two: "A 2 BHK in Viman Nagar is the common choice for small families. Compare the floor, the building's age, parking and maintenance.",
    three: "A 3 BHK in Viman Nagar suits a larger family. Check the carpet area and, for a new project, the MahaRERA registration and possession date.",
  },
  "kalyani-nagar": {
    one: "A 1 BHK in Kalyani Nagar suits people who want a central east Pune address with quick access to Koregaon Park and Viman Nagar. Check the exact building and its parking.",
    two: "A 2 BHK in Kalyani Nagar suits couples and small families. Compare older established buildings with newer projects on maintenance, lift and parking.",
    three: "A 3 BHK in Kalyani Nagar suits a larger family. Ask for the society records and the latest tax receipts for a resale flat.",
  },
  mundhwa: {
    one: "A 1 BHK in Mundhwa is often chosen for its access to Magarpatta, Kharadi and Koregaon Park. Look at the specific street and test the route to work.",
    two: "A 2 BHK in Mundhwa suits small families. Newer projects and older buildings both exist, so compare possession dates, RERA status and surroundings.",
    three: "A 3 BHK in Mundhwa suits a larger family. Compare the carpet area, parking and the amenities charges between projects.",
  },
  "keshav-nagar": {
    one: "A 1 BHK in Keshav Nagar suits people who work in Magarpatta, Hadapsar or Kharadi and want a residential address close by. Check the building and the approach road.",
    two: "A 2 BHK in Keshav Nagar suits small families. Compare buildings on age, parking, lift and the society's tenant rules.",
    three: "A 3 BHK in Keshav Nagar suits a larger family. For a project, check the MahaRERA registration and the possession date.",
  },
};
