const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.get("/fibonacci/:number", (req, res) => {
  console.log("Backend: " + JSON.stringify(req.params));

  var num = req.params.number;
  var fib = [];
  fib = fibonacci(num);

  function fibonacci(num) {
    let fib = [0, 1];
    let item = [0, 1];

    for (let i = 2; i < num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
      item.push(fib[i]);
    }

    return item;
  }

  console.log("Fib: " + fib);

  var sortedArr;
  sortedArr = fib.slice();
  var size = sortedArr.length;

  sortedArr.sort(comparator);

  function comparator(a, b) {
    if (a % 2 == 0 && b % 2 == 0 && a < b) return -1;

    if (a % 2 != 0 && b % 2 != 0 && a < b) return -1;

    if (a % 2 != 0 && b % 2 == 0) return 1;

    return -1;
  }

  console.log(
    "Product: " + JSON.stringify({ fibonacci: fib, sorted: sortedArr })
  );

  res.json({ fibonacci: fib, sorted: sortedArr });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
