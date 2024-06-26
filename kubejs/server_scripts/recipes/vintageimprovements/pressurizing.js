/*
ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/vintageimprovements/pressurizing/"


    const recipes = [
        {
            secondaryFluidInputs:true,
            input:[
                items('ae2:matter_ball'),
                fluids('kubejs:purewater',250),
            ],
            output:[
                items('kubejs:pure_matter_ball')
            ],
            time:200,
            id:'pure_matter_ball'
        }]

    recipes.forEach(recipe =>{
        if(recipe.secondaryFluidInputs == true){
            event.custom({
                "type":"vintageimprovements:pressurizing",
                "secondaryFluidInputs":0,
                "ingredients":recipe.input,
                "results":recipe.output,
                "processingTime":recipe.time
            }).id(`${id_prefix}_${recipe.id}`)
        }else{
            event.custom({
                "type":"vintageimprovements:pressurizing",
                "ingredients":recipe.input,
                "results":recipe.output,
                "processingTime":recipe.time
            }).id(`${id_prefix}_${recipe.id}`)
        }
    })
})
*/

function pressurizing(input,output,time) {
    this.type = "vintageimprovements:pressurizing"
    this.ingredients = input
    this.results = output
    this.processingTime = time != undefined ? time : 100
}

pressurizing.prototype = {
    secondaryFluidInputs : function(secondaryFluidInputs){
        this.secondaryFluidInputs = secondaryFluidInputs
        return this
    },
    heatRequirement : function(heatRequirement){
        this.heatRequirement = heatRequirement
        return this
    },
    secondaryFluidResults : function(secondaryFluidResults){
        this.secondaryFluidResults = secondaryFluidResults
        return this
    }
}



ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/vintageimprovements/pressurizing/"
    function pressurizing_recipe(reicpes,id){
        event.custom(reicpes).id(`${id_prefix}${id}`)
    }

    pressurizing_recipe(new pressurizing([items('ae2:matter_ball'),fluids('kubejs:purewater',250)],[items('kubejs:pure_matter_ball')]).secondaryFluidInputs(0).heatRequirement('heated'),'pure_matter_ball')
    pressurizing_recipe(new pressurizing([items('hexerei:moon_dust'),fluids('kubejs:purewater',100)],[fluids('hexerei:quicksilver_fluid',50)],50).secondaryFluidInputs(0).heatRequirement('heated'),'quicksilver')
    pressurizing_recipe(new pressurizing([items('mekanism:salt'),fluids('kubejs:purewater',250)],[items('thermal:sulfur')],50).secondaryFluidInputs(0).heatRequirement('heated'),'sulfur')
    pressurizing_recipe(new pressurizing([items('mekanism:alloy_reinforced'),items('kubejs:quartz_light_oil'),items('mekanism:ingot_refined_obsidian'),fluids('thermal:refined_fuel',100)],[items('mekanism:ultimate_control_circuit',2)],50).secondaryFluidInputs(0).heatRequirement('superheated'),'ultimate_control_circuit')
    pressurizing_recipe(new pressurizing([items('mekanism:ingot_refined_obsidian'),items('minecraft:echo_shard'),items('kubejs:quartz_light_oil'),fluids('industrialforegoing:biofuel',100)],[items('mekanism:reprocessed_fissile_fragment',2)],50).secondaryFluidInputs(0).heatRequirement('superheated'),'reprocessed_fissile_fragment')
    pressurizing_recipe(new pressurizing([items('thermal:sulfur')],[fluids('mekanism:sulfur_dioxide')]).secondaryFluidResults(0).heatRequirement('heated'),'sulfur_dioxide')
    pressurizing_recipe(new pressurizing([items('vintageimprovements:vanadium_nugget'),fluids('mekanism:sulfur_dioxide',250)],[fluids('mekanism:sulfur_trioxide',250)]).secondaryFluidResults(0).heatRequirement('heated'),'sulfur_trioxide')
    pressurizing_recipe(new pressurizing([fluids('minecraft:water'),fluids('mekanism:sulfur_trioxide')],[fluids('vintageimprovements:sulfuric_acid')]).secondaryFluidInputs(0).secondaryFluidResults(0).heatRequirement('heated'),'sulfuric_acid')
})