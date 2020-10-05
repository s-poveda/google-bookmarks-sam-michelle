import React from 'React'

export default function BookType() {
    return (
        <div>
            <label for="BooktypeFilter">
              Select Your Book Type
              </label>

            <select id="BooktypeFilter" name= "BooktypeFilter">
                <option value="">None</option>
                <option value="partial">Partial</option>
                <option value="full">Full</option>
                <option value="free-ebooks">Free ebooks</option>
                <option value="paid-ebooks">Paid ebooks</option>
                <option value="ebooks">Ebooks</option>
            </select>
        </div>
    )
}