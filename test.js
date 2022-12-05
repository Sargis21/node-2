const person = {
    name: 'Sargis',
    age: 35,
    job: "PHP"
}

const proxy = new Proxy(person, {
    get(targnt, prop) {
        return targnt[prop]
    },

    set(target, prop, value) {
        if (!(prop in target)) {
            throw new Error(`not in ${prop} field in target`)
        }

        if (prop === 'job') {
            throw new Error(`${prop} is indispensable`)
        }

        target[prop] = value
    }
})

console.log(proxy.job = 'javascript')