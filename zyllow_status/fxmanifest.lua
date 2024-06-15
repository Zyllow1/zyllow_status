fx_version 'cerulean'
game 'gta5'

author 'Zyllow'
description 'Displays text at the top right of the screen, including the server name, player ping with a colored indicator, current date and time, and number of players connected.'
version '1.0'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js'
}

client_scripts {
    'config.lua',
    'client.lua'
}

server_script 'server.lua'