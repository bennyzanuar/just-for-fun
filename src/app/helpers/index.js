export const getPokemonId = (url) => {
    let slug = url.split("/")
    return slug[6]
}