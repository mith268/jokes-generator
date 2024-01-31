let url='https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,sexist,explicit&type=twopart'
let language='english'
jokeFetch(url)
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("languageToggle");
    const languageLabel = document.getElementById("languageLabel");
    const content = document.getElementById("content");

    // console.log('English');
    languageToggle.addEventListener("change", function () {
        
        if (languageToggle.checked) {
            languageLabel.textContent = "Hindi";
            url='https://hindi-jokes-api.onrender.com/jokes/2?api_key=27f85c4fda766c11a0d70bfdaff4' 
            language='hindi'
            jokeFetch(url)
            
        } else {
          
            languageLabel.textContent = "English";
         url='https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,sexist,explicit&type=twopart'        
         language='english'
         jokeFetch(url)
          
        }
    });
});



async function  jokeFetch(url){
    let raw= await fetch(url)
    let res= await raw.json()
  if(language==='english'){
    // console.log('english');
 document.querySelector('.mainJoke').innerHTML=`
  <div >
${res.setup}
 </div>
 <div >
    ${res.delivery}
 </div>`
    // console.log(res.delivery);
    
    
  }
  else if(language==='hindi'){
    document.querySelector('.mainJoke').innerHTML=`
    <div >
  ${res.data[0].jokeContent}
   </div>
  `
//    console.log(res);
   
    
  }
    

}
function refresh(){
    document.querySelector('.button').addEventListener('click',()=>{

        jokeFetch(url)
    })
}
refresh()