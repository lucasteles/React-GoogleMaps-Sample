import React from 'react'
import _ from 'lodash'
import SortableList from './SortableList'
import {arrayMove} from 'react-sortable-hoc'

export default class AddressList extends React.Component
{
    constructor()
    {
        super()
        this.state = {items : []}
    }

    addLocation = (e) => {
        e.preventDefault()
        const locations = this.state.items
        const newLocation = {...this.props.location}

        if ( newLocation.address==="" || _.some(locations, newLocation))
            return;

        locations.push(newLocation)
        this.setState({items: locations})

        console.log(this.props.location)
    }

    removeLocation = (item) => {
        const items = this.state.items
        _.remove(items, item)
        this.setState({items})
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
        items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };

    render() {
        return (
            <div>
                <div className="form-group">
                    <button className="btn btn-success" onClick={this.addLocation}>Add</button>
                </div>
                <div className="form-group">
                    <SortableList items={this.state.items} onSortEnd={this.onSortEnd} onRemove={this.removeLocation} helperClass="SortableHelper" useDragHandle={true} />
                </div>  
            </div>
        )
    }
}
