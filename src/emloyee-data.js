// ------Url of json-----------------
const url="https://niravkpatel28.github.io/json-data-server/employees/employees.json";

// ------------Creating  the html card container--------------
//  <body>
//     <div class="employee-cards">
//     </div>
// </body> 
const employeeCards=document.createElement("div");
employeeCards.className="employee-cards"
document.body.appendChild(employeeCards);


//createcards function is used to create the html cards again and again
const createCards=(employeeObj)=>{
        // creating the card elemnt
        const card=document.createElement("div");
        const img=document.createElement("img")
        const contentSection=document.createElement("div");
        const name=document.createElement("h3");
        const hobbies=document.createElement("p");
        
        //giving the class to the element
        card.className="card"
        contentSection.className="content-setion"   
        name.className="name"

        //Giving the unique id to the each employee name(means <p id="json.id"></p>)
        name.id=employeeObj["id"]

        // giving the hierarchy to the elments
        // <div class="employee-cards">
        //     <div class="card">
        //         <img src="" alt="">
        //         <div class= "content-section">
        //             <h3 class="name" id="<getting id from json data>">name</h3>
        //         </div>
        //     </div>
        // </div>

        employeeCards.appendChild(card);
        card.append(img,contentSection);
        contentSection.appendChild(name);

        //Assing the name from json file to the h3 tag having class "name"
        name.innerText=employeeObj.firstName+" "+employeeObj.lastName;

        //Assignin the image url from json data 
        img.src=employeeObj.imageUrl;
        img.setAttribute("alt","Employee name");
    
}





//Aysnc await is use to fetch the data  and return promises

async function getData(url) {
    try
    {
        const response= await fetch(url);
        //if respose is ok then it will fetch the data elese it will give http error
        if(response.ok){
            let json=await  response.json();
            return json
        }
    }catch(err){
        console.log(err);
    }

}


//here we use promises and send the json data to the creatCards function
getData(url).then(
    json =>{
        for (i in json){
            createCards(json[i])
        }
    }).catch(err=>{
        alert(err)
    })

