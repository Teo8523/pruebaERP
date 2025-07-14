import mongoose from 'mongoose';

export default class BaseModel {
    static schema;
    static collectionName;

    static init() {
        if (!this.schema) throw new Error('Schema no definido');
        if (!this.collectionName) throw new Error('Nombre de colección no definido');

    const model = mongoose.model(this.collectionName, this.schema);
    console.log(`✅ Modelo [${this.collectionName}] registrado`);
    return model;
    }

    static async syncIndexes() {
        const model = this.init();
        await model.syncIndexes();
        console.log(`🔄 Índices de [${this.collectionName}] sincronizados`);
        return model;
    }

    static getModel() {
    if (!this.schema || !this.collectionName) {
        throw new Error('Schema o nombre de colección no definido');
    }
    return mongoose.models[this.collectionName] || mongoose.model(this.collectionName, this.schema);
}
}