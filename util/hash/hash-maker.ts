import { generate } from "generate-password";

export const HashMaker = (text: string) => Encrypt(text);

const Encrypt = (text: string) => {
  let encrypted = "";
  for (let char of text) {
    const junk = generate({
      lowercase: true,
      length: 2,
      numbers: true,
      uppercase: true,
    });

    const mapped = MapChar(char);
    encrypted += junk + mapped;
  }
  return encrypted;
};

const MapChar = (char: string) => {
  if (parseInt(char) === 0) return "A";
  if (parseInt(char) === 1) return "C";
  if (parseInt(char) === 2) return "e";
  if (parseInt(char) === 3) return "f";
  if (parseInt(char) === 4) return "G";
  if (parseInt(char) === 5) return "v";
  if (parseInt(char) === 6) return "b";
  if (parseInt(char) === 7) return "R";
  if (parseInt(char) === 8) return "2";
  if (parseInt(char) === 9) return "9";
  return char;
};
