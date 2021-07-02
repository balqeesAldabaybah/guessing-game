const backend_url = 'https://guessing-game-l8.herokuapp.com'

async function getScores(){
    const data = await fetch(backend_url + '/api/score')
    const scores = await data.json()
     return scores;
}

async function postScore(name, score){
   const data =  await fetch(backend_url+'/api/score',{
       method : "POST",
       headers:{
           'Accept': 'application/json',
           'content-type' : 'application/json'
       },
       body: JSON.stringify({name,score})
   });

   const response = await data.json();
   return response;
}