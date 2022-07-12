import React from "react";

const ExpenseListItem = ({ expense }) => {
  return (
    <>
      <div className="expense-list-item">
        <div className="expense-list-item__date">
          <p>{expense[0]}</p>
        </div>
        {expense[1].length === 0 ? (
          <p className="text-center">No Valid Record On This Date</p>
        ) : (
          <>
            {expense[1].map((item) => {
              return (
                <div key={item.id} className="expense-list-item__details">
                  <div className="item-name__cost-info">
                    <p className="item-name">{item.name}</p>{" "}
                    <p className="item-cost">{item.cost}</p>
                  </div>
                  <div className="item-description">{item.description}</div>
                  {item.status === "pending" ? (
                    <div className="expense-status-info-bad">{item.status}</div>
                  ) : (
                    <div className="expense-status-info-good">
                      {item.status}
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default ExpenseListItem;
