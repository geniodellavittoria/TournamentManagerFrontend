interface GroupGame {
    readonly groupId: string;
    readonly groupName: string;
    readonly games: Game[];
}

interface Game {
    readonly homeTeamName: string;
    readonly awayTeamName: string;
    readonly homeTeamId: string;
    readonly awayTeamId: string;
    readonly homeScore: number;
    readonly awayScore: number;
}

