import React, { useEffect, useState } from "react";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import BackFlipCard from "../../Components/BackFlipCard";
import CardSocialTop, { CardProps } from "../../Components/CardSocial";
import SocialMedia from "../../Utils/Data/SocialMedia.json";
import StatsSelect from "../../Utils/StatsSelect";
import ContainerGrid from "./styles";

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

  useEffect(() => {
    window.localStorage.setItem("CardsSocial", JSON.stringify(cards));
    console.log(StatsSelect("Facebook"));
  }, [cards]);

  const itemRenderer = (item: GridSocial, index: number): JSX.Element => {
    let stats = StatsSelect(item.SocialMedia);

    return (
      <li className='item'>
        <input type='checkbox' id='flipActive' />
        <div className='flip-container'>
          <div className='flipper'>
            <div className='front'>
              <CardSocialTop
                SocialMedia={item.SocialMedia}
                User={item.User}
                Followers={item.Followers}
                NewFollowers={item.NewFollowers}
                UpFollowers={item.UpFollowers}
              />
            </div>
            <div className='back'>
              <BackFlipCard StatsList={stats} />
            </div>
          </div>
        </div>
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
            listItemStyle: "none",
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
