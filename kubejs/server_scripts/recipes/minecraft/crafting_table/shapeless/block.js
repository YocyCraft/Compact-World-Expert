ServerEvents.recipes(event => {
    const id_prefix = 'compact_world:recipes/minecraft/crafting_table/shapeless/block/'
    /**
    {
     output:,
     output_amount:,
     input:[],
     id:`${id_prefix}`
    }
   */
    const recipes = [
        {
            output:'elementalcraft:elementpipe',
            output_amount:4,
            input:['elementalcraft:elementpipe_impaired','elementalcraft:elementpipe_impaired','elementalcraft:elementpipe_impaired','elementalcraft:elementpipe_impaired','kubejs:gem_earth','kubejs:gem_earth'],
            id:`${id_prefix}elementpipe_2`
        },
        {
            output:'kubejs:swift_alloy_sand',
            output_amount:1,
            input:['#forge:sand','elementalcraft:swift_alloy_nugget'],
            id:`${id_prefix}swift_alloy_sand`
        },
        {
            output:'create:cogwheel',
            output_amount:4,
            input:['create:shaft','create:andesite_casing'],
            id:`${id_prefix}cogwheel`
        },
        {
            output:'ae2:crafting_terminal',
            output_amount:1,
            input:['ae2:semi_dark_monitor','minecraft:crafting_table','ae2:fluix_glass_cable'],
            id:`${id_prefix}crafting_terminal`
        },
        {
            output:'laserio:laser_node',
            output_amount:1,
            input:['laserio:laser_connector'],
            id:`${id_prefix}laser_connector_to_laser_node`
        },
        {
            output:'laserio:laser_connector',
            output_amount:1,
            input:['laserio:laser_node'],
            id:`${id_prefix}laser_node_to_laser_connector`
        },
        {
            output:'cookingforblockheads:sink',
            output_amount:2,
            input:['thermal:device_water_gen','spirit:soul_steel_ingot'],
            id:`${id_prefix}sink`
        },
        {
            output:'elementalcraft:pedestal_air',
            output_amount:1,
            input:['kubejs:soul_steel_casing','elementalcraft:whiterock','elementalcraft:pristine_air_gem'],
            id:`${id_prefix}pedestal_air`
        },
        {
            output:'elementalcraft:pedestal_water',
            output_amount:1,
            input:['kubejs:soul_steel_casing','elementalcraft:whiterock','elementalcraft:pristine_water_gem'],
            id:`${id_prefix}pedestal_water`
        },
        {
            output:'elementalcraft:pedestal_fire',
            output_amount:1,
            input:['kubejs:soul_steel_casing','elementalcraft:whiterock','elementalcraft:pristine_fire_gem'],
            id:`${id_prefix}pedestal_fire`
        },
        {
            output:'elementalcraft:pedestal_earth',
            output_amount:1,
            input:['kubejs:soul_steel_casing','elementalcraft:whiterock','elementalcraft:pristine_earth_gem'],
            id:`${id_prefix}pedestal_earth`
        },
        {
            output:'malum:runewood_item_pedestal',
            output_amount:1,
            input:['malum:runewood_item_stand'],
            id:`${id_prefix}runewood_item/stand_to_pedestal`
        },
        {
            output:'malum:runewood_item_stand',
            output_amount:1,
            input:['malum:runewood_item_pedestal'],
            id:`${id_prefix}runewood_item/pedestal_to_stand`
        },
        {
            output:'xnet:advanced_connector_yellow',
            output_amount:4,
            input:['xnet:connector_yellow','xnet:connector_yellow','xnet:connector_yellow','xnet:connector_yellow','minecraft:diamond'],
            id:`${id_prefix}advanced_connector_yellow`
        },
        {
            output:'create:encased_chain_drive',
            output_amount:4,
            input:['create:andesite_casing','elementalcraft:swift_alloy_nugget','elementalcraft:swift_alloy_nugget','elementalcraft:swift_alloy_nugget','elementalcraft:swift_alloy_nugget'],
            id:`${id_prefix}encased_chain_drive`
        },
        {
            output:'clickmachine:auto_clicker',
            output_amount:1,
            input:['cyclic:user'],
            id:`${id_prefix}user_to_auto_clicker`
        },
        {
            output:'cyclic:user',
            output_amount:1,
            input:['clickmachine:auto_clicker'],
            id:`${id_prefix}auto_clicker_to_user`
        },
        {
            output:'cyclic:collector',
            output_amount:1,
            input:['thermal:device_collector'],
            id:`${id_prefix}device_collector_to_collector`
        },
        {
            output:'thermal:device_collector',
            output_amount:1,
            input:['cyclic:collector'],
            id:`${id_prefix}collector_to_device_collector`
        },
        {
            output:'mekanism:laser_tractor_beam',
            output_amount:1,
            input:['mekanism:laser_amplifier','minecraft:chest'],
            id:`${id_prefix}laraser_tractor_beam`
        },
        {
            output:'botania:redstone_spreader',
            output_amount:1,
            input:['botania:mana_spreader','minecraft:redstone_torch'],
            id:`${id_prefix}redstone_spreader`
        },
        {
            output:'xnet:netcable_yellow',
            output_amount:4,
            input:['xnet:connector_yellow'],
            id:`${id_prefix}netcable_yellow`
        },
        {
            output:'sophisticatedstorage:storage_link',
            output_amount:2,
            input:['sophisticatedstorage:controller'],
            id:`${id_prefix}storage_link`
        },
        {
            output:'functionalstorage:controller_extension',
            output_amount:1,
            input:['functionalstorage:storage_controller','modularrouters:range_up_augment','modularrouters:range_up_augment'],
            id:`${id_prefix}controller_extension`
        }]

    recipes.forEach(recipe =>{
        event.shapeless(Item.of(recipe.output,recipe.output_amount),recipe.input).id(recipe.id)
    })
})