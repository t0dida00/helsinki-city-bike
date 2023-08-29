import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../contextAPI';

const Filter = () => {
    const navigate = useNavigate();
    const { updateFilter } = useContext(AppContext);

    const [selectedOption, setSelectedOption] = useState('');


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
        const [field, order] = event.target.value.split("-");
        updateFilter({ field, order });
        navigate(`/trips?sort=${event.target.value}`);
        // You can perform any other filtering logic here based on the selected option
    };

    return (
        <div className='mt-2'>
            <label htmlFor="filter-dropdown">Sort by:</label>
            <select id="filter-dropdown" value={selectedOption} onChange={handleOptionChange} className="px-1 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-96">
                <option value="departure-asc">Default</option>
                <option value="distance-asc">Covered distance (km) Ascending</option>
                <option value="distance-desc">Covered distance (km) Descending</option>
                <option value="duration-asc">Duration (m) Ascending</option>
                <option value="duration-desc">Duration (m) Descending</option>
            </select>
        </div>
    );
};

export default Filter;