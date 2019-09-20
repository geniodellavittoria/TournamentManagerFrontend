interface Team {
    readonly id: number;
    readonly name: string;
    readonly isPaid: boolean;
    readonly members: Member[];
    readonly group: Group;
}
