function createURL(hostname){
    return function(pathname){
        return `http://${hostname}/${pathname}`
    }
}

function createLog(msg, color){
    let rootEl = document.createElement('div')
    rootEl.innerHTML = msg
    rootEl.style.color = color
    return rootEl
}

function updateDataEvent(interval){
    return function(timeout, fileName, contentId){
        setTimeout(() => {
            setInterval(() => {
                getFile(fileName, contentId)
                document.getElementById('area4').appendChild(createLog(`Данные из файла "${fileName}" успешно обновлены`, 'black'))
            }, interval)
        }, timeout)
    }
}

function createEvent(){
    return {
        'date' : document.getElementById('ed-date').value.toString(),
        'time' : document.getElementById('ed-time').value.toString(),
        'name' : document.getElementById('ed-name').value.toString(),
        'importance' : document.getElementById('ed-importance').value.toString(),
        'note' : document.getElementById('ed-note').value.toString(),
    }
}
