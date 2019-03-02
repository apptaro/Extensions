[{"Owner":"georage","Date":"2017-01-24T04:06:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs it possible to remove the effect? Is it possible to check if the effect has been applied to a mesh (other than an independent variable)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have an onClick event that adds the effect to the clicked mesh_co_ but it seems to multiply the effect every time the mesh is clicked and it starts to look crazy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like to remove the effect from non-targeted meshes to save gpu cycles_co_ and be able to check if the effect even needs to be applied.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for any tips.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is an old playground I made if someone wants to play with it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#AX6IZ%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#AX6IZ#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-24T14:02:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/23509-dispose-godrays/#comment-134451_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/23509-dispose-godrays/#comment-134451_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(found with forum search for _t_dispose godrays_t_)  But_co_ there_t_s more fun ways_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#AX6IZ%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#AX6IZ#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow you know how to dispose a godrays.  Let_t_s look at some more things.  Ready for a playground tour?  I knew you were.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFirst_co_ let_t_s look at line 10_co_ a basic hemi light (disabled).  I needed to turn that on... to allow a .diffuseColor on the sun_t_s material... to produce the godrays.  You were using an .emissiveColor_co_ which also works fine_co_ and without needing to shine light on the sun.  I just wanted to test .diffuseColor for godrays_co_ too.  I needed the hemi light momentarily... because the pointLight was not lighting the sun mesh itself.  (I_t_m not sure it is SUPPOSED to.  The point light might be there ONLY to light other scene mesh_co_ and not the sun mesh itself.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe reason the pointLight (which is inside the sun mesh because of line 19) was not lighting the sun mesh... is because the sun mesh was constructed with sideOrientation.FRONTSIDE.  At the end of line 18_co_ I set the sun mesh to a BACKSIDE mesh.  Now I can turn off the hemiLight_co_ and the pointLight inside the sun mesh... also lights the sun mesh.  DOUBLESIDE _lt_em_gt_should_lt_/em_gt_ work_co_ too_co_ I think...  but it doesn_t_t.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFeel free to go back to emissiveColor... if you please_co_ where the mesh produces its own light.  I just wanted to do some tests.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIn lines 27-31_co_ I included some godrays properties that can be tweaked/set.  They are currently set to default values.  You can also _qt_turn off_qt_ a godrays (VLS)... by setting that .density _eq_ 0.  OR_co_ you can push the sun mesh into the godray_t_s .excludedMeshes array (and take it back out)... to disable/enable the VLS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 33... just for fun... I _qt_overloaded_qt_ the sun mesh... by adding a .godrays property_co_ and I put the godrays post-proc-obj... INTO that property.  The sun now _qt_carries_qt_ its own VLS.  This might not appropriate for 10_co_000 stars_co_ but for something like the sun... it might be wise and handy.  You might also consider sun.lightSource _eq_ sunlight_co_ another _qt_overload_qt_.  Now the sun carries its godrays AND its light... with it.  So now_co_ sun.godrays.density _eq_ 0... turns off the sun_t_s rays.  So does sun.godrays.excludedMeshes.push(sun)_sm_   Setting sun.godrays.excludedMeshes _eq_ []_sm_  ... would turn it back ON.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLastly_co_ let_t_s look at line 40 and 41.  If you DO set sun.godrays _eq_ godrays (like line 33)_co_ then when you dispose it (line 40)... you should also do line 41.  The godrays might not dispose properly... IF a reference to it... is still living in sun.godrays.  You should release it from its duty as the property filler of sun.godrays.  These godrays are very devoted_co_ and they won_t_t walk off the job.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Once you relieve the godrays from sun.godrays duty... then it will dispose properly.  Understand?  I hope so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI COULD have told you wrong things.  Check my stuff_co_ and feel free to correct me... if your experiments prove me wrong.  I_t_m no Godrays God.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOk George... you are now the world_t_s leading expert on BJS godrays.  (OH NO_co_ huh?)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Hope this helps.  Ask questions if you like_co_ of course.  Party on!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ Special thanks to _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11802_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/_qt_ rel_eq__qt__qt__gt_@Luaacro_lt_/a_gt_ for helping us with the godrays.dispose(camera) information_co_ and to _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21088-oxy11/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21088_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21088-oxy11/_qt_ rel_eq__qt__qt__gt_@OXY11_lt_/a_gt_ for the initial good question.  They _qt_blazed some trails_qt_ for us_co_ here.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"georage","Date":"2017-01-24T18:44:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tdo they pay you wingy? i hope so. and well!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks again. I searched for hours and never hit the right links. but i did see you helping many people.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti particularly liked this one. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#MX8Q6_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#MX8Q6_lt_/a_gt_  (cool colored spotlights)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand this one ...  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#5R8A1_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#5R8A1_lt_/a_gt_ (layered fog)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI feel like WE owe you many beers. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"georage","Date":"2017-01-24T23:02:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell I_t_m as dense as a neutron star but I finally got it to work!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks wingy!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor those who may find such things useful_co_ this onclick function targets an arcRotate camera and toggles godrays on selected/previously selected objects.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy star meshes are overloaded with custom names (sName for star name) which I check to make sure the mesh exists before trying to remove the godrays effect_co_ so if you use this function be aware of this line ... if (prevTarget.sName). It will work without the check but throw an error the first time you select a mesh since no prior mesh/camera target exists.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso useful is the star !_eq_ prevTarget check because it seems you can add godrays on top of godrays and the effect starts to look terrible if you do that too much. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function focusCamera(camera_co_ star){\n    //define previous star\n    var prevTarget _eq_ camera.target_sm_\n    //retarget camera to selected star\n    camera.setTarget(star)_sm_\n        //set distance\n        var camRad _eq_ star.sSize*12_sm_\n        camera.radius _eq_ camRad_sm_\n        console.log(_qt_set camera radius to _qt_+camRad)_sm_   \n    //don_t_t apply godrays to star that already has godrays\n    if(star !_eq_ prevTarget){ \n        //apply godrays effect to selected star\n        var godrays _eq_ new BABYLON.VolumetricLightScatteringPostProcess(_t_godrays_t__co_ 1.0_co_ camera_co_ star_co_ 90_co_ BABYLON.Texture.BILINEAR_SAMPLINGMODE_co_ engine_co_ true)_sm_\n        star.godrays _eq_ godrays_sm_\n        //if previous star is a mesh_co_ delete godrays from it\n        if(prevTarget.sName){\n            console.log(prevTarget.sName)_sm_\n            prevTarget.godrays.excludedMeshes.push(prevTarget)_sm_ \n        }\n        else{ console.log(_qt_no previous camera target_qt_)_sm_ }\n    }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-25T01:11:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tInteresting!  Thanks for the info_co_ code_co_ and kind words.    And yes_co_ I get paid... by getting to be around VERY smart and inventive people... who are very patient with me... and they let me sort-of run-with the forum... in my own way.  I really only answer the easier questions.  The difficult things... are still for the big dogs... but I get the _qt_pay_qt_ of reading big-dog answers to tough questions.  It is pretty wonderful.  I have learned TONS of things since I started hanging-around here.  Free schooling_co_ and with a pile of fascinating classmates.  What else could a person ask-for?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis forum is probably in the upper 5% of all forums_co_ quality-wise.  We have a top-notch leading-edge-tech subject matter (BJS)_co_ and kind and knowledgeable forum helpers.  Our framework is the fastest-per-features-set... (most bang-for-the-bytes) of any of them_co_ and we_t_re all sort of big/muscular... so we can easily beat-up most ThreeJS people... anytime_co_ for any reason.  It_t_s all good!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tReally though_co_ it_t_s the LIKES and nice words... they are great.  (thx agn for that_co_ George)  But_co_ believe you me... I get LOTS of schooling from here.  EVERYONE teaches me things... including you_co_ George.  This is just an excellent place_co_ with cool people_co_ rallied around a superb product.  It_t_s easy to be helpful and happy... around here. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd the playground?  What a wonderful tool.  It might be called a _qt_play_qt_ ground_co_ but it_t_s a serious _qt_work_qt_ horse_co_ eh?  What a sweet app.  I want to have its baby! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tErrr... wait... no... that won_t_t work.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tParty on!  I_t_m going to go read more Deltakosh/other God replies to difficult questions... do some more learning.  If Deltakosh falls asleep for the next 14 years... I can catch-up with him on webGL knowledge and JS prowess.  heh.  (maybe)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]