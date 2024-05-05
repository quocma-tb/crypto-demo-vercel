'use client'

import React, { useState } from "react";
import Chart from "react-apexcharts";

function Apex(props) {
  const [options, setOptions] = useState(props.data.chartData ? props.data.chartData.options : "");
  const [series, setSeries] = useState(props.data.chartData ? props.data.chartData.series : "")
  return (
    <div className="">
     
        {options ? <Chart
          options={options}
          series={series}
          type={options ? options.chart.type : "bar"}
          height={options ? options.chart.height : 315}
        /> : null}
    </div>
  );
}

export default Apex;