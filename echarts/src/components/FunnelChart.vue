<template>
  <div id="myFunnelChart" ref="funnelChartContainer"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import * as echarts from "echarts";

export default {
  setup(props) {
    console.log(props.dataset);
    const funnelChartContainer = ref(null);

    const drawChart = (funnelChart) => {
      /** @type EChartsOption */
      const option = {
        tooltip: {
          show: false,
          trigger: "item",
        },
        legend: {
          show: false,
          icon: "circle",
          itemHeight: 20, // modify size of icon
          textStyle: {
            fontSize: 20,
          },
        },
        series: [
          {
            name: "郵件安全防護漏斗",
            type: "funnel",
            min: props.dataset.final,
            max: props.dataset.total,
            minSize:
              Math.floor(
                (props.dataset.final * 100) / props.dataset.total
              ).toString() + "%",
            maxSize: "100%",
            sort: "descending",
            gap: 20,
            label: {
              show: true,
              position: "inside",
              fontWeight: "bold",
              fontSize: 20,
              lineHeight: 30,
              color: "#fff",
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "inhert",
              borderWidth: 10,
              borderCap: "round",
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: [
              {
                value: props.dataset.total,
                name: "Cellopoint\n安全防護掃描",
                itemStyle: {
                  color: "#730FC3",
                  borderColor: "#730FC3",
                },
              },
              {
                value: props.dataset.total - props.dataset.filterByScan,
                name: "Cellopoint\n回報郵件防護",
                itemStyle: {
                  color: "#6558F5",
                  borderColor: "#6558F5",
                },
              },
            ],
          },
        ],
      };

      option && funnelChart.setOption(option);
    };

    onMounted(() => {
      let pieChart = echarts.init(funnelChartContainer.value);
      drawChart(pieChart);

      window.onresize = function () {
        pieChart.resize();
      };
    });

    onUnmounted(() => {
      window.onresize = null;
    });

    return { funnelChartContainer };
  },
  props: {
    dataset: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
#myFunnelChart {
  height: 500px;
  width: 500px;
}
</style>
