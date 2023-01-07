
function getText(){
    document.write(`
    <style>
    body{
       background:#EEE;
    
    
    }
  
    
    .hr{
    width:100%
    hright:4px;
    background-color:black;
    }
    .textGSJ{

        width:90%
    }
    .textGSJ p ,.textGSJ h2{
        margin:10px 5%;
        
    }
    </style>
    
    <div class="textGSJ">
    <h2>Methode de Gauss </h2>
    <p class="textgauss">Une technique de choix pour ramener la résolution d'un système linéaire 
    quelconque à d'un système triangulaire et la méthode d'élimination de Gauss
     . Celle - ci consiste en premier lieu à transformer , par des opérations
      simples sur les équations , ce système en un système équivalent ,
       c'est - à - dire ayant la ( ou les ) même ( s ) solution ( s ) , M Ax = M b ,
        dans lequel M A est une matrice triangulaire supérieure
         ( on dit encore que la matrice du système est sous forme échelonnée ) .
          Cette étape de mise à zéro d'une partie des coefficients de la matrice 
          est qualifiée d'élimination et utilise de manière essentielle le fait qu'on ne 
          modifie pas la solution d'un système linéaire en ajoutant à une équation donnée
           une combinaison linéaire des autres équations . Si A est inversible ,
            la solution du système peut ensuite être obtenue par une méthode de remontée ,
             mais le procédé d'élimination est en fait très général , 
             la matrice pouvant être rectangulaire</p>
    
             </div>
    
    <hr>
             <div class="hr"></div>
    
    `)}

    
function get(){
    var n = document.getElementById("n").value;
 document.write(`<style> 
 body{
    background:linear-gradient(45deg, gray, #fff); ;
    display: flex;
    justify-content: center;
    justify-items: center;
 }
 .lesValurs{
    padding-top:180px;
 }
 input{
    width: 46px;
    height: 35px;
    font-size: 22px; 
 }


 @media(max-width:768px){
    input{
    width: 32px;
    height: 28px;
    font-size: 19px; 
    }
 }
 h3{
    display:inline-block;
 }
 .n1{
    
    display:flex;
    justify-content: center;
    justify-items: center;
    
 }
 button{
    width: 120px;
 height: 40px;
 color: #fff;
 font-weight: 800px;
 font-size: 17PX;
 background-color: black;
 margin-top: 20px;
 margin-right:15px;
 border-radius: 5px;
 box-shadow: 0 0 10px  #FFF;
 display: inline-block;
 border: none;
 -webkit-transition-duration: .3s;
 transition-duration: .3s;
 -webkit-transition-property: box-shadow,transform;
 transition-property:  box-shadow,transform;
 
 }
 button:hover , button:focus ,button:active{
 
    box-shadow: 0 0 20 #FFF;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    background-color: black;
 }
 
 h3 {
    display: inline-block;
 }
 
 
 .btn2{
    display:none;
 }
 </style>`)
 document.write(`
 <div class="lesValurs" > `)
 
 for(var i=0; i<n;i++){
    document.write(`<div>`)
    for(var j=0; j<n;j++){
    document.write(`
        <input type="number" id="val-${i}${j}">
          <h3>X${j+1}</h3>    `)}
       document.write(` = <input type="number" id="val-${i}">
       </div> <br>`)
    }
    document.write(`
    <div class="btn" style="display:flex; justify-content: center;">
    <div>
    <button onclick="gauss()"  onclick="getx0()" onclick="jacobi()"  type="button" class="btn" id="c">submite</button> 
   
   <input type="number" id="n1" value="${n}" style="display:none">
   </div></div></div></div>`)
 
 document.getElementById("c").onclick = function(){
 document.write(`
 <style>
 .lesValurs{
    display:none;
 }
 .btn2{
    display:flex;
    
    justify-content: center;
    align-items: center;
    margin: 100px 50%;
 }
 
 .btn2 button{
    width:300px;
    height:50px;
 }
 
 </style>
 <div class="btn2" >
 <div>
 <button type="button" id="1" value="1" onclick="gauss()" >gauss</button>
 <button type="button" id="2" value="2" onclick="saidle()" >gauss saidle</button>
 <button type="button" id="3" value="3" onclick="jacobi()" >jacobi</button>
 </div></div>
 `)}};
 
 
