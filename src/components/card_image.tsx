import Image from "../data/image";
/*interface CardImageProps {
  image: string;
  altText: string;
  licenceType: string;
  licenceUrl: string;
  attributionName?: string;
  attributionUrl?: string;
}*/

const CardImage: React.FC<Image> = ({
  image,
  altText,
  licenceType,
  licenceUrl,
  attributionName,
  attributionUrl,
}) => (
  <>
    <img className="card__image" src={image} alt={altText} />
    <p className="card__text__small">
      Image licenced under <a href={licenceUrl}>{licenceType}</a>
      {attributionName && (
        <>
          &nbsp;by <a href={attributionUrl}>{attributionName}</a>
        </>
      )}
    </p>
  </>
);

export default CardImage;
