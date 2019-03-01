import Vue from 'vue';

const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then((data) => {
            if (data) {
                const funds = data.funds;
                const stocks = data.stocks;
                const stockPortfolio = data.stockPortfolio;

                commit('setStocks', stocks);
                commit('setPortfolio', { funds, stockPortfolio });
            }
        });
};

export default {
    loadData,
};
