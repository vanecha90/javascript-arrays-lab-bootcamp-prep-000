
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
 kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop('Garfield')
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift('Milo')
  return kittens
}

function appendKitten(name){
return [...kittens, name];
}

function removeLastKitten(){
 return kittens.slice(0, kittens.length - 1);
}