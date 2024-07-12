import React, { type FC, useState, useEffect } from "react";

import * as S from "./styled";
import type { ImageProps } from "@static/images";

export type ParallaxImageProps = {
    image?: ImageProps["srcLocal"] | ImageProps["src"];
    content?: {
        title?: string;
        paragraph?: string;
        href?: string;
    };
};

export const ParallaxImage: FC<ParallaxImageProps> = ({ image, content }) => {
    // do not render this component if there is no image
    if (!content || !image) {
        return null;
    }

    return (
        <S.ParallaxImageStyled $bgImage={image}>
            {content.title && content.paragraph && content.href && (
                <S.ParallaxImageContent>
                    {content.title && <h1>{content.title}</h1>}
                    {content.paragraph && <p>{content.paragraph}</p>}
                    {content.href && <a href={content.href}>Click Here To Register</a>}
                </S.ParallaxImageContent>
            )}
        </S.ParallaxImageStyled>
    );
};
