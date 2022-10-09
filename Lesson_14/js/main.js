const printString = ((container = document.body) => {
    let demo = container && container.nodeType === 1
        ? container
        : document.body
            .appendChild(document.createElement('div'))

    return async function printCharacter(text,counter = 0) {
        await (new Promise(resolve => {
            setTimeout(resolve, 1000)
        }))
        demo.appendChild(
            document.createTextNode(text[counter])
        )
        counter++ < text.length - 1 && await printCharacter(text, counter)
    }
})()

printString('hello')



