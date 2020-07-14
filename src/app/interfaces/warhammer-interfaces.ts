export interface WarGearItem {
    id: number;
    name: string;
    points: number;
}

export interface UnitData {
    id: number;
    listId?: number;
    name: string;
    points: number;
    minSquadSize: number;
    maxSquadSize: number;
    squadSize: number;
    rangedGear: Array<PotentialItems>;
    meleeGear: Array<PotentialItems>;
    equipment: Array<PotentialItems>;
}

export interface PotentialItems {
    id: number;
    optional: boolean;
    selected: boolean;
    data: WarGearItem;
}

export interface ArmyList {
    hqChoices: Array<UnitData>;
    eliteChoices: Array<UnitData>;
    troopChoices: Array<UnitData>;
    fastAttackChoices: Array<UnitData>;
    heavyChoices: Array<UnitData>;
    flyerChoices: Array<UnitData>;
    transportChoices: Array<UnitData>;
}
