import React, { useState } from "react";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Typography } from "@material-ui/core";

export default function EditButton(props) {
  const [mode, setMode] = useState("EDIT");

  const onDelete = () => {
  };

  
  return (
    <div>
      {mode === "EDIT" && <CreateTwoToneIcon onClick={() => setMode("SHOW")} />}
      {(mode === "SHOW" || mode === "TEXT" || mode === "SEARCH") && (
        <>
          <TextFieldsIcon onClick={() => setMode("TEXT")} />
          <SearchIcon onClick={() => setMode("SEARCH")} />
          <DeleteIcon onClick={() => setMode("VERIFYDELETING")} />
          <CloseIcon onClick={() => setMode("EDIT")} />
        </>
      )}

      {mode === "VERIFYDELETING" && (
        <div class="component-delete">
          <Typography>
            Delete this box?
            <Button onClick={() => setMode("EDIT")}>No</Button>
            <Button onClick={() => onDelete()}>Yes</Button>
          </Typography>
        </div>
      )}
    </div>
  );
}
