import { useState } from "react"

const useSearch = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        const {value} = e.target;
        setSearchValue(value)
    };

    const filterData = (data) => {
        return data.filter((item) => 
        item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    };

    return {
        searchValue,
        handleInputChange,
        filterData,
    };
}

export default useSearch;