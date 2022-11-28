export default function randomNumber(length: number) {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numsLength = nums.length;

  let result = "";

  for (let i = 0; i < length; i++) {
    result += nums[Math.floor(Math.random() * numsLength)];
  }
  return Number(result);
}
