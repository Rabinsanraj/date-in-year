function calculate(Operation) {
    
    const y1 = parseFloat(document.getElementById("y1").value);
    const y2 = parseFloat(document.getElementById("y2").value);
    const month = parseFloat(document.getElementById("month").value);
    const date = parseFloat(document.getElementById("date").value);
    const day = parseFloat(document.getElementById("day").value);
    let result;
    let count = 0;
    for (let year = y1; year <= y2; year++) {
        let d = new Date(year, month, date);
        if (d.getDay() === day) {
            document.write("Result :" + year + "<br>");
            count += 1
        }
    }
    document.write("Number of times : " + count)
}