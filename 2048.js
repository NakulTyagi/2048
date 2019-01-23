var arr=new Array(4)
for (var i=0; i <4; i++)
    arr[i]=new Array(4)

for(var x=0;x<4;x++){
    for(var y=0;y<4;y++){
        arr[x][y]=null;
    }

}

arr[1][2]=2;
arr[2][2]=2;
function up(){
    for(var i=2;i>=0;i--){
       for(var j=0;j<4;j++){
           if(i<3&&arr[i][j]!=null){
               if(arr[i][j]==arr[i+1][j]){
                    arr[i][j]=arr[i+1][j]+arr[i][j];
                   arr[i+1][j]=null;
               }
           }
          
           if(arr[i][j]==null){
               arr[i][j]=arr[i+1][j];
               arr[i+1][j]=null;
           }
       }
    }

//   var row=Math.floor(Math.random()*4+1);
//    var col=Math.floor(Math.random()*4+1);
//    if(arr[row][col]==null){
//           arr[row][col]=2;
//            
//     }
    do{
       var row=Math.floor(Math.random()*4+1);
       var  col=Math.floor(Math.random()*4+1); 
        if(arr[row][col]==null){
            arr[row][col]=2;
            break;
        }
    }
    while(arr[row][col]!=null);
    print();
}

function down(){
    for(var i=1;i<4;i++){
       for(var j=0;j<4;j++){
           if(i>0&&arr[i][j]!=null){
               if(arr[i][j]==arr[i-1][j]){
                    arr[i][j]=arr[i-1][j]+arr[i][j];
                    arr[i-1][j]=null;
               }
           }
           if(arr[i][j]==null&&arr[i-1][j]!=null){
               arr[i][j]=arr[i-1][j];
               arr[i-1][j]=null;
           }
       }
    }
//     var row=Math.floor(Math.random()*4+1);
//    var col=Math.floor(Math.random()*4+1);
//    if(arr[row][col]==null){
//            arr[row][col]=2;
//            
//       }
 do{
       var row=Math.floor(Math.random()*4+1);
       var  col=Math.floor(Math.random()*4+1); 
        if(arr[row][col]==null){
            arr[row][col]=2;
            break;
        }
    }
    while(arr[row][col]!=null);
    print();
}

function left(){
    for(var j=2;j>=0;j--){
       for(var i=0;i<4;i++){
           if(j<3&&arr[i][j]!=null){
               if(arr[i][j]==arr[i][j+1]){
                    arr[i][j]=arr[i][j+1]+arr[i][j];
                    arr[i][j+1]=null;
               }
           }
           if(arr[i][j]==null&&arr[i][j+1]!=null){
               arr[i][j]=arr[i][j+1];
               arr[i][j+1]=null;
           }
       }
    }
//     var row=Math.floor(Math.random()*4);
//    var col=Math.floor(Math.random()*4);
//    if(arr[row][col]==null){
//            arr[row][col]=2;
//            
//       }
 do{
       var row=Math.floor(Math.random()*4+1);
       var  col=Math.floor(Math.random()*4+1); 
        if(arr[row][col]==null){
            arr[row][col]=2;
            break;
        }
    }
    while(arr[row][col]!=null);
    print();
}

function right(){
    for(var j=1;j<4;j++){
       for(var i=0;i<4;i++){
           if(j>0&&arr[i][j]!=null){
               if(arr[i][j]==arr[i][j-1]){
                    arr[i][j]=arr[i][j-1]+arr[i][j];
                    arr[i][j-1]=null;
               }
           }
           if(arr[i][j]==null&&arr[i][j-1]!=null){
               arr[i][j]=arr[i][j-1];
               arr[i][j-1]=null;
           }
       }
    }
//     var row=Math.floor(Math.random()*4+1);
//    var col=Math.floor(Math.random()*4+1);
//    if(arr[row][col]==null){
//            arr[row][col]=2;
//            
//       }
 do{
       var row=Math.floor(Math.random()*4+1);
       var  col=Math.floor(Math.random()*4+1); 
        if(arr[row][col]==null){
            arr[row][col]=2;
            break;
        }
    }
    while(arr[row][col]!=null);
    print();
}

function print(){
        for( x=0;x<4;x++){
            for( y=0;y<4;y++){
                console.log(arr[x][y]);
                document.getElementById("table").rows[x].cells[y].innerHTML=arr[x][y];
            }
            console.log("\n");
        }
//  document.getElementById("table").rows[0].cells[0].innerHTML=arr[0][2];
//  document.getElementsByName("r1c1").innerHTML=2;
//    document.getElementsByName("r1c2").innerHTML=arr[0][1];
//    document.getElementsByName("r1c3").innerHTML="<td>"+arr[0][2]+"</td>";
//    document.getElementsByName("r1c4").innerHTML=arr[0][3];
//    document.getElementsByName("r2c1").innerHTML=arr[1][0];
//    document.getElementsByName("r2c2").innerHTML=arr[1][1];
//    document.getElementsByName("r2c3").innerHTML=arr[1][2];
//    document.getElementsByName("r2c4").innerHTML=arr[1][3];
//    document.getElementsByName("r3c1").innerHTML=arr[2][0];
//    document.getElementsByName("r3c2").innerHTML=arr[2][1];
//    document.getElementsByName("r3c3").innerHTML=arr[2][2];
//    document.getElementsByName("r3c4").innerHTML=arr[2][3];
//    
}