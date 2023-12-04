import Image from "./image";

export default interface Pet {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  image?: Image;
  id?: string;
}
