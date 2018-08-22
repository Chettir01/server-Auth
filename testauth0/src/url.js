export function getHome(){
    return fetch (`http://localhost:8090/api/me`);
}