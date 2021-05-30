import axios from '../../util/axios'
import React, { useState,useRef } from 'react'
import DataRow from '../DataRow/DataRow'
import './District.css'
const District = () => {

    const[data,setData]=useState([])

    const districtIdRef=useRef(null)
    const dateRef=useRef(null)

    const onSearch=(e)=>{
        e.preventDefault();
        const districtId=districtIdRef.current.value;
        const date=convertDate(dateRef.current.value)

        const fetchData=async()=>{
            const result=await axios.get(`/findByDistrict?district_id=${districtId}&date=${date}`)
            setData(result.data.sessions)
        }
        fetchData();
    }

    const convertDate=(date)=>{
        const split=date.split('-')
        const convertedDate=split[2]+"-"+split[1]+"-"+split[0];
        return convertedDate;
    }
    return (
        <div>
            <div className="district">
                    <form>
                        <div className="header_container">
                            <div className="left">
                                <input ref={districtIdRef} type="text" placeholder="Enter Distric ID"/>
                                <input ref={dateRef} type="date" placeholder="Select Date"/>
                            </div>
                            <div className="right">
                                <button type='submit' onClick={onSearch}>SEARCH</button>
                            </div>
                        </div>
                    </form>
                <div className={`district_body ${data.length===0? 'empty': ''}`}>
                    {data.length===0?(
                        <>
                        <img src="images/Search.png" alt="search"></img>
                        <h2>Nothing here yet...Start Searching</h2>
                        </>
                    ):(
                        <>
                        {data.map((slot)=>(
                            <DataRow slot={slot}/>
                        ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default District
