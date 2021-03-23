export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "https://6059c160b5983fdf33d8ed33--infallible-swanson-dffea2.netlify.app/"
const clientid = "d501606690d84fc0bd2cdcaab34170c8"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
    
];

export const getTokenFromUrl = ()=>{
    // console.log(window.location.hash); 

    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    },{});
};

export const loginUrl = `${authEndpoint}?client_id=${clientid}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
