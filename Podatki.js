var podatki = {
  "Sestavine":[
  {"Ime":"Piscanec", "Cena":"0.5", "Uporabnost":"14"}, //0
  {"Ime":"Tortilije", "Cena":"3.41", "Uporabnost":"60"}, //1
  {"Ime":"Smetana", "Cena":"0.56", "Uporabnost":"14"}, //2
  {"Ime":"Paradiznik", "Cena":"1.23", "Uporabnost":"8"}, //3
  {"Ime":"Paprika", "Cena":"1.4", "Uporabnost":"7"}, //4
  {"Ime":"Jajca", "Cena":"1.21", "Uporabnost":"16"}, //5
  {"Ime":"Cebula", "Cena":"0.78", "Uporabnost":"24"}, //6
  {"Ime":"Sir", "Cena":"4.25", "Uporabnost":"13"}, //7
  {"Ime":"Salsa", "Cena":"2.31", "Uporabnost":"142"}, //8
  {"Ime":"Lisicke", "Cena":"5.31", "Uporabnost":"4"}, //9
  {"Ime":"Spinaca", "Cena":"1.33", "Uporabnost":"6"}, //10
  {"Ime":"Fizol", "Cena":"1.73", "Uporabnost":"80"}, //11
  {"Ime":"Limona", "Cena":"1.13", "Uporabnost":"10"}, //12
  {"Ime":"Jabolka", "Cena":"1.56", "Uporabnost":"11"}, //13
  {"Ime":"Raca", "Cena":"7.56", "Uporabnost":"3"}, //14
  {"Ime":"Jagnje", "Cena":"11.56", "Uporabnost":"4"}, //15
  {"Ime":"Svinjski Hrbet", "Cena":"7.83", "Uporabnost":"5"}, //16
  {"Ime":"Losos", "Cena":"15.56", "Uporabnost":"5"}, //17
  {"Ime":"Zelje", "Cena":"0.56", "Uporabnost":"15"}, //18
  {"Ime":"Dimljen losos", "Cena":"2.56", "Uporabnost":"8"}, //19
  {"Ime":"Tuna", "Cena":"0.56", "Uporabnost":"68"}, //20
  {"Ime":"Zelena solata", "Cena":"0.96", "Uporabnost":"2"} //21
  ],
  "Recepti":[
   {
    "Ime":"Piscancje tortilije",
    "Sestavine":[
    {"ID":"0","Kolicina":"1"},
    {"ID":"1","Kolicina":"1"},
    {"ID":"6","Kolicina":"2"},
    {"ID":"3","Kolicina":"5"},
    {"ID":"7","Kolicina":"1"},
    {"ID":"11","Kolicina":"1"},
    {"ID":"8","Kolicina":"1"}
    ],
    "Kalorije":"579"
  },
  {
    "Ime":"Piscanec z lisickami in spinaco",
    "Sestavine":[
    {"ID":"0","Kolicina":"4"},
    {"ID":"6","Kolicina":"1"},
    {"ID":"7","Kolicina":"3"},
    {"ID":"9","Kolicina":"4"},
    {"ID":"10","Kolicina":"1"},
    {"ID":"3","Kolicina":"1"}
    ],
    "Kalorije":"321"
  },
  {
    "Ime":"Ocvrt piscanec z zeleno solato",
    "Sestavine":[
    {"ID":"0","Kolicina":"4"},
    {"ID":"6","Kolicina":"1"},
    {"ID":"21","Kolicina":"3"},
    {"ID":"2","Kolicina":"1"}
    ],
    "Kalorije":"231"
  },
  {
    "Ime":"Jagnje z zelenjavo",
    "Sestavine":[
    {"ID":"15","Kolicina":"1"},
    {"ID":"18","Kolicina":"1"},
    {"ID":"10","Kolicina":"1"},
    {"ID":"9","Kolicina":"1"}
    ],
    "Kalorije":"523"
  },
  {
    "Ime":"Losos z limono",
    "Sestavine":[
    {"ID":"17","Kolicina":"4"},
    {"ID":"2","Kolicina":"1"},
    {"ID":"19","Kolicina":"1"},
    {"ID":"12","Kolicina":"1"}
    ],
    "Kalorije":"512"
  },
  {
    "Ime":"Pica z dimljenim lososom in smetano",
    "Sestavine":[
    {"ID":"7","Kolicina":"4"},
    {"ID":"2","Kolicina":"1"},
    {"ID":"19","Kolicina":"1"},
    {"ID":"6","Kolicina":"1"}
    ],
    "Kalorije":"324"
  },
  {
    "Ime":"Piscanec v smetanovi omaki",
    "Sestavine":[
    {"ID":"0","Kolicina":"4"},
    {"ID":"6","Kolicina":"1"},
    {"ID":"7","Kolicina":"3"},
    {"ID":"2","Kolicina":"1"}
    ],
    "Kalorije":"367"
  }
],
  "Hladilnik":[
    {"ID":"0","DatumNakupa":"11/4/2020", "Kolicina":"1"},
    {"ID":"4","DatumNakupa":"11/1/2020", "Kolicina":"3"},
    {"ID":"9","DatumNakupa":"11/2/2020", "Kolicina":"3"},
    {"ID":"2","DatumNakupa":"11/1/2020", "Kolicina":"5"},
    {"ID":"1","DatumNakupa":"11/7/2020", "Kolicina":"1"},
    {"ID":"6","DatumNakupa":"5/7/2020", "Kolicina":"6"},
    {"ID":"3","DatumNakupa":"3/7/2020", "Kolicina":"3"},
    {"ID":"7","DatumNakupa":"10/25/2020", "Kolicina":"2"},
    {"ID":"8","DatumNakupa":"10/30/2020", "Kolicina":"6"},
    {"ID":"19","DatumNakupa":"11/2/2020", "Kolicina":"3"}
  ]
}

