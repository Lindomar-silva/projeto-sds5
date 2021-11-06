import axios from 'axios';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/request';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    // FORMA ERRADA
    let chartData: ChartData = { labels: [], series: [] };

    // FORMA ERRADA
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const dados = response.data as SaleSum[];
            const myLabels = dados.map(x => x.sellerName);
            const mySeries = dados.map(x => x.sum);

            chartData = { labels: myLabels, series: mySeries };
            console.log(chartData);
        });

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            // pega tudo que esta dentro de ..options e inclui mais objetos com xaxis:
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart
