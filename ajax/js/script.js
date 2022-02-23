let defaultURL = Function;
let update = updateDataEvent(3000);

(() => {
    setTimeout(() => {
        getFile('file[1].json', 'file1')
    }, 1000)
    setTimeout(() => {
        getFile('file[2].json', 'file2')
    }, 2000)
    setTimeout(() => {
        getFile('file[3].json', 'file3')
    }, 3000)
    defaultURL = createURL('localhost:3000')
})()

update(1000, 'file[1].json', 'area1')
update(2000, 'file[2].json', 'area2')
update(3000, 'file[3].json', 'area3')

document.forms["editForm"].addEventListener("submit", e => {
    e.preventDefault();
    addEventToJsonFile();
    document.getElementById('area4').appendChild(createLog("Данные успешно обновлены", 'green'))
})

document.querySelector("select").addEventListener('change', async function (e) {
    const json = await getJson(e.target.value);
    const data = JSON.parse(json.events[0]);
    document.getElementById('edit-btn').style.display = "block";
    document.forms["editForm"].elements["date"].value = data['date'];
    document.forms["editForm"].elements["time"].value = data['time'];
    document.forms["editForm"].elements["name"].value = data['name'];
    document.forms["editForm"].elements["importance"].value = data['importance'];
    document.forms["editForm"].elements["note"].value = data['note'];
})

function addEventToJsonFile(){
  let event = createEvent()

  let fileName = document.getElementById('file-ed').value.toString()
  const url = new URL(defaultURL(`files`))
  fetch(url, {
      method: 'POST',
      body: JSON.stringify({
          'event' : event,
          'fileName' : fileName
      }),
      headers: {
          'Content-Type' : 'application/json'
      }
  })
  .catch(err => {
      console.log(`Error: ${err}`)
  })
}

async function getJson(fileName) {
    let url = new URL(defaultURL('getData'))
    let result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
          'fileName' : fileName
      }),
      headers: {
          'Content-Type' : 'application/json'
      }
    })
    return await result.json();
}

function getFile(fileName, divName){
  let url = new URL(defaultURL('getData'))
  fetch(url, {
      method: 'POST',
      body: JSON.stringify({
          'fileName' : fileName
      }),
      headers: {
          'Content-Type' : 'application/json'
      }
  })
  .then(response => response.json())
  .then(response => {
      var node = document.getElementById(divName);
      while (node.firstChild) {
          node.removeChild(node.firstChild);
      }
      if (response.events){
          response.events.forEach(element => {
              let rootEl = document.createElement('div')
              rootEl.innerHTML = element
              document.getElementById(divName).appendChild(rootEl)
          });
      }
      else{
          let rootEl = document.createElement('div')
          rootEl.innerHTML = response.events
          document.getElementById(divName).appendChild(rootEl)
      }
      document.getElementById('area4').appendChild(createLog(response.msg, 'white'))
  })
  .catch(err => {
      console.log(`Error: ${err}`)
  })
}
