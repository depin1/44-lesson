let url = 'https://reqres.in/api/users';
fetch(url).then((res) => res.json()).then((data) => {
    let dataAll = data.data;
    console.log(dataAll);
    let row = document.querySelector('.row');
    let datamap = dataAll.map((render) => {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card">
            <img src="${render.avatar}" class="card-img-1" alt="...">
            <div class="card-body">
            mail:<a href="mailto:">${render.email}</a>
                <h2 class="card-title">${render.first_name}</h2>
                 <h2>${render.last_name}</h2>
                 <h1>${render.id}</h1>
            </div>
        </div>
        </div>`
    })

    row.innerHTML = datamap.join('')
})