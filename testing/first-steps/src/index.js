// *.test.js
// *.spec.js
// __tests__/*

exports.sum = (a,b) => {
  return a + b
}

exports.multiply = (a, b) => {
  const blacklist = ['string', 'object', 'null', 'undefined', 'boolean']

  if(blacklist.includes(typeof(a)) || blacklist.includes(typeof(b))) {
    return 'wrong arguments'
  }

  // if(typeof(a) !== 'number' || typeof(b) !== 'number') {
  //   return 'wrong arguments'
  // }

  return a * b
}

exports.person = (name, age) => {
  return {
    name,
    age,
  }
}
