import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SideBar from './Components/Sidebar';
import Pantry from './Pages/Pantry';
import Dashboard from './Pages/Dashboard';
import './App.css';
import Footer from "./Components/Footer/Footer";


function App() {

    const groceryItem = [
        {id: 1, item: 'apple', description: 'fruit', quantity: 0, weight: '2oz', price: 0.58, img: 'https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg'},
        {id: 2, item: 'broccoli', description: 'vegetable', quantity: 0, weight: '6oz', price: 3.50, img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg'},
        {id: 3, item: 'steak', description: 'meat', quantity: 0, weight: '1lb', price: 10.00, img: 'https://images.squarespace-cdn.com/content/v1/604fbd087a097d37ff497591/1627625364090-CXM4JV33S523ZG9DWDQQ/raw%2Btop%2Bsirloin.jpg'}
    ]

    const [pantryList, setPantryList] = useState<any[]>([])

    const handlePantry = (pantryData: any[]) => {
        setPantryList(pantryData)
    }
    console.log('app:', pantryList)

    return (
        <Router>
            <SideBar />
            <Routes>
                <Route path='/dashboard' element={<Dashboard pantryList={pantryList}/>}/>
                <Route path='/pantry' element={<Pantry pantryData={handlePantry} groceryItem={groceryItem} />}/>
            </Routes>
            <Footer /> {/* Include the Footer component here */}
        </Router>
    );
  
}

export default App;
