import {Figure, FigureNames} from  "./Figure";
import {Colors} from  "../Colors"; 
import {Cell} from  "../Cell"; 
import blackLogo from '../../assets/images/pawn-black.png'
import whiteLogo from '../../assets/images/pawn-white.png'
import { Queen } from "./Queen";

export class Pawn extends Figure {

    isFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN
    }

    canMove(target: Cell): boolean {
        
        if (!super.canMove(target)) {
            return false
        }

        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if ((target.y === this.cell.y + direction || this.isFirstStep
             && (target.y === this.cell.y + firstStepDirection))
             && target.x === this.cell.x
             && this.cell.board.getCell(target.x, target.y).isEmpty()) {
                return true;
        }

        if (target.y === this.cell.y + direction 
            && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
            && this.cell.isEnemy(target)) {
                return true
            }

        return false
    }

    moveFigure(target: Cell) {
        
        super.moveFigure(target)

        this.isFirstStep = false

        if (target.y === 0 && this.color === Colors.WHITE) {
            this.cell.figure = new Queen(Colors.WHITE, target)
        }

        if (target.y === 7 && this.color === Colors.BLACK) {
            this.cell.figure = new Queen(Colors.BLACK, target)
        }
    }
}