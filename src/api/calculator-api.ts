export const fetchCalculatorData = async (calculatorData: any): Promise<any> => {
    const res = await fetch(process.env.REACT_APP_API_URL+"", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(calculatorData),
    });
    const decodedResponse = await res.json();
    if (res.ok) {
        return decodedResponse.user;
    }
    throw new Error(decodedResponse.message);
};