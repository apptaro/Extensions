[{"Owner":"BruceLane","Date":"2014-10-26T21:19:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hi_co__lt_/p_gt__lt_p_gt_I_t_m a VJ_co_ I spent the last 2 years in the Cinder C++ framework for creative coding_co_ building my _lt_a href_eq__qt_https_dd_//www.facebook.com/reymentavisuals_qt_ rel_eq__qt_external nofollow_qt__gt_pixel shader app_lt_/a_gt__co_ which uses _lt_a href_eq__qt_http_dd_//spout.zeal.co/_qt_ rel_eq__qt_external nofollow_qt__gt_Spout_lt_/a_gt_ for texture sharing between apps._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I got a fantastic idea to make an extension to it_dd__lt_/p_gt__lt_p_gt_Adapt _lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/_qt_ rel_eq__qt_external nofollow_qt__gt_CYOS_lt_/a_gt_ to be a live coding environment for the visuals!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It involves several tweaks_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_as the audience of VJ shows are expecting a fullscreen render of the output_co_ I need to find a way to send the current edited pixel shader to my C++ app (via node.js I guess)_lt_/li_gt__lt_li_gt_each character typed in the editor should trigger a compilation of the shader_co_ without having to press the _qt_Compile_qt_ (play) button_co_ then if it compiles without errors_co_ sending the pixel shader to the C++ app_lt_/li_gt__lt_li_gt_rename the uniform variables to have the same names as _lt_a href_eq__qt_https_dd_//www.shadertoy.com/_qt_ rel_eq__qt_external nofollow_qt__gt_shadertoy_lt_/a_gt_ (uniform sampler2D textureSampler becomes uniform sampler2D iChannel0 for instance)_lt_/li_gt__lt_/ul_gt__lt_p_gt_It means it could run on any recent device in a supported browser to control a VJ show locally on remotely._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let me know what you think and if you want to get involved._lt_/p_gt__lt_p_gt_Bruce_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-10-27T16:28:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_that could be a gooood idea! _lt_br_gt_You can easily start from CYOS code_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Samples/tree/master/CYOS_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Samples/tree/master/CYOS_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BruceLane","Date":"2014-10-27T19:21:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yes I started diving into the code!_lt_/p_gt__lt_p_gt_I need to add some uniforms like iGlobaltime for animation_co_ support multiple textures..._lt_/p_gt__lt_p_gt_About renaming the uniforms_co_ it can be difficult as there are lots of people using the current names?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-10-28T16:39:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can create a fork and a new version like CYOS4Creative _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]