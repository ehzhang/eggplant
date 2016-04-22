/**
 * MDB : Mock DataBase, a simple JSON "Database"
 * @author ehzhang
 */

/**
 * Usage:
 *
 * Collections are namespaced into a collection name in localStorage
 * Note Browser limitations of localStorage
 * Chrome, Safari: max 5MB
 *
 * var Eggplants = new mDB('eggplants')
 *
 * Eggplants.find
 * Eggplants.insert
 * Eggplants.update
 */

function mDB(name) {
  this.name = '__' + name;
}

// Generate some kind of unique ID.
mDB.prototype.generateId = function() {
  // TODO: Maybe something more unique?
  return new Date().getTime();
};


/**
 * Find all items in the collection.
 * @param  {Function} filter (optional)
 * @return {Array}
 */
mDB.prototype.find = function(filter) {
  var data = localStorage.getItem(this.name);

  if (data) {

    var collection = JSON.parse(data);

    if (filter) {
      return collection.filter(filter);
    }

    return collection;
  }

  return [];
};


/**
 * Alternative for easier find all
 * @return {[type]} [description]
 */
mDB.prototype.findAll = function() {
  return this.find();
};

/**
 * Insert a new object into the collection.
 * @param  {Object} obj
 * @return {Object} Object with new _id property
 */
mDB.prototype.insert = function(obj) {
  // Create an ID for this
  var id = this.generateId();
  obj._id = id; // Set the id

  var data = this.findAll(); // Get any data that is there

  data.push(obj); // Push the object on

  localStorage.setItem(this.name, JSON.stringify(data)); // Save the data

  return obj;
};


/**
 * Update an object with a specific Id.
 *
 * Copies over the keys in update object.
 * @param  {String|Number} id  Object's Id
 * @param  {Object} obj Object with keys/values to update
 * @return {Boolean} Success/Failure
 */
mDB.prototype.update = function(id, obj) {
  // Get the data
  var data = this.findAll();
  var found = false;

  data = data.map(function(o){
    if (o._id == id) {
      found = true;
      // Update the keys in the object
      Object.keys(obj).forEach(function(k){
        o[k] = obj[k];
      });
    }
    return o;
  });

  if (!found) {
    return false;
  }

  localStorage.setItem(this.name, JSON.stringify(data)); // Save the data
  return true;
};

