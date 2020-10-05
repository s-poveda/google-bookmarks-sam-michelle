import React from 'react';

export default function PrintType() {
    return(
        <div>
            <label for="PrintTypeFilter">
                filter by Print Type
            </label>
        <select id="PrintTypeFilter">
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>

        </select>
        </div>
    )

}
