export interface CaseResult {
  practiceArea: string;
  title: string;
  summary: string;
  outcome: string;
}

export const caseResults: CaseResult[] = [
  {
    practiceArea: "Personal Injury",
    title: "Multi-Vehicle Highway Collision",
    summary:
      "Represented a client who suffered spinal injuries after a commercial truck driver caused a multi-vehicle collision on I-93. The insurer initially disputed the extent of injury.",
    outcome: "$2.4M settlement",
  },
  {
    practiceArea: "Personal Injury",
    title: "Premises Liability — Retail Fall",
    summary:
      "Secured recovery for a client who fell on an unmarked wet floor at a retail location, resulting in a fractured hip requiring surgery.",
    outcome: "$685K settlement",
  },
  {
    practiceArea: "Corporate Law",
    title: "Series B Financing & Restructuring",
    summary:
      "Advised a Boston-based software company through a $40M Series B round, including cap table cleanup and renegotiation of founder vesting terms.",
    outcome: "Successfully closed",
  },
  {
    practiceArea: "Family Law",
    title: "Contested Custody Resolution",
    summary:
      "Represented a father in a contested custody matter involving relocation. Negotiated a parenting plan preserving meaningful time with both parents without a trial.",
    outcome: "Resolved via mediation",
  },
  {
    practiceArea: "Criminal Defense",
    title: "Felony Drug Charge Dismissal",
    summary:
      "Challenged the legality of a traffic stop that led to felony drug charges. The court suppressed the resulting evidence.",
    outcome: "Charges dismissed",
  },
  {
    practiceArea: "Real Estate Law",
    title: "Commercial Lease Dispute",
    summary:
      "Represented a small business tenant in a dispute over lease termination terms with a commercial landlord, avoiding costly litigation.",
    outcome: "Favorable settlement",
  },
  {
    practiceArea: "Estate Planning",
    title: "Contested Probate Matter",
    summary:
      "Represented the named executor of an estate against a will contest brought by an estranged family member.",
    outcome: "Will upheld",
  },
  {
    practiceArea: "Personal Injury",
    title: "Workplace Construction Injury",
    summary:
      "Represented a construction worker injured by unsafe scaffolding, pursuing claims against the general contractor beyond workers' compensation limits.",
    outcome: "$1.1M settlement",
  },
];

export const resultsDisclaimer =
  "Past results do not guarantee similar outcomes. Every case is different and depends on its own facts and circumstances. Case details have been generalized to protect client confidentiality.";