// -------------------------------------------------------------------------------
//                                   gauss 
// --------------------------------------------------------------------------------
function gauss(){
    document.write(`
    <style>
    .btn2{
       display:none;
    }
    </style>
    `)
      
      let n = document.getElementById("n1").value;
       
      let a = []; let b = [];
       for(var i=0; i<n;i++){
    
          a[i] = [];  
          for(var j=0; j<n;j++){
        a[i][j] = +document.getElementById(`val-${i}${j}`).value;
      
       }
        b[i] = +document.getElementById(`val-${i}`).value;
    }
    console.log(a);
    console.log(b);
    
    
    
    
    var temp;
    for( i=0;i<n;i++){
       for(j=i+1;j<n;j++){
          if(Math.abs(a[i][i]<a[j][i])){
          for(var i2=0;i2<n;i2++){
    
           temp=a[i][i2];
           a[i][i2]=a[j][i2];
           a[j][i2]=temp;
    
          }
          temp=b[i];
          b[i]=b[j];
          b[j]=temp;
          
         
       }}}
    
    let s1;
    for(let x=0;x<n-1;x++){
    for(i=x+1;i<n;i++){
    
        if(a[i][x] === 0){
         
            continue;
                }else{
          //  console.log(a[i][x]/a[0][x]);
           s1 = a[i][x] / a[x][x];
    
           
    for(j=x;j<n;j++){
    a[i][j]=a[i][j]-(s1*a[x][j]);
    }
    b[i]-=s1*b[x];
    }
    }}
    document.write(`<style> 
    body{
      
       display: flex;
      justify-content: space-around;
       align-items: center;
       flex-wrap:wrap;
       
    }
  
    .lesValurs{
       display:none;
    }
    .x{
       font-size:12px;
    }
    .afficherVal{
       word-spacing:10px;
    }

    media(max-width:768px){

   


}

    }
    </style>
    <div class="afficherVal">
    <div>
    `)
    for(var i=0; i<n;i++){
       document.write(`<div>`)
       for(var j=0; j<n;j++){
       document.write(`
             <h3>${(a[i][j].toFixed(2))}X<span class="x">${j+1}</span></h3> `)
          }
          document.write(` = <h3>${(b[i].toFixed(2))}</h3> 
         
          </div> <br> `)
       }
       document.write(`
       </div> </div>  
       <div class="soulition">`)
    
      let x=[] ;
       for(i=0;i<n;i++){
        x[i]=b[i];
       }
       for(j=n-1;j>=0;j--){
       if(a[j][j] !== 0){
       
         x[j]/=a[j][j];
       
         document.write(`<h2>X${j+1} : ${(x[j].toFixed(2))}</h2>`) 
        
       }
       else{
            x[j]=0;
        document.write(`<h2>X${j+1} : ${(x[j].toFixed(2))}</h2>`)
       }
       for(i=j-1;i>=0;i--){
       x[i]=x[i]-(x[j]*a[i][j]);
       }
       }
       document.write(`</div> </div>`)
    };
 // -------------------------------------------------------------------------------
//                                gauss saidle
// --------------------------------------------------------------------------------

