import {
  SET_SECONDARY_FILTER_STATUS,
  SET_SECONDARY_FILTER_STATE,
  SET_SECONDARY_FILTER_ORDER,
  INCREMENT_DATA_VIEW_PAGE,
  APPLY_SECONDARY_FILTER,
  SET_EMPLOYEE_FILTER,
  SET_CUSTOMER_FILTER,
  APPLY_CURRENT_FILTER,
  CLEAR_CURRENT_FILTER,
} from './constants';

// setSecondaryFilterStatus :: String -> {Action}
export const setSecondaryFilterStatus = (status, issues) => ({
  type: SET_SECONDARY_FILTER_STATUS,
  status,
  issues,
});

// setSecondaryFilterState :: String -> {Action}
export const setSecondaryFilterState = (state, issues) => ({
  type: SET_SECONDARY_FILTER_STATE,
  state,
  issues,
});

// setSecondaryFilterOrder :: String -> {Action}
export const setSecondaryFilterOrder = (order, issues) => ({
  type: SET_SECONDARY_FILTER_ORDER,
  order,
  issues,
});

// incrementPage :: None -> {Action}
export const incrementPage = () => ({
  type: INCREMENT_DATA_VIEW_PAGE,
});

// applySecondaryFilter :: Array -> {Action}
export const applySecondaryFilter = (issues) => ({
  type: APPLY_SECONDARY_FILTER,
  issues,
});

export const setSecondaryFilter = (filter, type, issues) =>
  (dispatch) => {
    switch (type) {
      case 'status':
        dispatch(setSecondaryFilterStatus(filter, issues));
        break;
      case 'state':
        dispatch(setSecondaryFilterState(filter, issues));
        break;
      case 'order':
        dispatch(setSecondaryFilterOrder(filter, issues));
        break;
      default:
        break;
    }
    dispatch(
      applySecondaryFilter(issues)
    );
  };

// setEmployeeFilter :: String -> {Action}
export const setEmployeeFilter = (employee) => ({
  type: SET_EMPLOYEE_FILTER,
  employee,
});

// setCustomerFilter :: String -> {Action}
export const setCustomerFilter = (customer) => ({
  type: SET_CUSTOMER_FILTER,
  customer,
});

export const setCustomFilter = (type, filter) =>
  (dispatch) => {
    switch (type) {
      case 'employee':
        dispatch(
          setEmployeeFilter(filter)
        );
        break;
      case 'customer':
        dispatch(
          setCustomerFilter(filter)
        );
        break;
      default:
        break;
    }
  };

// applyCurrentFilter :: None -> {Action}
export const applyCurrentFilter = (issues) => ({
  type: APPLY_CURRENT_FILTER,
  issues,
});

// clearCurrentFilter :: None -> {Action}
export const clearCurrentFilter = () => ({
  type: CLEAR_CURRENT_FILTER,
});
