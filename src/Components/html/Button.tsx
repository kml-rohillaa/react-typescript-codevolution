type ButtonProps = {
    variant : 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export const ButtonProps = ({variant , children , ...rest} : ButtonProps) => {
    return <button
    className={`class-with-${variant}`} {...rest} >
       {children}
    </button>
}