import React from "react";
import CardStatsBottom from "../../Components/CardStats";

import ContainerGrid from "../GridCardsSocial/styles";
import ContainerGridStats from "./styles";

export default function GridCardsStats() {
  return (
    <>
      <ContainerGridStats>
        <h2 className='Overview'>Overview - Today</h2>
        
          <div className='container'>
            <div className='cards'>
              <CardStatsBottom
                Title='Page Views'
                SocialMedia='Facebook'
                Stats={87}
                NewStats={3}
                UpStats={true}
              />
              <CardStatsBottom
                Title='Likes'
                SocialMedia='Facebook'
                Stats={52}
                NewStats={2}
                UpStats={false}
              />
              <CardStatsBottom
                Title='Likes'
                SocialMedia='Instagram'
                Stats={5462}
                NewStats={2257}
                UpStats={true}
              />
              <CardStatsBottom
                Title='Profile Views'
                SocialMedia='Instagram'
                Stats={52000}
                NewStats={1375}
                UpStats={true}
              />
              <CardStatsBottom
                Title='Retweets'
                SocialMedia='Twitter'
                Stats={117}
                NewStats={303}
                UpStats={true}
              />
              <CardStatsBottom
                Title='Likes'
                SocialMedia='Twitter'
                Stats={507}
                NewStats={553}
                UpStats={true}
              />
              <CardStatsBottom
                Title='Likes'
                SocialMedia='YouTube'
                Stats={107}
                NewStats={19}
                UpStats={false}
              />
              <CardStatsBottom
                Title='Total Views'
                SocialMedia='YouTube'
                Stats={1407}
                NewStats={12}
                UpStats={false}
              />
            </div>
          </div>
        
      </ContainerGridStats>
    </>
  );
}
