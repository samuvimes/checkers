
var i = 0, m=0, k=0, tableSet = 0;
var p1turn = true;
function SetTable(){
  if (tableSet = 1)
  {
    var foo = document.getElementById('addcontainer');
    while (foo.firstChild) foo.removeChild(foo.firstChild);
    tableSet=0
  };
  for(k=1;k<=8;k++){
    if(k%2==0)
    {
      for (m=1;m<=8;m++){
        /*parzysty row*/
        var field = document.createElement("DIV");
        field.className+= "nowydiv ";
        field.id=k+"-"+m;
        if ((m%2)==0){
          field.className+= "czarny ";
        }
        else{
          field.className+= "bialy ";
        };
        if ((m-1)%8==0){
          field.className+= "clear ";
        }
        document.getElementById('addcontainer').appendChild(field);
      }
    }
    else
    {
      for (m=1;m<=8;m++){
        /*nieparzysty row*/
        var field = document.createElement("DIV");
          field.className+= "nowydiv ";
          field.id=k+"-"+m;
        if ((m-1)%2==0){
          field.className+= "czarny ";
        }
        else{
          field.className+= "bialy ";
        };
        if ((m-1)%8==0){
          field.className+= "clear ";
        }
        document.getElementById('addcontainer').appendChild(field);
      };
    }
  };
  tableSet = 1;
}

function SetPlayer1(){
  for (m=1;m<=8;m++){
    if(m%2==0){
      var plr1 = document.createElement("DIV");
      plr1.className+= "player1 ";
      document.getElementById('8-'+m).appendChild(plr1);
    }
  }
  for (m=1;m<=8;m++){
    if(m%2==0){
      var plr1 = document.createElement("DIV");
      plr1.className+= "player1 ";
      document.getElementById('6-'+m).appendChild(plr1);
    }
  }
  for (m=1;m<=8;m++){
    if(m%2!=0){
      var plr1 = document.createElement("DIV");
      plr1.className+= "player1 ";
      document.getElementById('7-'+m).appendChild(plr1);
    }
  }
};

function SetPlayer2(){
  for (m=1;m<=8;m++){
    if(m%2!=0){
      var plr2 = document.createElement("DIV");
      plr2.className+= "player2 ";
      document.getElementById('1-'+m).appendChild(plr2);
    }
  }
  for (m=1;m<=8;m++){
    if(m%2==0){
      var plr2 = document.createElement("DIV");
      plr2.className+= "player2 ";
      document.getElementById('2-'+m).appendChild(plr2);
    }
  }
  for (m=1;m<=8;m++){
    if(m%2!=0){
      var plr2 = document.createElement("DIV");
      plr2.className+= "player2 ";
      document.getElementById('3-'+m).appendChild(plr2);
    }
  }
};

function PlayerTurn(){

}

window.onload = WhoTurn;

function WhoTurn(){
  if(p1turn === true){
    document.getElementById('whoseturn').innerHTML="Player1(white)turn!";
  }
  else{
    document.getElementById('whoseturn').innerHTML="Player2(red)turn!";
  }
}


function Move(){

}
