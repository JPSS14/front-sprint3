export function UtilService(item) {

    return fetch(`http://localhost:3000/data/${item}.json`)
        .then(response => {
            console.log("response", response);
            return response;
        }).catch(console.log("erro"));
}