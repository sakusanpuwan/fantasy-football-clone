import { useState } from "react"; // Import useState hook
import { Table, useAsyncList, useCollator } from "@nextui-org/react";
import playerData from "../PlayerData";

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
  ];

  const playersByPoints = playerData.sort((a,b) => b.total_points - a.total_points).slice(0, 20);


  return (
    <div>
      <h1>Players</h1>
      <Table
        aria-label="Example table with dynamic content"
        css={{ height: "auto", minWidth: "100%" }}

      >
        <Table.Header columns={columns}>
          {(column) => <Table.Column key={column.key} >{column.label}</Table.Column>}
        </Table.Header>
        <Table.Body
          items={playersByPoints}
        >
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
