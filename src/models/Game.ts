export interface GroupGame {
    readonly groupId: string;
    readonly groupName: string;
    readonly games: Game[];
}

export interface Game {
    readonly homeTeamName: string;
    readonly awayTeamName: string;
    readonly homeTeamId: string;
    readonly awayTeamId: string;
    readonly homeScore: number;
    readonly awayScore: number;
}

