'use client';
import {Snackbar} from "@mui/material";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { BsX } from "react-icons/bs";
import { increment } from "../../store/Slice/counterSlice";
import { timers } from "../../store/Slice/timerSlice";
import { FetchData } from "@/components";
const ThirdComponent = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [timerValue,setTimerValue]=useState(0)
  const count = useAppSelector((state) => state.counter.value);
  const timer = useAppSelector((state)=>state.timer.value);
  const [seconds, setSeconds ] =  useState(0);
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState<any>([])
  const [fetchStatus,setFetchStatus]=useState(false)
  
  const dispatch = useAppDispatch();
  useEffect(()=>{
    setSeconds(timer/1000)
  },[timer])
  useEffect(()=>{
    const myinterval=setInterval(()=>{
      if (seconds > 0) {
        setSeconds(seconds - 1);
    }
    if (seconds === 0) {
      clearInterval(myinterval)
    }
    if(seconds ===1 && fetchStatus){
      fetchData()
      setLoading(true)
    }
    },1000)
    return ()=> {
      clearInterval(myinterval);
    };
  })
  const fetchData = async() =>{
    try {
       await fetch('https://api.knowmee.co/api/v1/master/get-country-list')
      .then((res) => res.json())
      .then((data) => {
        setData(data.responseData)
        setLoading(false)
      })
    } catch (error) {
      
    }
  }
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
  console.log(data.length)
  return (
    <section className="flex  h-[85vh] flex-col justify-between p-12">
    {data.length ===0 && <>
      <div className='flex flex-row justify-start gap-5'> 
    <div className='flex flex-col gap-4'>
      <label>Enter Countdown Time</label>
      <input type="number" placeholder='Enter Here' className='w-[300px] border-[1px] p-2 rounded-md'
        onChange={(e:any)=>setTimerValue(e.target.value)}
      />
      <button className=' bg-[#959ff8] w-[300px] h-[40px] rounded-lg text-white'
      onClick={() => {
        setSnackbarOpen(true);
        dispatch(timers(timerValue))
        setSeconds(timer/1000)
        setFetchStatus(true)
      }}
      >Start timer</button>
    </div>
     </div>
    </>}
    {data.length === 0 && loading && <><h3>Data is fetching Please wait !!!</h3></>}
    {data.length>0 && <FetchData data={data}/> }
     <Snackbar
        open={snackbarOpen}
        autoHideDuration={timer}
        action={action}
        onClose={handleClosesnackbar}
        message={`${seconds} : ${count}`}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      />
   </section>
  )
}

export default ThirdComponent