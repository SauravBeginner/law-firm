import { images } from "./images";

export interface Attorney {
  slug: string;
  name: string;
  title: string;
  focus: string;
  bio: string;
  longBio: string;
  education: string[];
  admissions: string[];
  image: string;
}

export const attorneys: Attorney[] = [
  {
    slug: "margaret-whitfield",
    name: "Margaret Whitfield",
    title: "Founding Partner",
    focus: "Corporate Law & Complex Litigation",
    bio: "Margaret co-founded the firm in 1994 and has led its corporate and litigation practice for three decades.",
    longBio:
      "Margaret Whitfield co-founded the firm in 1994 after nine years at a large Boston litigation practice. She advises boards and closely held businesses on governance, financing, and high-stakes disputes, and has argued before the Massachusetts Appeals Court on multiple occasions. Clients describe her as exacting, plainspoken, and unwilling to settle for a mediocre outcome.",
    education: ["J.D., Boston University School of Law", "B.A., Economics, Williams College"],
    admissions: ["Massachusetts", "U.S. District Court, District of Massachusetts", "First Circuit Court of Appeals"],
    image: images.attorneyMargaret,
  },
  {
    slug: "daniel-cole",
    name: "Daniel Cole",
    title: "Founding Partner",
    focus: "Personal Injury & Trial Practice",
    bio: "Daniel has tried more than sixty cases to verdict and leads the firm's personal injury practice.",
    longBio:
      "Daniel Cole built his career in the courtroom, trying more than sixty civil cases to verdict before co-founding the firm alongside Margaret Whitfield. He now leads the firm's personal injury and trial practice, representing clients injured in accidents, workplace incidents, and by defective products. He is a frequent lecturer on trial advocacy for the Massachusetts Bar Association.",
    education: ["J.D., Georgetown University Law Center", "B.A., Political Science, Boston College"],
    admissions: ["Massachusetts", "New Hampshire", "U.S. District Court, District of Massachusetts"],
    image: images.attorneyDaniel,
  },
  {
    slug: "priya-anand",
    name: "Priya Anand",
    title: "Senior Partner, Family Law",
    focus: "Divorce, Custody & Family Mediation",
    bio: "Priya chairs the family law group and is a trained collaborative-divorce mediator.",
    longBio:
      "Priya Anand joined the firm in 2009 and now chairs its family law group. A trained collaborative-divorce mediator, she works to resolve custody and support matters outside the courtroom whenever it serves her clients' interests, while preparing every case as though it will be tried. She is regularly recognized among Massachusetts' top family law practitioners.",
    education: ["J.D., Northeastern University School of Law", "B.A., Psychology, Tufts University"],
    admissions: ["Massachusetts", "Rhode Island"],
    image: images.attorneyPriya,
  },
  {
    slug: "james-okafor",
    name: "James Okafor",
    title: "Senior Associate",
    focus: "Estate Planning & Real Estate",
    bio: "James guides families and property owners through estate planning, probate, and closings.",
    longBio:
      "James Okafor advises individuals and families on wills, trusts, and estate administration, and represents buyers, sellers, and lenders in residential and commercial real estate transactions. He joined the firm in 2015 after several years in a boutique trusts-and-estates practice, and is known for translating dense planning concepts into decisions clients can act on with confidence.",
    education: ["J.D., Suffolk University Law School", "B.S., Finance, University of Massachusetts Amherst"],
    admissions: ["Massachusetts"],
    image: images.attorneyJames,
  },
  {
    slug: "sofia-marchetti",
    name: "Sofia Marchetti",
    title: "Associate, Criminal Defense",
    focus: "Criminal Defense & Appeals",
    bio: "Sofia represents clients facing misdemeanor and felony charges across Massachusetts courts.",
    longBio:
      "Sofia Marchetti joined the firm's criminal defense practice in 2019 after clerking for a Massachusetts Superior Court judge. She represents clients facing charges ranging from motor vehicle offenses to serious felonies, and has a growing appellate practice focused on sentencing and post-conviction relief.",
    education: ["J.D., Boston College Law School", "B.A., Criminal Justice, University of Massachusetts Amherst"],
    admissions: ["Massachusetts", "U.S. District Court, District of Massachusetts"],
    image: images.attorneySofia,
  },
  {
    slug: "robert-kessler",
    name: "Robert Kessler",
    title: "Senior Associate, Corporate Law",
    focus: "Transactions & Business Counsel",
    bio: "Robert advises founders and growing companies on formation, financing, and M&A.",
    longBio:
      "Robert Kessler works alongside Margaret Whitfield on the firm's corporate matters, advising founders and growth-stage companies on entity formation, venture financing, and mergers and acquisitions. Before joining the firm in 2017, he practiced in the corporate group of a national firm's Boston office.",
    education: ["J.D., Boston University School of Law", "B.A., Business Economics, Brown University"],
    admissions: ["Massachusetts", "New York"],
    image: images.attorneyRobert,
  },
];