function main(){
  updateFridge();

  /*var input = document.getElementById("search");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      getSearchResult();
    }
  });*/


  var recept = "Losos z limono";
  var ingridiends = getIngridiends(recept,podatki);
  var output =  "<h2>" + recept + "</h2>Sestavine, ki jih je potrebno kupiti: <br>";

  for(index in ingridiends["missing"]){
    output += podatki["Sestavine"][ingridiends["missing"][index]["ID"]]["Ime"] + ", kolicina: " + ingridiends["missing"][index]["Kolicina"] + "<br>";
  }
  output += "Sestavin, ki jih imamo: <br>";
  for(index in ingridiends["available"]){
    output += podatki["Sestavine"][ingridiends["available"][index]["ID"]]["Ime"] + ", kolicina: " + ingridiends["available"][index]["Kolicina"] + "<br>";
  }

  //html = document.getElementById("demo");
  //html.innerHTML = output;

}

function getRecepieIndex(name,podatki){
  for(id in podatki["Recepti"]){
    if(podatki["Recepti"][id]["Ime"] == name){
      return id;
    }
  }
  return -1;
}
function getIngridiends(name,podatki){
  var index = getRecepieIndex(name,podatki);
  var missing = [];
  var available = [];
  var flag = 0;
  for (id in podatki["Recepti"][index]["Sestavine"]){
    flag = 0;
    for(sestavine in podatki["Hladilnik"]){

      if(podatki["Hladilnik"][sestavine]["ID"] == podatki["Recepti"][index]["Sestavine"][id]["ID"]){
        flag=1;

          var kolicinaHladilnik = podatki["Hladilnik"][sestavine]["Kolicina"];
          var kolicinaRecept = podatki["Recepti"][index]["Sestavine"][id]["Kolicina"];
          available.push({"ID":podatki["Hladilnik"][sestavine]["ID"], "Kolicina":kolicinaHladilnik});

          console.log(kolicinaHladilnik - kolicinaRecept);
          if(kolicinaHladilnik - kolicinaRecept < 0){
              var manjkajocaKolicina = kolicinaRecept - kolicinaHladilnik;
              missing.push({"ID":podatki["Hladilnik"][sestavine]["ID"], "Kolicina":kolicinaRecept-kolicinaHladilnik});
          }
        break;
      }
    }


    if(flag == 0){
      missing.push({"ID":podatki["Recepti"][index]["Sestavine"][id]["ID"], "Kolicina":podatki["Recepti"][index]["Sestavine"][id]["Kolicina"]});
    }
  }

  return { "missing":missing,"available":available};
}

function getSearchData(keyword){

  var matchingRecipe = [];
  for(index in podatki["Recepti"]){
    var name = podatki["Recepti"][index]["Ime"];

    if(podatki["Recepti"][index]["Ime"].toUpperCase().includes(keyword.toUpperCase())){
        matchingRecipe.push({"Ime":podatki["Recepti"][index]["Ime"],"ID":index });
    }
  }

  return matchingRecipe;

}


function getSearchResult(){
  var input = document.getElementById("search");
  var data = getSearchData(input.value);
  console.log(data);
  //Return data
}


function getIngridiendStatus(element){

  var purchasedDate = element["DatumNakupa"];
  var uporabnost = podatki["Sestavine"][element["ID"]]["Uporabnost"];
  var today = new Date();
  var currentDate = (today.getMonth()+1) +'/'+  (today.getDay()+1) +'/'+ today.getFullYear();

  var milis = Date.parse(currentDate)-Date.parse(purchasedDate);
  var days = milis/1000/60/60/24;

  if(uporabnost >  days && uporabnost - 4 < days){
      return 1; //Rumena
  }else if(days >= uporabnost){
      return 2; //Rdeca
  }else{
      return 0; //Zelena
  }
}

function updateFridge(){

  var div = document.getElementById("Hladilnik");
  div.innerHTML = "";

  color = ["#6fa832","#F8B307", "#E04837"];


  for(var index in podatki["Hladilnik"]) {
         var idSestavine = podatki['Hladilnik'][index]['ID'];
         var imeSestavine = podatki["Sestavine"][idSestavine]["Ime"];
         var kolicina = podatki['Hladilnik'][index]["Kolicina"];
         var i = getIngridiendStatus(podatki['Hladilnik'][index]);

         var data =  `
         <div class="cnt emp" style="padding: 0;">
         <div class="cnt" style="padding:0; width:100%;">
           <div class="holder">` + imeSestavine + `</div>
         </div>
         <div class="key" style = 'background-color:` + color[i] + `'>` + kolicina + `</div>
         </div>
         `;
         div.innerHTML = data + div.innerHTML;

     }




}

function changeColor(){

}