function saidle(){ 
    let n = document.getElementById("n1").value;
    
    document.write(`
    <style>
 body{
    display:block;
 }
 
   .x{
    margin:180px;
       display: flex;
       justify-content:space-evenly;
       align-items: center;
       
    }
    @media(max-width:768px){
       h2{
          display:block;
       }
       .x0{
          display:flex;
          justify-content:center;
       }
       .x0 div {
          margin:8px;
       }
       .x{
          display:block;
          margin:200px auto;
       }
       .nbrSoulition{
       display: flex;
       align-items: center;
       justify-content: center;
       }
       .nbrSoulition input{
          margin: 0 10px;
       }
 
    }
   }
 
   
    .btn2{
       display:none;
    }
     h2 {
       
       display: inline-block;
    }
   .xx0{
    display: inline-block;
    }
    
    .btn2{
       display:none;
    }
    .btn33{
       
   
       display: flex;
       justify-content:center;
       align-items: center;
       margin-top:-140px;
       
    }
    .sec1{
 
 
       
          background-color:#2f4f4f;
          
          color: #fff;
          width: 100%;
          height: 90px;
          display: flex;
          justify-content: center;
          color:#FFF;
      
    }
    sup{
       color:red;
    }
 
 </style>
 <div class="sec1">
    <h1>methode de gauss saidle</h1>
    </div>
 <div class="x">
 <div class="x0"> `)
  for(var i=0;i<n;i++){
    document.write(`<div>
    <h2>X${i+1}<sup>(0)</sup></h2> 
    <input type="number" id="x0${i}" class="xx0" value="0"></div>
    
    `)}
    document.write(`
    </div>
    <div class="nbrSoulition">
    <h4> nombre de soluition : </h4>
    <input type="number" id="soul">
    </div></div>
    </div>
    
    <div class="btn33">
    <button type="button" onclick="getx00()"  onclick="saidle()" class="btn3">submit</button>
    </div>
 `)
 };

 function getx00(){  
   
    let  n = +document.getElementById("n1").value;
    
    let a = []; let b = [];
        for(var i=0; i<n;i++){
           a[i] = [];  
           for(var j=0; j<n;j++){
         a[i][j] = +document.getElementById(`val-${i}${j}`).value;
        }
         b[i] = +document.getElementById(`val-${i}`).value;
     }
     var ns = +document.getElementById("soul").value;
     let x0=[];
     for(var i=0;i<n;i++){
    
      x0[i] = +document.getElementById(`x0${i}`).value;
     }
     console.log(a);
    console.log(b);
    
     
     let s=[];
     let s1;
     
     for(var k1=0;k1<n;k1++){
        for(var k=0;k<n;k++){
           for(i=0;i<n;i++){
              for(var i1=0;i1<n;i1++){
               s[i]=0;
              }
              for( j=0;j<n;j++){
                 if(j !== i){
                    s[i]+=Math.abs(a[i][j]);
                 }}}
     
                 for(i=k;i<n-1;i++){
                    if(Math.abs(a[i][i]) >= Math.abs(s[i])){
                       continue;
                    }else{
                       for( j=0;j<n;j++){
                            
                          s1=a[i][j];
                          a[i][j]=a[i+1][j];
                          a[i+1][j]=s1;}
                          s1=b[i];
                          b[i]=b[i+1];
                          b[i+1]=s1;
                    }}}}
     
    
    document.write(`
    
    
    
     <style>
    
     .x , .btn3{
        display:none;
     }
     @media(max-width:768px){
    body .saidleSoul h2{
        font-size:15px;
    }}

    .saidleSoul{
       word-spacing:20px;
       display:flex;
       justify-content:center;
       align-items:center;
       margin-top:230px;
    }
    @media(max-width:768px){
      .saidleSoul > div{
         display:grid;
      }
    }
     </style>
     `)
    
    
    
    let a1;
    document.write(`<div class="saidleSoul">
    <div>`)
    for(let k=0;k<ns;k++){
       for(i=0; i<n; i++){
    a1=0;
       
       for(j=0;j<n;j++){
       if(i !== j){
          a1+=a[i][j]*x0[j];
       }}
       x0[i]=(b[i]-a1)/a[i][i];
     
       document.write(`
      
       <h3>X${i+1}<sup>(${k+1})</sup>=${(x0[i]).toFixed(2)}</h3>
       `)}
       document.write(`
      <br>
       `)}
       document.write(`</div> </div>`)
    };
       
    


    

