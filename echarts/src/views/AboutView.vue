<template>
  <div class="about">
    <!-- <h1>This is about page</h1> -->
    <BarChart :dataset="dataset" />
  </div>
</template>

<script>
import BarChart from "../components/BarChart";
import dayjs from "dayjs";
import mailType from "../components/categories";

export default {
  setup() {
    // create dataset
    const dataset = [],
      startDate = dayjs("2021-01-01"),
      // endDate = dayjs("2021-01-10");
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

    return { dataset };
  },
  components: {
    BarChart,
  },
};
</script>

<style></style>
