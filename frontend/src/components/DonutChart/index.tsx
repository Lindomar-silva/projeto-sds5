import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/request';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const dados = response.data as SaleSum[];
                const myLabels = dados.map(x => x.sellerName);
                const mySeries = dados.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySeries });
                // console.log(chartData);
            });
    }, []);

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
