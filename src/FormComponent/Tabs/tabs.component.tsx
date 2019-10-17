import React from 'react'
import ITabModel from '../../Models/tab.model';
import TabComponent from './tab.component';

class TabsComponent extends React.Component<{data:ITabModel[], toggle:any}> {
    
    render () { 
        return (
            <div className="list_item_wrapper">
                <ul className="body_list_items_wrapper">
                    {this.props.data
                        .map((tab: ITabModel) => {
                            return <TabComponent data={tab} key={tab.id} 
                            action={(id:number)=>{this.props.toggle(id)}}/> 
                        })}
                </ul>
            </div>
        );
    }  
};

export default TabsComponent;