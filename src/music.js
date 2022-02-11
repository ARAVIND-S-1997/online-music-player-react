import { useState, useEffect } from "react"
import axios from "axios";
import { Display } from "./display";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


// API URL

export const apiUrl = "https://music-player-online.herokuapp.com/music";

// music fetching component

export function Music() {
    const [album, setalbum] = useState([]);
    const allSongsRequest = () => {
        axios({ url: `${apiUrl}/allsongs`, method: "GET" })
            .then((abc) => setalbum(abc.data))
            .catch()

    }
    useEffect(allSongsRequest,[])
    return (
        <div className="home-container">
            <div className="search-container">
                <div>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
            </div>
            <div className="main-container">
                {album.map(({ _id, movie, language, link }) => <Display
                    Id={_id}
                    Movie={movie}
                    Language={language}
                    Link={link}
                />)}
            </div>
        </div>
    )
}

