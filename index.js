const state = {
    userList=[]
}
function setState(stateName, newVal){
    state[stateName] = newVal;
    render()
}

function id(){
    return Math.floor(Math.random()*1000000)
}

function update(customerId, newVal){
    state.userList.forEach(item=>{
        if(Number(item.id)=== Number(customerId)){
            return item.balance = Number(newVal)
        }
    })
    render()
}

function render(){
    const subscribers1 = [document.getElementById("transaction")]
    const subscribers2 = [
        document.getElementById("sender"),
        document.getElementById("receiver")
    ]
    subscribers1.forEach(item =>{
        item.innerHTML = ""
        userList(state.userList,item)
    })
    subscribers2.forEach(item =>{
        // item.innerHTML= ""
        loadUserList(state.userList, item)
    })
}

function addUser(e){
    e.preventDefault()
    const userName = document.getElementById("user-name").value
    const userBalance = document.getElementById("balance").value
    const userId = id()
    if(userName&&balance){
        setState("userList",[...state.userList,{
            name:userName,
            balance: userBalance,
            id:userId
        }])
    }
}

function userList(list, subscriber){
    list.forEach(item =>{
        const newDiv = document.createElement("div");
        newDiv.setAttribute("data-id", item.id);
        subscriber.appendChild(newDiv);

        const newP1 = document.createElement("p");
        newP1.innerText = item.name ;
        newP1.className = "customer-name"
        newDiv.appendChild(newP1);

        const newP2 = document.createElement("p");
        newP2.innerText = item.balance + " TL";
        newP2.className = "customer-balance"
        newDiv.appendChild(newP2);
        
    })
}

function loadUserList(list,subscriber){
    list.forEach(item =>{
        const option= document.createElement("option");
        option.innerText = item.name;
        option.value = item.id;
        subscriber.appendChild(option);
    })
}

function send(){
    const amount = document.getElementById("input-amount").value
    const senderId = document.getElementById("sender").value
    const receiverId = document.getElementById("receiver").value

    const senderInfo = state.userList.filter(item=>{
        item.id === senderId
    })

    const receiverInfo = state.userList.filter(item=>{
        item.id === receiverId
    })

    if(amount){
        if(Number(senderInfo[0].balance) - amount) {
            updateState(senderInfo[0].id, Number(senderInfo[0].balance)) - amount
            updateState(receiverInfo[0].id, Number(senderInfo[0].balance)) - amount
        } else{
            console.log("Insufficient balance")
        }
    }else{
        console.log("Fee must be greater than 0")
    }
}

//TODO : addEventListener 

//TODO: History