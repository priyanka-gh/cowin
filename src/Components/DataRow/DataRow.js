import React from 'react'
import './DataRow.css'
const DataRow = (slot) => {
    const {name,vaccine,min_age_limit,available_capacity_dose1,available_capacity_dose2,date}=slot.slot
    return (
        <div className="dataRow">
            <div className="colName">
                <div className="address">Name</div>
                <div className="vaccine">Vaccine</div>
                <div className="dose1">Dose 1</div>
                <div className="dose2">Dose 2</div>
                <div className="age">Age</div>
                <div className="time">Date</div>
            </div>
            <div className="content">
                <div className="address">{name}</div>
                <div className="vaccine">{vaccine}</div>
                <div className="dose1">{available_capacity_dose1}</div>
                <div className="dose2">{available_capacity_dose2}</div>
                <div className="age">{min_age_limit}</div>
                <div className="time">{date}</div>
            </div>
        </div>
    )
}

export default DataRow
