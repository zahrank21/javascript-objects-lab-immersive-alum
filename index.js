let recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  let newObject = Object.assign({}, object)
  return delete newObject[key]
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object 
}
