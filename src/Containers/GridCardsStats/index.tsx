import React, { useEffect, useState } from "react";
import CardStatsBottom, { StatsProps } from "../../Components/CardStats";
import ContainerGridStats from "./styles";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import StatsSocial from "../../Utils/Data/SocialStats.json";

export type GridsStats = StatsProps & { id: number };
export default function GridCardsStats() {
  const [stats, setStats] = useState<GridsStats[]>(() => {
    try {
      const item = window.localStorage.getItem("CardStats");
      return item ? JSON.parse(item) : StatsSocial.Stats;
    } catch (e) {
      console.error(e);
      return StatsSocial.Stats;
    }
  });
  useEffect(() => {
    window.localStorage.setItem("CardStats", JSON.stringify(stats));
  }, [stats]);

  const handleChange = (reorderedItems: Array<GridsStats>) => {
    setStats(reorderedItems);
  };

  const itemRenderer = (item: GridsStats, index: number): JSX.Element => {
    return (
      <li className='item'>
        <CardStatsBottom
          Title={item.Title}
          SocialMedia={item.SocialMedia}
          Stats={item.Stats}
          NewStats={item.NewStats}
          UpStats={item.UpStats}
        />
      </li>
    );
  };
  return (
    <>
      <ContainerGridStats>
        <h2 className='Overview'>Overview - Today</h2>
        <RLDD
          inlineStyle={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1.5fr))",
          }}
          cssClasses='cards'
          items={stats}
          itemRenderer={itemRenderer}
          onChange={handleChange}
        />
      </ContainerGridStats>
    </>
  );
}
