import process from "process";
import fs from "fs";

const baz = () => console.log("baz");
const foo = () => console.log("foo");
const zoo = () => console.log("zoo");

const start = () => {
	console.log("start");

	setImmediate(baz);

	new Promise((resolve, reject) => {
		resolve("bar");
	}).then((resolve) => {
		console.log(resolve);
		process.nextTick(zoo);
	});
    
	process.nextTick(foo);
};
start();
