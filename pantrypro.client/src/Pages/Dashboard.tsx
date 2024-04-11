import { Link } from "react-router-dom"

const Dashboard = ({pantryList}) => {

    const displayItems = pantryList.map(item => (
        <div key={item.id} className="item-dashboard">
            <span>{item.item}</span>
            <span>{item.description}</span>
            <span>{item.quantity}</span>
        </div>
    ))

    console.log('pantr list: ', pantryList)

    return (
        <div>
            <h1 className="title">Dashboard Page</h1>
            <div>
                <h2>Pantry List</h2>
                <div className="title-list-dashboard">
                    <h3>Item</h3>
                    <h3>Item Type</h3>
                    <h3>Quantity</h3>
                </div>
            </div>
            <div className="item-dashboard-container">
                {pantryList.length == 0 ? <Link to='/pantry'>Add item from pantry</Link> : displayItems}
                
            </div>
        </div>
    )
}

export default Dashboard