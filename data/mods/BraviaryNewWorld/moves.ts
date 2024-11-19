export const Moves: {[k: string]: ModdedMoveData} = {	
	Conflagration: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		shortDesc: "10% chance to burn the target",
		name: "Conflagration",
		viable: true,
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
};