function jacobi(){ 
    let n = document.getElementById("n1").value;
    
    
 
    document.write(`
    <style>
 body{
    display:block;
 }
 
   .x{
    margin:180px;
       display: flex;
       justify-content:space-evenly;
       align-items: center;
       
    }
   }
    .btn2{
       display:none;
    }
     h2 {
       
       display: inline-block;
    }
   .xx0{
    display: inline-block;
    }
    
    .btn2{
       display:none;
    }
    .btn33{
       
   
       display: flex;
       justify-content:center;
       align-items: center;
       margin-top:-140px;
       
    }
    @media(max-width:768px){
        h2{
           display:block;
        }
        .x0{
           display:flex;
           justify-content:center;
        }
        .x0 div {
           margin:8px;
        }
        .x{
           display:block;
           margin:200px auto;
        }
        .nbrSoulition{
        display: flex;
        align-items: center;
        justify-content: center;
        }
        .nbrSoulition input{
           margin: 0 10px;
        }
  
     }
    .sec1{
 
 
       
          background-color:#2f4f4f;
          
          color: #fff;
          width: 100%;
          height: 90px;
          display: flex;
          justify-content: center;
          color:#FFF;
      
    }
 sup{
    color:red;
 }
 </style>
 <div class="sec1">
    <h1>methode de jacobi</h1>
    </div>
 <div class="x">
 <div class="x0"> `)
  for(var i=0;i<n;i++){
    document.write(`<div>
    <h2>X${i+1}<sup>(0)</sup></h2> 
    <input type="number" id="x0${i}" class="xx0" value="0"></div>
    
    `)}
    document.write(`
 
    
    </div>
    <div class="nbrSoulition">
    <h3> nombre de soluition : </h3>
    <input type="number" id="soul">
    </div></div>
    </div>
    
    <div class="btn33">
    <button type="button" onclick="getx0()"  onclick="saidle()" class="btn3">submit</button>
    </div>
 `)
 
 };

 
function getx0(){  
    let  n = +document.getElementById("n1").value;
    console.log(n);
    let a = []; let b = [];
        for(var i=0; i<n;i++){
           a[i] = [];  
           for(var j=0; j<n;j++){
         a[i][j] = +document.getElementById(`val-${i}${j}`).value;
        }
         b[i] = +document.getElementById(`val-${i}`).value;
     }
     console.log(a);
     console.log(b);
 
 
     var ns = +document.getElementById("soul").value;
     let x0=[];
     for(var i=0;i<n;i++){
      x0[i] = +document.getElementById(`x0${i}`).value;
     }
   
    
    document.write(`
    
    
    
     <style>
    
     .x , .btn3{
        display:none;
     }
    body{
      
    }
    .saidleSoul{
       word-spacing:20px;
       display:flex;
       justify-content:center;
       align-items:center;
       margin-top:230px;
    
    
    }
    
    
     </style>
     
     
     `)
 
 
 
   
 
     let s=[];
     let s1;
     
     for(var k1=0;k1<n;k1++){
        for(var k=0;k<n;k++){
           for(i=0;i<n;i++){
              for(var i1=0;i1<n;i1++){
               s[i]=0;
              }
              for( j=0;j<n;j++){
                 if(j !== i){
                    s[i]+=Math.abs(a[i][j]);
                 }}}
     
                 for(i=k;i<n-1;i++){
                    if(Math.abs(a[i][i]) >= Math.abs(s[i])){
                       continue;
                    }else{
                       for( j=0;j<n;j++){
                            
                          s1=a[i][j];
                          a[i][j]=a[i+1][j];
                          a[i+1][j]=s1;}
                          s1=b[i];
                          b[i]=b[i+1];
                          b[i+1]=s1;
                    }}}}
     
     console.log(a);
     console.log(b);
    
 
    let a1;
    let a2 =[];
    document.write(`<div class="saidleSoul">
    <div>`)
    for(let k=0;k<ns;k++){
       for(i=0; i<n; i++){
    a2[i]=0;
       
       for(j=0;j<n;j++){
       if(i !== j){
          a2[i]+=a[i][j]*x0[j];
          }}}
          for(i=0;i<n;i++){
       x0[i]=(b[i]-a2[i])/a[i][i];
       console.log(x0);
       document.write(`
       <h2>X${i+1}<sup>(${k+1})</sup>=${(x0[i]).toFixed(2)}</h2>
       `)}
       document.write(`
      <br>
       `)}
       document.write(`</div> </div>`)
    };
       
