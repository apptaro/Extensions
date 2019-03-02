[{"Owner":"MacSkelly","Date":"2016-08-03T14:12:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m just starting out with getting to grips with Canvs2D. I_t_m using it to make a GUI I_t_m having a problem with my GUI buttons.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have meshes that you can interact with by clicking on and a GUI in front. If I try to click on one of my GUI buttons while a mesh is behind it the mesh is picked as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a built-in way to get around this?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-03T21:14:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18872-macskelly/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18872_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18872-macskelly/_qt_ rel_eq__qt__qt__gt_@MacSkelly_lt_/a_gt_  I recently made this mess... _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1KRMMG%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1KRMMG#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe fonts are much more _qt_fuzzy_qt_ than when I first created it_co_ so_co_ maybe the font superSample is currently broken.  Canvas2D is new new new_co_ and still being hammered-on_co_ a bit. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ I don_t_t know if a _qt_hole-in-the-middle_qt_ is going to work for you.  Perhaps layerMasks (z-ordering) could get involved_co_ not sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI assume you are using a screenSpaceCanvas2D.  Notice I use worldSpaceCanvas2D_co_ which are essentially the same thing_co_ only there is a node (a plane) involved.  Since there IS a plane involved_co_ clicks won_t_t be able to go through them and hit mesh beyond... IF you parent those planes close-to the camera (closer than the scene).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO your gui would be a worldSpaceCanvas2D (on its node/plane) which is parented to the camera... and positioned close to the cam.  Hopefully_co_ the clicks will not pass thru the node/plane of the worldSpaceCanvas2D.  lines 390-402 are the area where I parent the nodes to the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/23837-use-canvas2d-as-ui-can-other-3d-mesh-display-above-on-this-ui/_qt_ rel_eq__qt__qt__gt_another thread_lt_/a_gt_ on the forum that is grappling with similar issues. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps.  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_ and his team COULD be working-on_co_ or may have already found a solution to this issue (surely a better solution than mine_co_ by far).  Maybe he or other experts will come visit.  Be patient. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MacSkelly","Date":"2016-08-05T10:34:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks. I_t_ll try various suggestions. I_t_ll be patient in the meantime and hopefully a solution comes to light!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-05T13:34:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again.  Does your GUI layer pop-open and closed?  If so_co_ you COULD set all mesh.isPickable _eq_ false... when the GUI is open.  With me? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn other words_co_ if you don_t_t need mesh to be pickable when the GUI is being displayed_co_ turn off the mesh picking.  Then when you close the GUI layer_co_ set your pickable mesh again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s a bit of a hassle_co_ but it_t_s an idea_co_ and it might work for you.  Scene.meshes contains ALL scene mesh_co_ so if ALL your mesh are pickable_co_ it is a nice array to iterate-thru and toggle all their isPickable properties.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf only a few of your total mesh are pickable_co_ you_t_ll want to maintain your own list of which mesh need their isPickable set FALSE when the GUI is open/overlayed (and re-set TRUE when GUI closes.)  *shrug* \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have one other idea.  Not sure how well it will work.  Try putting a plane _qt_behind_qt_ your GUI (blocking the entire camera lens) that is set plane.visibility _eq_ 0 or perhaps .01... or put a material on the plane and set the material.alpha _eq_ 0.   (It is not REALLY behind the GUI_co_ but it_t_s in-front-of all pickable scene mesh.)   A pick blocker.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYou might want to parent this plane to the camera... so it is always _qt_with you_qt_.  You can turn it ON/OFF with plane.setEnabled(true or false).  Perhaps_co_ you also need to set the plane.isPickable _eq_ true/false at times.  (setEnabled(false) or isPickable _eq_ false when you need to click mesh in your scene).  Again_co_ visibility _eq_ 0 or perhaps .001.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe objective here_co_ is to BLOCK picks from passing through your GUI (intercepting picks) with the see-through plane.  But it might not work.  I_t_m not an expert at picking.  Just maybe... picking goes right through mesh/blocking-planes_co_ and uses the LAST mesh it hits... as the picked mesh (the furthest mesh that the picking ray hits). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure_co_ you_t_ll need to do some testing.  I_t_ll keep thinking.  Perhaps you and/or others will have more ideas_co_ too.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]