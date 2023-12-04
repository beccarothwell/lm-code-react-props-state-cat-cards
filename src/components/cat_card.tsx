import CatImage from "./cat_image";
import { catImages } from "../data/cat-data";
import Image from "../data/image";

interface CatCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  catIndex: number;
  image?: Image;
}

const CatCard: React.FC<CatCardProps> = ({
  name,
  species,
  favFoods,
  birthYear,
  catIndex,
  image,
}) => (
  <div className="card">
    <h3 className="card__text card__header">{name}</h3>
    <p className="card__text">Species: {species}</p>
    <p className="card__text">Favourite Food(s): {favFoods.join(", ")}</p>
    <p className="card__text">Birth Year: {birthYear}</p>

    {image && (
      <CatImage
        image={image.image}
        altText={image.altText}
        licenceType={image.licenceType}
        licenceUrl={image.licenceUrl}
        attributionName={image.attributionName}
        attributionUrl={image.attributionUrl}
      />
    )}
  </div>
);

export default CatCard;
