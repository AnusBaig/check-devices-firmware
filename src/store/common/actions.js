import {userPortfolio} from '../../dummy'

export function initializeData ({commit}) {
  commit('initData',userPortfolio);
};

