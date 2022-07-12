import React, { useState, useEffect } from "react";
import FiltersComponent from "./FiltersComponent";
import ExpensesContainer from "./expenses/ExpensesContainer";

const ControlsContainer = () => {
  const [listFilters, setListFilters] = useState({
    input: "",
    status: "",
    startcost: "",
    endcost: "",
  });

  useEffect(() => {
    console.log(listFilters);
  }, [listFilters]);

  return (
    <>
      <div className="controls-container">
        <FiltersComponent
          listFilters={listFilters}
          setListFilters={setListFilters}
        />
        <ExpensesContainer />
      </div>
    </>
  );
};

export default ControlsContainer;
