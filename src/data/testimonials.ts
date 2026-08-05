export interface Testimonial {
  quote: string;
  name: string;
  context: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Daniel and his team were honest with me from the first meeting, even when the honest answer wasn't what I wanted to hear. They fought hard and the settlement changed my family's situation completely.",
    name: "R. Delgado",
    context: "Personal Injury Client",
    rating: 5,
  },
  {
    quote:
      "Priya helped me get through a custody dispute I thought would drag on for years. She was direct, prepared, and genuinely cared about keeping things stable for my kids.",
    name: "K. Mercer",
    context: "Family Law Client",
    rating: 5,
  },
  {
    quote:
      "We've used Whitfield & Cole for every financing round since our seed. Margaret's team is fast, commercially sensible, and never buries us in unnecessary paperwork.",
    name: "T. Ahn",
    context: "Corporate Client, Founder",
    rating: 5,
  },
  {
    quote:
      "James walked my parents through a trust that three other attorneys had made confusing and expensive. He explained everything in plain terms and it finally made sense.",
    name: "L. Bianchi",
    context: "Estate Planning Client",
    rating: 5,
  },
  {
    quote:
      "Sofia took my case seriously from day one and it showed in the outcome. I felt like an actual person to her, not a file number.",
    name: "M. Osei",
    context: "Criminal Defense Client",
    rating: 5,
  },
];
