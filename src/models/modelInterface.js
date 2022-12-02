'use strict';

const { UPDATE } = require('sequelize/types/query-types');

class ModleInterface{
  constructor(model){
    this.model = model;
  }

  async create(json){
    // console.log('this is our json', json);
    try {
      let record = await this.model.create(json);
      return record;
    } catch (e) {
      console.error('we have a ModelInterface create error', e);
      return e;
    }
  }

  async read(id = null){
    try {
      let record;
      if(id){
        record = await this.model.findOne({where:{id}});
      } else {
        record = await this.model.findAll();
      }
      return record;
    } catch (e) {
      console.error('we have a ModelInterface read error', e);
    }
  }

  async update(json, id){
    try {
      await this.model.update(json, where: {id});
      let redord = await this.model.fineOne({where:{id}});
      return record;
    } catch (e) {
      console.error('we have a ModelInterface update error', e);
    }
  }
}



module.exports = ModleInterface;
