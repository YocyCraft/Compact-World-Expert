const hide_message = Text.translate("tip.compact_world.jei_hide_message")
const jei_hide = [
    "cyclic:crafting_stick",
    "cyclic:crafting_bag",
    "aiotbotania:livingwood_sword",
    "aiotbotania:livingwood_shovel",
    "aiotbotania:livingwood_pickaxe",
    "aiotbotania:livingwood_axe",
    "aiotbotania:livingwood_aiot",
    "naturesaura:ancient_sapling",
    "/quark:.*_chest/",
    "/sophisticatedstorage:.*_barrel_.*/",
    "/sophisticatedstorage:barrel/",
    "/sophisticatedstorage:chest/",
    "/sophisticatedstorage:.*_barrel/",
    "/sophisticatedstorage:.*_chest/",
    "/sophisticatedstorage:shulker_box/",
    "/sophisticatedstorage:.*_shulker_box/",
    "/hexerei:.*_chest/",
    "sophisticatedstorage:basic_to_iron_tier_upgrade",
    "sophisticatedstorage:basic_to_copper_tier_upgrade",
    "sophisticatedstorage:basic_tier_upgrade",
    "/sophisticatedstorage:iron_to_.*/",
    "/sophisticatedstorage:copper_.*/",
    "sophisticatedstorage:stack_upgrade_tier_1",
    "sophisticatedstorage:stack_upgrade_tier_2",
    "sophisticatedstorage:stack_upgrade_tier_1_plus",
    "functionalstorage:copper_upgrade",
    "cyclic:crusher",
    "sophisticatedbackpacks:iron_backpack",
    "sophisticatedbackpacks:copper_backpack",
    "sophisticatedbackpacks:stack_upgrade_starter_tier",
    "sophisticatedbackpacks:stack_upgrade_tier_1",
    "aiotbotania:livingwood_hoe",
    "compactcrafting:projector_dish",
    "/ars_nouveau:.*_sourcelink/",
    "botania:cocoon",
    "ars_nouveau:novice_spell_book",
    "naturesaura:effect_powder",
    "ae2:flawed_budding_quartz",
    "ae2:chipped_budding_quartz",
    "ae2:damaged_budding_quartz",
    "mythicbotany:petrunia",
    "botania:endoflame",
    "minecraft:obsidian",
    "/elementalcraft:shrine_upgrade_.*/",
    "elementalcraft:scroll",
    "elementalcraft:pure_ore",
    "elementalcraft:springshrine",
    "elementalcraft:groveshrine",
    "elementalcraft:breedingshrine",
    "elementalcraft:enderlockshrine",
    "elementalcraft:sweetshrine",
    "elementalcraft:overloadshrine",
    "elementalcraft:buddingshrine",
    "elementalcraft:spell_desk",
    "elementalcraft:growthshrine",
    "elementalcraft:harvestshrine",
    "elementalcraft:spawningshrine",
    "elementalcraft:lumbershrine",
    "elementalcraft:oreshrine",
    "elementalcraft:firepylon",
    "elementalcraft:firefurnace",
    "elementalcraft:fireblastfurnace",
    "elementalcraft:purifier",
    "elementalcraft:vacuumshrine",
    "industrialforegoing:transporter",
    "create:water_wheel",
    "/botanypots:.*\_terracotta_botany_pot/",
    "/botanypots:.*\_terracotta_hopper_botany_pot/",
    "/botanypots:.*\_concrete_botany_pot/",
    "/botanypots:.*\_concrete_hopper_botany_pot/",
    "ironfurnaces:upgrade_iron",
    "ironfurnaces:upgrade_iron2",
    "ironfurnaces:iron_furnace",
    "ironfurnaces:silver_furnace",
    "ironfurnaces:copper_furnace",
    "ironfurnaces:upgrade_copper",
    "ironfurnaces:upgrade_silver",
    "ironfurnaces:upgrade_gold",
    "ironfurnaces:upgrade_silver2",
    "ironfurnaces:upgrade_gold2",
    "botania:elven_spreader",
    "constructionwand:iron_wand",
    "powah:energizing_rod_starter",
    "industrialforegoing:speed_addon_1",
    "industrialforegoing:efficiency_addon_1",
    "industrialforegoing:processing_addon_1",
    "aeinfinitybooster:infinity_card",
    "industrialforegoing:fluid_sieving_machine",
    "industrialforegoing:fermentation_station",
    "industrialforegoing:washing_factory",
    "mythicbotany:wither_aconite",
    "powah:uraninite_raw",
    "powah:uraninite_ore_poor",
    "powah:uraninite_ore",
    "botania:fel_pumpkin",
    "thermal:apatite_ore",
    "thermal:deepslate_apatite_ore",
    "create_new_age:magnetite_block",
    "create_new_age:redstone_magnet",
    "create_new_age:layered_magnet",
    "minecraft:coal_ore",
    "minecraft:deepslate_coal_ore",
    "thermal:press_packing_2x2_die",
    "thermal:press_unpacking_die",
    "thermal:press_packing_3x3_die",
    "estrogen:estrogen_patches",
    "estrogen:horse_urine_bottle",
    "estrogen:estrogen_chip_cookie",
    "estrogen:used_filter",
    "estrogen:testosterone_powder",
    "estrogen:testosterone_chunk",
    "estrogen:balls",
    "estrogen:crystal_estrogen_pill",
    "estrogen:estrogen_pill",
    "estrogen:incomplete_estrogen_patches",
    "estrogen:uwu",
    "estrogen:incomplete_uwu",
    "estrogen:molten_slime_bucket",
    "estrogen:molten_amethyst_bucket",
    "estrogen:testosterone_mixture_bucket",
    "estrogen:liquid_estrogen_bucket",
    "estrogen:filtrated_horse_urine_bucket",
    "estrogen:horse_urine_bucket",
    "/malum:.*_tainted_rock/",
    "/malum:tainted_rock_.*/",
    "malum:tainted_rock",
    "/malum:.*_twisted_rock/",
    "/malum:twisted_rock_.*/",
    "malum:twisted_rock",
    "/malum:.*_runewood/",
    "malum:runewood",
    "/malum:.*_soulwood/",
    "/malum:soulwood_.*/",
    "malum:soulwood",
    "/malum:.*_node/",
    "/malum:cracked_.*_impetus/",
    "/malum:.*_impetus/",
    "/malum:.*_ring/",
    "/malum:ring_of_.*/",
    "/malum:.*_belt/",
    "/malum:belt_of_.*/",
    "/malum:.*_necklace/",
    "/malum:necklace_of_.*/",
    "/malum:mechanical_weave_.*/",
    "malum:esoteric_spool",
    "/malum:.*_weave/",
    "/malum:.*_prideweave/",
    "malum:coal_fragment",
    "malum:coal_fragment",
    "malum:holy_sap",
    "malum:holy_sapball",
    "malum:holy_syrup",
    "malum:holy_caramel",
    "malum:blighted_earth",
    "malum:blighted_soil",
    "malum:blighted_weed",
    "malum:blighted_tumor",
    "malum:blighted_tumor",
    "malum:unholy_sap",
    "malum:unholy_sapball",
    "malum:unholy_syrup",
    "malum:unholy_caramel",
    "malum:arcane_charcoal",
    "malum:arcane_charcoal_fragment",
    "malum:block_of_arcane_charcoal",
    "/malum:blazing_.*/",
    "malum:block_of_blazing_quartz",
    "/malum:natural_quartz_.*/",
    "/malum:soulstone_.*/",
    "/malum:.*_soulstone/",
    "malum:weavers_workbench",
    "malum:spirit_jar",
    "malum:soul_vial",
    "malum:brilliant_obelisk",
    "malum:rotting_essence",
    "malum:grim_talc",
    "malum:cthonic_gold",
    "malum:hex_ash",
    "malum:charcoal_fragment",
    "malum:blighted_gunk",
    "malum:deepslate_quartz_ore",
    "malum:natural_quartz",
    "malum:brilliant_stone",
    "malum:brilliant_deepslate",
    "malum:cluster_of_brilliance",
    "malum:crushed_brilliance",
    "malum:chunk_of_brilliance",
    "/malum:block_of_.*/",
    "malum:void_salts",
    "malum:cursed_grit",
    "malum:alchemical_calx",
    "malum:spirit_fabric",
    "malum:spectral_lens",
    "malum:poppet",
    "malum:corrupted_resonance",
    "malum:null_growth",
    "malum:hallowed_gold_ingot",
    "malum:hallowed_gold_nugget",
    "malum:hallowed_spirit_resonator",
    "malum:soul_stained_steel_ingot",
    "malum:soul_stained_steel_nugget",
    "malum:stained_spirit_resonator",
    "malum:tainted_ether_brazier",
    "malum:twisted_ether_brazier",
    "malum:iridescent_ether",
    "malum:ether",
    "malum:tainted_iridescent_ether_brazier",
    "malum:twisted_iridescent_ether_brazier",
    "malum:spirit_pouch",
    "/malum:.*_scythe/",
    "/malum:.*_sword/",
    "/malum:.*_pickaxe/",
    "/malum:.*_axe/",
    "/malum:.*_shovel/",
    "/malum:.*_hoe/",
    "/malum:.*_helmet/",
    "/malum:.*_boots/",
    "/malum:.*_leggings/",
    "/malum:.*_chestplate/",
    "/malum:.*_knife/",
    "/malum:soul_hunter_.*/",
    "malum:tyrving",
    "malum:mephitic_edge",
    "malum:the_vessel",
    "malum:token_of_gratitude",
    "malum:primordial_soup",
    "malum:mass_of_blighted_gunk",
    "/malum:runewood_.*_slab/",
    "/malum:runewood_.*_stairs/",
    "malum:runewood_totem_base",
    "malum:runewood_planks_fence",
    "malum:runewood_planks_fence_gate",
    "malum:runewood_sign",
    "malum:runewood_boat",
    "malum:runewood_trapdoor",
    "malum:runewood_door",
    "malum:runewood_beam",
    "malum:runewood_planks_button",
    "malum:runewood_planks_pressure_plate",
    "malum:runewood_tiles",
    "malum:runewood_panel",
    "malum:runewood_obelisk",
    "compactmachines:machine_tiny",
    "compactmachines:machine_small",
    "compactmachines:machine_large",
    "/ironfurnaces:upgrade_.*/",
    "ironfurnaces:crystal_furnace",
    "ironfurnaces:obsidian_furnace",
    "ironfurnaces:emerald_furnace",
    "ironfurnaces:allthemodium_furnace",
    "ironfurnaces:vibranium_furnace",
    "ironfurnaces:unobtainium_furnace",
    "ironfurnaces:item_spooky",
    "ironfurnaces:item_xmas",
    "ironfurnaces:augment_blasting",
    "ironfurnaces:augment_smoking",
    "ironfurnaces:augment_xp",
    "ironfurnaces:item_linker",
    "ironfurnaces:rainbow_coal",
    "ironfurnaces:item_heater",
    "ironfurnaces:heater",
    "ironfurnaces:item_copy",
    "minecraft:deepslate_lapis_ore",
    "industrialforegoing:dye_mixer",
    "createutilities:void_tank",
    "createutilities:void_chest",
    "createutilities:void_battery",
    "xnet:redstone_proxy_upd",
    "xnet:redstone_proxy",
    "xnet:router",
    "xnet:wireless_router",
    "xnet:antenna",
    "xnet:antenna_base",
    "xnet:antenna_dish",
    "/xnet:.*connector_red/",
    "/xnet:.*connector_green/",
    "/xnet:.*connector_blue/",
    "/xnet:.*connector_routing/",
    "spirit:soul_crystal_shard",
    "spirit:crude_soul_crystal",
    "/powah:battery_.*/",
    "/powah:energy_cell_.*/",
    "/powah:ender_cell_.*/",
    "/powah:energy_cable_.*/",
    "/powah:ender_gate_.*/",
    "/powah:furnator_.*/",
    "/powah:magmator_.*/",
    "/powah:thermo_generator_.*/",
    "/powah:solar_panel_.*/",
    "/powah:reactor_.*/",
    "/powah:player_transmitter_.*/",
    "/powah:energy_hopper_.*/",
    "/powah:energy_discharger_.*/",
    "powah:deepslate_uraninite_ore_dense",
    "powah:deepslate_uraninite_ore",
    "powah:deepslate_uraninite_ore_poor",
    "powah:player_aerial_pearl",
    "powah:aerial_pearl",
    "powah:blank_card",
    "powah:binding_card",
    "powah:binding_card_dim",
    "create:crushed_raw_iron",
    "minecraft:deepslate_iron_ore",
    "minecraft:iron_ore",
    "/cyclic:apple_.*/",
    "/cyclic:mattock.*/",
    "cyclic:antigravity",
    "/cyclic:charm_.*/",
    "/cyclic:.*_pickaxe/",
    "/cyclic:.*_axe/",
    "/cyclic:.*_shovel/",
    "/cyclic:.*_sword/",
    "/cyclic:.*_hoe/",
    "/cyclic:shield_.*/",
    "cyclic:sprinkler",
    "/cyclic:.*_data/",
    "cyclic:terra_glass",
    "cyclic:detector_weather",
    "cyclic:detector_moon",
    "cyclic:rotator",
    "cyclic:anvil_void",
    "cyclic:fan_slab",
    "cyclic:glowing_helmet",
    "cyclic:doorbell",
    "cyclic:slingshot",
    "cyclic:ender_item_shelf",
    "cyclic:ender_book",
    "cyclic:prospector",
    "cyclic:soulstone",
    "cyclic:inventory_cake",
    "cyclic:packager",
    "cyclic:shearing",
    "/cyclic:spikes_.*/",
    "/cyclic:spikes_.*/",
    "/cyclic:chorus_.*/",
    "/cyclic:wireless_.*/",
    "/cyclic:sound_.*/",
    "/cyclic:.*_inspector/",
    "/cyclic:.*_scepter/",
    "/cyclic:generator_.*/",
    "cyclic:sponge_lava",
    "cyclic:sponge_milk",
    "cyclic:compressed_cobblestone",
    "cyclic:cloud_membrane",
    "cyclic:cloud",
    "cyclic:soil",
    "cyclic:lamp",
    "cyclic:membrane",
    "cyclic:teleport",
    "/cyclic:.*_bars/",
    "/cyclic:.*_chain/",
    "/cyclic:.*_lantern/",
    "/cyclic:.*_pressure_plate/",
    "/cyclic:flower_.*/",
    "/cyclic:.*_candle/",
    "cyclic:storage_bag",
    "cyclic:mob_container",
    "cyclic:tile_transporter_empty",
    "cyclic:tile_transporter",
    "cyclic:magic_net",
    "cyclic:spawner_seeker",
    "cyclic:glove_climb",
    "cyclic:flippers",
    "cyclic:heart",
    "cyclic:heart_empty",
    "/cyclic:boomerang_.*/",
    "/cyclic:quiver_.*/",
    "cyclic:spelunker",
    "cyclic:laser",
    "cyclic:ghost",
    "cyclic:ghost_phantom",
    "cyclic:shears_flint",
    "cyclic:torch_launcher",
    "cyclic:evoker_fang",
    "cyclic:ender_bag",
    "cyclic:carbon_paper",
    "/cyclic:spell_.*/",
    "/cyclic:.*_wand/",
    "/cyclic:ender.*/",
    "/cyclic:scythe_.*/",
    "/cyclic:stirrups.*/",
    "cyclic:computer_shape",
    "cyclic:eye_redstone",
    "cyclic:eye_teleport",
    "cyclic:battery_clay",
    "cyclic:battery",
    "cyclic:peat_unbaked",
    "cyclic:peat_baked",
    "cyclic:peat_farm",
    "cyclic:melter",
    "cyclic:cask",
    "cyclic:miner",
    "cyclic:placer_fluid",
    "cyclic:collector_fluid",
    "cyclic:harvester",
    "cyclic:structure",
    "cyclic:forester",
    "cyclic:breaker",
    "cyclic:solidifier",
    "cyclic:uncrafter",
    "cyclic:screen",
    "cyclic:detector_entity",
    "cyclic:detector_item",
    "cyclic:plate_launch",
    "cyclic:plate_launch_redstone",
    "cyclic:clock",
    "cyclic:crate_mini",
    "cyclic:crate",
    "cyclic:anvil_magma",
    "cyclic:anvil",
    "cyclic:soundproofing",
    "cyclic:soundproofing_ghost",
    "cyclic:light_camo",
    "cyclic:fan",
    "cyclic:fisher",
    "cyclic:beacon",
    "cyclic:anti_beacon",
    "cyclic:conveyor",
    "cyclic:unbreakable_reactive",
    "cyclic:unbreakable_block",
    "cyclic:fireplace",
    "cyclic:terra_preta",
    "cyclic:dice",
    "cyclic:trash",
    "cyclic:tank",
    "cyclic:beacon_redstone",
    "cyclic:shears_obsidian",
    "cyclic:sleeping_mat",
    "cyclic:biomass",
    "cyclic:experience_food",
    "cyclic:experience_pylon",
    "cyclic:ender_controller",
    "cyclic:ender_shelf",
    "cyclic:fire_killer",
    "cyclic:milk_bottle",
    "/cyclic:wand_.*/",
    "/cyclic:.*_chestplate/",
    "/cyclic:.*_leggings/",
    "/cyclic:.*_helmet/",
    "/cyclic:.*_boots/",
    "/cyclic:scaffold_.*/",
    "/cyclic:.*carrot_.*/",
    "/cyclic:.*_pipe/",
    "cyclic:waxed_redstone",
    "cyclic:flute_summoning",
    "cyclic:no_soliciting",
    "cyclic:altar_destruction",
    "cyclic:button_blackstone",
    "cyclic:button_basalt",
    "cyclic:magnet_block",
    "cyclic:laser_cannon",
    "cyclic:fireball",
    "cyclic:spark",
    "cyclic:fireball_dark",
    "cyclic:lunchbox",
    "cyclic:toxic_carrot",
    "cyclic:item_infinite",
    "cyclic:battery_infinite",
    "cyclic:disenchanter",
    "malum:spirit_catalyzer",
    "malum:twisted_tablet",
    "thermal:tin_ore",
    "thermal:deepslate_tin_ore",
    "minecraft:copper_ore",
    "minecraft:deepslate_copper_ore",
    "powah:energizing_rod_blazing",
    "powah:capacitor_blazing",
    "mekanism:basic_control_circuit",
    "thermal:sulfur_ore",
    "thermal:deepslate_sulfur_ore",
    "ironfurnaces:netherite_furnace",
    "ironfurnaces:rainbow_core",
    "ironfurnaces:rainbow_plating",
    "ironfurnaces:augment_fuel",
    "powah:energizing_rod_spirited",
    "powah:capacitor_spirited",
    "powah:crystal_spirited",
    "powah:spirited_crystal_block",
    "minecraft:nether_quartz_ore",
    "mekanism:bio_fuel",
    "thermalendergy:melodic_range_augment",
    "thermalendergy:dynamo_consumption_nullifier_augment",
    "thermalendergy:dynamo_fuel_nullifier_augment",
    "thermalendergy:energy_nullifier_augment",
    "thermalendergy:resonant_catalyst_augment",
    "/thermalendergy:melodium_.*/",
    "cyclic:crafter",
    "rftoolsutility:module_template",
    "rftoolsutility:moduleplus_template",
    "/rftoolsutility:.*_module/",
    "rftoolsutility:syringe",
    "rftoolsutility:screen_link",
    "rftoolsutility:matter_beamer",
    "rftoolsutility:spawner",
    "rftoolsutility:environmental_controller",
    "rftoolsutility:advanced_charged_porter",
    "rftoolsutility:destination_analyzer",
    "rftoolsutility:charged_porter",
    "rftoolsutility:teleport_probe",
    "rftoolsutility:teleport_probe",
    "rftoolsutility:matter_booster",
    "rftoolsutility:dialing_device",
    "rftoolsutility:matter_receiver",
    "rftoolsutility:matter_transmitter",
    "rftoolsutility:tank",
    "rftoolsutility:simple_dialer",
    "rftoolsutility:screen_controller",
    "rftoolsutility:creative_screen",
    "rftoolsutility:screen",
    "rftoolsutility:redstone_information",
    "rftoolsutility:redstone_transmitter",
    "rftoolsutility:redstone_receiver",
    "rftoolsutility:wire",
    "rftoolsutility:timer",
    "rftoolsutility:analog",
    "rftoolsutility:counter",
    "rftoolsutility:digit",
    "rftoolsutility:invchecker",
    "rftoolsutility:sensor",
    "rftoolsutility:sequencer",
    "rftoolsutility:logic",
    "create:windmill_bearing",
    "create:sail_frame",
    "create:white_sail",
    "xnet:netcable_routing",
    "xnet:netcable_blue",
    "xnet:netcable_green",
    "xnet:netcable_red",
    "botania:orechid",
    "botania:orechid_ignem",
    'industrialforegoing:ore_laser_base'
]

