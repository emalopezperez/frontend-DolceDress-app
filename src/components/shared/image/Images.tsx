import Image from "next/image";
import { ImagesModel } from "app/models/Images";
import { blurImage } from "../../../../lib/utils";

const Images: React.FC<ImagesModel> = ({
  urlImg,
  altImg,
  qualityImg,
  priorityImg,
  styles,
}) => {
  const defaultClassName = "h-full w--[200px] object-cover";
  const combinedClassName = `${defaultClassName} ${styles}`;
  return (
    <Image
      src={urlImg}
      alt={altImg}
      fill
      placeholder={blurImage}
      priority={priorityImg}
      quality={qualityImg}
      className={combinedClassName}
    />
  );
};

export default Images;
