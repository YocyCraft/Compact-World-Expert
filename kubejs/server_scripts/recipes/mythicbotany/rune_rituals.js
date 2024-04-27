ServerEvents.recipes(event => {
    const id_prefix ="compact_world:reicpes/mythicbotany/rune_rituals/"
    /**
    {
     center:,
     inputs:[],
     mana:,
     outputs:[],
     runes:[],
     ticks:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            center:items('spirit:compressed_soul_powder_block'),
            inputs:[
                items('naturesaura:sky_ingot_block'),
                items('ae2:fluix_block'),
                items('create:andesite_casing'),
                items('elementalcraft:swift_alloy_block')
            ],
            mana:500,
            outputs:[
                items('spirit:soul_steel_block',4)
            ],
            runes:[
                runes(false,'botania:rune_earth',-2,-2),
                runes(false,'botania:rune_earth',-2,2),
                runes(false,'botania:rune_earth',2,-2),
                runes(false,'botania:rune_earth',2,2),
                runes(false,'botania:rune_earth',-3,0),
                runes(false,'botania:rune_earth',3,0),
                runes(false,'botania:rune_earth',0,-3),
                runes(false,'botania:rune_earth',0,3)
            ],
            ticks:100,
            id:`${id_prefix}soul_steel_block`
        },
        {
            center:items('modularrouters:sender_module_1'),
            inputs:[
                items('naturesaura:sky_ingot'),
                items('apotheosis:common_material'),
                items('minecraft:piston')
            ],
            mana:500,
            outputs:[items('modularrouters:sender_module_2',2)],
            runes:[
                runes(false,'botania:rune_earth',-2,-2),
                runes(false,'botania:rune_earth',-2,2),
                runes(false,'botania:rune_earth',2,-2),
                runes(false,'botania:rune_earth',2,2),
                runes(false,'botania:rune_earth',-3,0),
                runes(false,'botania:rune_earth',3,0),
                runes(false,'botania:rune_earth',0,-3),
                runes(false,'botania:rune_earth',0,3)
            ],
            ticks:50,
            id:`${id_prefix}sender_module_2`
        },
        {
            center:items('modularrouters:puller_module_1'),
            inputs:[
                items('naturesaura:sky_ingot'),
                items('apotheosis:common_material'),
                items('minecraft:piston')
            ],
            mana:500,
            outputs:[items('modularrouters:puller_module_2',2)],
            runes:[
                runes(false,'botania:rune_earth',-2,-2),
                runes(false,'botania:rune_earth',-2,2),
                runes(false,'botania:rune_earth',2,-2),
                runes(false,'botania:rune_earth',2,2),
                runes(false,'botania:rune_earth',-3,0),
                runes(false,'botania:rune_earth',3,0),
                runes(false,'botania:rune_earth',0,-3),
                runes(false,'botania:rune_earth',0,3)
            ],
            ticks:50,
            id:`${id_prefix}puller_module_2`
        },
        {
            center:items('modularrouters:blank_upgrade'),
            inputs:[
                items('apotheosis:epic_material'),
                items('ae2:fluix_crystal'),
                items('kubejs:soul_steel_sheet')
            ],
            mana:500,
            outputs:[items('modularrouters:speed_upgrade',4)],
            runes:[
                runes(false,'botania:rune_earth',-2,-2),
                runes(false,'botania:rune_earth',-2,2),
                runes(false,'botania:rune_earth',2,-2),
                runes(false,'botania:rune_earth',2,2),
                runes(false,'botania:rune_earth',-3,0),
                runes(false,'botania:rune_earth',3,0),
                runes(false,'botania:rune_earth',0,-3),
                runes(false,'botania:rune_earth',0,3)
            ],
            ticks:50,
            id:`${id_prefix}speed_upgrade`
        },
        {
            center:items('ars_nouveau:blue_archwood_sapling'),
            inputs:[
                items('thermal:apatite_block'),
                items('elementalcraft:pristine_air_gem'),
                items('create_new_age:overcharged_golden_sheet'),
                items('elementalcraft:swift_alloy_ingot'),
                items('malum:aerial_spirit')
            ],
            mana:10000,
            outputs:[items('malum:runewood_sapling')],
            runes:[
                runes(true,'botania:rune_water',0,3),
                runes(true,'botania:rune_water',0,-3),
                runes(true,'botania:rune_water',3,0),
                runes(true,'botania:rune_water',-3,0),
                runes(true,'botania:rune_pride',-2,2),
                runes(true,'botania:rune_pride',-2,-2),
                runes(true,'botania:rune_pride',2,2),
                runes(true,'botania:rune_pride',2,-2)
            ],
            ticks:50,
            id:`${id_prefix}runewood_sapling`
           }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"mythicbotany:rune_ritual",
            "center":recipe.center,
            "group":"rune_rituals",
            "inputs":recipe.inputs,
            "mana":recipe.mana,
            "outputs":recipe.outputs,
            "runes":recipe.runes,
            "ticks":recipe.ticks
        }).id(recipe.id)
    })
})