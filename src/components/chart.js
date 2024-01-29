import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { formatStockData } from './utils'
import ReactApexChart from 'react-apexcharts'
import { candleStickOptions } from './constants'

const LiveChart = (stockData) => {
    const std=stockData.stockData;
    console.log(std);
   const seriesData = useMemo(() => formatStockData(std), [std])

    return (

        <div >

            <ReactApexChart
                series={
                    [
                        {
                            data: seriesData
                        }
                    ]
                }
                options={candleStickOptions}
                type="candlestick"
            />

        </div>

    )
}

export default LiveChart