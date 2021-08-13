
function Article({title, date, preview}) {
    return (
        <>
            <article>
                <h3>{title}</h3>
                <small>{date ? <small>{date}</small> : 'January 1, 1970' }</small>
                <p>{preview}</p>
            </article>            
        </>
    )
}

export default Article;