import CardImage from "./card_image";
import Image from "../data/image";

interface CardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  image?: Image;
}

const Card: React.FC<CardProps> = ({
  name,
  species,
  favFoods,
  birthYear,
  image,
}) => (
  <div className="card">
    <h3 className="card__text card__header">{name}</h3>
    <p className="card__text">Species: {species}</p>
    <p className="card__text">Favourite Food(s): {favFoods.join(", ")}</p>
    <p className="card__text">Birth Year: {birthYear}</p>

    {image && (
      <CardImage
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

export default Card;
