import React ,{useState}from "react";


const Filters = () =>{
    const [activeFilter, setActiveFilter] = useState(null)

    const toggleFilter = (filterName) => {
        setActiveFilter(activeFilter === filterName ? null : filterName);
    };

    return(
        <div className="filter-container">
                    <div className="filter-header">
                        <span>Filter</span>
                        <button className="clear-btn">CLEAR ALL</button>
                    </div>

                    <div className="filter-item" onClick={() => toggleFilter('type')}>
                        <div className="filter-title">
                            <span>Type of Plants</span>
                            <span className="toggle-icon">{activeFilter === 'type' ? '-' : '+'}</span>
                        </div>
                        {activeFilter === 'type' && <div className="filter-content">Content for Type of Plants</div>}
                    </div>

                    <div className="filter-item" onClick={() => toggleFilter('price')}>
                        <div className="filter-title">
                            <span>Price</span>
                            <span className="toggle-icon">{activeFilter === 'price' ? '-' : '+'}</span>
                        </div>
                        {activeFilter === 'price' && <div className="filter-content">Content for Price</div>}
                    </div>

                    <div className="filter-item" onClick={() => toggleFilter('nursery')}>
                        <div className="filter-title">
                            <span>Nursery</span>
                            <span className="toggle-icon">{activeFilter === 'nursery' ? '-' : '+'}</span>
                        </div>
                        {activeFilter === 'nursery' && <div className="filter-content">Content for Nursery</div>}
                    </div>

                    <div className="filter-item" onClick={() => toggleFilter('ideaPlantLocation')}>
                        <div className="filter-title">
                            <span>IdeaPlant and Location</span>
                            <span className="toggle-icon">{activeFilter === 'ideaPlantLocation' ? '-' : '+'}</span>
                        </div>
                        {activeFilter === 'ideaPlantLocation' && <div className="filter-content">Content for IdeaPlant and Location</div>}
                    </div>

                    <div className="filter-item" onClick={() => toggleFilter('indoorOutdoor')}>
                        <div className="filter-title">
                            <span>Indoor/Outdoor</span>
                            <span className="toggle-icon">{activeFilter === 'indoorOutdoor' ? '-' : '+'}</span>
                        </div>
                        {activeFilter === 'indoorOutdoor' && <div className="filter-content">Content for Indoor/Outdoor</div>}
                    </div>

                    <div className="filter-item" onClick={() => toggleFilter('maintenance')}>
                        <div className="filter-title">
                            <span>Maintenance</span>
                            <span className="toggle-icon">{activeFilter === 'maintenance' ? '-' : '+'}</span>
                        </div>
                        {activeFilter === 'maintenance' && <div className="filter-content">Content for Maintenance</div>}
                    </div>

                    <div className="filter-item" onClick={() => toggleFilter('plantSize')}>
                        <div className="filter-title">
                            <span>Plant Size</span>
                            <span className="toggle-icon">{activeFilter === 'plantSize' ? '-' : '+'}</span>
                        </div>
                        {activeFilter === 'plantSize' && <div className="filter-content">Content for Plant Size</div>}
                    </div>

                    <div className="filter-item" onClick={() => toggleFilter('waterSchedule')}>
                        <div className="filter-title">
                            <span>Water Schedule</span>
                            <span className="toggle-icon">{activeFilter === 'waterSchedule' ? '-' : '+'}</span>
                        </div>
                        {activeFilter === 'waterSchedule' && <div className="filter-content">Content for Water Schedule</div>}
                    </div>

                    <div className="filter-item" onClick={() => toggleFilter('color')}>
                        <div className="filter-title">
                            <span>Color</span>
                            <span className="toggle-icon">{activeFilter === 'color' ? '-' : '+'}</span>
                        </div>
                        {activeFilter === 'color' && <div className="filter-content">Content for Color</div>}
                    </div>

                    <div className="filter-item" onClick={() => toggleFilter('seasonal')}>
                        <div className="filter-title">
                            <span>Seasonal</span>
                            <span className="toggle-icon">{activeFilter === 'seasonal' ? '-' : '+'}</span>
                        </div>
                        {activeFilter === 'seasonal' && <div className="filter-content">Content for Seasonal</div>}
                    </div>

                    <div className="filter-item" onClick={() => toggleFilter('lightEfficient')}>
                        <div className="filter-title">
                            <span>Light Efficient</span>
                            <span className="toggle-icon">{activeFilter === 'lightEfficient' ? '-' : '+'}</span>
                        </div>
                        {activeFilter === 'lightEfficient' && <div className="filter-content">Content for Light Efficient</div>}
                    </div>



                </div>
    )
}

export default Filters