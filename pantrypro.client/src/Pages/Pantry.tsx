import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GroceryItems } from "../mock_data/mockData";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Fake Api Call with mock data
const fakeData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(GroceryItems);
  }, 1000);
});

const Pantry = () => {
  const navigate = useNavigate();
  const url = "http://localhost:5206/GroceryItem";
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [pantryItems, setPantryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios.get(url).then((json) =>{
      setPantryItems(json.data ?? []);
      setIsLoading(false);
    });
  }, []);
console.log(pantryItems);

  // useEffect(() => {
  //   fakeData.then((data) => {
  //     setPantryItems(data ?? []);
  //     setIsLoading(false);
  //   });
  // }, []);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchTerm("");
    }
  };

  const handleFilterListOnChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const incrementQuantity = (item) => {
    item.quantity += 1;

    const tempPantryItem = pantryItems.find(
      (pantryItem) => pantryItem.id === item.id
    );
    tempPantryItem.quantity = item.quantity;

    setPantryItems([...pantryItems]);
  };

  const decrementQuantity = (item) => {
    item.quantity -= 1;

    const tempPantryItem = pantryItems.find(
      (pantryItem) => pantryItem.id === item.id
    );
    tempPantryItem.quantity = item.quantity;

    if (item.quantity <= 0) {
      if (
        window.confirm(
          "Are you sure you want to delete this item? This action cannot be undone."
        )
      ) {
        const updatedItems = pantryItems.filter(
          (pantryItem) => pantryItem.id !== item.id
        );
        setPantryItems(updatedItems);
      } else {
        // If user cancels deletion, revert quantity back to 1
        item.quantity = 1;
        tempPantryItem.quantity = 1;
      }
    }

    setPantryItems([...pantryItems]);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="pantry-container">
      <h1 className="title">Pantry</h1>
      <div className="filter-search-add-container">
        <select
          className="dropdown-filter-items"
          onChange={handleFilterListOnChange}
        >
          <option value="">Filter</option>
          <option value="fruit">Fruits</option>
          <option value="vegetable">Vegetables</option>
          <option value="meat">Meats</option>
        </select>
        <input
          className="search-bar"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search"
        />
        <button
          type="button"
          onClick={() => {
            navigate("new");
          }}
        >
          New Item
        </button>
      </div>
      {pantryItems.length === 0 && <h2>No items in the pantry</h2>}

      <div className="item-list-container">
        {pantryItems
          .filter(
            (item) =>
              selectedCategory === "" || item.groceryItemType.description === selectedCategory
          )
          .filter((item) =>
            item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
          )
          .filter((item) => item.calories >= 0)
          .map((item) => (
            <div key={item.id} className="item-container">
              <IoCloseCircleOutline
                className="close-icon"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this item? This action cannot be undone."
                    )
                  ) {
                    const updatedItems = pantryItems.filter(
                      (pantryItem) => pantryItem.id !== item.id
                    );
                    setPantryItems(updatedItems);
                  }
                }}
              />
              <img src={item.imageUrl} alt={item.item} />
              <span>{item.name}</span>
              {/* <span>{item.fat}</span> */}
              <div className="modify-quantity-container">
                <button onClick={() => decrementQuantity(item)}>-</button>
                <span>{item.fat}</span>
                <button onClick={() => incrementQuantity(item)}>+</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pantry;
