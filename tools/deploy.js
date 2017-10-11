// 部署脚本

var exec = require('child_process').exec

const USER = 'root'
const HOST = ''
const PORT = 22
const PATH = ''

var cmd = `rsync -Pvr -e "ssh -p ${PORT}" dist/ ${USER}@${HOST}:${PATH}`

var out = exec(cmd)

out.stdout.on('data', function(data) {
    console.log(data)
})

out.on('exit', function(code) {
    if (code === 0) {
        console.log('success done!')
    } else {
        console.error('error!')
    }
})
