class viewComponent {
    constructor() {
        this._element = null;
    }
    getElement() {
        if (!this._element) {
            this._element = document.createElement(`div`);
            this.getElement().style.position = `absolute`;
            this.getElement().style.backgroundSize = `100%`;
            this.getElement().style.backgroundRepeat = `no-repeat`;
        }
        return this._element;
    }
    setImage(src) {
        this.getElement().style.backgroundImage = `url(${src})`;
    }
    setX(x) {
        this.getElement().style.left = x + `%`;
    }
    setY(y) {
        this.getElement().style.top = y + `%`;
    }
    setWidth(width) {
        this.getElement().style.width = width + `%`;
    }
    setHeight(height) {
        this.getElement().style.height = height + `%`;
    }
    hide() {
        this.getElement().style.display = `none`;
    }
    show() {
        this.getElement().style.display = `inline-block`;
    }
};