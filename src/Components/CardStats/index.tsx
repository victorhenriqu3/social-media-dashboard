import React from "react";

import UpIcon from "../../images/icon-up.svg";
import DownIcon from "../../images/icon-down.svg";
import IconSelect from "../../Utils/IconSelect";
import ContainerCardStats from "./styles";

export interface StatsProps {
  Title: string;
  SocialMedia: string;
  Stats: number;
  NewStats: number;
  UpStats: boolean;
}

function CardStatsBottom(card: StatsProps) {
  const Icon = IconSelect(card.SocialMedia);
  return (
    <>
      <ContainerCardStats Up={card.UpStats} Social={card.SocialMedia}>
        <section className=' TitleStats Column'>
          <span>{card.Title}</span>
          <h2>
            {card.Stats >= 10000
              ? `${(card.Stats / 1000).toFixed(0)}k`
              : card.Stats}
          </h2>
        </section>
        <section className='Stats Column'>
          <img src={Icon} className='Icon' alt={`${card.SocialMedia} Icon`} />

          <section className='row Indicator'>
            <img src={card.UpStats ? UpIcon : DownIcon} alt='Indicator Icon' />
            <p>{card.NewStats}%</p>
          </section>
        </section>
      </ContainerCardStats>
    </>
  );
}
export default CardStatsBottom;
