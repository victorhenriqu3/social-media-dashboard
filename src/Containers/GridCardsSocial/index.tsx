import React, { useState } from "react";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import CardSocialTop, { CardProps } from "../../Components/CardSocial";
import ContainerGrid from "./styles";
import SocialMedia from "../../Utils/Data/SocialMedia.json";

export default function GridCardsSocial() {
  type GridSocial = CardProps & { id: number };
  const [cards, setCards] = useState<GridSocial[]>(() => {
    try {
      const item = window.localStorage.getItem("CardsSocial");
      return item ? JSON.parse(item) : SocialMedia.SocialMedia;
    } catch (error) {
      console.log(error);
      return SocialMedia.SocialMedia;
    }
  });

  const itemRenderer = (item: GridSocial, index: number): JSX.Element => {
    return (
      <li className='item'>
        <CardSocialTop
          SocialMedia={item.SocialMedia}
          User={item.User}
          Followers={item.Followers}
          NewFollowers={item.NewFollowers}
          UpFollowers={item.UpFollowers}
        />
      </li>
    );
  };

  const handleChange = (reorderedItems: Array<GridSocial>) => {
    setCards(reorderedItems);
  };
  return (
    <>
      <ContainerGrid>
        <RLDD
          inlineStyle={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1.5fr))",
          }}
          cssClasses='cards'
          items={cards}
          itemRenderer={itemRenderer}
          onChange={handleChange}
        />
      </ContainerGrid>
    </>
  );
}
