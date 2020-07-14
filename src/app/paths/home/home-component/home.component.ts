import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';

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
  minSquadSize?: number;
  maxSquadSize?: number;
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

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public rangedWeapons: Array<WarGearItem>;
  public meleeWeapons: Array<WarGearItem>;
  public equipment: Array<WarGearItem>;
  public spaceMarineHq: Array<UnitData>;
  public spaceMarineTroops: Array<UnitData>;
  public armyList: ArmyList = {
    hqChoices: [],
    eliteChoices: [],
    troopChoices: [],
    fastAttackChoices: [],
    heavyChoices: [],
    flyerChoices: [],
    transportChoices: []
  };
  public totalArmyPoints: number;

  constructor(private http: HttpClient) {
  }

  public ngOnInit() {

    const join = forkJoin([
      this.http.get('/assets/points-lists/ranged-weapons.json'),
      this.http.get('/assets/points-lists/melee-weapons.json'),
      this.http.get('/assets/points-lists/equipment.json'),
      this.http.get('/assets/points-lists/space-marine-hq.json'),
      this.http.get('/assets/points-lists/space-marine-troops.json')
    ]);
    join.subscribe((
      [
        rangedWeapons,
        meleeWeapons,
        equipment,
        spaceMarineHq,
        spaceMarineTroops
      ]: [
        Array<WarGearItem>,
        Array<WarGearItem>,
        Array<WarGearItem>,
        Array<UnitData>,
        Array<UnitData>
      ]
    ) => {
      this.rangedWeapons = rangedWeapons;
      this.meleeWeapons = meleeWeapons;
      this.equipment = equipment;
      this.spaceMarineHq = this.getData(spaceMarineHq);
      this.spaceMarineTroops = this.getData(spaceMarineTroops);
    });
  }

  public getData(unitType: Array<UnitData>): Array<UnitData> {
    return unitType.map((model) => {
      if (model.rangedGear.length) {
        model.rangedGear = model.rangedGear.map((potentialItem) => {
          potentialItem.data = this.rangedWeapons.find((item) => item.id === potentialItem.id);
          return potentialItem;
        });
      }
      if (model.meleeGear.length) {
        model.meleeGear = model.meleeGear.map((potentialItem) => {
          potentialItem.data = this.meleeWeapons.find((item) => item.id === potentialItem.id);
          return potentialItem;
        });
      }
      if (model.equipment.length) {
        model.equipment = model.equipment.map((potentialItem) => {
          potentialItem.data = this.equipment.find((item) => item.id === potentialItem.id);
          return potentialItem;
        });
      }
      return model;
    }).sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  public getTotalPoints(model: UnitData): number {
    let points = model.points * model.squadSize;
    if (model.rangedGear.length) {
      model.rangedGear.map((item: PotentialItems) => {
        if (item.selected || !item.optional) {
          points += item.data.points;
        }
        return;
      });
    }
    if (model.meleeGear.length) {
      model.meleeGear.map((item: PotentialItems) => {
        if (item.selected || !item.optional) {
          points += item.data.points;
        }
        return;
      });
    }
    if (model.equipment.length) {
      model.equipment.map((item: PotentialItems) => {
        if (item.selected || !item.optional) {
          points += item.data.points;
        }
        return;
      });
    }
    return points;
  }

  public addUnit(type: string, value: UnitData): void {
    // give each item in the armylist  unique ID so that when an item is removed
    // the correct one is removed instead of which ever comes first in the array
    const newValue = Object.assign({}, value);
    newValue.listId = this.armyList[type].length > 0 ? this.armyList[type][this.armyList[type].length - 1].listId + 1 : 1;
    this.armyList[type].push(newValue);
    this.updateArmyTotal();
  }

  public removeUnit(type: string, value: UnitData): void {
    const oldIndex = this.armyList[type].findIndex((item: UnitData) => item.listId === value.listId);
    this.armyList[type].splice(oldIndex, 1);
    this.updateArmyTotal();
  }

  public updateArmyTotal(): void {
    let points = 0;
    if (this.armyList.hqChoices.length > 0) {
      this.armyList.hqChoices.forEach((item) => {
        points += this.getTotalPoints(item);
      });
    }
    if (this.armyList.eliteChoices.length > 0) {
      this.armyList.eliteChoices.forEach((item) => {
        points += this.getTotalPoints(item);
      });
    }
    if (this.armyList.troopChoices.length > 0) {
      this.armyList.troopChoices.forEach((item) => {
        points += this.getTotalPoints(item);
      });
    }
    if (this.armyList.fastAttackChoices.length > 0) {
      this.armyList.fastAttackChoices.forEach((item) => {
        points += this.getTotalPoints(item);
      });
    }
    if (this.armyList.heavyChoices.length > 0) {
      this.armyList.heavyChoices.forEach((item) => {
        points += this.getTotalPoints(item);
      });
    }
    if (this.armyList.flyerChoices.length > 0) {
      this.armyList.flyerChoices.forEach((item) => {
        points += this.getTotalPoints(item);
      });
    }
    if (this.armyList.transportChoices.length > 0) {
      this.armyList.transportChoices.forEach((item) => {
        points += this.getTotalPoints(item);
      });
    }
    this.totalArmyPoints = points;
  }
}
