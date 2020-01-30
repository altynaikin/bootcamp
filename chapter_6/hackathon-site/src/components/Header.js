import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import MenuIcon from "@material-ui/icons/Menu";
// import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./Header.css"

const Header = () => {
  return (
    <AppBar
      position="fixed"
      style={{
        background: "#fff",
        padding: " 20px 0px"
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_left header_logo_title">Садик.kg
            <div className="logo-img"></div>
          </div>
          <div className="font_left header_logo_caption">Детские сады г.Бишкек</div>
        </div>
        <List component="nav" style={{display: "flex",
      color: "#347fa9", fontSize: "20px"}}>
        <ListItem button onClick={() => console.log("Home")}>
          Главная
        </ListItem>

        <ListItem button onClick={() => console.log("Info")}>
          Полезная информация
        </ListItem>

        <ListItem button onClick={() => console.log("FeedBack")}>
          Обратная связь
        </ListItem>
      </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;