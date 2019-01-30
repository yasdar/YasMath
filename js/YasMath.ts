interface Point {
    x:number;
    y:number;
}
interface Vecteur {
    p:number;
    q:number;
}
interface CartesianEquation {
    a:number;
    b:number;
    SelonY?:number;
}

interface Circle {
    Radius:number;
    Center:Point;
    name?:string;
}
class YassMath {
  info:string = "Yassine Dardour Personal Math Library";
  version:number = 1;
  constructor(){
  console.log('%c '+this.info+" Version :"+this.version,'background: #000000; color: #FFFF00');
  console.log('%c http://www.upwork.com/o/profiles/users/_~011ad081466c08c0a8/ ','background: #000000; color: #FFFF00');
 }
 //  l’équation cartésienne d’une droite, connaissant un point et un vecteur directeur(exemple vitesse)
 //The Cartesian equation of a line, knowing a point and a vector steering (example speed)
 CartesianEquationOfline(_Point:Point,_Vecteur:Vecteur){

 var EQ:CartesianEquation = {a:null,b:null}; 

  if(_Vecteur.p == 0){
      console.log("droite parallele a l'axe Y");
      console.log("equation de la forme : x = ",_Point.x);
      EQ.SelonY=_Point.x;
}

  else{
 if(_Vecteur.q == 0){console.log("droite parallele a l'axe X");}
 console.log("equation de la forme : y = ax+b");
  var _a : number = _Vecteur.q/_Vecteur.p;
  var _b : number = -(_Vecteur.q*_Point.x/_Vecteur.p)+(_Vecteur.p*_Point.y/_Vecteur.p);
  EQ = {a:_a,b:_b}; 
  }
  return EQ;
  }

  //  l’équation cartésienne d’une droite, connaissant 2 points 
 //The Cartesian equation of a line, knowing two points 
 CartesianEquationOfline2pt(_PointA:Point,_PointB:Point){
  // determiner le vecteur directeur {p:_PointB.x - _PointA.x,q: _PointB.y - _PointA.y}
  return this.CartesianEquationOfline(_PointA,{p:_PointB.x - _PointA.x,q: _PointB.y - _PointA.y});
  }

 //voir si deux droites paralleles
 //check if Two parallel straight lines
 straight_lines(Line1Equation:CartesianEquation,Line2Equation:CartesianEquation){
     var Result:boolean = false;
     //console.log("straight_lines :");
  if (Line1Equation.a == Line2Equation.a){Result = true;}
  else if(Line1Equation.a==null && Line2Equation.a==null){Result = true;}
  return Result;
  }

//voir si deux droites perpendiculaire
//check ifTwo perpendicular lines
perpendicular_lines(Line1Equation:CartesianEquation,Line2Equation:CartesianEquation){
     var Result:boolean = false;
     //console.log("perpendicular_lines :");
  if (Line1Equation.a*Line2Equation.a==-1){Result = true;}
  else if(Line1Equation.a== null){if(Line2Equation.a == 0){Result = true;}}
  else if(Line2Equation.a== null){if(Line1Equation.a == 0){Result = true;}}
  return Result;
  }

