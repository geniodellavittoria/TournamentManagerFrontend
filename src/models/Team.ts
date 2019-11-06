interface Team {
    readonly id: string;
    name: string;
    isPaid: boolean;
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
