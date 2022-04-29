const { Superhero, Power } = require('./models');

// This query should retrieve a single hero and their powers in reverse alphabetical order.
// Refactor the query so that the console logs display the correct data in the expected order.
// DO NOT change the console.logs.
// Run node query_1.js to test.

async function getHeroById(heroId) {
    const hero = await Superhero.findAll({
        attributes: ['name', 'alias', 'comicUniverse'],
        include: {
            model: Powers,
            attributes: ['type', 'description'],
            through: {
                attributes: []
            }
        },
        order: [[Power, 'type']],
        where: {
            id: heroId
        }
    })

    console.log('Name: ', hero.name)
    console.log('Alias: ', hero.alias)
    console.log('Powers: ', JSON.stringify(hero.Powers, null, 2))
}

getHeroById(1)

// Expected result:
// Name:  Tony Stark
// Alias:  Iron Man
// Powers: [
//     {
//         "type": "Laser Beams",
//         "description": "Innate or technological ability to shoot fricken laser beams"
//     },
//     {
//         "type": "Genius",
//         "description": "Significantly above average intelligence"
//     },
//     {
//         "type": "Flight",
//         "description": "Innate or technological ability to fly"
//     },
//     {
//         "type": "Durability",
//         "description": "Can sustain significant injury/attack without faltering"
//     }
// ]