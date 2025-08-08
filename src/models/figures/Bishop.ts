import {Figure, FigureName} from  "./Figure";
import {Colors} from  "../Colors"; 
import {Cell} from  "../Cell"; 
import blackLogo from '../../assets/images/bishop-black.png'
import whiteLogo from '../../assets/images/bishop-white.png'

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.BISHOP
    }
}