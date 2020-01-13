var products = [{
    id: '1',
    name: 'Sp1',
    quantily: '<button onclick="myFunctiondec()">-</button><p id="count">1</p><button onclick="myFunctioninc()">+</button>',
    price: 100000,
    subtotal: 2,
    btndel: '<button type="">X</button>'
  },
  {
    id: '2',
    name: 'Sp2',
    quantily: '<button onclick="myFunctiondec()">-</button><p id="count">1</p><button onclick="myFunctioninc()">+</button>',
    price: 200000,
    subtotal: 2,
    btndel: '<button type="">X</button>'
  },
  {
    id: '3',
    name: 'Sp3',
    quantily: '<button onclick="myFunctiondec()">-</button><p id="count">1</p><button onclick="myFunctioninc()">+</button>',
    price: 300000,
    subtotal: 2,
    btndel: '<button type="">X</button>'
  },
  {
    id: '4',
    name: 'Sp4',
    quantily: '<button onclick="myFunctiondec()">-</button><p id="count">1</p><button onclick="myFunctioninc()">+</button>',
    price: 400000,
    subtotal: 2,
    btndel: '<button type="">X</button>'
  },
  {
    id: '5',
    name: 'Sp5',
    quantily: '<button onclick="myFunctiondec()">-</button><p id="count">1</p><button onclick="myFunctioninc()">+</button>',
    price: 500000,
    subtotal: 2,
    btndel: '<button type="">X</button>'
  },
  {
    id: '6',
    name: 'Sp6',
    quantily: '<button onclick="myFunctiondec()">-</button><p id="count">1</p><button onclick="myFunctioninc()">+</button>',
    price: 600000,
    subtotal: 2,
    btndel: '<button type="">X</button>'
  },
  {
    id: '7',
    name: 'Sp7',
    quantily: '<button onclick="myFunctiondec()">-</button><p id="count">1</p><button onclick="myFunctioninc()">+</button>',
    price: 700000,
    subtotal: 2,
    btndel: '<button type="">X</button>'
  },
  {
    id: '8',
    name: 'Sp8',
    quantily: '<button onclick="myFunctiondec()">-</button><p id="count">1</p><button onclick="myFunctioninc()">+</button>',
    price: 800000,
    subtotal: 2,
    btndel: '<button type="">X</button>'
  }
];

function displayTable(products) {
  var table = document.getElementById('tablecart');
  for (var i = 0; i < products.length; ++i) {
    var product = products[i];
    var row = document.createElement('tr');
    var properties = ['id', 'name', 'quantily', 'price', 'subtotal', 'btndel'];
    for (var j = 0; j < properties.length; ++j) {
      var cell = document.createElement('td');
      cell.innerHTML = product[properties[j]];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
displayTable(products);
var total_price = '<tr><td colspan = "3"></td> <td> Total </td> <td class = "total-price"></td> <td></td></tr>';
document.getElementById("tablecart").innerHTML += total_price;
var count = 0;

function myFunctioninc() {
  count += 1;
  document.getElementById("count").innerHTML = count;
}

function myFunctiondec() {
  if (count > 1) {
    count -= 1;
    document.getElementById("count").innerHTML = count;
  }
}