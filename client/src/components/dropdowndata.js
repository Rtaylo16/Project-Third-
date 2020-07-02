import React, { Component } from 'react'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';



const options = [
    { value: 'albuquerque', label: 'Albuquerque, NM, United States' },
    { value: 'anchorage', label: 'Anchorage, AK, United States' },
    { value: 'asheville', label: 'Asheville, NC, United States' },
    { value: 'atlanta', label: 'Atlanta, GA, United States' },
    { value: 'austin', label: 'Austin, TX, United States' },
    { value: 'baltimore', label: 'Baltimore, MD, United States' },
    { value: 'boston', label: 'Boston, MA, United States' },
    { value: 'boulder', label: 'Boulder, CO, United States' },
    { value: 'buffalo', label: 'Buffalo, NY, United States' },
    { value: 'charleston', label: 'Charleston, SC, United States' },
    { value: 'chattanooga', label: 'Chattanooga, TN, United States' },
    { value: 'charlotte', label: 'Charlotte, NC, United States' },
    { value: 'chicago', label: 'Chicago, IL, United States' },
    { value: 'cincinnati', label: 'Cincinnati, OH, United States' },
    { value: 'cleveland', label: 'Cleveland, OH, United States' },
    { value: 'colorado-springs', label: 'Colorado Springs, CO, United States' },
    { value: 'columbus', label: 'Columbus, OH, United States' },
    { value: 'dallas', label: 'Dallas, TX, United States' },
    { value: 'denver', label: 'Denver, CO, United States' },
    { value: 'des-moines', label: 'Des Moines, IA, United States' },
    { value: 'detroit', label: 'Detroit, MI, United States' },
    { value: 'houston', label: 'Houston, TX, United States' },
    { value: 'indianapolis', label: 'Indianapolis, IN, United States' },
    { value: 'jacksonville', label: 'Jacksonville, FL, United States' },
    { value: 'kansas-city', label: 'Kansas City, MO, United States' },
    { value: 'las-vegas', label: 'Las Vegas, NV, United States' },
    { value: 'los-angeles', label: 'Los Angeles, CA, United States' },
    { value: 'louisville', label: 'Louisville, KY, United States' },
    { value: 'miami', label: 'Miami, FL, United States' },
    { value: 'milwaukee', label: 'Milwaukee, WI, United States' },
    { value: 'nashville', label: 'Nashville, TN, United States' },
    { value: 'new-orleans', label: 'New Orleans, LA, United States' },
    { value: 'new-york', label: 'New York, NY, United States' },
    { value: 'oklahoma-city', label: 'Oklahoma City, OK, United States' },
    { value: 'orlando', label: 'Orlando, FL, United States' },
    { value: 'philadelphia', label: 'Philadelphia, PA, United States' },
    { value: 'phoenix', label: 'Phoenix, AZ, United States' },
    { value: 'pittsburgh', label: 'Pittsburgh, PA, United States' },
    { value: 'portland', label: 'Portland, OR, United States' },
    { value: 'raleigh', label: 'Raleigh, NC, United State' },
    { value: 'rochester', label: 'Rochester, NY, United States' },
    { value: 'salt-lake-city', label: 'Salt Lake City, UT, United States' },
    { value: 'san-antonio', label: 'San Antonio, TX, United States' },
    { value: 'san-diego', label: 'San Diego, CA, United States' },
    { value: 'san-francisco-bay-area', label: 'San Francisco, CA, United States' },
    { value: 'st-louis', label: 'Saint Louis, MO, United States' },
    { value: 'seattle', label: 'Seattle, WA, United States' },
    { value: 'washington-dc', label: 'Washington, DC, United States' },

];

class Dropdowns extends Component{
    constructor(props) {
        super(props)
        this.state = {
            selected: ("")
        }
        this._onSelect = this._onSelect.bind(this)
    }

    _onSelect(option) {
        console.log('You selected ', option.label)
        this.setState({ selected: option })
    }
 render () {
    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
    const Value = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.value
    // console.log(Value);
    return (
        <div>
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            You've selected
            <strong> {placeHolderValue} </strong>
        </div>

    );
 }
}

export default Dropdowns;


