//openweathermap est l'api utiliser pour crée l'appli météo.
//Version gratuite jusqu'a 60 requêtes par minutes.

//une fois enregistré chez openweather, récupéré la clé api.
//mettre la clé dans le code ci dessous a l'endroit ou y'a : APPID=
//ne pas oublier qu'après le fetch il faut ajouter "http://"
//après "?q=" mettre le nom de l'endroit qu'on vise. Le plus simple reste d'aller sur le site de openweather et de faire une demande de notre météo, il fera la recherche tout seul.
window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Trois-Bassins, RE&units=metric&lang=fr&APPID=9670e6a5402cd91b21657044e695cb4c')
.then(res => res.json())
.then(data=> {
    let test
})
.then(console.log(data))
/* .then(resJson => console.log(resJson.main))
 */
/* .then(resJson => console.log(resJson)) */
///le console.log affiche l'intégrité de l'api.
//pour faire appraitre après faut faire des truc en utilisant ce model (exemple) :resJson.main.temp
//ici la recherche se fait comme suit : il par dans le resJson qui est le "catalogue" d'information d'openweather. Une fois dedant, il va cherché le main, et dans le main il cherche temp, et il affiche la valeur. 


//ce sont des teste, mais n'ont pas aboutis.
//.then(resJson => console.log(resJson.name))
//.then(resJson => console.log(resJson.weather))
//.then(resJson => console.log(resJson.main.temp))
//.then(resJson => console.log(resJson))

