var products = [{
    id: '1',
    name: '<p>Sp1</p>',
    describe: '<p>Mo ta san pham 1</p>',
    img: '<img src="images/1.png" alt="">',
    price: '<p>100000</p>',
    btnadd: '<button class="btn-primary" type="" onclick="myFunction()">Add to Cart</button>'
  },
  {
    id: '2',
    name: '<p>Sp2</p>',
    describe: '<p>Mo ta san pham 2</p>',
    img: '<img src="images/2.png" alt="">',
    price: '<p>200000</p>',
    btnadd: '<button class="btn-primary" type="" onclick="myFunction()">Add to Cart</button>'
  },
  {
    id: '3',
    name: '<p>Sp3</p>',
    describe: '<p>Mo ta san pham 3</p>',
    img: '<img src="images/3.png" alt="">',
    price: '<p>300000</p>',
    btnadd: '<button class="btn-primary" type="" onclick="myFunction()">Add to Cart</button>'
  },
  {
    id: '4',
    name: '<p>Sp4</p>',
    describe: '<p>Mo ta san pham 4</p>',
    img: '<img src="images/4.png" alt="">',
    price: '<p>400000</p>',
    btnadd: '<button class="btn-primary" type="" onclick="myFunction()">Add to Cart</button>'
  },
  {
    id: '5',
    name: '<p>Sp5</p>',
    describe: '<p>Mo ta san pham 5</p>',
    img: '<img src="images/5.png" alt="">',
    price: '<p>500000</p>',
    btnadd: '<button class="btn-primary" type="" onclick="myFunction()">Add to Cart</button>'
  },
  {
    id: '6',
    name: '<p>Sp6</p>',
    describe: '<p>Mo ta san pham 6</p>',
    img: '<img src="images/6.png" alt="">',
    price: '<p>600000</p>',
    btnadd: '<button class="btn-primary" type="" onclick="myFunction()">Add to Cart</button>'
  },
  {
    id: '7',
    name: '<p>Sp7</p>',
    describe: '<p>Mo ta san pham 7</p>',
    img: '<img src="images/7.png" alt="">',
    price: '<p>700000</p>',
    btnadd: '<button class="btn-primary" type="" onclick="myFunction()">Add to Cart</button>'
  },
  {
    id: '8',
    name: '<p>Sp8</p>',
    describe: '<p>Mo ta san pham 1</p>',
    img: '<img src="images/8.png" alt="">',
    price: '<p>800000</p>',
    btnadd: '<button class="btn-primary" type="" onclick="myFunction()">Add to Cart</button>'
  }
];

function displayTable(products) {
  var table = document.getElementById('listproduct');
  for (var i = 0; i < products.length; ++i) {
    var product = products[i];
    var row = document.createElement('li');
    var properties = ['img', 'name', 'describe', 'price', 'btnadd'];
    for (var j = 0; j < properties.length; ++j) {
      var cell = document.createElement('item');
      cell.innerHTML = product[properties[j]];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
displayTable(products);

function myFunction() {
  count += 1;
  document.getElementById("count").innerHTML = count;
}
var count = 0;
var btnClick = document.getElementsByClassName('btn-primary');
console.log(btnClick);
for (var i = 0; i < btnClick.length; i++) {
  debugger
  var indexBtn = btnClick[i];
  console.log(indexBtn);
  indexBtn.addEventListener('click', function(event) {
    event.target.setAttribute('disabled', 'disabled');
  });
}