import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UnitData} from '../../interfaces/warhammer-interfaces';
import {WarHammerService} from '../../services/warhammer-service';

@Component({
  selector: 'model-display-component',
  templateUrl: './model-display.component.html',
  styleUrls: ['./model-display.component.scss']
})
export class ModelDisplayComponent {

  @Input()
  public unitList: Array<UnitData>;

  @Input()
  public unitType: string;

  @Output()
  public removeUnit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public changeUnitSize: EventEmitter<any> = new EventEmitter<any>();

  constructor(public warhammerService: WarHammerService) {}
}
