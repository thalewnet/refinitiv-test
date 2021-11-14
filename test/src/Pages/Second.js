import React, { useEffect, useState } from "react";
import axios from "axios";
function Second() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.publicapis.org/categories");
        setFetchList(res.data);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchData();
  }, []);

  const [fetchList, setFetchList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const filterSearch = fetchList.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <>
      <h1>Type your word in the box </h1>
      <input
        type="text"
        placeholder="Search....."
        value={searchText}
        onChange={handleSearchText}
      />
      {filterSearch.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
    </>
  );
}

export default Second;
