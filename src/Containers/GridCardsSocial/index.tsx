import React from "react";
import CardSocialTop from "../../Components/CardSocial";
import ContainerGrid from "./styles";

export default function GridCardsSocial() {
  return (
    <>
      <ContainerGrid>
        +
        <div className='container'>
          <div className='cards'>
            <CardSocialTop
              SocialMedia='Facebook'
              User='nathanf'
              Followers={1982}
              NewFollowers={12}
              UpFollowers={true}
            />
            <CardSocialTop
              SocialMedia='Twitter'
              User='nathanf'
              Followers={1982}
              NewFollowers={12}
              UpFollowers={true}
            />
            <CardSocialTop
              SocialMedia='Instagram'
              User='nathanf'
              Followers={1982}
              NewFollowers={12}
              UpFollowers={true}
            />
            <CardSocialTop
              SocialMedia='YouTube'
              User='nathanf'
              Followers={1982}
              NewFollowers={12}
              UpFollowers={true}
            />
          </div>
        </div>
      </ContainerGrid>
    </>
  );
}
