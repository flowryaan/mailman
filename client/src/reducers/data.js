import { SET_DOMAINS } from "../actions/domains";
import { SET_ACCOUNTS } from "../actions/accounts";
import { SET_ALIASES } from "../actions/aliases";
import { SET_TLS_POLICIES } from "../actions/tlsPolicies";

import { DATA_LOADING_START, DATA_LOADING_END } from "../actions/data";

import { LOGOUT } from "../actions/authentication";

const initialState = {
  domains: [],
  accounts: [],
  aliases: [],
  tlspolicies: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DOMAINS:
      return {
        ...state,
        domains: action.domains
      };
    case SET_ACCOUNTS:
      return {
        ...state,
        accounts: action.accounts
      };
    case SET_ALIASES:
      return {
        ...state,
        aliases: action.aliases
      };
    case SET_TLS_POLICIES:
      return {
        ...state,
        tlspolicies: action.tlspolicies
      };
    case LOGOUT:
      return {
        ...initialState
      };
    case DATA_LOADING_START:
      return {
        ...state,
        loading: true
      };
    case DATA_LOADING_END:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
