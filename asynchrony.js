function fakeNetworkSpeed() {
  return Math.round(Math.random() * 100);
}

const networkSpeed1 = fakeNetworkSpeed();
const networkSpeed2 = fakeNetworkSpeed();

// before here you cant touch you cant call it

let response1;
let response2;

function check() {
  if (response1 && response2) {
    console.log('done');
  }
}

setTimeout(() => {
  response1 = 'response1';
  console.log(response1);
  check();
}, networkSpeed1);

setTimeout(() => {
  response2 = 'response2';
  console.log(response2);
  check();
}, networkSpeed2);
