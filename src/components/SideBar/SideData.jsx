import React from "react";

import { SideMenuBar } from "./SideMenuBar";
import Setting from "../../assets/setting.png";
import Security from "../../assets/security.png";
import Customers from "../../assets/cube.png";

import User from "../../assets/user.png";
import Wallet from "../../assets/wallet.png";
import Discount from "../../assets/discount.png";
import Help from "../../assets/question.png";

export const items = [
  { name: "Dashboard", img: Setting },
  { name: "Dashboard", img: Security, children: true },
  { name: "Products", img: Customers, children: true },

  { name: "Customers", img: User, children: true },

  { name: "Income", img: Wallet, children: true },

  { name: "Promate", img: Discount, children: true },
  { name: "Help", img: Help, children: true },
];

export function SideData() {
  return (
    <div>
      <SideMenuBar items={items} />
    </div>
  );
}

export default SideData;
