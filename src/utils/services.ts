export const getValueWithSpace = (value: number): string => {
    const temp = ("" + value).split("")
    let result = ""
    temp.reverse().forEach((item, index) => {
        result += item
        if ((index + 1) % 3 === 0) result += " "
    })
    return result.split("").reverse().join("")
}
export const getValueWithoutSpace = (value: string) => {
    return +value.replace(/ /g, '')
}