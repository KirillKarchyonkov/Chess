import {Figure, FigureName} from  "./Figure";
import {Colors} from  "../Colors"; 
import {Cell} from  "../Cell"; 
import blackLogo from '../../assets/images/knight-black.png'
import whiteLogo from '../../assets/images/knight-white.png'

export class Knight extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.KNIGHT
    }
}