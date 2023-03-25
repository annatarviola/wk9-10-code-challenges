phoneNumberArr = [8, 0, 1, 4, 0, 4, 0, 8];

function createPhoneNumber(arr) {
  let mask = "(xxx) xxx-xxxx";

  arr.forEach((item) => {
    mask = mask.replace("x", item);
  });

  return mask;
}

console.log(createPhoneNumber(phoneNumberArr));
