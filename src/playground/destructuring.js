console.log('destructuring');

//Object Destructuring
const book = {
  title: 'The monk who sold his ferari',
  author: 'Robin Sharma',
  publisher: {
    name: 'Penguine'
  }
};

const {name: publisherName='Self-published'} = book.publisher;
console.log(publisherName);


//Array Destructuring
const item = ['Coffee(hot)', '100', '150', '200'];
const [itemName, ,MediumPrice] = item;
console.log(`A medium ${itemName} costs ${MediumPrice} rupees`);
