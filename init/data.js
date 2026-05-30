const sampleListings = [
  {
    title: "Luxury Beach Villa",
    description: "A beautiful villa near the beach with stunning sea views.",
    image:{ 
      filename:"listingimage",
     url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"},
    location: "Goa",
    country: "India",
    price: 4500,
  },
  {
    title: "Mountain Cabin",
    description: "Peaceful wooden cabin surrounded by mountains and nature.",
    image: {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000"},
    location: "Zermatt",
    country: "Switzerland",
    price: 6200,
  },
  {
    title: "City Apartment",
    description: "Modern apartment located in the heart of the city.",
    image: {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"},
    location: "New York",
    country: "USA",
    price: 3500,
  },
  {
    title: "Desert Camp",
    description: "Enjoy camping under the stars in the beautiful desert.",
    image:{ 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"},
    location: "Dubai",
    country: "UAE",
    price: 2800,
  },
  {
    title: "Lake House",
    description: "Relaxing lake house with amazing sunrise views.",
    image: {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1494526585095-c41746248156"},
    location: "Toronto",
    country: "Canada",
    price: 5100,
  },
  {
    title: "Snow Resort",
    description: "Luxury snow resort perfect for winter vacations.",
    image: {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750"},
    location: "Oslo",
    country: "Norway",
    price: 7200,
  },
  {
    title: "Forest Tree House",
    description: "Stay in a cozy tree house surrounded by green forests.",
    image:{ 
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"},
    location: "Kerala",
    country: "India",
    price: 3900,
  },
  {
    title: "Royal Palace Stay",
    description: "Experience luxury living in a royal heritage palace.",
    image: {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1566073771259-6a8506099945"},
    location: "Jaipur",
    country: "India",
    price: 8400,
  },
  {
    title: "Island Resort",
    description: "Private island resort with crystal clear water views.",
    image: {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"},
    location: "Maldives",
    country: "Maldives",
    price: 15000,
  },
  {
    title: "Countryside Cottage",
    description: "Small countryside cottage perfect for a peaceful vacation.",
    image: {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1472224371017-08207f84aaae"},
    location: "Tuscany",
    country: "Italy",
    price: 4700,
  },
  {
    title: "Skyline Penthouse",
    description: "Luxury penthouse apartment with city skyline views.",
    image:{
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156"},
    location: "Singapore",
    country: "Singapore",
    price: 9200,
  },
  {
    title: "Jungle Safari Lodge",
    description: "Adventure lodge located near wildlife safari parks.",
    image:{
      filename:"listingimage", 
      url:"https://images.unsplash.com/photo-1519046904884-53103b34b206"},
    location: "Ranthambore",
    country: "India",
    price: 5600,
  },
  {
    title: "Ocean Cliff Hotel",
    description: "Beautiful hotel built on cliffs overlooking the ocean.",
    image: {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"},
    location: "Santorini",
    country: "Greece",
    price: 11000,
  },
  {
    title: "Traditional Ryokan",
    description: "Authentic Japanese stay with traditional rooms and food.",
    image: {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"},
    location: "Kyoto",
    country: "Japan",
    price: 6800,
  },
  {
    title: "River Side Camp",
    description: "Camping beside a peaceful flowing river.",
    image: {
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1506744038136-46273834b3fb"},
    location: "Rishikesh",
    country: "India",
    price: 2500,
  },
  {
    title: "Luxury Farm House",
    description: "Spacious farmhouse surrounded by greenery.",
    image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1464146072230-91cabc968266"},
    location: "Punjab",
    country: "India",
    price: 5300,
  },
  {
    title: "Beach Hut",
    description: "Affordable beach hut with amazing sunset views.",
    image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"},
    location: "Bali",
    country: "Indonesia",
    price: 3200,
  },
  {
    title: "Luxury Glass House",
    description: "Modern glass house with panoramic mountain views.",
    image:{filename:"listingimage",url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"},
    location: "Iceland",
    country: "Iceland",
    price: 12500,
  },
  {
    title: "Village Homestay",
    description: "Traditional village lifestyle experience.",
    image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"},
    location: "Odisha",
    country: "India",
    price: 1800,
  },
  {
    title: "Rainforest Retreat",
    description: "Stay inside a lush tropical rainforest.",
    image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"},
    location: "Amazon",
    country: "Brazil",
    price: 7600,
  },
  {
    title: "Luxury Yacht Stay",
    description: "Enjoy living on a private luxury yacht.",
    image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"},
    location: "Miami",
    country: "USA",
    price: 20000,
  },
  {
    title: "Hilltop Cottage",
    description: "Beautiful cottage on top of green hills.",
    image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e"},
    location: "Darjeeling",
    country: "India",
    price: 4100,
  },
  {
    title: "Modern Studio Flat",
    description: "Compact and stylish flat for solo travelers.",
    image:{filename:"listingimage",url: "https://images.unsplash.com/photo-1484154218962-a197022b5858"},
    location: "London",
    country: "UK",
    price: 6000,
  },
  {
    title: "Ice Hotel",
    description: "Unique hotel made completely from ice.",
    image:{filename:"listingimage",url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"},
    location: "Sweden",
    country: "Sweden",
    price: 13200,
  },
  {
    title: "Cliffside Cabin",
    description: "Wooden cabin hanging beside rocky cliffs.",
  image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e"},
    location: "Colorado",
    country: "USA",
    price: 6900,
  },
  {
    title: "Tea Garden Resort",
    description: "Relax in the middle of beautiful tea gardens.",
    image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1506744038136-46273834b3fb"},
    location: "Assam",
    country: "India",
    price: 4800,
  },
  {
    title: "Underwater Hotel",
    description: "Luxury rooms with underwater sea views.",
    image:{filename:"listingimage",url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"},
    location: "Dubai",
    country: "UAE",
    price: 25000,
  },
  {
    title: "Eco Bamboo House",
    description: "Sustainable bamboo house surrounded by nature.",
    image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1464890100898-a385f744067f"},
    location: "Bali",
    country: "Indonesia",
    price: 5400,
  },
  {
    title: "Castle Stay",
    description: "Live like royalty inside a historic castle.",
    image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1520637836862-4d197d17c35a"},
    location: "Edinburgh",
    country: "Scotland",
    price: 14000,
  },
  {
    title: "Beach Camping Tent",
    description: "Enjoy camping directly beside the beach.",
    image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"},
    location: "Andaman",
    country: "India",
    price: 2200,
  },
  {
  title: "Floating Bamboo Cottage",
  description: "Unique floating cottage built on a peaceful river.",
  image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1505692952047-1a78307da8f2"},
  location: "Chiang Mai",
  country: "Thailand",
  price: 6100,
},

{
  title: "Volcano View Lodge",
  description: "Amazing lodge with direct volcano landscape views.",
  image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1469474968028-56623f02e42e"},
  location: "Hawaii",
  country: "USA",
  price: 8900,
},

{
  title: "Hidden Cave Stay",
  description: "A mysterious cave-style home for adventurous travelers.",
  image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"},
  location: "Cappadocia",
  country: "Turkey",
  price: 7400,
},

{
  title: "Glass Dome Retreat",
  description: "Transparent dome stay perfect for stargazing nights.",
  image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1506744038136-46273834b3fb"},
  location: "Finland",
  country: "Finland",
  price: 12800,
},

{
  title: "Riverboat Home",
  description: "Traditional wooden riverboat converted into a luxury stay.",
  image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1494526585095-c41746248156"},
  location: "Kerala",
  country: "India",
  price: 4300,
},

{
  title: "Safari Desert Tent",
  description: "Premium desert tent with cultural evening performances.",
  image: {filename:"listingimage",url :"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"},
  location: "Marrakech",
  country: "Morocco",
  price: 5900,
},

{
  title: "Nordic Wooden Chalet",
  description: "Warm and cozy chalet surrounded by snowy forests.",
  image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750"},
  location: "Lapland",
  country: "Finland",
  price: 9100,
},

{
  title: "Ocean Breeze Apartment",
  description: "Stylish apartment with balcony facing the ocean.",
  image: {filename:"listingimage",url:"https://images.unsplash.com/photo-1484154218962-a197022b5858"},
  location: "Sydney",
  country: "Australia",
  price: 6700,
},

{
  title: "Wild Jungle Cabin",
  description: "Remote cabin deep inside the tropical jungle.",
  image:{filename:"listingimage",url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"},
  location: "Costa Rica",
  country: "Costa Rica",
  price: 5200,
},

{
  title: "Ancient Stone Villa",
  description: "Historic stone villa with classic European interiors.",
  image:{
    filename:"listingimage",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"},
  location: "Athens",
  country: "Greece",
  price: 8600,
},

{
  title: "Luxury Vineyard House",
  description: "Stay beside beautiful vineyards and taste premium wines.",
  image:{
    filename:"listingimage",
    url: "https://images.unsplash.com/photo-1464146072230-91cabc968266"},
  location: "Napa Valley",
  country: "USA",
  price: 10200,
},

{
  title: "Snow Igloo Camp",
  description: "Sleep inside an ice igloo under the northern lights.",
  image: 
  {
    filename:"listingimage",
    url:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
  },
  location: "Alaska",
  country: "USA",
  price: 11900,
},

{
  title: "Cliff Edge Resort",
  description: "Luxury resort located dramatically on a cliff edge.",
  image: 
  {
    filename:"listingimage",
    url:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  location: "Phuket",
  country: "Thailand",
  price: 9700,
},

{
  title: "Minimal Zen House",
  description: "Japanese-inspired peaceful minimalist living space.",
  image:{
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  } ,
  location: "Seoul",
  country: "South Korea",
  price: 6400,
},

{
  title: "Sunset Palm Resort",
  description: "Relax beside palm trees with breathtaking sunset views.",
  image: {
    filename:"listingimage",
    url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"},
  location: "Fiji",
  country: "Fiji",
  price: 11200,
},
];

module.exports = { data: sampleListings };