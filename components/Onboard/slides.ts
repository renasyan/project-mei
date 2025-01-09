export interface Slide {
  id: string;
  title: string;
  highlight?: string;
  highlightIndexStart: number;
  highlightIndexEnd: number;
  description: string;
  image: number;
}

export const slides: Slide[] = [
  {
    id: "1",
    title: "Awali Dengan Langkah Kecil Untuk Perubahan Besar",
    highlight: "Besar",
    highlightIndexStart: 6,
    highlightIndexEnd: 6,
    description: "Loremp Issume ajsbdasd ajsdbasdna sdasda sdasndbansbdbasdasd",
    image: require("../../assets/images/onboarding/onboarding-1.png"),
  },
  {
    id: "2",
    title: "Loremp Issump",
    highlight: "Issump",
    highlightIndexStart: 1,
    highlightIndexEnd: 2,
    description: "Loremp Issume ajsbdasd ajsdbasdna sdasda sdasndbansbdbasdasd",
    image: require("../../assets/images/onboarding/onboarding-2.png"),
  },
  {
    id: "3",
    title: "Loremp Issump",
    highlight: "Issump",
    highlightIndexStart: 3,
    highlightIndexEnd: 3,
    description: "Loremp Issume ajsbdasd ajsdbasdna sdasda sdasndbansbdbasdasd",
    image: require("../../assets/images/onboarding/onboarding-3.png"),
  },
];
