[{"Owner":"AhmedMohamed","Date":"2017-08-10T22:47:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_  need a little help here _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\tI have a scene where I load a dude and clone many versions of him (about 20). I enable collisions on them_co_  on a tank in the scene_co_ and also on the ground. collisions work as expected when I order the dudes to moveWithCollision until they hit the wall_co_ and also when they move towards the tank. But _dd_ Dudes do not collide with each other_co_ when they come close_co_ they merge and become a single dude. I tried modifying the ellipsoid and ellipsoid offset _co_ made them much more bigger and still the same effect. I tried also creating a bounding box _co_ making it a child of dude _co_ and moving it with collisions instead_co_ but things didn_t_t go so well also._lt_br /_gt__lt_br /_gt_\n\tThis is my demo (compressed) - tried to use the playground _co_ loading assets from the github repo url but it didn_t_t work._lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/AhmedFathiShaban/webgl/blob/master/Demo.rar_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/AhmedFathiShaban/webgl/blob/master/Demo.rar_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI also tried using this function  _lt_strong_gt__lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F28707-movewithcollision-ellipsoid-size%252F_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt_ style_eq__qt_background-color_dd_transparent_sm_color_dd_inherit_sm__qt_ title_eq__qt_Go to Temechon_t_s profile_qt__gt_Temechon_lt_/a_gt_ _lt_/strong_gt_provided here to visualize the ellipsoid  _co_ and whatever the size I make of the ellipsoid they finally merge with each other_co_ I see the ellipsoids merge without the slightest objection _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed9253466543_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/28707-movewithcollision-ellipsoid-size/?do_eq_embed&amp_sm_comment_eq_165069&amp_sm_embedComment_eq_165069&amp_sm_embedDo_eq_findComment_qt_ style_eq__qt_height_dd_261px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tPleasetell me the best practice in this situation_co_ I am sure I am not the first to try to load multiple dudes with collision _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt_\n\tThanks in advance _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AhmedMohamed","Date":"2017-08-11T12:03:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSolved . Creating a bounding box and moving it did solve the issue_co_ although I did try it before_co_ anyway thanks _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]