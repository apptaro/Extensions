[{"Owner":"vishnu","Date":"2018-03-21T11:09:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t       i have try to creating shooting game. i need camera with gun. i have try this code. but \n_lt_/p_gt_\n\n_lt_p_gt_\n\t  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1pyfub%2318_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1pyfub#18_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t it_t_s not working. camera child object does not showing in scene. how it_t_s working... _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-24T01:03:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi V.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   I fixed the indenting...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1pyfub%2319_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1pyfub#19_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow easier for others to read/help.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you give us URL_t_s for web pics/video... similar-to your goal?  We prefer _lt_u_gt_video_lt_/u_gt_ clip of similar game/gun/targeting.  Thx!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-24T01:53:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexstable#1pyfub%2320_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexstable#1pyfub#20_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHmm... _lt_strong_gt_gun.parent _eq_ camera_lt_/strong_gt_ (line 56) works for _t_stable_t_ version of BJS_co_ but not _t_latest_t_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPossible framework bug/change.  Perhaps _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ and/or other _t_big dogs_t_ need to see this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStay tuned.  Cool gfx_co_ V.  Looks like a fun game!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn a different subject_dd_  Z-fighting (flashing gfx while cam moves)... sucks_co_ eh?  It is caused by two or more flat surfaces... sharing _qt_surface_qt_ position (maybe same y-position). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe need to separate floor/street _qt_layers_qt_ by a tiny amount.  Perhaps...   .001 to .005 space/gap between _t_layers_t_.  Air gap.  Good for insulating.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou probably know about z-fighting already.  Easiest fixed in modeling software.  Kbyeee.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-26T17:13:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBug found and fixed _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]