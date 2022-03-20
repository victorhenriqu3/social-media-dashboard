import React from "react";

import UpIcon from "../../images/icon-up.svg";
import DownIcon from "../../images/icon-down.svg";
import ContainerCard from "./styles";
import IconSelect from "../../Utils/IconSelect";

export interface CardProps {
  SocialMedia: string;
  User: string;
  Followers: number;
  NewFollowers: number;
  UpFollowers: boolean;
}

function CardSocialTop(card: CardProps) {
  const Icon = IconSelect(card.SocialMedia);
  return (
    <>
      <ContainerCard Up={card.UpFollowers} Social={card.SocialMedia}>
        <section className='row bio'>
          <img src={Icon} className='Icon' alt={`${card.SocialMedia} Icon`} />
          <span>
            {card.SocialMedia === "YouTube" ? card.User : `@${card.User}`}
          </span>
        </section>
        <section className='Followers'>
          <h2>
            {card.Followers >= 10000
              ? `${(card.Followers / 1000).toFixed(0)}k`
              : card.Followers}
          </h2>
          <p>{card.SocialMedia === "YouTube" ? "SUBSCRIBERS" : "FOLLOWERS"}</p>
        </section>
        <section className='row Indicator'>
          <img
            src={card.UpFollowers ? UpIcon : DownIcon}
            className='Icon'
            alt='Indicator Icon'
          />
          <p>{card.NewFollowers} Today</p>
        </section>
      </ContainerCard>
    </>
  );
}
export default CardSocialTop;
