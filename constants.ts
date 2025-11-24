import { Scissors, Sparkles, Feather, Crown, Palette, Smile } from 'lucide-react';

export const CONTACT_INFO = {
  whatsapp: "242064741833",
  displayPhone: "+242 06 474 18 33",
  altPhone1: "+242 068 298 869",
  altPhone2: "+242 064 566 714",
  address: "Ruelle Charle Ebina, Non loin de l'Hôtel Saphir, Brazzaville",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Saphir+Brazzaville" 
};

export const SERVICES = [
  {
    id: 1,
    title: "Coiffure & Soins",
    description: "L'art de sublimer vos cheveux, du soin profond à la coupe tendance.",
    icon: Scissors,
    images: [
        "assets/tresse.jpeg",
        "assets/tresse-3.jpeg"
    ],
    details: ["Coupe sur mesure", "Soin profond", "Tresses & Nattes", "Coloration"],
    subServices: [
      { name: "Coupe Dame Simple", price: "5 000 FCFA" },
      { name: "Brushing & Mise en forme", price: "7 000 FCFA" },
      { name: "Soin Profond Réparateur", price: "15 000 FCFA" },
      { name: "Tresses / Nattes (sans rajouts)", price: "10 000 FCFA" },
      { name: "Coloration Complète", price: "25 000 FCFA" }
    ]
  },
  {
    id: 2,
    title: "Perruques & Extensions",
    description: "Une pose indétectable pour un résultat naturel et sophistiqué.",
    icon: Feather,
    images: [
        "assets/perruque-1.jpeg",
        "assets/perruque.jpeg"
    ],
    details: ["Pose perruque", "Customisation", "Lissage", "Entretien"],
    subServices: [
      { name: "Confection Perruque", price: "20 000 FCFA" },
      { name: "Pose Perruque (Customisation)", price: "15 000 FCFA" },
      { name: "Lavage & Traitement Perruque", price: "10 000 FCFA" },
      { name: "Tissage (Pose)", price: "12 000 FCFA" }
    ]
  },
  {
    id: 3,
    title: "Esthétique & Beauté",
    description: "Révélez l'éclat de votre peau avec nos rituels de soins visage.",
    icon: Sparkles,
    images: [
        "assets/mask.jpeg", 
        "assets/mask-1.jpeg"
    ],
    details: ["Soins visage", "Épilation", "Gommage", "Douceur"],
    subServices: [
      { name: "Soin Visage Éclat", price: "15 000 FCFA" },
      { name: "Soin Visage Anti-Âge", price: "25 000 FCFA" },
      { name: "Épilation Sourcils", price: "2 000 FCFA" },
      { name: "Épilation Complète", price: "20 000 FCFA" },
      { name: "Gommage Corporel", price: "18 000 FCFA" }
    ]
  },
  {
    id: 4,
    title: "Onglerie",
    description: "L'élégance jusqu'au bout des doigts.",
    icon: Smile, 
    images: [
        "assets/manucure.jpeg",
        "assets/manucure-2.jpeg"
    ],
    details: ["Manucure", "Pédicure", "Gel & Vernis", "Nail Art"],
    subServices: [
      { name: "Manucure Simple", price: "5 000 FCFA" },
      { name: "Pédicure Spa", price: "10 000 FCFA" },
      { name: "Pose Gel / Résine", price: "15 000 FCFA" },
      { name: "Vernis Semi-Permanent", price: "8 000 FCFA" }
    ]
  },
  {
    id: 5,
    title: "Mariage & Cérémonie",
    description: "Soyez la reine de votre événement avec une mise en beauté royale.",
    icon: Crown,
    images: [
        "assets/mariage.jpeg", 
        "assets/mariage-1.jpeg"
    ],
    details: ["Forfait Mariée", "Maquillage", "Habillage", "Coiffure"],
    subServices: [
      { name: "Forfait Mariée Complet", price: "Sur Devis" },
      { name: "Maquillage Mariée (Essai inclus)", price: "50 000 FCFA" },
      { name: "Coiffure de Cérémonie", price: "25 000 FCFA" },
      { name: "Accompagnement Habillage", price: "15 000 FCFA" }
    ]
  },
  {
    id: 6,
    title: "Maquillage & Visagisme",
    description: "Sublimez vos traits avec un maquillage adapté à votre morphologie.",
    icon: Palette,
    images: [
        "assets/makeup.jpeg",
        "assets/makeup-1.jpeg"
    ],
    details: ["Maquillage Jour", "Maquillage Soir", "Sourcils", "Conseils"],
    subServices: [
      { name: "Maquillage Jour (Nude)", price: "10 000 FCFA" },
      { name: "Maquillage Soirée / Glamour", price: "15 000 FCFA" },
      { name: "Restructuration Sourcils", price: "3 000 FCFA" },
      { name: "Cours d'Auto-Maquillage", price: "30 000 FCFA" }
    ]
  }
];