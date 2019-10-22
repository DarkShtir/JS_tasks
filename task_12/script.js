class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(content) {
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        newDiv.textContent = content;
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;        
        newDiv.style.cssText = param;
    }
}

let item = new Options(500, 800, 'blue', 18, 'center');
item.createDiv('Good luck man!');

let anotherItem = new Options(800, 300, 'red', 28, 'left');
anotherItem.createDiv("I'm wanna hamburger!!");