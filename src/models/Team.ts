interface Team {
    readonly id: string;
    readonly name: string;
    readonly isPaid: boolean;
    members: Member[];
    group: Group;
}

interface CreateTeam {
    readonly name: string;
    readonly isPaid: boolean;
    readonly groupId: number;
}

interface UpdateTeam {
    readonly name: string;
    readonly isPaid: boolean;
    readonly groupId: string;
}
