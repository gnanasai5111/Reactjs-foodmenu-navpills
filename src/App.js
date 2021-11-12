import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories=['all',  ...new Set(items.map((item)=>item.category))];

console.log(allCategories);
function App() {
  const [categories]=useState(allCategories);
 
  const [menuitems,setMenuitems]=useState(items);
const filterItems=(category,a)=>{
  if(category==='all'){
    setMenuitems(items);
    return ;
  }
  var newItems=items.filter((item)=> item.category===category);
  console.log(a);

  setMenuitems(newItems);
}
  
  return <main>
    <section className="menu section">
      <div className="title">
      <h2>Menu</h2>
      <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuitems}/>
    </section>
  </main>;
}

export default App;
