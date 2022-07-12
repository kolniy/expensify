import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { useQuery, gql } from "@apollo/client";

import ExpenseListItem from "./ExpenseListItem";

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

const parseDateAsStandardDate = (randomTime) => {
  return randomTime.split("-").reverse().join("-");
};

const ExpensesContainer = () => {
  const { loading, error, data } = useQuery(GET_EXPENSES);
  const [groupedExpense, setGroupedExpense] = useState();

  useEffect(() => {
    if (data) {
      const objMap = {};
      data.allExpenses.forEach((expense) => {
        let key = expense.createdAt;
        if (!objMap[key]) {
          objMap[key] = [];
        }
        objMap[key].push(expense);
      });
      setGroupedExpense(Object.entries(objMap));
    }
  }, [data]);

  if (error) return error;
  if (loading) return loading;

  return (
    <Container>
      <div className="background-container pt-4 pb-4  mb-2">
        {groupedExpense === undefined ? (
          <p className="text-center">No Record Found</p>
        ) : (
          <>
            {groupedExpense
              .sort((a, b) => {
                const dateA = parseDateAsStandardDate(a[0]);
                const dateB = parseDateAsStandardDate(b[0]);

                const timeStampA = new Date(dateA).getTime();
                const timeStampB = new Date(dateB).getTime();
                return timeStampA - timeStampB;
              })
              .map((expense) => (
                <ExpenseListItem key={expense} expense={expense} />
              ))}
          </>
        )}
      </div>
    </Container>
  );
};

export default ExpensesContainer;
