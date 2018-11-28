import SimpleSchema from 'simpl-schema';
import {makeChild} from "/imports/api/parenting.js";

DamageMultipliers = new Mongo.Collection("damageMultipliers");

/*
 * DamageMultipliers are whole numbered stats of a character
 */
Schemas.DamageMultiplier = new SimpleSchema({
	charId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		index: 1,
	},
  // The nice-to-read name
	name: {
		type: String,
	},
  // The technical, lowercase, single-word name used in formulae
  variableName: {
    type: String,
  },
  value: {
    type: Number,
		defaultValue: 1,
  },
	enabled: {
		type: Boolean,
		defaultValue: true,
	},
});

DamageMultipliers.attachSchema(Schemas.DamageMultiplier);

// DamageMultipliers.attachBehaviour("softRemovable");
makeChild(DamageMultipliers, ["enabled"]); //children of lots of things
