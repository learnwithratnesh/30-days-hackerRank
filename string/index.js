function processData(input) {
  let input1 = input.split("\n");
  let output = [];
  for (let i = 1; i < input1.length; i++) {
    let word = input1[i].split("");
    let evenword = [];
    let oddword = [];
    for (let i = 0; i < word.length; i++) {
      if (i % 2 == 0) {
        evenword.push(word[i]);
      } else {
        oddword.push(word[i]);
      }
    }
    output.push(evenword.join("") + " " + oddword.join("") + "\n");
  }
  console.log(output.join(""));
}

let input = "2\nHacker\nRank";
processData(input);
