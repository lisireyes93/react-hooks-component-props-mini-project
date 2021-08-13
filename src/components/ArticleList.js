import Article from './Article';
function ArticleList({posts}) {
    return (
        <>
            <main>
                {posts.map(pInfo => {
                    return (
                        <Article
                            key={pInfo.id}
                            title={pInfo.title}
                            date={pInfo.date}
                            preview={pInfo.preview}

                        />
                    )
                }
                )}
            </main>          
        </>
    )
}

export default ArticleList;