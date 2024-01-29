export const formatStockData = (stockData) => {

    const formattedData = []

    if (stockData['Monthly Adjusted Time Series']) {
        Object.entries(
            stockData['Monthly Adjusted Time Series']
        ).map(
            ([key, value]) => {
                formattedData.push({
                    x: key,
                    y: [
                        value['1. open'],
                        value['2. high'],
                        value['3. low'],
                        value['4. close'],
                    ]
                })
            }
        )
    }
    return formattedData
}