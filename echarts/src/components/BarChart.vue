<template>
  <div id="myBarChart" ref="barChartContainer"></div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import * as echarts from "echarts";
import mailType from "./categories";

const generateDatasetSource = (dataset) => {
  // create dataset source for echart
  let source = [];
  source.push(Object.keys(dataset[0]));
  dataset.forEach((dailyData) => {
    source.push(Object.values(dailyData));
  });

  return source;
};

export default {
  setup(props) {
    const barChartContainer = ref(null);

    const drawChart = (barChart) => {
      const source = generateDatasetSource(props.dataset);
      console.log(source);

      /** @type EChartsOption */
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          textStyle: {
            align: "left",
          },
        },
        legend: {
          icon: "circle",
          itemHeight: 20, // modify size of icon
          textStyle: {
            fontSize: 20,
          },
          selector: [{ type: "all", title: "所有類別" }],
          selectorPosition: "start",
          selectorLabel: {
            fontSize: 16,
            lineHeight: 20,
          },
        },
        dataZoom: [
          {
            // let user to zoom in the chart
            type: "inside",
          },
          {
            // display slider under the chart
            type: "slider",
          },
        ],
        dataset: {
          source,
        },
        xAxis: {
          type: "time",
          axisLabel: {
            formatter: "{yyyy}/{MM}/{dd}",
          },
        },
        yAxis: {},
        series: mailType.map((value) => {
          return {
            type: "bar",
            name: value,
            stack: "total",
            encode: {
              x: "date",
              y: value,
            },
          };
        }),
      };
      option && barChart.setOption(option);
    };

    onMounted(() => {
      let barChart = echarts.init(barChartContainer.value);
      drawChart(barChart);
      window.onresize = function () {
        barChart.resize();
      };
    });

    onUnmounted(() => {
      window.onresize = null;
    });

    return {
      barChartContainer,
      drawChart,
    };
  },
  props: {
    dataset: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
#myBarChart {
  height: 500px;
}
</style>
