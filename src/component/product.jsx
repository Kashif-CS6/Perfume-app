import { BiSearch } from "react-icons/bi";
import data from "../dumy/data.js";
import Card from "./card.jsx";
import { FaSortUp } from "react-icons/fa";
import Catagorycheckbox from "./checkboxes/catagorycheckbox.jsx";
import DeliveryTimeRadio from "./checkboxes/deliverytimeradio.jsx";
import { useState, useEffect } from "react";
import Pricing from "./checkboxes/pricing.jsx";
import ReactPaginate from "react-paginate";

const Products = ({ purchases, setPurchases }) => {
  const [selectedCatagory, setSelectedCatagory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [rangeValue, setRangeValue] = useState(8000);
  const [searchData, setSearchData] = useState(data);
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState("");
  const [check, setCheck] = useState(false);
  const [searchvalue, setSearchvalue] = useState("");

  // react pagination
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearchValue = (e) => {
    setSearchvalue(e.target.value);
  };

  const handleSearch = () => {
    if (searchvalue == "") {
      setCheck(false);
    }
    alert(searchvalue);
    const SearchRecord = data.filter((item) => {
      return (
        // Course, case-insensitive match
        item.brand.toLowerCase().includes(searchvalue.toLowerCase()) ||
        // Catagory ,case-insensitive
        item.catagory
          .toLocaleLowerCase()
          .includes(searchvalue.toLocaleLowerCase()) ||
        //sub catagory
        item.productName
          .toLocaleLowerCase()
          .includes(searchvalue.toLocaleLowerCase())
      );
    });

    // Update filteredResults state with the search results
    setSearchData(SearchRecord);
    // Set check to true to indicate that search results should be displayed
    setCheck(true);
    if (searchvalue) {
      setCheck(false);
    }
  };
  // meny yahan se hatie hai bracket

  //Catagory onhanlde change
  const handleCatagoryChange = (e) => {
    // handlecheck(false);
    // const catagory = e.target.value;
    // console.log(catagory);
    // if (e.target.checked) {
    //   setSelectedCatagory([...selectedCatagory, catagory]);
    // } else {
    //   setSelectedCatagory(selectedCatagory.filter((r) => r !== catagory));
    // }
  };

  // handle search data
  // const handleSearchdata = (e) => {
  //   console.log(e);
  //   setSearchData(e);
  //   console.log(searchData);
  // };

  const handlecheck = (e) => {
    setCheck(e);
  };

  useEffect(() => {
    handlecheck(true);
  }, [searchData]);

  const calculateRange = (e) => {
    handlecheck(false);
    setRangeValue(e);
  };

  //delivary time onhanlde
  const handleDeliveryTimeChange = (e) => {
    // handlecheck(false);
    // const deliveryTime = e.target.value;
    // setSelectedDeliveryTime(deliveryTime);
  };

  const filteredResults = data.filter((item) => {
    const MatchBrand =
      selectedBrand.brand === 0 || selectedBrand.includes(item.brand);
    const MatchGender =
      selectedGender.length === 0 || selectedGender.includes(item.usedFor);
    const Matchcatagory =
      selectedCatagory.length === 0 || selectedCatagory.includes(item.category);
    const deliveryTimeMatch =
      selectedDeliveryTime === "" || item.deliveryTime === selectedDeliveryTime;

    const RangeMatch = setRangeValue === 0 || item.price <= rangeValue;
    return (
      MatchBrand &&
      MatchGender &&
      Matchcatagory &&
      deliveryTimeMatch &&
      RangeMatch
    );
  });

  const pageSize = 9;
  const pageCount = Math.ceil(filteredResults.length / pageSize);

  const offset = currentPage * pageSize;
  const currentPageData = filteredResults.slice(offset, offset + pageSize);

  // Pagination for searchData
  const searchPageSize = 9;
  const searchPageCount = Math.ceil(searchData.length / searchPageSize);

  const searchOffset = currentPage * searchPageSize;
  const currentSearchPageData = searchData.slice(
    searchOffset,
    searchOffset + searchPageSize
  );

  return (
    <div>
      {/* search product option */}
      <div className="w-80 md:w-6/12  mx-auto border border-orange-400 rounded-2xl flex my-8 ">
        <input
          type="text"
          className="px-3 flex-1 rounded-2xl outline-none py-[6px]"
          name=""
          id=""
          value={searchvalue}
          onChange={handleSearchValue}
          placeholder="Search with Brand Name, Fragrance Name, Catagory"
        />
        <button
          className="bg-black px-4 rounded-r-2xl cursor-pointer "
          onClick={handleSearch}
        >
          <BiSearch size={15} color="white" />
        </button>
      </div>

      {/* every card display started here */}
      <div className="w-10/12 mx-auto my-4 flex flex-wrap lg:flex-nowrap justify-center md:justify-between gap-8">
        <div className="left-filter w-96 px-4  ">
          {/* delivery time */}
          <div className="flex items-center justify-between">
            {/* top section */}
            <h1 className="text-sm font-[600]">Delivary Time</h1>
            <FaSortUp />
          </div>
          {Array.from(new Set(data.map((item) => item.deliveryTime))).map(
            (time) => (
              <DeliveryTimeRadio
                deliveryTime={time}
                // checked={selectedDeliveryTime === time}
                // onChange={handleDeliveryTimeChange}
              />
            )
          )}

          {/* bughet filter */}
          <div className="py-4 ">
            <div className="flex justify-between items-center">
              {/* top section */}
              <h1 className="text-sm font-[600]">Bugget</h1>
              <FaSortUp />
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xs">Min Price</p>
                <p className="border py-[6px] px-2 rounded-md w-20 text-xs font-[600]">
                  $100
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs">Max Price</p>
                <p className="border py-[6px] px-2 rounded-md w-20 text-xs font-[600]">
                  $8000
                </p>
              </div>
            </div>
            <div>
              <Pricing setrange={calculateRange} rangeValue={rangeValue} />
            </div>
          </div>
          {/* Filter by Catagory */}
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-[600]">Catagory</h1>
              <FaSortUp />
            </div>
            {/* options */}
            {Array.from(new Set(data.map((item) => item.category))).map(
              (catagory) => (
                <Catagorycheckbox
                  key={catagory}
                  catagory={catagory}
                  // checked={selectedCatagory.includes(catagory)}
                  // onChange={handleCatagoryChange}
                />
              )
            )}
          </div>
        </div>

        {/* ended here */}
        {/* pagination part */}
        <div className="cards">
          <div className="flex items-start">
            <p className="text-xs">
              {check ? searchData.length : filteredResults.length} service
              available
            </p>

            {/* sort drop down */}
            {/* <div className="text-xs">
            <label htmlFor="sort">Best Sort </label>
            <select
              className="bg-transparent outline-none "
              id="sort"
              onChange={(e) => {
                const selectedValue = e.target.value;
                if (selectedValue === "date") {
                  sortByDate();
                } else if (selectedValue === "budget") {
                  sortByBudget();
                }
              }}
            >
              <option value="date">Date</option>
              <option value="budget">Budget</option>
            </select>
          </div> */}
          </div>

          {/* ---pagination started */}
          <div className="flex items-center flex-wrap justify-center md:justify-between gap-4 my-4">
            {check ? (
              currentSearchPageData.length === 0 ? (
                <div className="flex items-center justify-center my-2 font-bold text-red-400">
                  {" "}
                  <h1 className="text-center">No items found</h1>{" "}
                </div>
              ) : (
                currentSearchPageData.map((item, index) => (
                  <Card
                    key={index}
                    brand={item.brand}
                    name={item.productName}
                    price={item.price}
                    id={item.id}
                    setPurchases={setPurchases}
                  />

                ))
              )
            ) : currentPageData.length === 0 ? (
              <div className="flex items-center justify-center my-2 font-bold text-red-400">
                {" "}
                <h1 className="text-center">No items found</h1>{" "}
              </div>
            ) : (
              currentPageData.map((item, index) => (
                <Card
                  key={index}
                  brand={item.brand}
                  name={item.productName}
                  price={item.price}
                  id={item.id}
                  setPurchases={setPurchases}
                />
              ))
            )}
          </div>
          {/* Pagination */}
          <ReactPaginate
            previousLabel={"<"}
            previousClassName={`${
              currentPageData.length == 0 || currentSearchPageData.length == 0
                ? `hidden`
                : `block`
            } border h-8 w-8 rounded-full flex items-center justify-center`}
            nextLabel={">"}
            nextClassName={`${
              currentPageData.length == 0 || currentSearchPageData.length == 0
                ? `hidden`
                : `block`
            } border h-8 w-8 rounded-full flex items-center justify-center border-black`}
            breakLabel={"..."}
            breakClassName={"break-me "}
            pageCount={check ? searchPageCount : pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={
              "pagination flex items-center justify-center gap-4 text-xs"
            }
            activeClassName={
              "active h-8 flex items-center justify-center w-8 bg-blue-400 rounded-full"
            }
          />
          {/* pagination ended */}
        </div>
      </div>

      {/* overall ended here */}
    </div>
  );
};

export default Products;
