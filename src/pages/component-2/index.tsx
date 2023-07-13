'use client'
import { DialogBox } from '@/components';
import React, { useState } from 'react'
import { BsGearFill,BsX} from "react-icons/bs";
import { increment } from "../../store/Slice/counterSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {Snackbar} from "@mui/material";
import IconButton from "@mui/material/IconButton";
const SecondComponent = () => {
  const [open, setOpen] = useState(false);
  const [customName ,setCustomName]=useState('Testing')
  const [snackbarOpen, setSnackbarOpen] = useState(false);
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
    setSnackbarOpen(false);
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
    <section className="flex  h-[85vh] flex-col justify-between p-12">
   <div className='flex flex-row justify-start gap-5'> 
   <div className='flex flex-col gap-4'>
     <label>Enter Custom Toast Text</label>
     <input type="text" placeholder='Enter Here' className='w-[300px] border-[1px] p-2 rounded-md'
     onChange={(e)=>setCustomName(e.target.value)}
     />
     <button className=' bg-[#959ff8] w-[300px] h-[40px] rounded-lg text-white'
     onClick={() => {
      setSnackbarOpen(true);
      dispatch(increment())
    }}
     >Show Toast Message</button>
   </div>
     <button  onClick={()=>setOpen(true)} className=' h-[40px] w-[40px] bg-[#eceaea] flex justify-center items-center rounded-md'><BsGearFill/></button>
    </div>
    <Snackbar
        open={snackbarOpen}
        autoHideDuration={timer}
        action={action}
        onClose={handleClosesnackbar}
        message={`${customName} : ${count}`}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      />
    <DialogBox open={open} setOpen={setOpen} handleClose={handleClose} handleClickOpen={handleClickOpen}/>
  </section>
  )
}

export default SecondComponent