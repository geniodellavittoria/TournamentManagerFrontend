interface Member {
    readonly id: string;
    readonly teamId: string;
    readonly name: string;
    readonly lastname: string;
    readonly email: string;
}

interface CreateMember {
    readonly teamId: string;
    readonly name: string;
    readonly lastname: string;
    readonly email: string;
}

interface UpdateMember {
    readonly name: string;
    readonly lastname: string;
    readonly email: string;
    readonly teamId: string;
}

