import ooty from "../assets/images/ooty.jpg";
import munnar from "../assets/images/munnar.jpg";
import goa from "../assets/images/goa.jpg";
import manali from "../assets/images/manali.jpg";
import kashmir from "../assets/images/kashmir.jpg";
import kodaikanal from "../assets/images/kodaikanal.jpg";
import coorg from "../assets/images/coorg.jpg";
import wayanad from "../assets/images/wayanad.jpg";
import alleppey from "../assets/images/alleppey.jpg";
import vagamon from "../assets/images/vagamon.jpg";
import yercaud from "../assets/images/yercaud.jpg";
import valparai from "../assets/images/valparai.jpg";
import darjeeling from "../assets/images/darjeeling.jpg";
import shimla from "../assets/images/shimla.jpg";
import andaman from "../assets/images/andaman.jpg";
import jaipur from "../assets/images/jaipur.jpg";
import udaipur from "../assets/images/udaipur.jpg";
import dubai from "../assets/images/dubai.jpg";
import maldives from "../assets/images/Maldives.jpg";
import bali from "../assets/images/Bali.jpg";

const packages = [
  {
    id: 1,
    title: "Ooty Family Package",
    location: "Tamil Nadu",
    duration: "3 Days / 2 Nights",
    price: 7999,
    rating: 4.8,
    image: ooty,
    description:
      "Enjoy scenic hills, tea gardens, Ooty Lake, Botanical Garden and the famous Nilgiri Mountain Railway.",
    category: "Domestic",
  },

  {
    id: 2,
    title: "Munnar Tea Valley Tour",
    location: "Kerala",
    duration: "4 Days / 3 Nights",
    price: 8999,
    rating: 4.9,
    image: munnar,
    description:
      "Explore tea plantations, waterfalls, Echo Point, Eravikulam National Park and beautiful mountain views.",
    category: "Domestic",
  },

  {
    id: 3,
    title: "Goa Beach Escape",
    location: "Goa",
    duration: "4 Days / 3 Nights",
    price: 10999,
    rating: 4.7,
    image: goa,
    description:
      "Relax on beautiful beaches, enjoy nightlife, water sports, seafood and Portuguese heritage.",
    category: "Domestic",
  },

  {
    id: 4,
    title: "Manali Adventure",
    location: "Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    price: 14999,
    rating: 4.9,
    image: manali,
    description:
      "Visit Solang Valley, Rohtang Pass, Hidimba Temple and experience thrilling adventure activities.",
    category: "Domestic",
  },

  {
    id: 5,
    title: "Kashmir Paradise",
    location: "Jammu & Kashmir",
    duration: "6 Days / 5 Nights",
    price: 19999,
    rating: 5.0,
    image: kashmir,
    description:
      "Experience Dal Lake, Gulmarg, Sonmarg, Pahalgam and breathtaking Himalayan landscapes.",
    category: "Honeymoon",
    featured: true,
  },  {
    id: 6,
    title: "Kodaikanal Nature Retreat",
    location: "Tamil Nadu",
    duration: "3 Days / 2 Nights",
    price: 7499,
    rating: 4.8,
    image: kodaikanal,
    description:
      "Enjoy Kodai Lake, Pine Forest, Coaker's Walk, Pillar Rocks and peaceful mountain weather.",
    category: "Domestic",
  },

  {
    id: 7,
    title: "Coorg Coffee Trails",
    location: "Karnataka",
    duration: "4 Days / 3 Nights",
    price: 9999,
    rating: 4.8,
    image: coorg,
    description:
      "Explore coffee plantations, Abbey Falls, Raja's Seat and Dubare Elephant Camp.",
    category: "Domestic",
  },

  {
    id: 8,
    title: "Wayanad Wildlife Escape",
    location: "Kerala",
    duration: "4 Days / 3 Nights",
    price: 9499,
    rating: 4.7,
    image: wayanad,
    description:
      "Visit Edakkal Caves, Soochipara Falls, Banasura Dam and lush green forests.",
    category: "Domestic",
  },

  {
    id: 9,
    title: "Alleppey Backwater Cruise",
    location: "Kerala",
    duration: "3 Days / 2 Nights",
    price: 11999,
    rating: 4.9,
    image: alleppey,
    description:
      "Stay in a luxury houseboat and enjoy peaceful backwaters with authentic Kerala cuisine.",
    category: "Honeymoon",
  },

  {
    id: 10,
    title: "Vagamon Hill Adventure",
    location: "Kerala",
    duration: "3 Days / 2 Nights",
    price: 8499,
    rating: 4.8,
    image: vagamon,
    description:
      "Discover rolling meadows, pine forests, tea gardens and exciting paragliding adventures.",
    category: "Domestic",
  },  {
    id: 11,
    title: "Yercaud Hill Escape",
    location: "Tamil Nadu",
    duration: "3 Days / 2 Nights",
    price: 6999,
    rating: 4.6,
    image: yercaud,
    description:
      "Relax amidst coffee plantations, Yercaud Lake, Lady's Seat, Pagoda Point and cool mountain weather.",
    category: "Domestic",
  },

  {
    id: 12,
    title: "Valparai Nature Tour",
    location: "Tamil Nadu",
    duration: "4 Days / 3 Nights",
    price: 9499,
    rating: 4.8,
    image: valparai,
    description:
      "Enjoy winding mountain roads, tea estates, waterfalls, wildlife and breathtaking viewpoints.",
    category: "Domestic",
  },

  {
    id: 13,
    title: "Darjeeling Himalayan Tour",
    location: "West Bengal",
    duration: "5 Days / 4 Nights",
    price: 15999,
    rating: 4.9,
    image: darjeeling,
    description:
      "Experience the Toy Train, Tiger Hill sunrise, tea gardens and panoramic Himalayan views.",
    category: "Domestic",
  },

  {
    id: 14,
    title: "Shimla Snow Adventure",
    location: "Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    price: 16999,
    rating: 4.8,
    image: shimla,
    description:
      "Visit Kufri, Mall Road, Christ Church and enjoy snowfall with exciting adventure activities.",
    category: "Domestic",
  },

  {
    id: 15,
    title: "Andaman Island Getaway",
    location: "Andaman & Nicobar",
    duration: "6 Days / 5 Nights",
    price: 24999,
    rating: 5.0,
    image: andaman,
    description:
      "Explore Havelock Island, Radhanagar Beach, scuba diving, snorkeling and crystal-clear waters.",
    category: "Honeymoon",
    featured: true,
  },   {
    id: 16,
    title: "Jaipur Heritage Tour",
    location: "Rajasthan",
    duration: "5 Days / 4 Nights",
    price: 17999,
    rating: 4.8,
    image: jaipur,
    description:
      "Explore Amber Fort, Hawa Mahal, City Palace, Jantar Mantar and experience the rich Rajasthani culture.",
    category: "Domestic",
  },

  {
    id: 17,
    title: "Udaipur Royal Escape",
    location: "Rajasthan",
    duration: "4 Days / 3 Nights",
    price: 18999,
    rating: 4.9,
    image: udaipur,
    description:
      "Enjoy Lake Pichola, City Palace, Jag Mandir and the romantic beauty of the City of Lakes.",
    category: "Honeymoon",
    featured: true,
  },

  {
    id: 18,
    title: "Dubai Luxury Tour",
    location: "United Arab Emirates",
    duration: "5 Days / 4 Nights",
    price: 45999,
    rating: 4.9,
    image: dubai,
    description:
      "Visit Burj Khalifa, Dubai Mall, Desert Safari, Marina Cruise and enjoy world-class shopping and entertainment.",
    category: "International",
    featured: true,
  },

  {
    id: 19,
    title: "Maldives Honeymoon",
    location: "Maldives",
    duration: "6 Days / 5 Nights",
    price: 69999,
    rating: 5.0,
    image: maldives,
    description:
      "Stay in luxurious overwater villas, relax on white sandy beaches and enjoy crystal-clear turquoise waters.",
    category: "Honeymoon",
    featured: true,
  },

  {
    id: 20,
    title: "Bali Island Vacation",
    location: "Indonesia",
    duration: "6 Days / 5 Nights",
    price: 54999,
    rating: 4.9,
    image: bali,
    description:
      "Explore Bali's beaches, temples, rice terraces, waterfalls and vibrant nightlife with unforgettable experiences.",
    category: "International",
    featured: true,
  },
];

export default packages;
