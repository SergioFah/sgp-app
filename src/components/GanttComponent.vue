<template>
  <g-gantt-chart
    chart-start="2025-01-01 00:00"
    chart-end="2025-01-31 23:59"
    precision="day"
    bar-start="myBeginDate"
    bar-end="myEndDate"
    grid="true"
  >
    <g-gantt-row :bars="row1BarList" highlightOnHover="true"/>
    <g-gantt-row :bars="row2BarList" />
  </g-gantt-chart>
</template>

<script setup lang="ts">
import { ref } from "vue"

const row1BarList = ref([
  {
    myBeginDate: "2025-01-13 00:00",
    myEndDate: "2025-01-16 23:59",
    ganttBarConfig: {
      id: "unique-id-1",
      label: "Projetos"
    }
  }
])
const row2BarList = ref([
  {
    myBeginDate: "2025-01-13 00:00",
    myEndDate: "2025-01-16 23:59",
    ganttBarConfig: {
      id: "another-unique-id-2",
      hasHandles: true,
      label: "Hey, look at me",
      style: {
        // arbitrary CSS styling for your bar
        background: "#e09b69",
        borderRadius: "20px",
        color: "black"
      }
    }
  }
])
</script>
