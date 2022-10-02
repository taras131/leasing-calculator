export enum inputNames {
    costCar = "costCar",
    downPayment = "downPayment",
    leasingPeriod = "leasingPeriod"
}

export enum inputLabels {
    costCar = "Стоимость автомобиля",
    downPayment = "Первоначальный взнос",
    leasingPeriod = "Срок лизинга"
}

export enum inputUnitMeasurements {
    costCar = "₽",
    downPayment = "%",
    leasingPeriod = "мес."
}

export const INTEREST_RATE = 0.035

export const COST_CAR_MIN_VALUE = 1000000
export const COST_CAR_MAX_VALUE = 6000000
export const COST_CAR_INITIAL_VALUE = 3300000

export const DOWN_PAYMENT_MIN_VALUE = 10
export const DOWN_PAYMENT_MAX_VALUE = 60
export const DOWN_PAYMENT_INITIAL_VALUE = 13

export const LEASING_PERIOD_MIN_VALUE = 1
export const LEASING_PERIOD_MAX_VALUE = 60
export const LEASING_PERIOD_INITIAL_VALUE = 60

