import { Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import {IgDialogComponent } from "../../src/igniteui.angular2.ts";
import {bootstrap }    from 'angular2/platform/browser'

declare var jQuery: any;
@Component({
	selector: 'my-app',
	template: `<ig-dialog widgetId='dialog1' [(options)]='options'>    
    <content>
		<p>
			<img style="width: 220px" src="http://www.igniteui.com/images/samples/dialog-window/content.jpg" />
		</p>
		<input style="margin: 5px" />
		</content>
    </ig-dialog>`,
	directives: [IgDialogComponent]
})
export class AppComponent {
	private options: any;

	constructor() {
		this.options = {
            headerText : "Foo",
            height: "325px"
		};
	}
}
bootstrap(AppComponent);