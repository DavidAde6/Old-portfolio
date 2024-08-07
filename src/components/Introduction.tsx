

interface Props{
    name: string;
    title: string;
}

function Introduction({name, title}: Props) {
    window.scroll({top:0})
    return (
        <div className="introductionContainer">
            <div className="nameWhiteSpace"></div>
            <div className="titleWhiteSpace"></div>
            <h1 className='name'>{name}</h1>
            <h1 className='title'>{title}</h1>
        </div>
    )
}

export default Introduction