const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
};

function destructivelyRemoveLastKitten() {
  return kittens = kittens.pop();
};

function destructivelyRemoveFirstKitten() {
  return kittens = kittens.slice();
}

function appendKitten(name) {

};

function prependKitten(name) {

};

function removeLastKitten() {

};

function removeFirstKitten() {

};
