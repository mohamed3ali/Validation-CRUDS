var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var siteLove = [];

if(localStorage.getItem('addInfo') != null)
{
    siteLove =JSON.parse(localStorage.getItem('addInfo')) ;
    displaySite();
}

function addSite(){
if(validSite() == true)
{
    var addInfo = {
        name:siteName.value,
        url:siteUrl.value
            }
            siteLove.push(addInfo)
            localStorage.setItem('addInfo',JSON.stringify(siteLove))
            displaySite();
        
        }
        else
        {
            window,alert('Invalid URL must include http || https')
        } 
}
function displaySite(){
    var toltec =``;
    for(var i =0;i<siteLove.length ; i++){
        toltec +=`    <tr>
        <td>${i+1}</td>
        <td>${siteLove[i].name}</td>

<td><button class="btn btn-sm btn-outline-warning" onclick="openSite()">Visit</button></td>
<td><button class="btn btn-sm btn-outline-danger" onclick="deleteSite(${i})">Delete</button></td>
    </tr>`
    };
    document.getElementById('tableSite').innerHTML = toltec;
}


function deleteSite(deleteIndex){

    siteLove.splice(deleteIndex,1);
    localStorage.setItem('addInfo',JSON.stringify(siteLove))
    displaySite();
}


function openSite(){
 window.open(siteUrl.value,'_blank') ; 
}

function validSite(){
    var regex = /http/;
    if(regex.test(siteUrl.value) ==true)
    {
        return true;
    }else
    {
        return false;
    }
}

function searchSite(term){
    var toltec =``;
    for(var i = 0 ; i<siteLove.length;i++){
        if(siteLove[i].name.toLowerCase().includes(term.toLowerCase())== true)
        {
            toltec +=`    <tr>
            <td>${i+1}</td>
            <td>${siteLove[i].name}</td>
    
    <td><button class="btn btn-sm btn-outline-warning" onclick="openSite()">Visit</button></td>
    <td><button class="btn btn-sm btn-outline-danger" onclick="deleteSite(${i})">Delete</button></td>
        </tr>`
        };
        document.getElementById('tableSite').innerHTML = toltec;
    }
    
    
        }
    
