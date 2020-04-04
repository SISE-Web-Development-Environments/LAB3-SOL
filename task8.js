var currentPlayer="X";

function buildBoard()
{
	var rows=document.getElementById("selRowNum").value;
	var cols=document.getElementById("selColNum").value;
	var board = document.getElementById("board");
	//clear board
	if (board.hasChildNodes() )
	{
		board.removeChild(board.firstChild); 
	}
	//create new table
	var table=document.createElement("table");
	board.appendChild(table);
	//add rows and columns
	var rowNum;
	var colNum;
	for (rowNum=0;rowNum<rows;rowNum++)
	{
		var row = document.createElement("tr");
		table.appendChild(row);
		for(colNum=0;colNum<cols;colNum++)
		{
			var cell = document.createElement("td");
			row.appendChild(cell);
			cell.onclick=function() {turn()};
		}
	}
}

function turn()
{
 var cell=event.srcElement;
 if(cell.innerHTML!="")
 {
 	return;
 }
 cell.innerHTML=currentPlayer;
 if(currentPlayer=="X")
 {
 	currentPlayer="O";
 }
 else
 {
 	currentPlayer="X";
 }
}