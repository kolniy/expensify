import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import FiltersComponent from "./FiltersComponent";
import ExpensesContainer from "./expenses/ExpensesContainer";

import filterExpensesByUserSelector from "../filterExpensesByUserSelector";

const GET_EXPENSES = gql`
  query {
    allExpenses {
      id
      createdAt
      name
      description
      cost
      status
    }
  }
`;

const ControlsContainer = () => {
  const [listFilters, setListFilters] = useState({
    /// used to create a filter, updated by the inputs form controls
    input: "",
    status: "",
    startcost: "100",
    endcost: "1000",
  });

  const { loading, error, data } = useQuery(GET_EXPENSES);
  const [groupedExpense, setGroupedExpense] = useState();

  useEffect(() => {
    if (data) {
      const objMap = {};
      // apply filter function here
      filterExpensesByUserSelector(data.allExpenses, listFilters).forEach(
        (expense) => {
          let key = expense.createdAt;
          if (!objMap[key]) {
            // group dataset by createdAt timestamp
            objMap[key] = [];
          }
          objMap[key].push(expense);
        }
      );
      setGroupedExpense(Object.entries(objMap)); // converts the object of arrays to array of arrays
    }
  }, [data, listFilters]);

  if (error)
    return (
      <p
        style={{
          margin: "20px",
        }}
        className="text-center"
      >
        {error.message}
      </p>
    );
  if (loading)
    return (
      <p
        style={{
          margin: "20px",
        }}
        className="text-center"
      >
        loading...
      </p>
    );

  return (
    <>
      <div className="controls-container">
        <FiltersComponent
          listFilters={listFilters}
          setListFilters={setListFilters}
        />
        <ExpensesContainer groupedExpense={groupedExpense} />
      </div>
    </>
  );
};

export default ControlsContainer;
