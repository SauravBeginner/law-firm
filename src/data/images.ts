// Verified Unsplash photo IDs — each checked visually via the /image-check
// route in the Browser pane before being committed here.
function unsplash(id: string, w = 1600, q = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const images = {
  heroHome: unsplash("photo-1477959858617-67f85cf4f1df", 2000), // Boston-style skyline at dusk
  aboutOffice: unsplash("photo-1497366216548-37526070297c", 1600), // moody modern office corridor
  aboutBuilding: unsplash("photo-1497366754035-f200968a6e72", 1600), // glass office interior
  practiceAreasHero: unsplash("photo-1524995997946-a1c2e315a42f", 2000), // dramatic law library staircase
  attorneysHero: unsplash("photo-1436450412740-6b988f486c6b", 2000), // classical courthouse columns
  caseResultsHero: unsplash("photo-1518391846015-55a9cc003b25", 2000), // city skyline at night
  faqHero: unsplash("photo-1481627834876-b7833e8f5570", 2000), // warm-lit law library corridor
  contactHero: unsplash("photo-1449157291145-7efd050a4d0e", 2000), // financial district street view
  consultationHero: unsplash("photo-1521791136064-7986c2920216", 2000), // professional handshake

  attorneyMargaret: unsplash("photo-1573497019940-1c28c88b4f3e", 800),
  attorneyDaniel: unsplash("photo-1472099645785-5658abf4ff4e", 800),
  attorneyPriya: unsplash("photo-1573496359142-b8d87734a5a2", 800),
  attorneyJames: unsplash("photo-1519085360753-af0119f7cbe7", 800),
  attorneySofia: unsplash("photo-1508214751196-bcfd4ca60f91", 800),
  attorneyRobert: unsplash("photo-1500648767791-00dcc994a43e", 800),
};
