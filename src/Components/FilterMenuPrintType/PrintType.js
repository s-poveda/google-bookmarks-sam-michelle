import React from 'react';

export default function PrintType(props) {
    return(
        <div>
            <label htmlFor="PrintTypeFilter">
                filter by Print Type
            </label>
        <select id="PrintTypeFilter" onChange={(e) => props.onPrintTypeFilterChange(e.currentTarget.value)}>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>

        </select>
        </div>
    )
}
