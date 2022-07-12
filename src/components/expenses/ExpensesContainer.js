import React from "react";
import { Container } from "reactstrap";

import ExpenseListItem from "./ExpenseListItem";

const parseDateAsStandardDate = (randomTime) => {
  return randomTime.split("-").reverse().join("-");
};

const ExpensesContainer = ({ groupedExpense }) => {
  return (
    <Container>
      <div className="background-container pt-4 pb-4  mb-2">
        {groupedExpense === undefined ? (
          <p className="text-center">No Record Found</p>
        ) : (
          <>
            {groupedExpense
              ?.sort((a, b) => {
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
