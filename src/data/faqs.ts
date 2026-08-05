export interface Faq {
  question: string;
  answer: string;
  category: string;
}

export const faqs: Faq[] = [
  {
    category: "Getting Started",
    question: "How much does an initial consultation cost?",
    answer:
      "We offer a complimentary initial consultation for most practice areas, including personal injury, family law, and criminal defense. During this meeting we'll review your situation, explain your options, and discuss fees before any engagement begins.",
  },
  {
    category: "Getting Started",
    question: "What should I bring to my first meeting?",
    answer:
      "Bring any documents relevant to your matter — contracts, correspondence, police or incident reports, medical records, or court paperwork you've already received. If you're not sure what's relevant, bring what you have; we'll tell you if we need anything else.",
  },
  {
    category: "Getting Started",
    question: "Is what I tell you confidential, even before I hire the firm?",
    answer:
      "Yes. Communications with our attorneys during a consultation are protected by attorney-client privilege, whether or not you ultimately retain the firm. You can speak candidly from the first conversation.",
  },
  {
    category: "Fees & Billing",
    question: "Do you work on contingency?",
    answer:
      "For personal injury matters, yes — we work on a contingency fee basis, meaning you pay no attorney's fees unless we recover compensation for you. Other practice areas, such as corporate, family, and estate planning matters, are typically billed hourly or as a flat fee, which we'll discuss upfront.",
  },
  {
    category: "Fees & Billing",
    question: "Will I know what my case will cost before you begin work?",
    answer:
      "We provide a clear fee structure in writing before any engagement begins, and we'll flag in advance if a matter is likely to require additional work beyond the original scope.",
  },
  {
    category: "Working With Us",
    question: "How long will my case take?",
    answer:
      "It depends heavily on the type of matter and whether it can be resolved through negotiation or requires litigation. During your consultation, your attorney will give you a realistic timeline based on similar cases and the specifics of your situation.",
  },
  {
    category: "Working With Us",
    question: "Will I be working directly with a partner, or mostly with junior staff?",
    answer:
      "Every matter is overseen by a partner or senior associate who will be your primary point of contact. Associates and paralegals support the work, but you'll always know who is responsible for your case and how to reach them.",
  },
  {
    category: "Working With Us",
    question: "Do you handle cases outside of Massachusetts?",
    answer:
      "Our attorneys are licensed in Massachusetts, and several are also admitted in New Hampshire and Rhode Island. If your matter falls outside these jurisdictions, we can often refer you to trusted counsel in the right state.",
  },
  {
    category: "Practice-Specific",
    question: "I was in an accident. What's the first thing I should do?",
    answer:
      "Seek medical attention first, even if injuries seem minor — some symptoms appear later. Document the scene if possible, avoid giving recorded statements to insurers before speaking with an attorney, and contact us as soon as you're able so we can begin preserving evidence.",
  },
  {
    category: "Practice-Specific",
    question: "Do I need a lawyer to get divorced if we agree on everything?",
    answer:
      "Even amicable divorces benefit from legal review, since the paperwork has long-term consequences around support, property division, and custody that can be difficult to modify later. We offer a streamlined process for uncontested matters.",
  },
];
