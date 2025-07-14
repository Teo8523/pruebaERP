export default class CategoriesDto{
    constructor(data){
        this.code =  data.code;
        this.name = data.name;
        this.description = data.description;
        this.availability = data.availability;
        this.timestamps = data.timestamps;
    }
}
