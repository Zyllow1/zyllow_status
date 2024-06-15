function updateDateTime() {
    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    const dateTimeString = `${month} - ${day} - ${timeString}`;

    document.getElementById('date-time').textContent = dateTimeString;
}

function updatePlayersInfo(playersCount) {
    const playersInfoString = `Public World - ${playersCount}/64`;
    document.getElementById('players-info').textContent = playersInfoString;
}

function updatePingStatus(ping) {
    const statusCircle = document.getElementById('status-circle');

    if (ping < 50) {
        statusCircle.style.backgroundColor = 'green';
    } else if (ping < 100) {
        statusCircle.style.backgroundColor = 'orange';
    } else {
        statusCircle.style.backgroundColor = 'red';
    }
}

function updateServerName(serverName) {
    document.getElementById('server-name').textContent = serverName;
}

setInterval(updateDateTime, 1000);
updateDateTime();

window.addEventListener('message', function(event) {
    if (event.data.action === 'updatePlayers') {
        updatePlayersInfo(event.data.playersCount);
    } else if (event.data.action === 'updatePing') {
        updatePingStatus(event.data.ping);
    } else if (event.data.action === 'setServerName') {
        updateServerName(event.data.serverName);
    }
});