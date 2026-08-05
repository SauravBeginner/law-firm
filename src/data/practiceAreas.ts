export interface PracticeArea {
  slug: string;
  title: string;
  icon: "handshake" | "users" | "building-2" | "landmark" | "shield" | "scroll-text";
  summary: string;
  description: string;
  services: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "personal-injury",
    title: "Personal Injury",
    icon: "handshake",
    summary: "Aggressive representation for clients injured through the negligence of others.",
    description:
      "When an injury upends your life, you need counsel that will fight for the recovery you're owed — not the first number an insurer offers. Our personal injury team has secured settlements and verdicts across auto collisions, premises liability, and workplace accidents, and we work on contingency so you pay nothing unless we win.",
    services: [
      "Motor vehicle & trucking accidents",
      "Slip, trip & fall claims",
      "Workplace & construction injuries",
      "Wrongful death claims",
      "Product liability",
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    icon: "users",
    summary: "Steady, discreet guidance through divorce, custody, and family transitions.",
    description:
      "Family matters call for an attorney who can advocate firmly while keeping a difficult process as calm as possible. We represent clients in divorce, custody, and support matters throughout Massachusetts, with an emphasis on resolving disputes efficiently — through mediation where possible, and in the courtroom when necessary.",
    services: [
      "Divorce & legal separation",
      "Child custody & parenting plans",
      "Child & spousal support",
      "Prenuptial & postnuptial agreements",
      "Post-judgment modifications",
    ],
  },
  {
    slug: "corporate-law",
    title: "Corporate Law",
    icon: "building-2",
    summary: "Practical counsel for founders, boards, and closely held businesses.",
    description:
      "From formation through exit, our corporate group advises founders and established companies on the decisions that shape their business. We favor clear, commercially minded advice over dense memoranda — helping clients move quickly on formation, financing, contracts, and transactions.",
    services: [
      "Entity formation & governance",
      "Mergers & acquisitions",
      "Commercial contracts",
      "Venture financing",
      "Shareholder & partnership disputes",
    ],
  },
  {
    slug: "real-estate-law",
    title: "Real Estate Law",
    icon: "landmark",
    summary: "Counsel for residential and commercial transactions of every scale.",
    description:
      "Real estate transactions carry real risk when the paperwork is rushed. Our real estate attorneys represent buyers, sellers, developers, and lenders across residential closings and complex commercial deals, catching issues before they become disputes.",
    services: [
      "Residential & commercial closings",
      "Title review & curative work",
      "Commercial leasing",
      "Land use & zoning",
      "Construction contracts",
    ],
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    icon: "shield",
    summary: "Determined defense at every stage, from arrest through appeal.",
    description:
      "A criminal charge threatens your record, your livelihood, and your freedom. Our defense attorneys have tried cases before Massachusetts juries and negotiated favorable outcomes for clients facing misdemeanor and felony charges alike, and we're available around the clock when an arrest happens.",
    services: [
      "DUI & motor vehicle offenses",
      "Drug charges",
      "Assault & domestic charges",
      "White collar & fraud defense",
      "Expungement & record sealing",
    ],
  },
  {
    slug: "estate-planning",
    title: "Estate Planning",
    icon: "scroll-text",
    summary: "Wills, trusts, and succession plans built around your family's future.",
    description:
      "Thoughtful estate planning protects the people you care about and reduces friction later. We draft wills, trusts, and powers of attorney tailored to each family's circumstances, and guide executors and beneficiaries through probate when the time comes.",
    services: [
      "Wills & revocable trusts",
      "Powers of attorney & health care proxies",
      "Probate & estate administration",
      "Special needs & asset protection trusts",
      "Business succession planning",
    ],
  },
];
