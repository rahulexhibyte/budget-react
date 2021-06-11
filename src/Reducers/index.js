import actions from "../Actions";

const initState = {
  transactions: [],
  totalIncome: 0,
  totalExpense: 0,
  totalBalance: 0,
};

const calculateBudgets = (transactions) => {
  const totalIncome = Object.values(transactions).reduce(
    (total, trans) => (trans.isExpense ? total : total + trans.value),
    0
  );
  const totalExpense = Object.values(transactions).reduce(
    (total, trans) => (trans.isExpense ? total - trans.value : total),
    0
  );
  const totalBalance = Object.values(transactions).reduce(
    (total, trans) =>
      trans.isExpense ? total - trans.value : total + trans.value,
    0
  );
  return {
    totalIncome,
    totalExpense,
    totalBalance,
  };
};

const reducers = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case actions.addTransactions:
      const transactions = [...state.transactions, action.transaction];
      const { totalIncome, totalExpense, totalBalance } =
        calculateBudgets(transactions);
      return {
        ...state,
        transactions,
        totalIncome,
        totalExpense,
        totalBalance,
      };
    case actions.deleteTransactions:
      const filteredTransactions = state.transactions.filter(
        (_, index) => index !== action.itemIndex
      );
      const {
        totalIncome: dtotalIncome,
        totalExpense: dtotalExpense,
        totalBalance: dtotalBalance,
      } = calculateBudgets(filteredTransactions);
      return {
        ...state,
        transactions: filteredTransactions,
        totalIncome: dtotalIncome,
        totalExpense: dtotalExpense,
        totalBalance: dtotalBalance,
      };
    default:
      return state;
  }
};
export default reducers;
