
export class Section {
	containerName: string;
	container: HTMLElement;
	heightPercent: number;
	height: number;

	inputHandler: (e: Event) => void;
	resizeHandler: (e: Event) => void;

	constructor(containerName: string) {
		// define universal section variables
		this.containerName = containerName;
		this.container = document.getElementById(containerName)!;
		this.heightPercent = parseInt(this.container.getAttribute('sectionheight')!);
		this.height = this.heightPercent * vh;

		// initialize listeners
		this.inputHandler = this.handleInput.bind(this);
		this.container.addEventListener('mousedown', this.inputHandler);

		this.resizeHandler = this.resize.bind(this);
		window.addEventListener('resize', this.resizeHandler);
	}

	handleInput(e: Event): void { };
	resize(e: Event): void { };
}

Section.prototype.handleInput = function (e: Event) {
	// Handle click
	console.log(`${this.containerName} has been clicked`)
};

Section.prototype.resize = function (e: Event) {
	this.height = this.heightPercent * vh;
};

