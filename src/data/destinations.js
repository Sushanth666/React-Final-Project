// import ooty from "../assets/images/ooty.jpg";
// import munnar from "../assets/images/munnar.jpg";
// import goa from "../assets/images/goa.jpg";
// import manali from "../assets/images/manali.jpg";
// import kashmir from "../assets/images/kashmir.jpg";
// import kodaikanal from "../assets/images/kodaikanal.jpg";

// const destinations = [
//   {
//     id: 1,
//     name: "Ooty",
//     state: "Tamil Nadu",
//     price: "₹7,999",
//     rating: 4.8,
//     duration: "3 Days / 2 Nights",
//     people: "Couple Friendly",
//     image: ooty,
//     description:
//       "Experience the Queen of Hill Stations with tea gardens, lakes, toy train rides, pleasant weather, and breathtaking viewpoints.",
//   },

//   {
//     id: 2,
//     name: "Munnar",
//     state: "Kerala",
//     price: "₹8,499",
//     rating: 4.9,
//     duration: "4 Days / 3 Nights",
//     people: "Family Friendly",
//     image: munnar,
//     description:
//       "Discover lush tea plantations, misty mountains, waterfalls, spice gardens, and unforgettable scenic landscapes.",
//   },

//   {
//     id: 3,
//     name: "Goa",
//     state: "Goa",
//     price: "₹9,999",
//     rating: 4.7,
//     duration: "5 Days / 4 Nights",
//     people: "Friends & Couples",
//     image: goa,
//     description:
//       "Relax on golden beaches, enjoy thrilling water sports, vibrant nightlife, seafood, and exciting beach parties.",
//   },

//   {
//     id: 4,
//     name: "Manali",
//     state: "Himachal Pradesh",
//     price: "₹11,999",
//     rating: 4.9,
//     duration: "5 Days / 4 Nights",
//     people: "Adventure Lovers",
//     image: manali,
//     description:
//       "Explore snow-covered mountains, river rafting, paragliding, valleys, pine forests, and stunning Himalayan views.",
//   },

//   {
//     id: 5,
//     name: "Kashmir",
//     state: "Jammu & Kashmir",
//     price: "₹15,999",
//     rating: 5.0,
//     duration: "6 Days / 5 Nights",
//     people: "Family & Couples",
//     image: kashmir,
//     description:
//       "Visit Dal Lake, Gulmarg, Pahalgam, beautiful valleys, snow-covered peaks, gardens, and experience paradise on Earth.",
//   },

//   {
//     id: 6,
//     name: "Kodaikanal",
//     state: "Tamil Nadu",
//     price: "₹7,499",
//     rating: 4.8,
//     duration: "3 Days / 2 Nights",
//     people: "Nature Lovers",
//     image: kodaikanal,
//     description:
//       "Enjoy serene lakes, pine forests, waterfalls, Coaker's Walk, cool climate, and peaceful mountain scenery.",
//   },
// ];

// export default destinations;
import ooty from "../assets/images/ooty.jpg";
import kodaikanal from "../assets/images/kodaikanal.jpg";
import munnar from "../assets/images/munnar.jpg";
import goa from "../assets/images/goa.jpg";
import manali from "../assets/images/manali.jpg";
import kashmir from "../assets/images/kashmir.jpg";
import coorg from "../assets/images/coorg.jpg";
import mysore from "../assets/images/mysore.jpg";
import wayanad from "../assets/images/wayanad.jpg";
import yercaud from "../assets/images/yercaud.jpg";
import valparai from "../assets/images/valparai.jpg";
import vagamon from "../assets/images/vagamon.jpg";
import alleppey from "../assets/images/alleppey.jpg";
import darjeeling from "../assets/images/darjeeling.jpg";
import shimla from "../assets/images/shimla.jpg";
import ladakh from "../assets/images/ladakh.jpg";
import andaman from "../assets/images/andaman.jpg";
import jaipur from "../assets/images/jaipur.jpg";
import udaipur from "../assets/images/udaipur.jpg";
import rishikesh from "../assets/images/rishikesh.jpg";
import meghalaya from "../assets/images/meghalaya.jpg";

