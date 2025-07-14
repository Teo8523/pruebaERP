export default class ProductsDto {
    constructor(data) {
        this.code = data.code;
        this.name = data.name;
        this.description = data.description;
        this.price = data.price;
        this.location = data.location;
        this.image = data.image;       
        this.categories = data.categories;
        this.active = data.active;
        this.timestamps = data.timestamps;
    }
}