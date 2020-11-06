class historyComponent extends viewComponent {
    constructor(size, index) {
        super();
        this.setImage(`img/levels/level${index + 1}.png`);
        if (size.width) {
            this.setX((100 - size.width) / 2);
            this.setWidth(size.width);
            this.setHeight(100);
        } else {
            this.setX(0);
            this.setY((100 - size.height) / 2);
            this.setWidth(100);
            this.setHeight(size.height);
        }
        this.hide();
    }
};
