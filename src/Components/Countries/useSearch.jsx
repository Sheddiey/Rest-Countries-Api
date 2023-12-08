import { useState } from "react"

const useSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleInputChange = (e) => {
        const {value} = e.target;
        setSearchValue(value)
    };

    const handleRegionChange = (e) => {
        const { value } = e.target;
        setSelectedRegion(value)
    }

    const filterData = (data) => {
        return data.filter((item) => 
        item.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedRegion === '' || item.region === selectedRegion)
        );
    };

    return {
        searchValue,
        handleInputChange,
        filterData,
        handleRegionChange,
        selectedRegion,
    };
}

export default useSearch;