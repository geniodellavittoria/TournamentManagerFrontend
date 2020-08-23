export interface Member {
    readonly id: string;
    readonly teamId: string;
    readonly name: string;
    readonly lastname: string;
    readonly email: string;
}

export interface CreateMember {
    readonly teamId: string;
    readonly name: string;
    readonly lastname: string;
    readonly email: string;
}

export interface UpdateMember {
    readonly name: string;
    readonly lastname: string;
    readonly email: string;
    readonly teamId: string;
}

