import {Figure, FigureName} from  "./Figure";
import {Colors} from  "../Colors"; 
import {Cell} from  "../Cell"; 
import blackLogo from '../../assets/images/pawn-black.png'
import whiteLogo from '../../assets/images/pawn-white.png'

export class Pawn extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.PAWN
    }
}