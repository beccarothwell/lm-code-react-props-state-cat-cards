import Cat from "./cat";
import Image from "./image";
import cat1 from "../assets/images/cat1.jpg";
import cat2 from "../assets/images/cat2.jpg";
import cat3 from "../assets/images/cat3.jpg";
import cat4 from "../assets/images/cat4.jpg";
import cat5 from "../assets/images/cat5.jpg";
import cat6 from "../assets/images/cat6.jpg";
import cat7 from "../assets/images/cat7.jpg";
import cat8 from "../assets/images/cat8.jpg";
import cat9 from "../assets/images/cat9.jpg";
import cat10 from "../assets/images/cat10.jpg";
import cat11 from "../assets/images/cat11.jpg";
import cat12 from "../assets/images/cat12.jpg";
import { v4 as uuidv4 } from "uuid";

const catData: Array<Cat> = [
  {
    name: "Little Miss Purrfect",
    species: "Cat",
    favFoods: ["wet food", "dry food"],
    birthYear: 2016,
  },
  {
    name: "Mr Gwumpy",
    species: "Cat",
    favFoods: ["caviar"],
    birthYear: 2016,
  },
  {
    name: "Dopey",
    species: "Cat",
    favFoods: ["bugs"],
    birthYear: 2018,
  },
  {
    name: "Jumpy",
    species: "Scaredy Cat",
    favFoods: ["not cucumbers!"],
    birthYear: 2008,
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
  },
  {
    name: "Cindy Clawford",
    species: "Cat",
    favFoods: ["mice"],
    birthYear: 2012,
  },
  {
    name: "Katy Purry",
    species: "Cat",
    favFoods: ["cigarettes", "coffee"],
    birthYear: 2015,
  },
  {
    name: "Dr. Von Belly-Rub",
    species: "Cat",
    favFoods: ["salt"],
    birthYear: 2020,
  },
  {
    name: "Blobby",
    species: "Bird?",
    favFoods: ["your soul"],
    birthYear: 2020,
  },
  {
    name: "El Taco",
    species: "Cat",
    favFoods: ["tequila", "bar snax"],
    birthYear: 1995,
  },
  {
    name: "Nibbles",
    species: "Hungry Cat",
    favFoods: ["blankets", "feet", "tinsel"],
    birthYear: 2003,
  },
  {
    name: "BoopySnoot",
    species: "Tiny Cat",
    favFoods: ["milk"],
    birthYear: 2021,
  },
  {
    name: "Captain Catface",
    species: "Sea Cattain",
    favFoods: ["fish, rum"],
    birthYear: 2016,
  },
];

const catImages: Array<Image> = [
  {
    image: cat1,
    altText: "Describe this cat!",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "amblin",
    attributionUrl: "https://www.flickr.com/people/amblin/",
  },
  {
    image: cat2,
    altText: "Describe this cat!",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "ivva",
    attributionUrl: "https://www.flickr.com/people/ivva/",
  },
  {
    image: cat3,
    altText: "Describe this cat!",
    licenceType: "CC BY-ND 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-nd/2.0/",
    attributionName: "Rachele Pettarelli Ph",
    attributionUrl: "https://www.flickr.com/people/rachephotos/",
  },
  {
    image: cat4,
    altText: "Describe this cat!",
    licenceType: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    attributionName: "renarl",
    attributionUrl: "https://www.flickr.com/people/renarl/",
  },
  {
    image: cat5,
    altText: "Describe this cat!",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "x-oph",
    attributionUrl: "https://www.flickr.com/people/x-oph/",
  },
  {
    image: cat6,
    altText: "Describe this cat!",
    licenceType: "CC BY-ND 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-nd/2.0/",
    attributionName: "arrathoonlaa@att.net",
    attributionUrl: "https://www.flickr.com/people/21851382@N04/",
  },
  {
    image: cat7,
    altText: "Describe this cat!",
    licenceType: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    attributionName: "pavlovskyy",
    attributionUrl: "https://www.flickr.com/people/pavlovskyy/",
  },
  {
    image: cat8,
    altText: "Describe this cat!",
    licenceType: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    attributionName: "AleGranholm",
    attributionUrl: "https://www.flickr.com/people/darthale/",
  },
  {
    image: cat9,
    altText: "Describe this cat!",
    licenceType: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    attributionName: "Sardonic G",
    attributionUrl: "https://www.flickr.com/people/24039825@N06/",
  },
  {
    image: cat10,
    altText: "Describe this cat!",
    licenceType: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    attributionName: "www.metaphoricalplatypus.com",
    attributionUrl: "https://www.flickr.com/people/29638108@N06/",
  },
  {
    image: cat11,
    altText: "Describe this cat!",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "abraham.williams",
    attributionUrl: "https://www.flickr.com/people/4braham/",
  },
  {
    image: cat12,
    altText: "Describe this cat!",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "x-oph",
    attributionUrl: "https://www.flickr.com/people/x-oph/",
  },
];

catData.forEach((cat, index) => {
  const id = uuidv4();
  cat.id = id;
  if (catImages[index]) {
    catImages[index].id = id;
  }
});

export { catData, catImages };
