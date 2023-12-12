document.addEventListener('DOMContentLoaded', function () {
    const gridDiv = document.querySelector('#myGrid');
    const gridOptions = {
        columnDefs: [
            { headerName: 'ID', field: 'id' },
            { headerName: 'Player Name', field: 'player_name', filter: 'agTextColumnFilter' },
            { headerName: 'Team', field: 'team_abbreviation' },
            { headerName: 'Age', field: 'age' },
            { headerName: 'Player Height', field: 'player_height' },
            { headerName: 'Player Weight', field: 'player_weight' },
            { headerName: 'College', field: 'college' },
            { headerName: 'Country', field: 'country' },
            { headerName: 'Draft Year', field: 'draft_year' },
            { headerName: 'Draft Round', field: 'draft_round' },
            { headerName: 'Draft Number', field: 'draft_number' },
            { headerName: 'GP', field: 'gp' },
            { headerName: 'PTS', field: 'pts' },
            { headerName: 'REB', field: 'reb' },
            { headerName: 'AST', field: 'ast' },
            { headerName: 'Net Rating', field: 'net_rating' },
            { headerName: 'OREB%', field: 'oreb_pct' },
            { headerName: 'DREB%', field: 'dreb_pct' },
            { headerName: 'USG%', field: 'usg_pct' },
            { headerName: 'TS%', field: 'ts_pct' },
            { headerName: 'AST%', field: 'ast_pct' },
            { headerName: 'Season', field: 'season' }
        ],
        defaultColDef: {
            sortable: true,
            filter: true
        },
        domLayout: 'autoHeight'
    };

    fetch('all_seasons.csv')
        .then(response => response.text())
        .then(data => {
            const gridData = data.split('\n').slice(1).map(row => {
                const columns = row.split(',');
                return {
                    id: columns[0],
                    player_name: columns[1],
                    team_abbreviation: columns[2],
                    age: columns[3],
                    player_height: columns[4],
                    player_weight: columns[5],
                    college: columns[6],
                    country: columns[7],
                    draft_year: columns[8],
                    draft_round: columns[9],
                    draft_number: columns[10],
                    gp: columns[11],
                    pts: columns[12],
                    reb: columns[13],
                    ast: columns[14],
                    net_rating: columns[15],
                    oreb_pct: columns[16],
                    dreb_pct: columns[17],
                    usg_pct: columns[18],
                    ts_pct: columns[19],
                    ast_pct: columns[20],
                    season: columns[21]
                };
            });
            new agGrid.Grid(gridDiv, gridOptions);
            gridOptions.api.setRowData(gridData);
        });
});
