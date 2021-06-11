const Item = require('../config/db').Item;

module.exports = {
    addItem,
    allItems
};


async function addItem(item) {
    /* validating is item with name already present or not*/
    if (await Item.findOne({ name: item.name }))
        throw item.name + ' is already exist';

    return await new Item(item).save();
}


async function allItems() {
    return await Item.find();
}

