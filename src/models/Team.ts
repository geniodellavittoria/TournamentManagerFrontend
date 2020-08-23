import { Member } from './Member';
import { Group } from './Group';

export interface Team {
    readonly id: string;
    name: string;
    isPaid: boolean;
    members: Member[];
    group: Group;
}

export interface CreateTeam {
    readonly name: string;
    readonly isPaid: boolean;
    readonly groupId: number;
}

export interface UpdateTeam {
    readonly name: string;
    readonly isPaid: boolean;
    readonly groupId: string;
}
