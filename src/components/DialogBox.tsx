"use client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { BsX } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../store/hooks";

import { timers } from "../store/Slice/timerSlice";

interface Props {
  open: boolean;
  setOpen: any;
  handleClose: any;
  handleClickOpen: any;
}

const DialogBox = ({ open, setOpen, handleClose, handleClickOpen }: Props) => {
  const [timerValue,setTimerValue]=useState(0)
  const timer = useAppSelector((state)=>state.timer.value)
  const dispatch = useAppDispatch();
  
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
            <div className=" flex justify-end mb-4">
          <button onClick={() => setOpen(false)} className=" text-2xl">
            <BsX />
          </button>
            </div>
          <div className="flex flex-row gap-4">
            <label className=" flex flex-col justify-center items-center">Set Timeout:</label>
            <input
              type="number"
              className="w-[250px] border-[1px] p-1 rounded-md"
              onChange={(e:any)=>setTimerValue(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions className="flex justify-center">
          <Button
            className="bg-[lightgreen] text-black "
            onClick={()=>{
              handleClose()
              dispatch(timers(timerValue))
            }}
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBox;
