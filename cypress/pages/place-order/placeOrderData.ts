interface dataForm{
    name: string,
    country: string,
    city: string,
    creditCard: number,
    month: number,
    year: number
}

export class placeOrderData{
    static testData: dataForm = {
        name: "Test name",
        country: "United State",
        city: "Boston",
        creditCard: 4012888888881881,
        month: 12,
        year: 2024

    }
};