JEIEvents.hideItems(event => {
    jei_hide.forEach(hides =>{
        event.hide(hides)
    })
})

ItemEvents.tooltip(tooltip =>{
    jei_hide.forEach(hides =>{
        tooltip.add(hides,hide_message)
    })
})


const other_functional_storage = ["jungle","birch","spruce","acacia","dark_oak","crimson","warped","mangrove"]
const other_functional_storage_tier = ["1","2","4"]

const mythicbotany_capacity_flower = ["feysythia","raindeletia"]
const botania_capacity_flower = ["dandelifeon","rafflowsia","shulk_me_not","entropinnyum","munchdew","rosa_arcana","thermalily","hydroangeas","spectrolus","narslimmus","gourmaryllis","kekimurus"]

ItemEvents.tooltip(tooltip =>{
    other_functional_storage_tier.forEach(tier =>{
    other_functional_storage.forEach(storage =>{
        tooltip.add("functionalstorage:" + storage + "_" +  tier,hide_message)
    })})

    mythicbotany_capacity_flower.forEach(flowers =>{
        tooltip.add("mythicbotany:" + flowers,hide_message)
        tooltip.add("mythicbotany:" + flowers + "_floating",hide_message)
    })

    botania_capacity_flower.forEach(flowers =>{
        tooltip.add("botania:" + flowers,hide_message)
        tooltip.add("botania:floating_" + flowers,hide_message)
    })
})

JEIEvents.hideItems(event => {

    other_functional_storage_tier.forEach(tier =>{
    other_functional_storage.forEach(storage =>{
        event.hide("functionalstorage:" + storage + "_" +  tier)
    })})

    mythicbotany_capacity_flower.forEach(flowers =>{
        event.hide("mythicbotany:" + flowers)
        event.hide("mythicbotany:" + flowers + "_floating")
    })

    botania_capacity_flower.forEach(flowers =>{
        event.hide("botania:" + flowers)
        event.hide("botania:floating_" + flowers)
    })
})

const fluid = [
        "estrogen:molten_slime",
        "estrogen:testosterone_mixture",
        "estrogen:liquid_estrogen",
        "estrogen:filtrated_horse_urine",
        "estrogen:horse_urine",
        "estrogen:molten_amethyst",
]

JEIEvents.hideFluids(event =>{
    fluid.forEach(fluids =>{
        event.hide(fluids)
    })
})