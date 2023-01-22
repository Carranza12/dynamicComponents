import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicHostDirective } from './directives/dynamic-host.directive';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-component';
  @ViewChild (DynamicHostDirective) public dynamicHost!: DynamicHostDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver){}

  public createComponent():void{
    const component = this._componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    this.dynamicHost._viewContainerRef.createComponent(component);
  }

  public deleteComponents():void{
    this.dynamicHost._viewContainerRef.clear();
  }

}
