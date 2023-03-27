// code/module.ts

import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { MainComponent } from "./component"

@NgModule({
	imports:      [ BrowserModule ],
	providers:    [ ],
	declarations: [ MainComponent ],
	exports:      [ MainComponent ],
	bootstrap:    [ MainComponent ]
})
export class AppModule { }