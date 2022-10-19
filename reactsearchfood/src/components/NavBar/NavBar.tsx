import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../../redux/states";
import { searchFoodByValue } from "../../services/food.service";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import Button from '@mui/material/Button';

export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
  const [targetValue, setTargetValue] = useState("");
  const dispatcher = useDispatch();
  const searchValue = async () => {
    const result = await searchFoodByValue(targetValue);
    dispatcher(addFood(result));
  };
  const handleChange = (event: any) => {
    setTargetValue(event.target.value);
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Search Food
          </Typography>
          <Search>
            <StyledInputBase
              onChange={handleChange}
              value={targetValue}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <Button size="small" onClick={searchValue}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Button>
          </Search>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
