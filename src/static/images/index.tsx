import { type FC } from "react";

import Logo from "./logo.png";

import HeroSlider1 from "./basketball.jpg";
import HeroSlider2 from "./volleyball.jpg";

import BasketballImg1 from "./about-image-01.jpg";
import BasketballImg2 from "./about-image-02.jpg";
import VolleyballImg1 from "./volleyball-image-1.jpg"
import VolleyballImg2 from "./volleyball-image-2.jpg";

export const images = {

    logo: Logo,
};

export type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export {
    HeroSlider1,
    HeroSlider2,
    BasketballImg1,
    BasketballImg2,
    VolleyballImg1,
    VolleyballImg2,
};
