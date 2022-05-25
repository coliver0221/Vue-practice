<template>
  <div class="about">
    <!-- <h1>This is about page</h1> -->
    <BarChart :dataset="dataset" :timeRange="timeRange" />
  </div>
</template>

<script>
import BarChart from "../components/BarChart";
import dayjs from "dayjs";
import mailType from "../components/categories";

const generateDailyData = () => {
  const dataset = [],
    startDate = dayjs("2021-01-01T00:00:00"),
    endDate = dayjs("2021-01-01T23:59:59");

  let currDate = startDate;
  while (!currDate.isAfter(endDate)) {
    let dailyData = {};
    mailType.forEach((value) => {
      dailyData[value] = Math.floor(Math.random() * 100);
    });
    dataset.push({
      ...dailyData,
      date: currDate.toISOString(),
    });

    currDate = currDate.add(1, "hour");
  }

  return dataset;
};

const generateYearlyData = () => {
  const dataset = [],
    startDate = dayjs("2021-01-01"),
    endDate = dayjs("2021-12-31");

  let currDate = startDate;
  while (!currDate.isAfter(endDate)) {
    let dailyData = {};
    mailType.forEach((value) => {
      dailyData[value] = Math.floor(Math.random() * 100);
    });
    dataset.push({
      ...dailyData,
      date: currDate.toISOString(),
    });

    currDate = currDate.add(1, "days");
  }

  return dataset;
};

export default {
  setup() {
    // generate dataset
    // daily
    // const dataset = generateDailyData();
    // const timeRange = "daliy";
    // yearly
    const dataset = generateYearlyData();
    const timeRange = "yearly";

    return { dataset, timeRange };
  },
  components: {
    BarChart,
  },
};
</script>

<style></style>
