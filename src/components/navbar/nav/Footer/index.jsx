import React from "react";
import styles from "./style.module.scss";


import ShinyButton from "../../../utils/ShinyButton";
import { WhatsApp } from "@mui/icons-material";

export default function index() {
  return (
    <div className={styles.footer}>
      <ShinyButton text={"WhatsApp"} onClick={() => console.log("Whatsapp")}/>
      <ShinyButton text={"E-Mail"} onClick={() => console.log("Emial")}/>
    </div>
  );
}
