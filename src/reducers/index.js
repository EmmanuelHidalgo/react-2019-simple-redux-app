import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Smells Like Teen Spirit', duration: '4:27'},
        {title: 'Alive', duration: '5:00'},
        {title: 'Spoonman', duration: '3:08'},
        {title: 'Man in the box', duration: '5:06'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})