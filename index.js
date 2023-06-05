// ----- simple setTimeout example ----- //
function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

const delay = 2000;

mySetTimeout(delay).then(() => {
  console.log(`After ${delay} milliseconds`);
});

// ----- toy factory ----- //
const makingTime = (Math.floor(Math.random() * 3) + 1) * 1000;
const deliverTime = (Math.floor(Math.random() * 2) + 1) * 1000;
const sellTime = 1000;
console.log(makingTime, deliverTime, sellTime);

// toy making
function makeToy(makingTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (makingTime === 3000) {
        console.log("Toy has been made");
        resolve();
      } else {
        reject("Toy making failed");
      }
    }, makingTime);
  });
}

// delivering
function deliverToy(deliverTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (deliverTime === 2000) {
        console.log("Toy has been delivered");
        resolve();
      } else {
        reject("Toy delivering failed");
      }
    }, deliverTime);
  });
}

// selling
function sellToy(sellTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sellTime === 1000) {
        console.log("Toy has been sold");
        resolve();
      } else {
        reject("Toy selling failed");
      }
    }, sellTime);
  });
}

// using .then().catch()
// makeToy(makingTime)
//   .then(() => deliverToy(deliverTime))
//   .then(() => sellToy(sellTime))
//   .catch((error) => console.log("Error: ", error));

// using async/await
async function makeToy2(makingTime) {
  try {
    await makeToy(makingTime);
    await deliverToy(deliverTime);
    await sellToy(sellTime);
  } catch (error) {
    console.log("Error: ", error);
  }
}
makeToy2(makingTime);
