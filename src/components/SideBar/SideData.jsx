import React from "react";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import ViewInArTwoToneIcon from "@mui/icons-material/ViewInArTwoTone";
import FormatAlignJustifyTwoToneIcon from "@mui/icons-material/FormatAlignJustifyTwoTone";
import TableViewTwoToneIcon from "@mui/icons-material/TableViewTwoTone";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";

import { SideMenuBar } from "./SideMenuBar";
import Setting from "../../assets/setting.png";
import Security from "../../assets/security.png";
import Customers from "../../assets/cube.png";

import User from "../../assets/user.png";
import Wallet from "../../assets/wallet.png";
import Discount from "../../assets/discount.png";
import Help from "../../assets/question.png";

// function onClick(e, item) {
//   window.alert(JSON.stringify(item, null, 2));
// }
// console.log("onClick",onClick);

export const items = [
  { name: "Dashboard", img: Setting },
  { name: "Dashboard", img: Security, children: true },
  { name: "Products", img: Customers, children: true },

  { name: "Customers", img: User, children: true },

  { name: "Income", img: Wallet, children: true },

  { name: "Promate", img: Discount, children: true },
  { name: "Help", img: Help, children: true },
  // { name: "Dashboard", img: "/logo192.png" },
];

export function SideData() {
  return (
    <div>
      <SideMenuBar items={items} />
    </div>
  );
}

export default SideData;
