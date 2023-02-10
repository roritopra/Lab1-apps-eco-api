/*
//Para ver si se está corriendo bien el el api y el fetch

function obtenerUsuario() {
    const apiUrl = ('https://randomuser.me/api/');
    fetch ( apiUrl )
    .then(res=>res.json())
    .then(resJson=> {
        const usuario = resJson.results[0]
        const nombre = usuario.name;
        const imagen = usuario.picture;
        console.log(nombre, imagen)
    })
    .catch(error=>error)
}

obtenerUsuario();
*/

function obtenerUsuario() {
    const apiUrl = ('https://randomuser.me/api/');
    fetch ( apiUrl )
    .then(res=>res.json())
    .then(resJson=> {
        const usuario = resJson.results[0]
        const nombre = usuario.name;
        const imagen = usuario.picture.medium;
        mostrarUsuario(nombre, imagen)
    })
    .catch(error=>error)
}

obtenerUsuario();

function mostrarUsuario(nombre, imagen) {
    const app=document.getElementById("app");
    app.innerHTML=`
    <h1>Random user</h1>
    <h5> ${nombre.title} ${nombre.first} ${nombre.last} </h5>
    <img src="${imagen}" alt="">
    
    `;
}

function obtenerPerro() {
    const apiUrl = ('https://dog.ceo/api/breeds/image/random')
    fetch ( apiUrl )
    .then(res=>res.json())
    
    .then(resJson =>{
        const dogo = resJson.message;
        mostrarPerro(dogo)
    })
    .catch(error=>error)
}  

obtenerPerro();

function mostrarPerro(dogo) {
    const app2 = document.getElementById('app2');
    app2.innerHTML = `
    <div class="contain-dog">
        <h1>Random image of a dog</h1>
        <img class="img-dog" src="${dogo}" alt="">
    </div>
    `;
}

function obtenerChiste() {
    const apiURL = ('https://catfact.ninja/fact')
    fetch ( apiURL )
    .then(res=>res.json())

    .then(resJson =>{
        const chiste = resJson.fact
        mostrarChiste(chiste)
    })
    .catch(error=>error)
}

obtenerChiste();

function mostrarChiste(chiste) {
    const app3 = document.getElementById('app3')
    app3.innerHTML = `
    <div class="joke-container">
        <h1>Random fact about cats</h1>
        <p> "${chiste}" </p>
    </div>
    `
}

function obtenerPopulation() {
    const apiURL = ('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    fetch ( apiURL )
    .then(res=>res.json())

    .then(resJson =>{ 
        const us1 = resJson.data[0]
        const us2 = resJson.data[1]
        const us3 = resJson.data[2]
        const us4 = resJson.data[3]
        const us5 = resJson.data[4]
        const us6 = resJson.data[5]
        const us7 = resJson.data[6]
        
        const year1 = us1.Year;
        const year2 = us2.Year;
        const year3 = us3.Year;
        const year4 = us4.Year;
        const year5 = us5.Year;
        const year6 = us6.Year;
        const year7 = us7.Year;

        const people1 = us1.Population
        const people2 = us2.Population
        const people3 = us3.Population
        const people4 = us4.Population
        const people5 = us5.Population
        const people6 = us6.Population
        const people7 = us7.Population

        mostrarPopulation(year1, year2, year3, year4, year5, year6, year7, people1, people2, people3, people4, people5, people6, people7)

    })
    .catch(error=>error)
}

obtenerPopulation();

function mostrarPopulation(year1, year2, year3, year4, year5, year6, year7, people1, people2, people3, people4, people5, people6, people7, people8) {
    const app4 = document.getElementById('app4')
    app4.innerHTML = `
    <div class="info-container">
        <h1>Get the US population</h1>

        <div class="info-span">
        

        <span>
            <h6> ${year1}  </h6>
            <p> ${people1} </p>
        </span>

        <span>
            <h6> ${year2}  </h6>
            <p> ${people2} </p>
        </span>

        <span>
            <h6> ${year3}  </h6>
            <p> ${people3} </p>
        </span>

        <span>
            <h6> ${year3}  </h6>
            <p> ${people3} </p>
        </span>

            <span>
                <h6> ${year4}  </h6>
                <p> ${people4} </p>
            </span>

            <span>
                <h6> ${year5}  </h6>
                <p> ${people5} </p>
            </span>

            <span>
                <h6> ${year6}  </h6>
                <p> ${people6} </p>
            </span>

            <span>
                <h6> ${year7}  </h6>
                <p> ${people7} </p>
            </span>
            </div>
    </div>
    `
}

mostrarPopulation()

function obtenerBitcoin () {
    apiURL = ('https://api.coindesk.com/v1/bpi/currentprice.json')
    fetch (apiURL)
    .then(res=>res.json())
    .then(resJson=> {
        const date = resJson.time.updated;
        const usa = resJson.bpi.USD.rate;
        const england = resJson.bpi.GBP.rate;
        const europe = resJson.bpi.EUR.rate;
        
        mostrarBitcoin(date, usa, england, europe)
    })
    .catch(error=>error)
}

obtenerBitcoin()

function mostrarBitcoin(date, usa, england, europe) {
    const app5 = document.querySelector('.app5')
    app5.innerHTML = `
    <h1>Bitcoin Price</h1>
    
    <div clas="info-bitcoin">
        <h4> ${date} </h4>
        <span>
            <h6>USD</h6>
            <P> ${usa} </P>
        </span>

        <span>
            <h6>GBP</h6>
            <P> ${england} </P>
        </span>

        <span>
            <h6>EUR</h6>
            <P> ${europe} </P>
        </span>
    
    </div>
    `
}







