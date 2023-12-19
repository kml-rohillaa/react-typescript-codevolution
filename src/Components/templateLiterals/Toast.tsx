/**
 * position can be one of 
 * 'left-center' | 'left-top' | 
 */


type HorizontalPostion = 'left' | 'center' | 'right'
type VerticalPostion = 'top' | 'center' | 'bottom'

type ToastProps = {
    position : Exclude<`${HorizontalPostion}-${VerticalPostion}`, 'center-center'>| 'center'
}
export const Toast = ({position} : ToastProps) => {
    return <div>Toast notification postion _ {position}</div>
}