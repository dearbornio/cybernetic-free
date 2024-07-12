import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";
import { Socials } from "@components/Socials";

export const Footer: FC = () => {
    return (
        <S.FooterStyled>
            <Container>
                <S.FooterContainer>
                    <Logo />
                    <S.FooterContent>
                        <p>Developed & Hosted by <a href="https://dearborn.io">Dearborn I/O</a></p>
                    </S.FooterContent>
                </S.FooterContainer>
                <Socials />
            </Container>
        </S.FooterStyled>
    );
};
