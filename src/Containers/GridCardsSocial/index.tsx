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
              Followers={1044}
              NewFollowers={99}
              UpFollowers={true}
            />
            <CardSocialTop
              SocialMedia='Instagram'
              User='realnathanf'
              Followers={11000}
              NewFollowers={1099}
              UpFollowers={true}
            />
            <CardSocialTop
              SocialMedia='YouTube'
              User='Nathan F.'
              Followers={8239}
              NewFollowers={144}
              UpFollowers={false}
            />
          </div>
        </div>
      </ContainerGrid>
    </>
  );
}
