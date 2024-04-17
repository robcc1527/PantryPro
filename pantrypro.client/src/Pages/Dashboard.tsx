
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type PantryItem = {
  groceryItemType: object;
  id: number;
  name: string;
  calories: number;
  groceryItemTypeId: number;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const url = "http://localhost:5206/GroceryItem";

  const [pantryList, setPantryList] = useState<Array<PantryItem>>([]);

  useEffect(() => {
    axios.get(url).then((json) => setPantryList(json.data));
  }, []);
console.log(pantryList);
  const displayItems = () => {
    return pantryList.map((item) => {
      return (
        <div key={item.id} className="item-dashboard">
          <span>{item.name}</span>
          <span>{item.groceryItemType.description}</span>
          <span>{item.groceryItemTypeId}</span>
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className="title">Dashboard Page</h1>
      <div>
        <h2>Pantry List</h2>
        <button type="button" onClick={() => navigate("/pantry")}>
          Add Item
        </button>
      </div>
      <div className="item-dashboard-container">
        {pantryList.length == 0 ? (
          <Link to="/pantry">Add item from pantry</Link>
        ) : (
          displayItems()
        )}
      </div>
    </div>
  );
};

export default Dashboard;
