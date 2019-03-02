[{"Owner":"MadeByJawns","Date":"2018-04-27T14:11:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ is there any way to change the shadow colour when using the shadow-only material_co_ apart from using shadowGenerator.setDarkness() ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf not_co_ I_t_m guessing maybe I_t_d need to try extend the shader to include emissive? is that right? or is there a different / easier way I can have a transparent mesh that displays colored shadows?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is so I can have a model with a blueish shadow displayed on page and be able to change the background page colour without also having to then match up the colour of a plane in the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny pointers on how to begin would be great!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-27T16:34:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tShadows are generating by masking the lights. They are not producing a color per se. They just block the light to add energy to the local mesh color.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo to produce colored shadow you will need to create your own shader that will compute the shadow level and will write the color you want accordingly\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe idea would be to replace this line _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/materialsLibrary/src/shadowOnly/shadowOnly.fragment.fx#L49_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/materialsLibrary/src/shadowOnly/shadowOnly.fragment.fx#L49_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_by_dd_ _lt_/span_gt__lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ rgb(255_co_ 251_co_ 221)_sm_ color_dd_ rgb(36_co_ 41_co_ 46)_sm_ font-family_dd_ _qt_SFMono-Regular_qt__co_Consolas_co__qt_Liberation Mono_qt__co_Menlo_co_Courier_co_monospace_sm_ font-size_dd_ 12px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ line-height_dd_ 20px_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ pre_sm_ word-spacing_dd_ 0px_sm_ word-wrap_dd_ normal_sm__t__gt_vec4 color _eq_ myColor * _lt_/span_gt__lt_span class_eq__qt_pl-c1_qt_ style_eq__qt_background-color_dd_ transparent_sm_ box-sizing_dd_ border-box_sm_ color_dd_ rgb(0_co_ 92_co_ 197)_sm_ font-family_dd_ &amp_sm_quot_sm_sfmono-regular&amp_sm_quot_sm__co_consolas_co_&amp_sm_quot_sm_liberation mono&amp_sm_quot_sm__co_menlo_co_courier_co_monospace_sm_ font-size_dd_ 12px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ pre_sm_ word-spacing_dd_ 0px_sm__qt__gt_clamp_lt_/span_gt__lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ rgb(255_co_ 251_co_ 221)_sm_ color_dd_ rgb(36_co_ 41_co_ 46)_sm_ font-family_dd_ _qt_SFMono-Regular_qt__co_Consolas_co__qt_Liberation Mono_qt__co_Menlo_co_Courier_co_monospace_sm_ font-size_dd_ 12px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ line-height_dd_ 20px_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ pre_sm_ word-spacing_dd_ 0px_sm_ word-wrap_dd_ normal_sm__t__gt_(shadow_co_ _lt_/span_gt__lt_span class_eq__qt_pl-c1_qt_ style_eq__qt_background-color_dd_ transparent_sm_ box-sizing_dd_ border-box_sm_ color_dd_ rgb(0_co_ 92_co_ 197)_sm_ font-family_dd_ &amp_sm_quot_sm_sfmono-regular&amp_sm_quot_sm__co_consolas_co_&amp_sm_quot_sm_liberation mono&amp_sm_quot_sm__co_menlo_co_courier_co_monospace_sm_ font-size_dd_ 12px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ pre_sm_ word-spacing_dd_ 0px_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ rgb(255_co_ 251_co_ 221)_sm_ color_dd_ rgb(36_co_ 41_co_ 46)_sm_ font-family_dd_ _qt_SFMono-Regular_qt__co_Consolas_co__qt_Liberation Mono_qt__co_Menlo_co_Courier_co_monospace_sm_ font-size_dd_ 12px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ line-height_dd_ 20px_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ pre_sm_ word-spacing_dd_ 0px_sm_ word-wrap_dd_ normal_sm__t__gt_._co_ _lt_/span_gt__lt_span class_eq__qt_pl-c1_qt_ style_eq__qt_background-color_dd_ transparent_sm_ box-sizing_dd_ border-box_sm_ color_dd_ rgb(0_co_ 92_co_ 197)_sm_ font-family_dd_ &amp_sm_quot_sm_sfmono-regular&amp_sm_quot_sm__co_consolas_co_&amp_sm_quot_sm_liberation mono&amp_sm_quot_sm__co_menlo_co_courier_co_monospace_sm_ font-size_dd_ 12px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ pre_sm_ word-spacing_dd_ 0px_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ rgb(255_co_ 251_co_ 221)_sm_ color_dd_ rgb(36_co_ 41_co_ 46)_sm_ font-family_dd_ _qt_SFMono-Regular_qt__co_Consolas_co__qt_Liberation Mono_qt__co_Menlo_co_Courier_co_monospace_sm_ font-size_dd_ 12px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ line-height_dd_ 20px_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ pre_sm_ word-spacing_dd_ 0px_sm_ word-wrap_dd_ normal_sm__t__gt_.)_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MadeByJawns","Date":"2018-04-30T10:44:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the insights Deltakosh!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVery interesting stuff_co_ I_t_ve never done any shaders apart from using the material editor in Unreal so it_t_s gunna be a bit of a learning curve I suspect_co_ gunna do some reading on materials/shaders and give it a go when I have time _dd_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]