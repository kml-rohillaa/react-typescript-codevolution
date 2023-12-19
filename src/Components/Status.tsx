type statusProps = {
    status : 'loading' | 'success' | 'error'
}

export const Status = (props : statusProps) => {
    let message

    if(props.status === 'loading'){
        message = "loading"
    }
    else if(props.status === 'success'){
        message = "successfully loaded"
    }
    else if(props.status === 'error'){
        message = "error string"
    }
    return <div>
       <h2>{message}</h2>
    </div>
}