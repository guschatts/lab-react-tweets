function Message(props) {
    
    const { message } = props;

    return (
        <div className="message">
            <p > {message} </p>
        </div>
    )

};

export default Message;