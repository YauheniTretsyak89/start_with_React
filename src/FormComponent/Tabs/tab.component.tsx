import React from 'react'
import ITabModel from '../../Models/tab.model';

interface TabModel {
    data:ITabModel,
    action:any
} 

function TabComponent(data:TabModel) {
    let classes:string[] = ["btn_common"];

    if(data.data.isActive){
        classes.push("active")
    }
    return (
        <li className="item_tab_wrapper">
            <button onClick={()=>{data.action(data.data.id)}} 
            className={classes.join(' ')}>{ data.data.value }</button>
        </li>
    )       
}

export default TabComponent;