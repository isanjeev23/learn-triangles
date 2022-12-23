const form = document.getElementById("calculate-area");
const output = document.getElementById("output-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstSide = document.getElementById("first-side").value;
  let secondSide = document.getElementById("second-side").value;
  let thirdSide = document.getElementById("third-side").value;

  if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) {
    output.innerHTML = "Please enter valid numerical values.";
    return;
  }

  firstSide = parseFloat(firstSide);
  secondSide = parseFloat(secondSide);
  thirdSide = parseFloat(thirdSide);

  if (
    firstSide + secondSide <= thirdSide ||
    firstSide + thirdSide <= secondSide ||
    secondSide + thirdSide <= firstSide
  ) {
    output.innerHTML = "The input values do not form a valid triangle.";
    return;
  }

  const s = (firstSide + secondSide + thirdSide) / 2;

  const area = Math.sqrt(
    s * (s - firstSide) * (s - secondSide) * (s - thirdSide)
  );

  output.innerHTML = `The area of the triangle is ${area.toFixed(2)}.`;
});
