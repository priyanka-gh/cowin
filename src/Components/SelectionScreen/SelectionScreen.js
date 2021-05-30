
import './SelectionScreen.css'
import { Link } from 'react-router-dom'
const SelectionScreen=()=> {

    return (
        <div className="selectionScreen">
            <div className="selectDistrict" >
                <Link to="/district">
                    <img src="images/District.png" alt="district"></img>
                    <h1>Search by District</h1>
                </Link>
            </div>
            <div className="selectPincode">
                <Link to="/pincode">
                    <img src="images/Pincode.png" alt="pincode"></img>
                    <h1>Search by Pincode</h1>
                </Link>
            </div>
        </div>
    )
}

export default SelectionScreen
