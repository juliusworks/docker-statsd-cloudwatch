const http = require('http')
const net = require('net')
const port = 8120

const requestHandler = (request, response) => {
	const sendStatus = status => {
		response.writeHead(status === 'ok' ? 200 : 500, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify({ status }))
	}

	const socket = net.connect({ port: 8126 }, () => {
		socket.write('stats')
	})

	socket.on('data', data => {
		if(data.toString().indexOf('END')) {
			sendStatus('ok')
		} else {
			sendStatus('unexpected response')
		}

		socket.end()
	})

	socket.on('error', () => {
		sendStatus('error')
		socket.end()
	})
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
	if(err) {
		return console.log('Unable to start', err)
	}

	console.log(`Listening on ${port}`)
})
