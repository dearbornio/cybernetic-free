import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/basketball">Basketball</a>
                    </li>
                    <li>
                        <a
                            href="/volleyball"
                        >
                            Volleyball
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/showtime_basketballcamps"
                        target="_blank"
                        >Instagram</a>
                    </li>

                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
