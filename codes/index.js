
let myLeads = []

const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

///localStorage.setItem("myLeads","www.myLeads.com")

// localStorage.getItem("myleads")


/////////////
// Once there is a refresh then the leads will be erased
// but it will be stored in local storage
// hence fetch the data from the local storage parse it (JSON.parse)
// since the data will be stored in string format
/////////////


// let locallyStoredLeads = JSON.parse(localStorage.getItem("myLeads"))
//  console.log(locallyStoredLeads)
const localLeads = JSON.parse(localStorage.getItem("myLeads"))
if(localLeads)
{
    myLeads=localLeads
    render(myLeads)
}

// console.log(myLeads)
// let localLeads = ""

// for(let i=0 ; i < myLeads.length;i++)
// {
//     localLeads+=`
//                 <li>
//                     <a href = ${myLeads[i]} target ="_blank">${myLeads[i]}</a>
//                 </li>
//     `
// }    
// ulEl.innerHTML = localLeads


inputBtn.addEventListener("click",function(){

    // .value method will fetch data from the ip field 
    myLeads.push(inputEl.value)
    //console.log(myLeads) 

   
    
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    
    console.log(localStorage.getItem("myLeads"))
   
    render(myLeads)
    clearInput()
    // localStorage.clear()
})

function clearInput(){

    // inputEl.textContent=""
    let lead =document.getElementById("input-el")
    lead.value=""

}
// for(let i=0 ; i < myLeads.length;i++ ){
//     //ulEl.innerHTML+="<li>" + myLeads[i]+ "</li>"
//     //console.log(myLeads)
//     // alternate method
//     // create element
//     // set the text
//     // append to ul

//     let li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)
// }


function render(leads){

    let listItems=""
    for(let i=0 ; i < leads.length;i++ ){
        
       // listItems += "<li><a href='"+ myLeads[i]+"' target = _blank>" + myLeads[i] + "</a></li>"
        // template strings
       listItems += ` 
       <li>
            <a href= "${ leads[i]}" target = _blank> 
                ${leads[i]}
            </a>
       </li>
       `

    }
    ulEl.innerHTML = listItems
}

// template strings 
// normal strings can be converted into template strings by replacing quotes by  `` (backticks)
// template strings can for more than one line


// for delete button on double click
// clear local storage , myLeads, and the DOM


let delbtn = document.getElementById("delete-btn")

delbtn.addEventListener("dblclick",function(){

    
    localStorage.clear()
    myLeads = []
   // console.log("pressed")
   // console.log(myLeads)
    render(myLeads)

})

let tabs = [{
    url :"linkedin.com/tonystark"
}]

let saveTab = document.getElementById("saveTab-btn")

saveTab.addEventListener("click",function(){


    // obataining the tabs dynamically from the chrome
    // asking or quering the chrome to get the tab
    // in which we are selecting the acting tab
    // as well as the active window 
    // since chrome will be knowing all those things
    // function is triggered when chrome returns if those
    // tabs are there tabs will the parameter
    chrome.tabs.query({active: true ,currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        render(myLeads)
        localStorage.set("myLeads",JSON.stringify(tabs[0].url))
     })

    //let tabs = [{
    //     url :"linkedin.com/tonystark"
    // }] general syntax of the returned tab parameter

   
})

// show  previous leads
const previousLeads = document.getElementById("previous-btn")

previousLeads.addEventListener("click",function(){

    let prevLocalLeads = JSON.parse(localStorage.getItem("myLeads"))
    console.log(prevLocalLeads)
    console.log("previousLeads pressed")
    let localDOM =document.getElementById("ul-el")
    let prevlead = ""
    for(let i=0; i<prevLocalLeads;i++)
    {
        prevlead +=  `<li>
                            <a target="_blank" href =${prevLocalLeads[i]} > ${prevLocalLeads}
                            <a/>
                            
                       </li>     `
    }
    
    localDOM.innerHtml = prevlead



})



// create a same line up and down 
// alt + shit +arrow


// move line alt + arrow
// multiple cursors
// span over downlines cltr + alt + down
// in different lines press alt and click whereever u want
// ctrl +j == > terminal
// switching between terminal and lines cltr + `
// selecting a line clrl l


// extension
// c c++ inteligence
// red hat
// python
// autorename tag
// github copilot
// tab 9
// localStorage.getItem("my")