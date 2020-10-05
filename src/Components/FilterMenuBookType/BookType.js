import React from 'react'

export default function BookType(props) {
    return (
        <div>
            <label htmlFor="BooktypeFilter">
              Select Your Book Type
              </label>

            <select id="BooktypeFilter" name= "BooktypeFilter" onChange={(e) => props.onBookTypeFilterChange(e.currentTarget.value)}>
                <option value="">All</option>
                <option value="partial">Partial</option>
                <option value="full">Full</option>
                <option value="free-ebooks">Free ebooks</option>
                <option value="paid-ebooks">Paid ebooks</option>
                <option value="ebooks">Ebooks</option>
            </select>
        </div>
    )
}
