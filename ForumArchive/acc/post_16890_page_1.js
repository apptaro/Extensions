[{"Owner":"MarianG","Date":"2015-09-02T08:40:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys. _lt_/p_gt__lt_p_gt_I have a little problem_co_ and I_t_m confused _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)_lt_/p_gt__lt_p_gt_Let me explain what I have to do_co_ and what I did_co_ and please tell me where I wrong._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I did a ground with multiple textures_co_ for this_co_ I used a shader. All clear. Now I have to add shadows_co_ but first I tryed to understand how it works lights in shader_co_ and this is almost clear _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here you have a wonderfull playground_co_ where I try to show you what happened to me. The light is draggable. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1TWMLX_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1TWMLX_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I have a light which rays shines the ground_co_ but I want that the darkness of light to be more black._lt_/p_gt__lt_p_gt_The second problem. The light is on left of the box_co_ but the box is black on left side_co_ and white in the right side. It looks like I have another light in the right of ground._lt_/p_gt__lt_p_gt_And the water is shines from this light_co_ not from my light.(for this I think I have to add a shader to the water material I think) _lt_/p_gt__lt_p_gt_And the last. For box shadow to be displayed on the ground I read that I need a modelMatrix to sent to shader_co_ a dephtexture_co_ and so on. I make a depthtexture using a rendererTargetTexture_co_ And I put the box in renderingList_co_ but how to sent modelMatrix to that shader?_lt_/p_gt__lt_p_gt_      _lt_/p_gt__lt_p_gt_Thank you guys. I wish you a wonderful day!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-02T15:38:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_dd_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I fixed your code_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1TWMLX%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1TWMLX#2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Mainly_dd__lt_/p_gt__lt_p_gt_- You defined a directional light but your shader assumed it was a point light_lt_/p_gt__lt_p_gt_- glFragColor.alpha has to be 1 here_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2015-09-02T17:00:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi. Thank a lot Deltakosh_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It was so simple_co_ but... _lt_/p_gt__lt_p_gt_I followed a tutorial_co_ and I was sure that I missed something _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2015-09-02T17:12:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_One more little problem. _lt_/p_gt__lt_p_gt_The box shadow is not displayed on the ground. For this I added a shadowGenerator from babylonjs_co_ and it didn_t_t work._lt_/p_gt__lt_p_gt_So to display the box shadow on the ground_co_ I have to modify the shader again?_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1TWMLX%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1TWMLX#3_lt_/a_gt__lt_/p_gt__lt_p_gt_If yes_co_ please show me tutorial_co_ or something. Thank again._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I really don_t_t like shaders_dd_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_....._lt_/p_gt__lt_p_gt_And another thing. Can I use multiple lights?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-02T19:56:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Displaying shadows is hard_co_ let_t_s be honest _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the part in the _qt_official_qt_ shaders that uses the shadows maps_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/default.fragment.fx#L226_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/default.fragment.fx#L226_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And in your case you also need to get the shadow maps from a shadow renderer_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2015-09-03T07:31:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmmmm. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ph34r.png_qt_ alt_eq__qt__dd_ph34r_dd__qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ph34r@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  _lt_/p_gt__lt_p_gt_I will try anyway to add shadows to the shader_co_ and I_t_ll share the result with you. Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-11-22T12:37:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-bulisor/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-bulisor/_qt_ rel_eq__qt__qt__gt_@bulisor_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid you manage display shadows on the ground?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2017-11-22T15:31:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello Arte_co_ .. huh_co_ what old topic _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t remember exactly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet me make some search_co_ if I_t_ll not found_co_ we_t_ll make this playground to work_co_ now it seems to be broken.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll be back _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2017-11-23T15:36:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI found it. Unfortunately_co_ it_t_s an abandoned project_co_ I can not remember why_co_ but when I tried that_co_ BabylonJS was in the beginning_co_ and there were not so many options. The only reason I started this shader is because I wanted to have more than one texture on the field and I read somewhere how you can play with the rbg channels of a texture. Now you have terrainMaterial that does exactly the same thing I tried before this material exists_co_ so my recommendation is to use this material if you need it instead of trying to make your own shader . If you open a threat and expose your problem_co_ and where do you wanted to use this shader_co_ maybe I can help you more.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]