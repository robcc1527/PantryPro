import { useState } from "react"
import Card from "../Components/Card"

const Pantry = () => {

    const groceryItem = [
        {id: 1, item: 'apple', description: 'fruit' },
        {id: 2, item: 'broccoli', description: 'vegetable' },
        {id: 3, item: 'chicken', description: 'meats' },

    ]

    const [itemsOnHand, setItemsOnHand] = useState({})

    const handleSelectItemOnChange = (e) => {
        console.log(e.target.value)
        
        const filterItem = groceryItem.filter(item => {
                return item.id == e.target.value
        })

        setItemsOnHand(prevState => {
            return {
                ...prevState, filterItem
            }
        })
        console.log(filterItem)
    }

    // const displayItems = itemsOnHand.map(item => (
    //         <div>
    //             <span>{item.item}</span>
    //         </div>
    // ))

    return (
        <div>
            <h1>Pantry</h1>
            <select onChange={handleSelectItemOnChange}>
                {groceryItem.map(item => (
                    <option 
                        key={item.id} 
                        value={item.id}
                    >{item.item}</option>
                ))}
            </select>
            <button>+</button>

        </div>
    )
}

export default Pantry