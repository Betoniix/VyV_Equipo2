export const Decrypt = (hash: string) => decrypt(hash);

const decrypt = (hash: string) => {
  let decrypted = "";
  let jumpJunk = 0;

  for (let char of hash) {
    if (jumpJunk !== 2) {
      jumpJunk++;
      continue;
    }
    jumpJunk = 0;
    const reversed = ReverseMapChar(char);
    decrypted += reversed;
  }
  return decrypted;
};

const ReverseMapChar = (char: string) => {
  if (char === "A") return "0";
  if (char === "C") return "1";
  if (char === "e") return "2";
  if (char === "f") return "3";
  if (char === "G") return "4";
  if (char === "v") return "5";
  if (char === "b") return "6";
  if (char === "R") return "7";
  if (char === "2") return "8";
  if (char === "9") return "9";
  return char;
};
