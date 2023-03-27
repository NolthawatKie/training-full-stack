// code/component.ts

import { Component } from "@angular/core"

// @Component({
// 	selector: "main-component",
// 	template: `
// 				<h3>{{brand}}</h3>
// 				<button *ngFor="let e of products">{{e}}</button>
// 			`
// })
// export class MainComponent { 
// 	brand = "Sample"
// 	products = ["Latte", "Mocha", "Cappuccino"]
// }

@Component({
	selector: "main-component",
	template: `Welcome to {{branch}}
                <button (click)="go()">Test</button>
				`
})
export class MainComponent {
	branch = "Siam Square"
	go() {
		this.branch = "สยามสแควร์"
	}
}