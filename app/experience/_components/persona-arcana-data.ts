export interface ArcanaItem {
  arcana: string;
  name: string;
  french: string;
  image: string;
}

// Persona 5 Major Arcana Mapping
export const arcanaMap: Record<string, ArcanaItem> = {
  I: {
    arcana: "I",
    name: "The Magician",
    french: "LE BATELEUR",
    image: "/images/tarot/I-magician.webp",
  },
  II: {
    arcana: "II",
    name: "The Priestess",
    french: "LA PAPESSE",
    image: "/images/tarot/II-priestess.webp",
  },
  III: {
    arcana: "III",
    name: "The Empress",
    french: "L'IMPERATRICE",
    image: "/images/tarot/III-empress.webp",
  },
  IV: {
    arcana: "IV",
    name: "The Emperor",
    french: "L'EMPEREUR",
    image: "/images/tarot/IV-emperor.webp",
  },
  V: {
    arcana: "V",
    name: "The Hierophant",
    french: "LE PAPE",
    image: "/images/tarot/V-hierophant.webp",
  },
  VI: {
    arcana: "VI",
    name: "The Lovers",
    french: "L'AMOUREUX",
    image: "/images/tarot/VI-lovers.webp",
  },
  VII: {
    arcana: "VII",
    name: "The Chariot",
    french: "LE CHARIOT",
    image: "/images/tarot/VII-chariot.webp",
  },
  VIII: {
    arcana: "VIII",
    name: "Justice",
    french: "LA JUSTICE",
    image: "/images/tarot/VIII-justice.webp",
  },
  IX: {
    arcana: "IX",
    name: "The Hermit",
    french: "L'ERMITE",
    image: "/images/tarot/IX-hermit.webp",
  },
};

// Fallback Default Arcana
export const fallbackArcana: ArcanaItem = {
  arcana: "0",
  name: "The Fool",
  french: "LE MAT",
  image: "/images/tarot/0-fool.webp",
};

export function getArcana(romanNumeral: string): ArcanaItem {
  return arcanaMap[romanNumeral] || {
    ...fallbackArcana,
    arcana: romanNumeral,
  };
}
