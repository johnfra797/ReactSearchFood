import { Grid, Paper, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { FoodCard } from "../../components";
import { Food } from "../../models/food.model";
import { AppStore } from "../../redux/store";
import Box from '@mui/material/Box';

export interface HomeInterface {}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Home: React.FC<HomeInterface> = () => {
  const foodsState = useSelector((store: AppStore) => store.food);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.5}>
          {Array.isArray(foodsState)
            ? foodsState.map((food: Food,index:number) => {
                return (
                  <Grid item xs={3} key={index}>
                    <Item>
                      <FoodCard food={food} ></FoodCard>
                    </Item>
                  </Grid>
                );
              })
            : null}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
