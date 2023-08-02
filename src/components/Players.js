import { useState } from "react"; // Import useState hook
import { Table, useAsyncList, useCollator } from "@nextui-org/react";
import playerData from "../data/PlayerData";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import PlayerCard from "./PlayerCard";

const Players = () => {


  const columns = [
    {
      key: "web_name",
      label: "NAME",
    },
    {
      key: "total_points",
      label: "POINTS",
    },
    {
      key: "goals_scored",
      label: "GOALS",
    },
    {
      key: "assists",
      label: "ASSISTS",
    },
    {
      key: "clean_sheets",
      label: "CLEAN SHEETS",
    }
  ];

  const playersByPoints = playerData.sort((a,b) => b.total_points - a.total_points).slice(0, 20);


  return (
    <div className="players-container">
      <h1>Players</h1>
      <div classname="carousel-container" >
        <Carousel className="carousel">
          {playersByPoints.slice(0,5).map((player) => {
            return (
              <PlayerCard player={player}></PlayerCard>
            )
          })}
        </Carousel>
      </div>

      <Table isStriped removeWrapper css={{ height: "auto"}}>
        <Table.Header columns={columns}>
          {(column) => <Table.Column key={column.key} >{column.label}</Table.Column>}
        </Table.Header>
        <Table.Body items={playersByPoints}>
          {(item) => (
            <Table.Row key={item.name}>
              {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Players;
