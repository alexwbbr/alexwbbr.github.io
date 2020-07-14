import {Injectable} from '@angular/core';
import {ArmyList, PotentialItems, UnitData} from '../interfaces/warhammer-interfaces';

@Injectable()
export class WarHammerService {

  public getTotalPoints(model: UnitData): number {
    let points = model.points * model.squadSize;
    const gearOptions = ['rangedGear', 'meleeGear', 'equipment'];
    gearOptions.forEach((option) => {
      if (model[option].length) {
        model[option].forEach((item: PotentialItems) => {
          if (item.selected || !item.optional) {
            points += item.data.points;
          }
        });
      }
    });
    return points;
  }

  public updateArmyTotal(armyList: ArmyList): number {
    const armySlots = [
      'hqChoices',
      'eliteChoices',
      'troopChoices',
      'fastAttackChoices',
      'heavyChoices',
      'flyerChoices',
      'transportChoices'
    ];
    let points = 0;
    armySlots.forEach((option) => {
      if (armyList[option].length > 0) {
        armyList[option].forEach((item) => {
          points += this.getTotalPoints(item);
        });
      }
    });
    return points;
  }
}
