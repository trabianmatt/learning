import * as React from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!");

const Hello = ({ name, enthusiasmLevel = 1 }: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error("Get pumped.");
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
};

export default Hello;
