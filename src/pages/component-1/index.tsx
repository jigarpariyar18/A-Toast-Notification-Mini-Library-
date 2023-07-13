"use client";
import { DialogBox } from "@/components";
import {Snackbar} from "@mui/material";
import React, { useState } from "react";
import { BsGearFill, BsX } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";

import { useAppSelector, useAppDispatch } from "../../store/hooks";

import { increment } from "../../store/Slice/counterSlice"

const Firstcomponent = () => {
  const [open, setOpen] = useState(false);
  const [snackbar1Open, setSnackbar1Open] = useState(false);
  const [snackbar2Open, setSnackbar2Open] = useState(false);
  const [snackbar3Open, setSnackbar3Open] = useState(false);
  const count = useAppSelector((state) => state.counter.value);
  const timer = useAppSelector((state)=>state.timer.value)
  const dispatch = useAppDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClosesnackbar = () => {
    setSnackbar1Open(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClosesnackbar}
      >
        <BsX />
      </IconButton>
    </React.Fragment>
  );
  return (
    <main className="flex  h-[85vh] flex-col  justify-between p-12">
      <div className="flex flex-row justify-start gap-5">
        <button
          onClick={() => {
            if(!snackbar1Open){
                setSnackbar1Open(true);
            }
            if(snackbar1Open){
                setSnackbar2Open(true)
            }
            if(snackbar2Open){
                setSnackbar3Open(true)
            }
            dispatch(increment())
          }}
          className=" bg-[#959ff8] w-[200px] h-[40px] rounded-lg text-white"
        >
          Show Toast Message
        </button>
        <button
          onClick={() => setOpen(true)}
          className=" h-[40px] w-[40px] bg-[#eceaea] flex justify-center items-center rounded-md"
        >
          <BsGearFill />
        </button>
      </div>
      <Snackbar
        open={snackbar1Open}
        autoHideDuration={timer}
        action={action}
        onClose={handleClosesnackbar}
        message={`Testing : ${count}`}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      />
      <Snackbar
        open={snackbar2Open}
        autoHideDuration={timer}
        action={action}
        onClose={()=>setSnackbar2Open(false)}
        message={`Testing : ${count}`}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        className="mb-[3%]"
      />
      <Snackbar
        open={snackbar3Open}
        autoHideDuration={timer}
        action={action}
        onClose={()=>setSnackbar3Open(false)}
        message={`Testing : ${count}`}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        className="mb-[6%]"
      />
      <DialogBox
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />
    </main>
  );
};

export default Firstcomponent;
