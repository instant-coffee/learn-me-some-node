var net = require('net')

function dateSet(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + dateSet(d.getMonth() + 1) + '-'
    + dateSet(d.getDate()) + ' '
    + dateSet(d.getHours()) + ':'
    + dateSet(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))