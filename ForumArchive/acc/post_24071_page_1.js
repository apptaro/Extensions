[{"Owner":"Uniform","Date":"2016-07-25T22:20:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like to know how to load a mesh produced with blender (textures and animations included) with a .babylon file. I am new to this and haven_t_t found the information in the tuts. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have this but it is loading the 3d geometry only_co_ no textures.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var rt _eq_ []_sm_\n\nBABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt__qt__co_ _qt_raiten.babylon_qt__co_ scene_co_ function (newMeshes){\n    rt _eq_ newMeshes[0]_sm_\n    rt.showBoundingBox _eq_ true_sm_\n    rt.scaling _eq_ new BABYLON.Vector3(0.4_co_0.5_co_0.4)_sm_\n    rt.position _eq_ new BABYLON.Vector3(3_co_1.5_co_-4)_sm_\n})_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-07-25T23:17:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHope this helps_lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/How_to_use_Bones_and_Skeletons_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/tutorials/How_to_use_Bones_and_Skeletons_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_q_eq_animation%20blender%20babylonjs_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_q_eq_animation blender babylonjs_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/23291-sceneloaderappend-playground-and-camera/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/23291-sceneloaderappend-playground-and-camera/_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_span_gt_add [at]gryff he knows everything about it (maybe)_lt_/span_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Uniform","Date":"2016-07-28T01:01:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thmm\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI still don_t_t get if the texture file is available inside the .babylon file and how to get it from.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-07-28T01:22:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand also have any errors in the console like failed to load texture? mostly a cross origin problem. you are running your file locally from the browser_co_ you can set a switch in or browser it depends_co_ something like _dd_ -allow-cross-orgin/load file from disk etc._lt_br /_gt__lt_br /_gt_\n\talso\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/21610-apache-server-setup-for-sponza-demo/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-07-28T02:14:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11606-uniform/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11606_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11606-uniform/_qt_ rel_eq__qt__qt__gt_@Uniform_lt_/a_gt_ _dd_ try checking the _qt_inline _qt_box outlined (below in the image) when you are exporting your .babylon file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have never tried it - as I_t_m always adjusting and tweaking my images. But it is supposed to _qt__lt_em_gt_turn textures into encoded strings for inclusion in the source code_lt_/em_gt__qt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_137474_qt_ data-ipsquote-contentid_eq__qt_24071_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1469488654_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2016-07-25 at 7_dd_17 PM_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tadd [at]gryff he knows everything about it (maybe)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would put the emphasis on the _qt_maybe_qt__lt_img alt_eq__qt__dd_lol_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ title_eq__qt__dd_lol_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/inline1.png.fdb2afe22022bd1a32cdea119248696e.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8792_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/inline1.png.fdb2afe22022bd1a32cdea119248696e.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_inline1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Uniform","Date":"2016-07-29T09:36:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBut how do you load textures from the .babylon file?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do you get it from with code? Do you need to load the texture separately or you can just use it if you export  the mesh with .babylon format?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically do we have any code fetching the texture from .babylon file containing the textured mesh?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-07-29T14:25:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tUsually_co_ when people report something like this_co_ they forgot to add a UVmap.  You do not need to in-line.  That is for possibly reducing load time_co_ and optional.  You should not have to do anything other than to make sure the texture file is is located where you say it is.  I do not use a .babylon very often &amp_sm_ never ImportMesh.  Where is _qt__qt_?  Shouldn_t_t this be something like _qt_./_qt_?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]