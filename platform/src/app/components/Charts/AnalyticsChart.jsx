'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

// export default function VideoAnalyticChart({ data }) {
//     const dummyData = [
//         [new Date("01 Mar 2023").getTime(), 10],
//         [new Date("02 Mar 2023").getTime(), 25],
//         [new Date("03 Mar 2023").getTime(), 18],
//         [new Date("04 Mar 2023").getTime(), 32],
//         [new Date("05 Mar 2023").getTime(), 15],
//         // Add more data points as needed
//     ];

//     const opt = {
//         series: [
//             {
//                 name: "Video Analytics",
//                 data: data ? data : dummyData,
//             },
//         ],
//         chart: {
//             id: "bar-datetime",
//             type: "bar", // Switched to bar chart
//             height: 350,
//             zoom: {
//                 autoScaleYaxis: true,
//             },
//         },
//         plotOptions: {
//             bar: {
//                 horizontal: false,
//                 columnWidth: "55%",
//                 endingShape: "rounded",
//             },
//         },
//         dataLabels: {
//             enabled: false,
//         },
//         markers: {
//             size: 0,
//             style: "hollow",
//         },
//         xaxis: {
//             type: "datetime",
//             min: new Date("01 Mar 2023").getTime(),
//             tickAmount: 6,
//         },
//         fill: {
//             type: "gradient",
//             gradient: {
//                 shadeIntensity: 1,
//                 opacityFrom: 0.7,
//                 opacityTo: 0.9,
//                 stops: [0, 100],
//             },
//         },
//     };

//     const [selection, setSelection] = useState("one_month");

//     const globalClass =
//         "inline-block px-3 py-1 mr-2 bg-secondary text-white bg-[#046ED1] font-medium text-sm";

//     return (
//         <div id="chart">
//             {opt ? (
//                 <div id="chart-timeline">
//                     {typeof window !== undefined && (
//                         <ApexCharts
//                             options={opt}
//                             series={opt.series}
//                             type="bar"
//                             height={"100%"}
//                             width={"100%"}
//                         />
//                     )}
//                 </div>
//             ) : (
//                 ""
//             )}
//         </div>
//     );
// }

export default function AnalyticsChart({ data }) {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Months
    },
    fill: {
      opacity: 1, // Set opacity to 1 for solid color
    },
    colors: ['#6941C6', '#9E77ED', '#D6BBFB'],
    legend: {
      position: 'top',
    },
  };

  const series = [
    {
      name: 'Amount 1',
      data: [30, 40, 45, 50, 49],
    },
    {
      name: 'Amount 2',
      data: [20, 30, 25, 30, 29],
    },
    {
      name: 'Amount 3',
      data: [10, 20, 15, 20, 19],
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between  py-4 mb-4 px-2 md:px-5 ">
        <div className="w-full  flex-col md:gap-0 gap-3">
          <h5 className="text-lg text-[#211740] font-medium">
            Total Revenue in USD
          </h5>
          <h3 className="text-2xl text-[#1D2939]">32,000.00</h3>
        </div>
        <div>
          <select
            defaultValue={0}
            className="px-2 bg-white focus-visible:outline-none focus-within:outline-none focus:outline-none"
          >
            <option value={0}>7 days</option>
            <option value={1}>1 Month</option>
            <option value={2}>1 year</option>
          </select>
        </div>
      </div>
      <div className="py-6 px-2 md:px-5">
        <div className="w-full " style={{ height: '400px' }}>
          <div>
            <div id="chart">
              {options ? (
                <div id="chart-timeline">
                  {typeof window !== undefined && (
                    <ApexCharts
                      options={options}
                      series={series}
                      type="bar"
                      height={350}
                      width={'100%'}
                    />
                  )}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
