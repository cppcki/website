import * as cheerio from "cheerio";

import OnboardingScreen from "./content";

async function fetchMajors() {
  const response = await fetch("https://catalog.cpp.edu/content.php?catoid=61&navoid=4876");
  const document = await response.text();
  const $ = cheerio.load(document);
  
  const undergraduate = $(".program-list").first();

  const majors = new Set<string>();
  const anchors = undergraduate.find("a");
  for (const element of anchors.toArray()) {
    const text = $(element).text();
    const major = text.split(",")[0];
    majors.add(major);
  }

  majors.add("Undecided");
  majors.add("Other");

  return Array.from(majors);
}

async function Page() {
  const majors = await fetchMajors();

  return (
    <OnboardingScreen majors={majors}/>
  );
}

export default Page;