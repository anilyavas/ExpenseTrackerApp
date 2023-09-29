import axios, { Axios } from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://react-native-course-d593b-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}
