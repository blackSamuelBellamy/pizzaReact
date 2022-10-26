import { States } from './hooks/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Planilla from './components/Planilla';
import CarShop from './views/CarShop';
import PizzaCanvas from './views/PizzaCanvas'
import Pizza from './views/Pizza';
import Home from './views/Home';
import './css/App.css'


const App = () => {

  return (
    <div className="container">
      <States>
       <BrowserRouter>
       <Routes>
        <Route path='/' element = {<Planilla />}>
          <Route index element = {<Home />} />
          <Route path='/Home' element= {<Home />} />
          <Route path='/PizzaCanvas' element= {<PizzaCanvas />} />
          <Route path='/PizzaCanvas/:pizza' element= {<Pizza />} />
          <Route path='/CarShop' element= {<CarShop />} />
        </Route>
       </Routes>
       </BrowserRouter>
      </States>
    </div>
  )
}

export default App;
