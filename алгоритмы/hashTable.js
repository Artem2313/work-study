let hashTable = {};

hashTable['apple'] = 1.29;
hashTable['banana'] = 2.50;
hashTable['kiwi'] = 4.00;

const phoneBook = {
  Karen: 12345,
  Billy: 678910
}

const findPhoneByName = (book, name) => {
 return book[name];
}
console.log(hashTable['kiwi']);
console.log(findPhoneByName(phoneBook, 'Billy'));

let voted = {};

const canIVote = (name) => {
  console.log(voted);
  if (voted[name]) {
    console.log('No. You have already voted');
  } else {
    voted[name] = true
    console.log('Yes you can');
  }
}

canIVote('Artem');
canIVote('Artem');

let cache = {};

const sumWithCache = (a, b) => {
  if(cache[`${a}+${b}`]) {
    console.log('Got from cache');
    console.log(cache);
    return cache[`${a}+${b}`]
  } else {
    console.log('New value');
    cache[`${a}+${b}`] = a + b;
    return a + b;
  }
}

console.log(sumWithCache(1, 2));
console.log(sumWithCache(1, 2));