[{"Owner":"Juncheng","Date":"2017-09-13T22:49:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a problem when I use pep and arcRotateCamera. I found when I accidentally move my mouse out of the canvas while rotating the camera and then release the left mouse click down outside the canvas_co_ the canvas still register the mouse down action.  So at this time_co_ I can rotate the camera without click any mouse button.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried on ArcRotateCamera tutorial playground _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#GH5SVN%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#GH5SVN#1_lt_/a_gt_. I got the same problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anyone tell me how to solve this problem?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_giphy.gif_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_297_qt_ src_eq__qt_https_dd_//media.giphy.com/media/l1J9u653tv2gyWvpC/giphy.gif_qt_ width_eq__qt_480_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBest_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJason\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-13T23:28:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHum..I cannot repro..which browser are you using?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-20T13:14:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!  I see this too_co_ Firefox.  Not a problem in IE.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStep by step_co_ in playground_co_ in Firefox.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.  Depress left mouse button on canvas_lt_br /_gt_\n\t2.  Still depressed_co_ _qt_drag_qt_ left... until arrow is atop editor area_lt_br /_gt_\n\t3.  Lift mouse button_lt_br /_gt_\n\t4.  Mouse-over the canvas again (with no buttons depressed).  The canvas _lt_em_gt_thinks_lt_/em_gt_ the button is still depressed (it pans the camera)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is something strange... regarding mouseOut of canvas... while a mouse button is still pressed._lt_strong_gt_  _lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt ALSO happens when canvas-dragging onto the top or bottom menu bars_co_ and releasing the drag... atop those.   The canvas thinks the mouse button is still pressed_co_ even though it was lifted when pointer was atop the editor/menu areas. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the effect is called _qt_pointerLock_qt_ and it is seen/normal when playground is in full-screen mode.  It is not normal when using split-screen mode.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is somewhat annoying for Firefox pilots_co_ but I have always _qt_worked-around it_qt_... re-clicking/releasing over the canvas... to stop the un-clicked camera panning  (pointerLock).  It has been this way for quite a long time_co_ afaik.  It is likely a Firefox bug or anomaly.  Possibly_co_ a point of disagreement between browser makers - about _lt_a href_eq__qt_https_dd_//www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/_qt_ rel_eq__qt_external nofollow_qt__gt_Events Specification_lt_/a_gt_ interpretation_co_ legacy-honoring_co_ or compliance-with new ways.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have no solution... but perhaps I have verified it_co_ and provided a step-by-step way to repro.  Again_co_ I see this in FF only_co_ not in IE.  Not tested in Opera_co_ Chrome_co_ Safari_co_ Amaya_co_ etc.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-09-20T15:02:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ is correct _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt_\n\tA solution could be to check the pointerup event globally_co_ on the window or document.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample_sm_ _lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#GH5SVN%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#GH5SVN#4_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tUsing the mouseout event on the canvas is also possible_co_ but could result in a very interruptive experience for the end-user._lt_br /_gt_\n\timagine panning the camera and the mouse very briefly exits then returns to the canvas without any actual input changes made_co__lt_br /_gt_\n\tmouse inputs are still reset by mouseout event_co__lt_br /_gt_\n\tand the end-user now has to release and re-click his mouse to continue panning.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-20T17:27:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWe could do that but this seems for a lot of situation as we will receive pointer up even when the pointer is NOT on the canvas. Like when you click in the code editor for instance in the PG\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-09-20T19:26:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ True_co__lt_br /_gt_\n\tit could interfere with onPointerUp functions_co__lt_br /_gt__lt_br /_gt_\n\tPerhaps if a boolean was added on pointerDown?_lt_br /_gt_\n\tIt could be set true on canvas pointerDown_lt_br /_gt_\n\tand pointerUp would then only run if the boolean is true + reset boolean to false._lt_br /_gt__lt_br /_gt_\n\tThat way pointerUp_t_s outside the canvas would only run if the pointerDown happend inside the canvas element.. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope that makes sense_co_ but just a thought though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Edit_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just saw that BJS 3 has such a boolean_co_ _qt_scene._isButtonPressed_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight now onPointerUp just resets it to false_co__lt_br /_gt_\n\tcan you think of any instances where adding a _qt_if false return_qt_ check to the _onPointerUp function would be bad?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if(!_this._isButtonPressed) return_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis should allow setting the pointerUp as a window event with minimal impact.._lt_br /_gt_\n\tsuch an annoying FF bug though _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-20T21:24:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think it could work _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tfancy doing a PR?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-09-21T01:55:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tdone_lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/2838_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/2838_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Juncheng","Date":"2017-09-25T18:24:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_  Wow_co_ cool! It works great_co_ thank you so much.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]