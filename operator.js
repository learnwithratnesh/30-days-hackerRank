function main() {
  const N = parseInt(readLine().trim(), 10);
  switch (true) {
    case N % 2 > 0:
      console.log("Weird");
      break;
    case N % 2 === 0 && N > 20:
      console.log("Not Weird");
      break;
    case N % 2 === 0 && N >= 2 && N <= 5:
      console.log("Not Weird");
      break;
    case N % 2 === 0 && N >= 6 && N <= 20:
      console.log("Weird");
      break;
  }
}
