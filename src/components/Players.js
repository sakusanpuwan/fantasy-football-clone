import { useState } from "react"; // Import useState hook
import { Table, useAsyncList, useCollator } from "@nextui-org/react";
import playerData from "../PlayerData";

const Players = () => {
  const collator = useCollator({ numeric: true });

  async function tableSort({ items, sortDescriptor }) {
    return {
      items: items.slice().sort((a, b) => {
        let first = a[sortDescriptor.column];
        let second = b[sortDescriptor.column];
        let cmp = collator.compare(first, second);
        if (sortDescriptor.direction === "descending") {
          cmp *= -1;
        }
        return cmp;
      }),
    };
  }

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

  const initialPlayersByPoints = playerData.sort((a,b) => b.total_points - a.total_points).slice(0, 20);
  const [playersByPoints, setPlayersByPoints] = useState(initialPlayersByPoints);
  const [sortDescriptor, setSortDescriptor] = useState({ column: "total_points", direction: "descending" });


  const handleSortChange = async () => {
    const newDirection = sortDescriptor.direction === "descending" ? "ascending" : "descending";
    setSortDescriptor({ ...sortDescriptor, direction: newDirection });

    const { items } = await tableSort({ items: playersByPoints, sortDescriptor: { ...sortDescriptor, direction: newDirection } });
    setPlayersByPoints(items);
  };

  return (
    <div>
      <h1>Players</h1>
      <Table
        aria-label="Example table with dynamic content"
        css={{ height: "auto", minWidth: "100%" }}
        // Use the handleSortChange function as the custom onSortChange handler
        onSortChange={handleSortChange}
      >
        <Table.Header columns={columns}>
          {(column) => <Table.Column key={column.key} allowsSorting>{column.label}</Table.Column>}
        </Table.Header>
        <Table.Body
          items={playersByPoints}
          loadingState={useAsyncList.INITIAL_LOADING}
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
