
import { useState } from "react"


const Pantry = ({groceryItem, pantryData}) => {

    const [itemsOnHand, setItemsOnHand] = useState<Array<any>>([])
    const [selectedItem, setSelectedItem] = useState({})
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    
    const handleSelectItemOnChange = (e) => {
        const selectedOptionId = parseInt(e.target.value)
        const selectedOption = groceryItem.filter(option => option.id === selectedOptionId)
        const selectedObj = selectedOption[0]
        setSelectedItem(selectedObj)
    }

    const handleFilterListOnChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    const filterList = itemsOnHand.filter(item => item.description == selectedCategory)

    const handleAddItem = () => {
        setItemsOnHand((prevState) => [...prevState, selectedItem]);
        pantryData(itemsOnHand)
    }

    const incrementQuantity = (id, quantity) => {
        setItemsOnHand(itemsOnHand.map(item => {
            if(item.id == id) {
                return {...item, quantity: item.quantity + 1}
            } 
            return item
        }))
        pantryData(itemsOnHand)
    }

    const decrementQuantity = (id, quantity) => {
        setItemsOnHand(itemsOnHand.map(item => {
            if(item.id == id && item.quantity > 0) {
                return {...item, quantity: item.quantity - 1}
            } 
            return item
        }))
        pantryData(itemsOnHand)
    }

    const displayItems = itemsOnHand.map(item => (
            <div key={item.id} className="item-container">
                <img src={item.img} alt={item.item} />
                <span>{item.item}</span>
                <span>{item.description}</span>
                <div className="modify-quantity-container">
                    <button onClick={() => decrementQuantity(item.id, item.quantity)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id, item.quantity)}>+</button>
                </div>
                {/* <div className="edit-button-container">
                    <button>edit</button>
                    <button>Delete</button>
                </div> */}
            </div>
    ))

    const displayFilteredList = filterList.map(item => (
        <div key={item.id} className="item-container">
            <img src={item.img} alt={item.item} />
            <span>{item.item}</span>
            <span>{item.description}</span>
            <div className="modify-quantity-container">
                <button onClick={() => decrementQuantity(item.id, item.quantity)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id, item.quantity)}>+</button>
            </div>
            {/* <div className="edit-button-container">
                <button>edit</button>
                <button>Delete</button>
            </div> */}
        </div>
))

    return (
        <div className="pantry-container">
            <h1 className="title">Pantry</h1>
            <div className="filter-search-add-container">
                <select className="dropdown-filter-items" onChange={handleFilterListOnChange}>
                    <option value=''>Filter</option>
                            <option value='fruit'>Fruits</option>
                            <option value='vegetable'>Vegetables</option>
                            <option value='meat'>Meats</option>
                </select>
                <select className="item-dropdown-list" onChange={handleSelectItemOnChange}>
                    <option value=''>Select an option</option>
                        {groceryItem.map(item => (
                            <option 
                                key={item.id} 
                                value={item.id}
                            >{item.item}</option>
                        ))}
                </select>
                <button onClick={handleAddItem}>Add</button>
            </div>
            
            <h2>{itemsOnHand.length === 0 ? 'No items on pantry' : 'List of Items'}</h2>
            {/* <div className="title-list">
                <h3>Item</h3>
                <h3>Item Type</h3>
                <h3>Quantity</h3>
            </div> */}
            <div className="item-list-container">
                {selectedCategory ? displayFilteredList : displayItems}
            </div>
            
        </div>
    )
}

export default Pantry