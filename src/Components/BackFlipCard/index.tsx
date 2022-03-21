import React from "react";
import { GridsStats } from "../../Containers/GridCardsStats";
import DownIcon from "../../images/icon-down.svg";
import UpIcon from "../../images/icon-up.svg";
import IconSelect from "../../Utils/IconSelect";
import ContainerCard from "../CardSocial/styles";
import ContainerBackFlip from "./styles";

type BackFlip = { StatsList: GridsStats[] };

export default function BackFlipCard(BackProps: BackFlip) {
  return (
    <>
      <div>
        {BackProps.StatsList.map((stats) => {
          const Icon = IconSelect(stats.SocialMedia);
          return (
            <>
              <ContainerBackFlip>
                <ContainerCard Up={stats.UpStats} Social={stats.SocialMedia}>
                  <div className='columnCard'>
                    <section className=' TitleStats'>
                      <span>{stats.Title}</span>
                      <p className='StatsNumber'>
                        {stats.Stats >= 10000
                          ? `${(stats.Stats / 1000).toFixed(0)}k`
                          : stats.Stats}
                      </p>
                    </section>
                    <section className='Stats'>
                      <img src={Icon} alt={`${stats.SocialMedia} Icon`} />

                      <section className='BackRow Indicator'>
                        <img
                        className="IconBack"
                          src={stats.UpStats ? UpIcon : DownIcon}
                          alt='Indicator Icon'
                        />
                        <p>{stats.NewStats}%</p>
                      </section>
                    </section>
                  </div>
                </ContainerCard>
              </ContainerBackFlip>
            </>
          );
        })}
      </div>
    </>
  );
}
