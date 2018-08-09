var YassMath = (function () {
    function YassMath() {
        this.info = "Yassine Dardour Math Library";
        this.version = 1;
        console.log('%c ' + this.info + " Version :" + this.version, 'background: #000000; color: #FFFF00');
        console.log('%c http://www.upwork.com/o/profiles/users/_~011ad081466c08c0a8/ ', 'background: #000000; color: #FFFF00');
    }
    //  l’équation cartésienne d’une droite, connaissant un point et un vecteur directeur(exemple vitesse)
    //The Cartesian equation of a line, knowing a point and a vector steering (example speed)
    YassMath.prototype.CartesianEquationOfline = function (_Point, _Vecteur) {
        var EQ = { a: null, b: null };
        if (_Vecteur.p == 0) {
            console.log("droite parallele a l'axe Y");
            console.log("equation de la forme : x = ", _Point.x);
            EQ.SelonY = _Point.x;
        }
        else {
            if (_Vecteur.q == 0) {
                console.log("droite parallele a l'axe X");
            }
            console.log("equation de la forme : y = ax+b");
            var _a = _Vecteur.q / _Vecteur.p;
            var _b = -(_Vecteur.q * _Point.x / _Vecteur.p) + (_Vecteur.p * _Point.y / _Vecteur.p);
            EQ = { a: _a, b: _b };
        }
        return EQ;
    };
    //  l’équation cartésienne d’une droite, connaissant 2 points 
    //The Cartesian equation of a line, knowing two points 
    YassMath.prototype.CartesianEquationOfline2pt = function (_PointA, _PointB) {
        // determiner le vecteur directeur {p:_PointB.x - _PointA.x,q: _PointB.y - _PointA.y}
        return this.CartesianEquationOfline(_PointA, { p: _PointB.x - _PointA.x, q: _PointB.y - _PointA.y });
    };
    //voir si deux droites paralleles
    //check if Two parallel straight lines
    YassMath.prototype.straight_lines = function (Line1Equation, Line2Equation) {
        var Result = false;
        //console.log("straight_lines :");
        if (Line1Equation.a == Line2Equation.a) {
            Result = true;
        }
        else if (Line1Equation.a == null && Line2Equation.a == null) {
            Result = true;
        }
        return Result;
    };
    //voir si deux droites perpendiculaire
    //check ifTwo perpendicular lines
    YassMath.prototype.perpendicular_lines = function (Line1Equation, Line2Equation) {
        var Result = false;
        //console.log("perpendicular_lines :");
        if (Line1Equation.a * Line2Equation.a == -1) {
            Result = true;
        }
        else if (Line1Equation.a == null) {
            if (Line2Equation.a == 0) {
                Result = true;
            }
        }
        else if (Line2Equation.a == null) {
            if (Line1Equation.a == 0) {
                Result = true;
            }
        }
        return Result;
    };
    //déterminer point d'intersection de deux droite
    //Determine intersection point of two straight lines
    YassMath.prototype.intersectionPointOfTwoLines = function (Line1Equation, Line2Equation) {
        var pt = { x: null, y: null };
        var X = null;
        var Y = null;
        if (this.straight_lines(Line1Equation, Line2Equation)) {
            X = null;
            Y = null;
        }
        else {
            X = (Line2Equation.b - Line1Equation.b) / (Line1Equation.a - Line2Equation.a);
            Y = Line1Equation.a * X + Line1Equation.b;
        }
        pt.x = X;
        pt.y = Y;
        return pt;
    };
    //un point appartient à une droite
    //A point belongs to a straight line
    YassMath.prototype.PointBelongsToStraightLine = function (_Point, LineEquation) {
        var Result = false;
        if (LineEquation.a == null && LineEquation.b == null) {
            if (_Point.x == LineEquation.SelonY) {
                Result = true;
            }
        }
        else if (_Point.y == LineEquation.a * _Point.x + LineEquation.b) {
            Result = true;
        }
        return Result;
    };
    //un point appartient à une droite
    //A point belongs to a straight line
    YassMath.prototype.DistanceBewteew2pts = function (_Point1, _Point2) {
        var D = 0;
        D = Math.sqrt(Math.pow(_Point2.x - _Point1.x, 2) + Math.pow(_Point2.y - _Point1.y, 2));
        return D;
    };
    //coordonnées du milieu entre de deux point : milieu d'un segment
    //Coordinates of the middle of a segment
    YassMath.prototype.MiddleOfASegment = function (_Point1, _Point2) {
        var M = { x: null, y: null };
        ;
        M.x = (_Point1.x + _Point2.x) / 2;
        M.y = (_Point1.y + _Point2.y) / 2;
        return M;
    };
    //projection orthogonale d'un pt B sur une droite passant par deux points O et A, onallple le projeté H
    //Projected orthogonal of a point
    YassMath.prototype.ProjectedOrthogonalOfAPoint = function (PointB, _PointO, _PointA) {
        // equation : vecteur HB et vecteur OA sont orthogonal  HB.OA = 0;
        var _a = -(_PointA.x - _PointO.x) / (_PointA.y - _PointO.y);
        var _b = (PointB.x * (_PointA.x - _PointO.x) + PointB.y * (_PointA.y - _PointO.y)) / (_PointA.y - _PointO.y);
        //console.log(_a);
        //console.log(_b);
        // equation de la droite passant par O et A
        var EQ = this.CartesianEquationOfline2pt({ x: _PointO.x, y: _PointO.y }, { x: _PointA.x, y: _PointA.y });
        //le porjeté
        var H;
        var Hx;
        var Hy;
        //determiner Hx
        if (EQ.a == null && EQ.b == null) {
            //console.log("EQ.SelonY",EQ.SelonY);
            Hx = EQ.SelonY;
            Hy = PointB.y;
        }
        else if (EQ.a == 0) {
            //console.log("parallele a x");
            Hx = PointB.x;
            Hy = EQ.b;
        }
        else {
            Hx = (EQ.b - _b) / (_a - EQ.a);
            Hy = (EQ.a * Hx) + EQ.b;
        }
        H = { x: Hx, y: Hy };
        return H;
    };
    //distance between line OA and a point B
    YassMath.prototype.DistanceLinePoint = function (PointB, _PointO, _PointA) {
        // procetion orthogonale
        var H = this.ProjectedOrthogonalOfAPoint(PointB, _PointO, _PointA);
        //disnace entre le point et s projection
        return this.DistanceBewteew2pts(PointB, H);
    };
    return YassMath;
}());
