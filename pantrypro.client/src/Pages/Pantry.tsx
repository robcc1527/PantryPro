import { useState } from "react"


const Pantry = () => {

    const groceryItem = [
        {id: 1, item: 'apple', description: 'fruit', quantity: 0},
        {id: 2, item: 'broccoli', description: 'vegetable', quantity: 0},
        {id: 3, item: 'chicken', description: 'meats', quantity: 0}
    ]

    const [itemsOnHand, setItemsOnHand] = useState<Array<any>>([])
    const [selectedItem, setSelectedItem] = useState({})

    
    const handleSelectItemOnChange = (e) => {
        console.log(e.target.value)
        const selectedOptionId = parseInt(e.target.value)
        const selectedOption = groceryItem.filter(option => option.id === selectedOptionId)
        const selectedObj = selectedOption[0]
        setSelectedItem(selectedObj)
        console.log(selectedOption)
    }

    const handleAddItem = () => {
        setItemsOnHand((prevState) => [...prevState, selectedItem]);
        console.log('ItemsOnHand:',itemsOnHand)
    }

    const incrementQuantity = (id, quantity) => {
        setItemsOnHand(itemsOnHand.map(item => {
            if(item.id == id) {
                return {...item, quantity: item.quantity + 1}
            } 
            return item
        }))
    }

    const decrementQuantity = (id, quantity) => {
        setItemsOnHand(itemsOnHand.map(item => {
            if(item.id == id && item.quantity > 0) {
                return {...item, quantity: item.quantity - 1}
            } 
            return item
        }))
    }

    const displayItems = itemsOnHand.map(item => (
            <div key={item.id} className="item-container">
                <span>{item.item}</span>
                <span>{item.description}</span>
                <div className="modify-quantity-container">
                    <button onClick={() => decrementQuantity(item.id, item.quantity)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id, item.quantity)}>+</button>
                </div>
                <div className="edit-button-container">
                    <button>edit</button>
                    <button>Delete</button>
                </div>
            </div>
    ))

    return (
        <div className="pantry-container">
            <h1>Pantry</h1>
            <div className="filter-search-add-container">
                <button>Filter</button>
                <select className="item-dropdown-list" onChange={handleSelectItemOnChange}>
                    <option value=''>Select an option</option>
                        {groceryItem.map(item => (
                            <option 
                                key={item.id} 
                                value={item.id}
                            >{item.item}</option>
                        ))}
                </select>
                <button onClick={handleAddItem}>+</button>
            </div>
            
            <h2>List of Items</h2>
            <div className="title-list">
                <h3>Item</h3>
                <h3>Item Type</h3>
                <h3>Quantity</h3>
            </div>
            <div>
                {displayItems}
            </div>
        </div>
    )
}

export default Pantry