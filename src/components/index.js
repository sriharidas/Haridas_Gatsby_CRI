import React from "react";
/** @jsx jsx*/
import {Styled ,jsx} from 'theme-ui'
import logo from "../images/logo.png";
import '../gatsby-plugin-theme-ui/index'
const header = {
    width: "100%",
    height: "120px"
}
const headerImg = {
    display: 'block',
    width: "auto",
    height: "120px",
    margin: 'auto'
}
const Head = () => (
    <div class="header" sx={header}>
            <img src={logo} sx={headerImg}/>
        </div>

)

export default Head