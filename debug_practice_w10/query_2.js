const { Superhero, Power } = require('./models');

// This query should return all heroes with the specified power.
// DO NOT change the console.logs.
// Run node query_2.js to test.

async function laserFriends(power) {
    const heroes = await SuperHero.findAll({
        attributes: ['name', 'alias', 'comicuniverse'],
        include: {
            model: Power,
            attributes: ['type', 'description'],
            where: {
                type: power
            },
            through: {
                attributes: []
            }
        },
        order: ['id', 'DESC']
    })
    console.log(JSON.stringify(heroes, null, 2))
    console.log(`You know, I have one simple request, and that is to have ${heroes[0].name} with fricken ${heroes[2].Powers[0].type} attached to their heads!`)
}

laserFriends('Laser Beams')

// Expected result:
// [
//     {
//         "name": "Sharks",
//         "alias": "N/A",
//         "comicUniverse": "Austin Powers",
//         "Powers": [
//             {
//                 "type": "Laser Beams",
//                 "description": "Innate or technological ability to shoot fricken laser beams"
//             }
//         ]
//     },
//     {
//         "name": "Clark Kent",
//         "alias": "Superman",
//         "comicUniverse": "DC",
//         "Powers": [
//             {
//                 "type": "Laser Beams",
//                 "description": "Innate or technological ability to shoot fricken laser beams"
//             }
//         ]
//     },
//     {
//         "name": "Tony Stark",
//         "alias": "Iron Man",
//         "comicUniverse": "Marvel",
//         "Powers": [
//             {
//                 "type": "Laser Beams",
//                 "description": "Innate or technological ability to shoot fricken laser beams"
//             }
//         ]
//     }
// ]
// You know, I have one simple request, and that is to have Sharks with fricken Laser Beams attached to their heads!