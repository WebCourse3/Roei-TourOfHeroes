import {Configuration} from './Configuration';
import * as fs from 'fs';

export class logger {
	name: string;
	configuration: Configuration;

	constructor(name:string, configuration:Configuration)
	{
		this.name = name;
		this.configuration = configuration;
	}

	public log(level:string, strings:Array<string>)
	{
		let typeOfFuncs = {
			"debug"   : this.debug,
			"info"    : this.info,
			"warning" : this.warning,
			"error"   : this.error
		};
		let lvl = level || this.configuration.logLevel;
		typeOfFuncs[lvl].apply(this, strings);
	}

	public info(strings:Array<string>)
	{
		var tsColor = "green";
		var tsType = "INFO";
		if (this.configuration.console) {
			this.PrintToConsole(strings, tsColor);
		}
		if (this.configuration.file) {
			this.PrintToFile(strings, tsType)
		}
	}

	public warning(strings:Array<string>)
	{
		var tsColor = "yellow";
		var tsType = "WARNING";
		if (this.configuration.console) {
			this.PrintToConsole(strings, tsColor);
		}
		if (this.configuration.file) {
			this.PrintToFile(strings, tsType)
		}
	}

	public debug(strings:Array<string>)
	{
		var tsColor = "white";
		var tsType = "DEBUG";
		if (this.configuration.console) {
			this.PrintToConsole(strings, tsColor);
		}
		if (this.configuration.file) {
			this.PrintToFile(strings, tsType)
		}
	}

	public error(strings:Array<string>)
	{
		var tsColor = "red";
		var tsType = "ERROR";
		if (this.configuration.console) {
			this.PrintToConsole(strings, tsColor);
		}
		if (this.configuration.file) {
			this.PrintToFile(strings, tsType)
		}
	}

	private PrintToConsole(strings:Array<string>, color:string) {
		if (this.configuration.colors) {
			strings.forEach((msg) => {
				var tsColor = this.changeColor(color);
				console.log(tsColor, msg);
			});
		}
		else {
			strings.forEach((msg) => {
				console.log(msg);
			});
		}
	}

	private PrintToFile(strings:Array<string>, tsType:string) {
		strings.forEach((msg) => {
			fs.appendFile(__dirname + 'test.log', tsType + ": " + "${msg}\n", function (err) {
				if (err) throw err;
			});
		})
	}

	private changeColor (color:string) {
		var tsColor;
		if (color == "red") {
			tsColor = "\x1b[31m%s\x1b[0m";
		}
		else if (color == "yellow") {
			tsColor = "\x1b[33m%s\x1b[0m";
		}
		else if (color == "green") {
			tsColor = "\x1b[32m%s\x1b[0m";
		}
		else if (color == "white") {
			tsColor = "\x1b[37m%s\x1b[0m";
		}
		return tsColor;
	}

}