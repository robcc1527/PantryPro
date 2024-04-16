import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"



const Dashboard = () => {
    const url = "http://localhost:5206/GroceryItem";
  
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get(url).then(json => setData(json.data))
    }, [])
    console.log(data);
  
const renderTable = () => {
    return data.map(item => {
        return(
        <div key={item.id} className="item-dashboard">
            <span>{item.name}</span>
            <span>{item.calories}</span>
            <span>{item.groceryItemTypeId}</span>
        </div>
        )
    })}

    return (
        <div>
            <h1 className="title">Dashboard Page</h1>
            <div>
                <h2>Pantry List</h2>
                <div className="title-list-dashboard">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>{renderTable()}</tbody>
                    <h3>Name</h3>
                    <h3>Calories</h3>
                    <h3>Quantity</h3>
                </div>
            </div>
            <div className="item-dashboard-container">
                {/* {pantryList.length == 0 ? <Link to='/pantry'>Add item from pantry</Link> : displayItems} */}
                
            </div>
        </div>
    )
}

export default Dashboard