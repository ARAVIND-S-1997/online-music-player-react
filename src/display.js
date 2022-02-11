
// display component where the fetched music data is displayed

export function Display({Movie,Link}){
    return(
        <div className="music-container">
                            <iframe className="iframe" src={Link}
                                width="100%"
                                height="340"
                                frameBorder="0"
                                title="myFrame"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                            </iframe>
                            <div className="titles">
                            <h4>Movie:{Movie}</h4>
                            </div>
                        </div>
    )
}