  //déterminer point d'intersection de deux droite
  //Determine intersection point of two straight lines
intersectionPointOfTwoLines(Line1Equation:CartesianEquation,Line2Equation:CartesianEquation){
    var pt:Point = {x:null,y:null};
    var X = null; 
    var Y = null; 
if(this.straight_lines(Line1Equation,Line2Equation)){
X = null;
Y = null; 
//console.log("no intersection");
}else{
X = (Line2Equation.b - Line1Equation.b)/(Line1Equation.a - Line2Equation.a)
Y = Line1Equation.a * X  +Line1Equation.b;
}
pt.x = X;
pt.y = Y;
return pt;
}
//un point appartient à une droite
//A point belongs to a straight line
PointBelongsToStraightLine(_Point:Point,LineEquation:CartesianEquation){
var Result:boolean = false;
if(LineEquation.a == null && LineEquation.b == null){
    if(_Point.x == LineEquation.SelonY){ Result = true;}
}else if(_Point.y == LineEquation.a * _Point.x  + LineEquation.b){
   Result = true;
}
return Result;
}
//un point appartient à une droite
//A point belongs to a straight line
DistanceBewteew2pts(_Point1:Point,_Point2:Point){
   var D:number=0;
    D = Math.sqrt(Math.pow(_Point2.x-_Point1.x,2)+Math.pow(_Point2.y-_Point1.y,2));
return D;
}
//coordonnées du milieu entre de deux point : milieu d'un segment
//Coordinates of the middle of a segment
MiddleOfASegment(_Point1:Point,_Point2:Point){
   var M:Point = {x:null,y:null}; ;
    M.x = (_Point1.x + _Point2.x)/2;
    M.y = (_Point1.y + _Point2.y)/2;
return M;
}
//projection orthogonale d'un pt B sur une droite passant par deux points O et A, onallple le projeté H
//Projected orthogonal of a point
ProjectedOrthogonalOfAPoint(PointB:Point,_PointO:Point,_PointA:Point){
// equation : vecteur HB et vecteur OA sont orthogonal  HB.OA = 0;
var _a:number = -(_PointA.x-_PointO.x)/(_PointA.y-_PointO.y);
var _b:number = (PointB.x*(_PointA.x-_PointO.x) +PointB.y*(_PointA.y-_PointO.y))/(_PointA.y-_PointO.y);
//console.log(_a);
//console.log(_b);
// equation de la droite passant par O et A
var EQ:CartesianEquation = this.CartesianEquationOfline2pt({x:_PointO.x,y:_PointO.y},{x:_PointA.x,y:_PointA.y});
//le porjeté
var H:Point;
var Hx:number
var Hy:number
//determiner Hx
if(EQ.a == null && EQ.b == null){
//console.log("EQ.SelonY",EQ.SelonY);
Hx = EQ.SelonY;
Hy= PointB.y;
}else if(EQ.a == 0){
//console.log("parallele a x");
Hx = PointB.x;
Hy= EQ.b;
}else{
Hx = (EQ.b - _b)/(_a - EQ.a);
Hy= (EQ.a*Hx) +EQ.b;
}
H = {x:Hx,y:Hy};
return H;
}
//distance between line OA and a point B
DistanceLinePoint(PointB:Point,_PointO:Point,_PointA:Point){
// procetion orthogonale
var H :Point = this.ProjectedOrthogonalOfAPoint(PointB,_PointO,_PointA);
//disnace entre le point et s projection
return this.DistanceBewteew2pts(PointB,H);
}
//ntersections entre deux cercles
//intersections between two circles
//http://math.15873.pagesperso-orange.fr/IntCercl.html
TwoCerclesIntersections(C1:Circle,C2:Circle){
    var P1:Point;
    var P2:Point;

if(C1.Center.x == C2.Center.x && C1.Center.y == C2.Center.y && C1.Radius == C2.Radius){console.log("Circle1 overlap circle2 intersection : the entire circle equation"); return;}
//1 case C1.Center.y != C2.Center.y
if(C1.Center.y != C2.Center.y){
//console.log(C1,C2);
var N = (  Math.pow(C2.Radius,2)-Math.pow(C1.Radius,2)-Math.pow(C2.Center.x,2)+Math.pow(C1.Center.x,2)-Math.pow(C2.Center.y,2)+Math.pow(C1.Center.y,2)   )/(2*(C1.Center.y-C2.Center.y));
//console.log("N",N);
var A = Math.pow( (C1.Center.x-C2.Center.x)/(C1.Center.y-C2.Center.y),2 )+1;
//console.log("A",A);
var B =  ( 2*C1.Center.y*(C1.Center.x-C2.Center.x)/(C1.Center.y-C2.Center.y) )   -(2*N*(C1.Center.x-C2.Center.x)/(C1.Center.y-C2.Center.y)) - (2*C1.Center.x);
//console.log("B",B);
var C =  Math.pow(C1.Center.x,2)+Math.pow(C1.Center.y,2)+Math.pow(N,2)-Math.pow(C1.Radius,2)-(2*C1.Center.y*N)
//console.log("C",C);
var Delta = Math.sqrt( Math.pow(B,2)-(4*A*C) );
//console.log("Delta",Delta);
var x1 = (-B+Delta) / (2*A);
//console.log("x1",x1);
var y1 = N -x1*(C1.Center.x-C2.Center.x)/(C1.Center.y-C2.Center.y );
//console.log("y1",y1);

var x2 = (-B-Delta) / (2*A);
//console.log("x2",x2);
var y2 = N -x2*(C1.Center.x-C2.Center.x)/(C1.Center.y-C2.Center.y );
//console.log("y2",y2);


if( !isNaN(x1) && !isNaN(y1) ){P1 = {x:x1,y:y1}};
if( !isNaN(x2) && !isNaN(y2) ){P2 = {x:x2,y:y2}};

}else{
    //case 2 C1.Center.y == C2.Center.y

    var A =1 ;
   // console.log("A",A);
    var B =  -2*C2.Center.y;
   // console.log("B",B);
    var X = (Math.pow(C2.Radius,2)-Math.pow(C1.Radius,2)-Math.pow(C2.Center.x,2)+Math.pow(C1.Center.x,2))/(2*(C1.Center.x-C2.Center.x));
   // console.log("X",X);
    
    var C =  Math.pow(C2.Center.x,2)+Math.pow(X,2)-( 2*(C2.Center.x*X) )+Math.pow(C2.Center.y,2)-Math.pow(C2.Radius,2);

  //  console.log("C",C);
    var Delta = Math.sqrt( Math.pow(B,2)-(4*A*C) );
  //  console.log("Delta",Delta);

    var x1 = X;
    //console.log("x1",x1);
    var y1 = (-B+Delta) / (2*A)
  //  console.log("y1",y1);
    
    var x2 = X;
   // console.log("x2",x2);
    var y2 = (-B-Delta) / (2*A)
   // console.log("y2",y2);

    if( !isNaN(x1) && !isNaN(y1) ){P1 = {x:x1,y:y1}};
    if( !isNaN(x2) && !isNaN(y2) ){P2 = {x:x2,y:y2}};

}
return [P1,P2];


}
















}
