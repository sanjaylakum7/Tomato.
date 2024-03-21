import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu({category, setCategory}) {
  return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus odit repellat alias, voluptatum nostrum mollitia impedit iure doloribus obcaecati dolore quae adipisci fugit quisquam pariatur.</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index) => {
                    return(
                        // --> There i have a confusion when i click on image 
                        <div onClick={()=> setCategory(prev => prev === item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            {/* <p>{console.log(index)}</p> */}
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
                <hr />\
            </div>
        </div>
  )
}

export default ExploreMenu