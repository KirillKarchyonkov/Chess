import { Colors } from '../Colors'
import { Cell } from '../Cell'
import logo from '../../assets/black-king.png'

export enum FigureName {
    FIGURE = 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    BISHOP = 'Слон'
}

export class Figure {
    color: Colors
    logo: typeof logo | null
    cell: Cell
    name: FigureName
    id: number

    constructor(color: Colors, cell: Cell) {
        this.color = color
        this.cell = cell
        this.name = FigureName.FIGURE
        this.logo = null
        this.cell.figure = this
        this.id = Math.random()
    }

    canMove(target: Cell): boolean {
        return true
    }

    moveFigure(target: Cell) {
        
    }
}