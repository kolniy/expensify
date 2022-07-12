const parseCostAsFloat = (cost) => parseFloat(cost.substring(1));

const filterExpensesByUserSelector = (expenses, filters) => {
  const { input, status, startcost, endcost } = filters;
  return expenses
    .filter((expense) => {
      const nameMatch = expense.name
        .toLowerCase()
        .includes(input.toLowerCase());
      const descriptionMatch = expense.description
        .toLowerCase()
        .includes(input.toLowerCase());
      const statusMatch = expense.status
        .toLowerCase()
        .includes(input.toLowerCase());

      const statusDropDownMatch = expense.status
        .toLowerCase()
        .includes(status.toLowerCase());

      const startEndCostMatch =
        parseCostAsFloat(expense.cost) > parseFloat(startcost) &&
        parseCostAsFloat(expense.cost) < parseFloat(endcost);

      return (
        (nameMatch || descriptionMatch || statusMatch) &&
        statusDropDownMatch &&
        startEndCostMatch
      );
    })
    .sort((a, b) => {
      return parseCostAsFloat(a.cost) - parseCostAsFloat(b.cost);
    });
};

export default filterExpensesByUserSelector;
