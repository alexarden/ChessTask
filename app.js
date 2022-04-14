let table = document.createElement('table');

document.body.appendChild(table);

for(let i = 0; i < 8; i++){
  table.appendChild(document.createElement('tr'))
};

let rows = document.getElementsByTagName('tr')

for(let i = 0; i < 8; i++){
  rows[i]
  for(let i = 0; i < 8; i++){
    rows[i].appendChild(document.createElement('td'))
  }
}