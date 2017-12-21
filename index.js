function MilitaryResource(type, health, distance, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = 100;
    this.distance = distance;
    this.maxDistance = maxDistance;
}

function Squad(defaultResources) {
    this.squad = [];
    if(defaultResources) this.combineResources(defaultResources);
}

MilitaryResource.prototype.isReadyToMove = function (dist) {
    return dist <= this.distanceAvailable;
};

MilitaryResource.prototype.isReadyToFight = function (loss) {
    return loss >= this.maxHealth - this.health;
};


MilitaryResource.prototype.restore = function () {
    this.health = this.maxHealth;
};

MilitaryResource.prototype.clone = function () {
    return Object.assign({}, this);
}


Squad.prototype.areResourcesReadyToMove = function () {

};



// MilitaryResource.prototype.isReadyToMove;
// MilitaryResource.prototype.isReadyToFight;
// MilitaryResource.prototype.restore;
// MilitaryResource.prototype.clone;
//
// Squad.prototype.areResourcesReadyToMove;
// Squad.prototype.isResourcesReadyToFight;
// Squad.prototype.restoreResources;
// Squad.prototype.getReadyToMoveResources;
// Squad.prototype.combineResources;
// Squad.prototype.cloneResource;

var newResource = new MilitaryResource("warrior", 90, 100, 200);

console.log(newResource);

console.log(newResource.isReadyToMove(150));

console.log(newResource.isReadyToFight(40));

var newCloneResource = newResource.clone();
console.log(newCloneResource);

newResource.restore();

console.log(newResource);


