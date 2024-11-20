function SumAndAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return { sum, average };
}

function removeDup(strings) {
    const namelist = new Set(strings);
    return Array.from(namelist);
}