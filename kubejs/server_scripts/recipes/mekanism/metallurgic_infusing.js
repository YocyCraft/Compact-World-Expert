ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:reicpes/mekanism/metallurgic_infusing/'

    /**
    {
     input:items(),
     output:items(),
     infuse_type:,
     amount:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            input:items('create:andesite_casing'),
            output:items('kubejs:soul_steel_casing'),
            infuse_type:'kubejs:soul',
            amount:80,
            id:`${id_prefix}soul_steel_casing`
        },
        {
            input:items('botania:rune_earth'),
            output:items('botania:rune_water'),
            infuse_type:'kubejs:soul',
            amount:20,
            id:`${id_prefix}rune_water`
        },
        {
            input:items('ars_nouveau:source_gem'),
            output:items('kubejs:soul_gem'),
            infuse_type:'kubejs:soul',
            amount:20,
            id:`${id_prefix}soul_gem`
        },
        {
            input:items('minecraft:iron_ingot'),
            output:items('naturesaura:infused_iron'),
            infuse_type:'kubejs:terra',
            amount:40,
            id:`${id_prefix}infused_iron`
        },
        {
            input:items('ars_nouveau:source_gem'),
            output:'kubejs:source_psicoal',
            infuse_type:'mekanism:carbon',
            amount:40,
            id:`${id_prefix}source_psicoal`
        },
        {
            input:items('mekanism:enriched_iron'),
            output:items('mekanism:ingot_steel'),
            infuse_type:'mekanism:carbon',
            amount:10,
            id:`${id_prefix}ingot_steel`
        },
        {
            input:items('kubejs:ingot_refined_tar'),
            output:items('mekanism:ingot_refined_obsidian'),
            infuse_type:'mekanism:refined_obsidian',
            amount:40,
            id:`${id_prefix}ingot_refined_obsidian`
        }]

    recipes.forEach(recipe =>{
            event.custom({
                "type":"mekanism:metallurgic_infusing",
                "chemicalInput":{"amount":recipe.amount,"infuse_type":recipe.infuse_type},
                "itemInput":{"ingredient":recipe.input},
                "output":recipe.output
            }).id(recipe.id)
        })
})