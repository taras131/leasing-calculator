

export const fetchCalculatorData = async (calculatorData: any): Promise<any> => {
    console.log(calculatorData)
    const res = await fetch(process.env.REACT_APP_API_URL+"", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(calculatorData)
    })
    console.log(res)
    const decodedResponse = await res.json()
    console.log(decodedResponse)
    if (res.ok) {
        return decodedResponse.user
    }
    throw new Error(decodedResponse.message)
}