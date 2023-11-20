import { Component } from '@angular/core';

@Component({
  selector: 'app-xoxoyun',
  templateUrl: './xoxoyun.component.html',
  styleUrls: ['./xoxoyun.component.css']
})
export class XoxoyunComponent {
  moves:any=[];
mark:string="X";
gameOver:boolean=false;
message:String="Sıradaki X";
games:string[]=[
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""

];
newGame(){
  this.mark="X";
this.message="Sıradaki X";
this.games=[
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""

];
this.gameOver=false;

}
setMark(index:number){
if(this.games[index]=="" &&this.gameOver==false)
{this.games[index]=this.mark;
  this.moves.push([...this.games]);
  this.isGameOver();
  if(this.gameOver)
  {
    this.message="oyun bitti kazanan"+this.mark;
  }
  else{
    if(this.mark=="X")this.mark="O"
    else this.mark="X"

    this.message=`Sıradaki ${this.mark}`;
  }

  }

}
returnSelectMove(index:number)
{
  this.games=this.moves[index];
}
isGameOver(){
  if(this.games[0]!=""&&
  this.games[0]===this.games[1]&&
  this.games[1]===this.games[2])
  {
    this.gameOver=true;
  }
  if(this.games[3]!=""&&
  this.games[3]===this.games[4]&&
  this.games[4]===this.games[5])
  {
    this.gameOver=true;
  }
  if(this.games[6]!=""&&
  this.games[6]===this.games[7]&&
  this.games[7]===this.games[8])
  {
    this.gameOver=true;
  }

  if(this.games[0]!=""&&
  this.games[0]===this.games[3]&&
  this.games[3]===this.games[6])
  {
    this.gameOver=true;
  }
}
}
