
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
var newKittens = [...kittens]
 newKittens.push(name)
 return newKitten
}

function removeLastKitten(){
  kittens.pop('Garfield')
  return kittens
}