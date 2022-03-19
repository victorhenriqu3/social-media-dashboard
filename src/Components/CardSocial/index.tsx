import React from "react";
import FBIcon from "../../images/icon-facebook.svg";
import UpIcon from "../../images/icon-up.svg";
import DownIcon from "../../images/icon-down.svg";
import ContainerCard from "./styles";

export interface CardProps {
  SocialMedia: string;
  User: string;
  Followers: number;
  NewFollowers: number;
  UpFollowers: boolean;
}

function CardSocialTop(card: CardProps) {
  return (
    <>
      <ContainerCard Up={card.UpFollowers} Social={card.SocialMedia}>
        <section className='row bio'>
          <img src={FBIcon} className='Icon' alt={`${card.SocialMedia} Icon`} />
          <span>@{card.User}</span>
        </section>
        <section className='Followers'>
          <h2>{card.Followers}</h2>
          <p>{card.SocialMedia === "Youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}</p>
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
