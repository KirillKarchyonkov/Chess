import {Figure, FigureName} from  "./Figure";
import {Colors} from  "../Colors"; 
import {Cell} from  "../Cell"; 
import blackLogo from '../../assets/images/queen-black.png'
import whiteLogo from '../../assets/images/queen-white.png'

export class Queen extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.QUEEN
    }
}