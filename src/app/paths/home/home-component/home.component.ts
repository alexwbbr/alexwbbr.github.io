import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';
import {ArmyList, UnitData, WarGearItem} from '../../../interfaces/warhammer-interfaces';
import {WarHammerService} from '../../../services/warhammer-service';

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

  constructor(private http: HttpClient, public warhammerService: WarHammerService) {
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
      const gearOptions = ['rangedGear', 'meleeGear', 'equipment'];
      const dataOptions = ['rangedWeapons', 'meleeWeapons', 'equipment'];
      gearOptions.forEach((option, index) => {
        if (model[option].length) {
          model[option] = model[option].map((potentialItem) => {
            potentialItem.data = this[dataOptions[index]].find((item) => item.id === potentialItem.id);
            return potentialItem;
          });
        }
      });
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

  public addUnit(type: string, value: UnitData): void {
    // give each item in the armylist  unique ID so that when an item is removed
    // the correct one is removed instead of which ever comes first in the array
    const newValue = Object.assign({}, value);
    newValue.listId = this.armyList[type].length > 0 ? this.armyList[type][this.armyList[type].length - 1].listId + 1 : 1;
    this.armyList[type].push(newValue);
    this.totalArmyPoints = this.warhammerService.updateArmyTotal(this.armyList);
  }

  public removeUnit(event: {type: string, value: UnitData}): void {
    const {type, value} = event;
    const oldIndex = this.armyList[type].findIndex((item: UnitData) => item.listId === value.listId);
    this.armyList[type].splice(oldIndex, 1);
    this.totalArmyPoints = this.warhammerService.updateArmyTotal(this.armyList);
  }

  public changeUnitSize(event: {type: string, value: UnitData, direction: boolean}): void {
    const {type, value, direction} = event;
    this.armyList[type].forEach((item: UnitData) => {
      if (item.listId === value.listId) {
        direction ? item.squadSize ++ : item.squadSize --;
        return;
      }
    });
    this.totalArmyPoints = this.warhammerService.updateArmyTotal(this.armyList);
  }
}
