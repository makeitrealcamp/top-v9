const ws = new WebSocket('wss://mir-chat.herokuapp.com/')

const form = document.querySelector('.form')
const container = document.querySelector('.container')

ws.onopen = e => {
  container.innerHTML = ''

  form.addEventListener('submit', e => {
    e.preventDefault()

    const { message, sender } = e.target.elements

    ws.send(JSON.stringify({
      message: message.value,
      sender: sender.value,
    }))
  })
}

ws.onmessage = ({ data }) => {
  const { message, sender } = JSON.parse(data)

  const html = `
    <article>
      <p>${message}</p>
      <p>By: ${sender}</p>
    </article>
  `

  container.innerHTML += html
}

ws.onclose = e => {
  container.innerHTML = '<p>Connection closed</p>'
}

ws.onerror = e => {
  container.innerHTML = '<p>Something went wrong</p>'
}

// setTimeout(() => {
//   ws.close()
// }, 3000)
