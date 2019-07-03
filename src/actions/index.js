//Action creator
export const selectSong = (song) => {
    //retun an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};

