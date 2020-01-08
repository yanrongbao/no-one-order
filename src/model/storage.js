const storage = {
    get (key) {
        return JSON.parse(localStorage.getItem(key))
    },
    set (key, value) {
        console.log(value)
        return localStorage.setItem(key, JSON.stringify(value))
    },
    remove (key) {
        localStorage.remove(key)
    }
}
export default storage;