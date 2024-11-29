let teams = [];
let matches = [];
let standings = {};

// Agregar un equipo
function addTeam() {
    const teamName = document.getElementById("teamName").value;
    if (teamName && !teams.includes(teamName)) {
        teams.push(teamName);
        standings[teamName] = {
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            points: 0
        };
        updateTeamList();
        updateSelectors();
        updateStandingsTable();
    }
}

// Actualizar lista de equipos
function updateTeamList() {
    const list = document.getElementById("teamList");
    list.innerHTML = teams.map(team => `<li>${team}</li>`).join('');
    updateEditTeamSelector(); // Actualiza el selector para editar equipos
}

// Actualizar selectores
function updateSelectors() {
    const options = teams.map(team => `<option value="${team}">${team}</option>`).join('');
    document.getElementById("homeTeam").innerHTML = options;
    document.getElementById("awayTeam").innerHTML = options;
}

// Más funciones (cópialas todas desde tu código original)
// ...
