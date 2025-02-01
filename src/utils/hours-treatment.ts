

export function HoursTreatment(hours: string) { //recebr UMA string e retornar UM número (horas)

    const stringArray = hours.replace(/[a-z]|[A-Z]/g, " ").trim().split(" ")
    const numberArray = stringArray.map((string) => parseInt(string))

    let hr: number[] = []
    let min: number[] = []
    let seg: number[] = []

    if (numberArray.length == 2) {
        min.push(numberArray[0])
        seg.push(numberArray[1])
    }
    if (numberArray.length == 3) {
        hr.push(numberArray[0])
        min.push(numberArray[1])
        seg.push(numberArray[2])
    }
    if (numberArray.length == 1) {
        hr.push(numberArray[0])
    }


    min.push(seg[0] / 60);

    const minSum = min.reduce((total: number, num: number) => total + num)

    hr.push(minSum / 60);

    const hrSum = hr.reduce((total: number, num: number) => num + total)

    return parseFloat(hrSum.toFixed())
}