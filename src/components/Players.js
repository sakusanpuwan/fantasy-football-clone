import { useState } from "react"; // Import useState hook
import { Table, useAsyncList, useCollator } from "@nextui-org/react";
import playerData from "../data/PlayerData";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import PlayerCard from "./PlayerCard";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './Players.css'


const Players = () => {


  const columns = [
    {
      field: 'code',
      headerName: 'Image',
      width: 100,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      renderCell: (player) => <img src={`https://resources.premierleague.com/premierleague/photos/players/250x250/p${player.value}.png`} height={75}/>, // renderCell will render the component
    },
    { 
      field: 'second_name', 
      headerName: 'Name',
      width: 100,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center'
    },
    {
      field: 'total_points',
      headerName: 'Points',
      type: 'number',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 100,
    },
    {
      field: 'goals_scored',
      headerName: 'Goals',
      type: 'number',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 100

    },
    {
      field: 'assists',
      headerName: 'Assists',
      type: 'number',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 100

    },
    {
      field: 'clean_sheets',
      headerName: 'Clean Sheets',
      type: 'number',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 100

    },
    

  ];
  

  const playersByPoints = playerData.sort((a,b) => b.total_points - a.total_points).slice(0, 200);


  return (
    <div className="players-container">
      <div classname="carousel-container" >
        <Carousel className="carousel">
          {playersByPoints.slice(0,10).map((player) => {
            return (
              <PlayerCard player={player}></PlayerCard>
            )
          })}
        </Carousel>
      </div>

      <div className="table-container" style={{width: '50%',margin:'auto' }}>
        <DataGrid
          className="table"
          rows={playersByPoints}
          getRowHeight={() => 'auto'}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          density="standard"
        />
      </div>


    </div>
  );
};

export default Players;
