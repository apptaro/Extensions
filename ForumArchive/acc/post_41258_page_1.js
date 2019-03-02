[{"Owner":"jamessimo","Date":"2018-11-14T05:19:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am making a large game world like a tile map. The issue I have is my tile map is at least 250x250 tiles (could be 500x500) so if I use \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var grid _eq_ {\n        _t_h_t_ _dd_ 250_co_\n        _t_w_t_ _dd_ 250\n    }_sm_\n\t\n    var tiledGround _eq_ new BABYLON.MeshBuilder.CreateTiledGround(_qt_Tiled Ground_qt__co_ {xmin_dd_ -1_co_ zmin_dd_ -1_co_ xmax_dd_ 1_co_ zmax_dd_ 1_co_ subdivisions_dd_ grid}_co_ scene)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIt crashes Babylonjs or runs at 1FPS if I am lucky_lt_br /_gt_\n\t_lt_br /_gt_\n\tHowever if I use \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var ground _eq_ BABYLON.MeshBuilder.CreateGround(_qt_gd_qt__co_ {width_dd_ 8000_co_ height_dd_ 8000_co_ subdivsions_dd_ 250}_co_ scene)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tit runs just fine_co_ so my plan was to make a ground mesh and loop through each quad or grid[x][y] and apply a material on it depending on what texture I need._lt_br /_gt_\n\t_lt_br /_gt_\n\tJust to give you an idea of what I am doing_co_ I am trying to make a 2d map viewer I made 3D _lt_a href_eq__qt_https_dd_//jameessimo.itch.io/rimmap_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//jamessimo.itch.io/rimmap_lt_/a_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy question is how do I do this? I do not have a large single texture I can apply to the whole plane_co_ the textures are applied depending on what a large json file tells it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-14T06:13:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya JS.  I don_t_t have solutions to your issues_co_ yet... but I wanted to show you...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/resources/offsite_tutorials_list#c%C3%A9lian-garcia-kostar111-home-website-unknown_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/resources/offsite_tutorials_list#célian-garcia-kostar111-home-website-unknown_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKostar111 isn_t_t around much anymore_co_ but he kept his tiled terrain map tutorials on-line_co_ so there might be something to be learned_co_ there_co_ in his 3 links.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI goofed around with some tiling and displaceMaps_co_ once.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1VGWP9%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1VGWP9#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot very exciting.  _lt_span_gt__dd_)  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ although I know almost NOTHING about multiMaterials_co_ it might be worth a _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_q_eq_subMaterials%20multiMaterials&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_28_co_29_co_30_co_31_co_38&amp_sm_search_and_or_eq_or_qt_ rel_eq__qt__qt__gt_forum search_lt_/a_gt_ and _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/playground/?code_eq_multiMaterial_qt_ rel_eq__qt_external nofollow_qt__gt_playground search_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a quick demo I found_co_ laying along-side Babylon Blvd. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1VGWP9%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1VGWP9#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStay tuned for more/better comments/answers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-14T15:50:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou may also find the DynamicTerrain interesting_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/extensions/dynamic_terrain_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/extensions/dynamic_terrain_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-11-14T15:53:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tplease note that the documentation has just been updated with the last new feature here _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-11-14T17:54:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_234863_qt_ data-ipsquote-contentid_eq__qt_41258_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542210827_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tplease note that the documentation has just been updated with the last new feature\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNow PRed to Babylon.js Docs\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-14T18:05:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmerged _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ Publication in progress_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]