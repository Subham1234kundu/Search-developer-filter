const userList = document.getElementById("user-list");
const userName = document.getElementById("user");

const userArr = [];
const getUserData = async() =>{

    try{

        const res = await fetch('https://api.github.com/users');
        const data = await res.json();
        

        if(data){
            userList.innerHTML = "";
        }
        data.map((user)=>{
            const li = document.createElement('li');

            userArr.push(li);
            
            li.insertAdjacentHTML('afterbegin',
            `
            <div class="user-data">
                <img src="${user.avatar_url}" alt="${user.avatar_url}">
                <div>
                    <p>${user.login}</p>
                    <a href=${user.html_url} target="_blank">${user.html_url}</a>
                </div>
            </div>
            `
            );
              
            userList.appendChild(li);
        })
    }catch(error){
     console.log(error)
    }
}
getUserData();

userName.addEventListener("input",(e)=>{
    const val = e.target.value;
    console.log(val);

    userArr.filter((currElem) =>{
 
        // console.log(currElem.innerText)
        if(currElem.innerText.toLowerCase().includes(val.toLowerCase())===true){
           currElem.classList.remove(`hide`);
        }else{
            currElem.classList.add(`hide`);
        }
    })
})