interface Props{
    name: string;
    title: string;
}

function Introduction({name, title}: Props) {
    console.log(name);
    console.log(title);

    return (
        <div className="container">
            <h1 className='name'>{name}</h1>
            <h1 className='title'>{title}</h1>
        </div>
    )
}

export default Introduction