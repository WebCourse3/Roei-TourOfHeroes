export class Configuration {
	console: Boolean;
	file: Boolean;
	colors: Boolean;
	logLevel: string;

	constructor(console:boolean,file:boolean, colors: boolean, logLevel:string) {
		this.console = console;
		this.file = file;
		this.colors = colors;
		this.logLevel = logLevel;
	}
}