import { useState } from "react"


const Pantry = () => {

    const groceryItem = [
        {id: 1, item: 'apple', description: 'fruit', img: "https://static.manitobacooperator.ca/wp-content/uploads/2018/11/apple_GettyImages186843005_cmyk.jpg"},
        {id: 2, item: 'broccoli', description: 'vegetable', img:'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg'},
        {id: 3, item: 'chicken', description: 'meats', img: 'https://primecuts.co.ke/cdn/shop/products/shutterstock_583587001_1200x.jpg?v=1592990144'}
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

    

    const displayItems = itemsOnHand.map(item => (
            <div key={item.id} className="item-container">
                <img src={item.img} alt={item.item} />
                <div className="item-details">
                    <span>Item: {item.item}</span>
                    <span>Descripton: {item.description}</span> 
                </div>
                <div>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
            </div>
    ))

    return (
        <div>
            <h1>Pantry</h1>
            <select onChange={handleSelectItemOnChange}>
                <option value=''>Select an option</option>
                {groceryItem.map(item => (
                    <option 
                        key={item.id} 
                        value={item.id}
                    >{item.item}</option>
                ))}
            </select>
            <button onClick={handleAddItem}>+</button>
            <h2>List of Items</h2>
            <div className="item-list-container">
                {displayItems}
            </div>
        </div>
    )
}

export default Pantry