const destinations = [

 {
    id: 1,
    name: "Ooty",
    state: "Tamil Nadu",
    image: ooty,
    category: "Hill Station",
    packageType: "Family",
    price: 7999,
    originalPrice: 9999,
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    reviews: 1542,
    hotel: "4 Star Hotel",
    meals: "Breakfast Included",
    transport: "AC Bus",
    sightseeing: "Included",
    guide: "Professional Guide",
    bestTime: "October - June",
    maxPeople: 6,
    discount: "20% OFF",
    availability: "Available",
    description: "Enjoy beautiful tea gardens, Ooty Lake, Botanical Garden and Doddabetta Peak.",
    highlights: [
      "Tea Factory",
      "Botanical Garden",
      "Ooty Lake",
      "Toy Train Ride"
    ]
  },

  {
    id: 2,
    name: "Kodaikanal",
    state: "Tamil Nadu",
    image: kodaikanal,
    category: "Hill Station",
    packageType: "Couple",
    price: 8499,
    originalPrice: 10499,
    duration: "3 Days / 2 Nights",
    rating: 4.9,
    reviews: 1875,
    hotel: "Lake View Resort",
    meals: "Breakfast & Dinner",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "September - May",
    maxPeople: 4,
    discount: "19% OFF",
    availability: "Available",
    description: "Experience Coaker's Walk, Kodai Lake and Pine Forest.",
    highlights: [
      "Kodai Lake",
      "Coaker's Walk",
      "Pine Forest",
      "Guna Caves"
    ]
  },

  {
    id: 3,
    name: "Munnar",
    state: "Kerala",
    image: munnar,
    category: "Hill Station",
    packageType: "Couple",
    price: 9499,
    originalPrice: 11999,
    duration: "4 Days / 3 Nights",
    rating: 4.9,
    reviews: 2450,
    hotel: "Tea Valley Resort",
    meals: "Breakfast & Dinner",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "September - May",
    maxPeople: 4,
    discount: "21% OFF",
    availability: "Available",
    description: "Tea plantations, waterfalls and Eravikulam National Park.",
    highlights: [
      "Tea Gardens",
      "Mattupetty Dam",
      "Echo Point",
      "Eravikulam Park"
    ]
  },

  {
    id: 4,
    name: "Goa",
    state: "Goa",
    image: goa,
    category: "Beach",
    packageType: "Friends",
    price: 12999,
    originalPrice: 15999,
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    reviews: 3862,
    hotel: "Beach Resort",
    meals: "Breakfast",
    transport: "Airport Pickup",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "November - February",
    maxPeople: 8,
    discount: "18% OFF",
    availability: "Available",
    description: "Relax on Goa beaches with nightlife and water sports.",
    highlights: [
      "Baga Beach",
      "Calangute",
      "Casino Cruise",
      "Dudhsagar Falls"
    ]
  },

  {
    id: 5,
    name: "Manali",
    state: "Himachal Pradesh",
    image: manali,
    category: "Adventure",
    packageType: "Couple",
    price: 15999,
    originalPrice: 18999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 2140,
    hotel: "Mountain Resort",
    meals: "Breakfast & Dinner",
    transport: "Volvo Bus",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "October - March",
    maxPeople: 4,
    discount: "16% OFF",
    availability: "Limited",
    description: "Snow adventures, Solang Valley and Rohtang Pass.",
    highlights: [
      "Solang Valley",
      "Rohtang Pass",
      "River Rafting",
      "Snow Activities"
    ]
  },

  {
    id: 6,
    name: "Kashmir",
    state: "Jammu & Kashmir",
    image: kashmir,
    category: "Nature",
    packageType: "Honeymoon",
    price: 19999,
    originalPrice: 23999,
    duration: "6 Days / 5 Nights",
    rating: 5.0,
    reviews: 3201,
    hotel: "Luxury Houseboat",
    meals: "All Meals",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Professional Guide",
    bestTime: "April - October",
    maxPeople: 2,
    discount: "17% OFF",
    availability: "Available",
    description: "Visit Dal Lake, Gulmarg and Sonmarg with luxury stay.",
    highlights: [
      "Dal Lake",
      "Shikara Ride",
      "Gulmarg",
      "Sonmarg"
    ]
  },

  {
    id: 7,
    name: "Coorg",
    state: "Karnataka",
    image: coorg,
    category: "Nature",
    packageType: "Family",
    price: 9999,
    originalPrice: 12499,
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    reviews: 1740,
    hotel: "Coffee Estate Resort",
    meals: "Breakfast",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "October - March",
    maxPeople: 6,
    discount: "20% OFF",
    availability: "Available",
    description: "Coffee plantations, waterfalls and wildlife.",
    highlights: [
      "Abbey Falls",
      "Coffee Plantation",
      "Raja Seat",
      "Dubare Camp"
    ]
  },

  {
    id: 8,
    name: "Mysore",
    state: "Karnataka",
    image: mysore,
    category: "Heritage",
    packageType: "Family",
    price: 6999,
    originalPrice: 8999,
    duration: "2 Days / 1 Night",
    rating: 4.6,
    reviews: 1605,
    hotel: "3 Star Hotel",
    meals: "Breakfast",
    transport: "AC Bus",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "October - February",
    maxPeople: 5,
    discount: "22% OFF",
    availability: "Available",
    description: "Explore Mysore Palace, Zoo and Brindavan Gardens.",
    highlights: [
      "Mysore Palace",
      "Zoo",
      "Chamundi Hills",
      "Brindavan Gardens"
    ]
  },

  {
    id: 9,
    name: "Wayanad",
    state: "Kerala",
    image: wayanad,
    category: "Nature",
    packageType: "Family",
    price: 8999,
    originalPrice: 10999,
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    reviews: 1420,
    hotel: "Forest Resort",
    meals: "Breakfast",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "October - May",
    maxPeople: 6,
    discount: "18% OFF",
    availability: "Available",
    description: "Caves, waterfalls and wildlife sanctuary.",
    highlights: [
      "Edakkal Caves",
      "Soochipara Falls",
      "Banasura Dam",
      "Wildlife Sanctuary"
    ]
  },

  {
    id: 10,
    name: "Yercaud",
    state: "Tamil Nadu",
    image: yercaud,
    category: "Hill Station",
    packageType: "Family",
    price: 6499,
    originalPrice: 8499,
    duration: "2 Days / 1 Night",
    rating: 4.5,
    reviews: 1180,
    hotel: "Hill View Resort",
    meals: "Breakfast",
    transport: "AC Bus",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "October - June",
    maxPeople: 5,
    discount: "24% OFF",
    availability: "Available",
    description: "A peaceful hill station with lakes and viewpoints.",
    highlights: [
      "Yercaud Lake",
      "Pagoda Point",
      "Lady's Seat",
      "Botanical Garden"
    ]
  },

{
    id: 11,
    name: "Valparai",
    state: "Tamil Nadu",
    image: valparai,
    category: "Hill Station",
    packageType: "Couple",
    price: 8999,
    originalPrice: 10999,
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    reviews: 985,
    hotel: "Tea Estate Resort",
    meals: "Breakfast & Dinner",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "September - May",
    maxPeople: 4,
    discount: "18% OFF",
    availability: "Available",
    description: "Beautiful tea plantations, wildlife and scenic mountain roads.",
    highlights: [
      "Tea Estate",
      "Monkey Falls",
      "Aliyar Dam",
      "Nallamudi View Point"
    ]
  },

  {
    id: 12,
    name: "Vagamon",
    state: "Kerala",
    image: vagamon,
    category: "Hill Station",
    packageType: "Couple",
    price: 9499,
    originalPrice: 11999,
    duration: "3 Days / 2 Nights",
    rating: 4.9,
    reviews: 1430,
    hotel: "Luxury Resort",
    meals: "Breakfast",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "October - May",
    maxPeople: 4,
    discount: "21% OFF",
    availability: "Available",
    description: "Rolling meadows, pine forests and adventure sports.",
    highlights: [
      "Pine Forest",
      "Paragliding",
      "Vagamon Lake",
      "Tea Gardens"
    ]
  },

  {
    id: 13,
    name: "Alleppey",
    state: "Kerala",
    image: alleppey,
    category: "Backwaters",
    packageType: "Honeymoon",
    price: 12999,
    originalPrice: 15999,
    duration: "3 Days / 2 Nights",
    rating: 4.9,
    reviews: 2470,
    hotel: "Luxury Houseboat",
    meals: "All Meals",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Professional Guide",
    bestTime: "November - February",
    maxPeople: 2,
    discount: "19% OFF",
    availability: "Available",
    description: "Enjoy a luxury houseboat cruise through Kerala's famous backwaters.",
    highlights: [
      "Houseboat Stay",
      "Backwaters",
      "Village Tour",
      "Sunset Cruise"
    ]
  },

  {
    id: 14,
    name: "Darjeeling",
    state: "West Bengal",
    image: darjeeling,
    category: "Hill Station",
    packageType: "Family",
    price: 14999,
    originalPrice: 17999,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 1850,
    hotel: "Mountain View Hotel",
    meals: "Breakfast",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "March - June",
    maxPeople: 5,
    discount: "17% OFF",
    availability: "Available",
    description: "Tea gardens, toy train and Himalayan sunrise views.",
    highlights: [
      "Tiger Hill",
      "Tea Gardens",
      "Toy Train",
      "Batasia Loop"
    ]
  },

  {
    id: 15,
    name: "Shimla",
    state: "Himachal Pradesh",
    image: shimla,
    category: "Hill Station",
    packageType: "Family",
    price: 15999,
    originalPrice: 19999,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 2145,
    hotel: "4 Star Hotel",
    meals: "Breakfast & Dinner",
    transport: "Volvo Bus",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "October - March",
    maxPeople: 6,
    discount: "20% OFF",
    availability: "Available",
    description: "Experience snow, colonial architecture and mountain views.",
    highlights: [
      "Mall Road",
      "Kufri",
      "Jakhoo Temple",
      "Ridge"
    ]
  },

  {
    id: 16,
    name: "Ladakh",
    state: "Ladakh",
    image: ladakh,
    category: "Adventure",
    packageType: "Friends",
    price: 28999,
    originalPrice: 32999,
    duration: "7 Days / 6 Nights",
    rating: 5.0,
    reviews: 3120,
    hotel: "Premium Camp",
    meals: "Breakfast & Dinner",
    transport: "SUV",
    sightseeing: "Included",
    guide: "Professional Guide",
    bestTime: "May - September",
    maxPeople: 6,
    discount: "15% OFF",
    availability: "Limited",
    description: "Explore Pangong Lake, Nubra Valley and high mountain passes.",
    highlights: [
      "Pangong Lake",
      "Nubra Valley",
      "Khardung La",
      "Magnetic Hill"
    ]
  },

  {
    id: 17,
    name: "Andaman",
    state: "Andaman & Nicobar",
    image: andaman,
    category: "Beach",
    packageType: "Honeymoon",
    price: 24999,
    originalPrice: 29999,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 2780,
    hotel: "Beach Resort",
    meals: "Breakfast",
    transport: "Airport Transfer",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "October - May",
    maxPeople: 4,
    discount: "17% OFF",
    availability: "Available",
    description: "Crystal-clear beaches, scuba diving and island hopping.",
    highlights: [
      "Radhanagar Beach",
      "Scuba Diving",
      "Cellular Jail",
      "Ross Island"
    ]
  },

  {
    id: 18,
    name: "Jaipur",
    state: "Rajasthan",
    image: jaipur,
    category: "Heritage",
    packageType: "Family",
    price: 11999,
    originalPrice: 14999,
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    reviews: 2680,
    hotel: "Heritage Hotel",
    meals: "Breakfast",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Professional Guide",
    bestTime: "October - March",
    maxPeople: 6,
    discount: "20% OFF",
    availability: "Available",
    description: "Visit majestic forts, palaces and colorful local markets.",
    highlights: [
      "Amber Fort",
      "Hawa Mahal",
      "City Palace",
      "Jantar Mantar"
    ]
  },

  {
    id: 19,
    name: "Udaipur",
    state: "Rajasthan",
    image: udaipur,
    category: "Heritage",
    packageType: "Couple",
    price: 13999,
    originalPrice: 16999,
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    reviews: 1950,
    hotel: "Lake View Hotel",
    meals: "Breakfast",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Available",
    bestTime: "October - March",
    maxPeople: 4,
    discount: "18% OFF",
    availability: "Available",
    description: "Romantic lakes, royal palaces and sunset boat rides.",
    highlights: [
      "Lake Pichola",
      "City Palace",
      "Fateh Sagar Lake",
      "Saheliyon Ki Bari"
    ]
  },

  {
    id: 20,
    name: "Rishikesh",
    state: "Uttarakhand",
    image: rishikesh,
    category: "Adventure",
    packageType: "Friends",
    price: 9999,
    originalPrice: 12999,
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    reviews: 2360,
    hotel: "River Side Resort",
    meals: "Breakfast",
    transport: "Private Cab",
    sightseeing: "Included",
    guide: "Professional Guide",
    bestTime: "September - April",
    maxPeople: 8,
    discount: "22% OFF",
    availability: "Available",
    description: "River rafting, camping, yoga and the Ganga Aarti experience.",
    highlights: [
      "River Rafting",
      "Laxman Jhula",
      "Camping",
      "Ganga Aarti"
    ]
  }
];

export default destinations;