
const BASE__URL ="https://northwind.vercel.app/api/products"
const List=document.getElementById("list")

function deleteItem(id) {
    fetch(`${BASE__URL}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
         console.log(response)
         window.location.reload()
           
}).catch(error => console.log(error))
   
}



fetch(BASE__URL)
.then(response => response.json())
.then(data => {
    console.log(data);
    let innerText=""
    for (let i = 0; i < data.length; i++) {
        
        innerText+=` <tr>
            <th scope="row">${data[i].id}</th>
            <td>${data[i].name}</td>
            <td>${data[i].quantityPerUnit}</td>
            <td>${data[i].unitsInStock}</td>
            <td>${data[i].unitPrice}</td>
            <td><button class="btn btn-primary" onclick="deleteItem(${data[i].id})">Delete</button> </td>
          </tr>`
    }
    List.innerHTML+=innerText
})
.catch(err => console.log(err));




const newProduct = {
    id:80,
    name: "Suleyman",
    quantityPerUnit: "Aslanli",
    unitsInStock: 100,
    unitPrice: 50.0
};

fetch(BASE__URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));










