class gameInformationComponent extends viewComponent {
    constructor(gameElement) {
        super(gameElement);
        this.setImage(`img/interface/information.png`);
        this.setX(0);
        this.setZ(1);
        this.setWidth(100);
        this.setHeight(100);
        this.hide();
    }
};
