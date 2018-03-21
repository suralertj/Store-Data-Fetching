console.log('Load static file complected')

$('select.dropdown')
  .dropdown()
;

// SELECTION
const select = document.getElementById('product')
const form = document.querySelector('form')
const container = document.getElementById('itemContainer')

//-----------------------------------------------------
//  FETCH
//-----------------------------------------------------

function fetchData(url) {
  return fetch(url)
            .then( res => res.json() )
}

fetchData('http://localhost:3000/api/products/list')
  .then( data => generateOption(data.data.products))


fetchData('http://localhost:3000/store')
  .then( data => generateItem(data))

//-----------------------------------------------------
//  HELPER FUNCTION
//-----------------------------------------------------

function generateOption (data) {
  const option = data.map( item => `
    <option value=${item}> ${item} </option>
  `)
  select.innerHTML = option
}

function generateItem (data) {
  data.forEach( item => {
    let html = `
      <div class='item'>
        <div class='image'>
          <img src=${item.url} >
        </div>
        <div class='content'>
          <div class='header'> ${item.name}</div>
          <div class='meta'>
            <span>${item.price}</span>
          </div>
          <div class='description'>${item.description}</div>
        </div>
      </div>
    `
    container.innerHTML += html
  })
}

function fetchProductItem() {
  const product = select.value
  console.log(product)
  
  fetchData(`http://localhost:3000/api/products/${product}`)
    .then( data => { 
      container.innerHTML = ''
      generateItem(data)
    })

}


//-----------------------------------------------------
//  EVENT HANDLER
//-----------------------------------------------------
select.addEventListener('change',fetchProductItem)