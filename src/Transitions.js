import React, { useState } from "react";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import Menu from "./Menu";

export default function Transitions(props) {
  const [mode, setMode] = useState("EDIT");


  
  return (
    <div>
      {mode === "EDIT" && <Menu onClick={() => setMode("SHOW")} />}
      {(mode === "SHOW") && (
        <>
          <CloseIcon onClick={() => setMode("EDIT")} />
        </>
      )}

    </div>
  );
}