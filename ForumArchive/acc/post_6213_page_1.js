[{"Owner":"Dad72","Date":"2014-05-06T15:10:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Hi_co__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_it happens to me a strange thing. my editor is composed of several tab and in I_t_m on the ground tab and I charge the ground_co_ my camera moves correctly with the keyboard. But if I change tab and I returned to the ground tab_co_ the camera won_t_t move with the keyboard._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Have you any ideas of what could be the cause of this behavior ?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Thank you_lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nico","Date":"2014-05-06T15:28:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think you could try attachControl on your camera to your canvas_co_ it can solve the problem_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-06T16:49:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes I already have a attachControl. but it seems to be disabled when I change tab. what is strange._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-06T17:33:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I find the problem_co_ keep the focus tab. if I click something_co_ the camera is reactivate._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-06T20:20:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_when I click on the _qt_ground_qt_ tab remains active tab and deactivate the handling of the camera (with the keyboard). I_t_m forced to click in an empty space (any div) so that the camera can be handle._lt_/div_gt__lt_br_gt__lt_div_gt_If I click in the canvas with a loaded scene_co_ it does not give focus to the page. the tab remains active ._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Do you have ideas to solve this ?_lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-06T21:07:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Could you share a link. I definitely need to see that !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-06T21:45:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll try to reproduce the problem on another project tomorrow_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-05-06T22:28:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmm_co_ maybe put a onclick_eq__qt_getfocus()_qt_ in your canvas element?  Or maybe onclick_eq__qt_this.focus()_qt_?  Or maybe onclick_eq__qt_focus(this)_qt_  Ok_co_ I am out of ideas.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-06T23:23:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_I have try this kind of thing.I think it_t_s because each tab I have an iframe and when I select a tab that is on the index_co_ I have to click on an element of the iframe to get the focus_co_ but if I click on on the canvas with a loaded scene_co_ it does not work. The camera won_t_t move with the keyboard_co_ just with the mouse._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_This is very strange. but I_t_ll try to make a little example tomorrow._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-06T23:46:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Are you using ie11? I already noticed this bug with IE_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-07T01:29:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No_co_ i use Google Chrome. Tomorrow I_t_ll see if it does the same thing with Firefox and IE_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-05-07T08:12:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If you can_co_ that could be better not to use iframes._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-07T11:20:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_It was a choice I made there 1 year and 6 months. I can not go back in the current state of the project which is around 3000 files. it_t_s not as if I was at the beginning of the project. and I had no choice._lt_/div_gt__lt_br_gt__lt_div_gt_I have 8 tabs_co_ each tab_co_ iframe_co_ because each tab is a editor that needs its own css_co_ its own scripts_co_ its own php functions ..._lt_/div_gt__lt_br_gt__lt_div_gt_If I had done without Iframe my project would unmanageable._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-07T13:46:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For Deltakosh. Here_co_ I done you an example scene to reproduce this bug with the information in the right margin to understand._lt_br_gt_ _lt_br_gt__lt_a href_eq__qt_http_dd_//www.actifgames.com/babylon/onglet/_qt_ rel_eq__qt_external nofollow_qt__gt_Scene exemple with Tabs and Iframe_lt_/a_gt__lt_br_gt_ _lt_br_gt_If you want to download the sources I can make you a zip also._lt_br_gt_ _lt_br_gt_Thank you_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-05-07T14:15:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Could the bug be relative to the fact that in FreeCamera.prototype.attachControl_co_ the global variable window is used and iframes are used (different behaviors with global variable window)?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-05-07T14:20:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Check the value of window.document.location.href. You_t_ll notice that it changes when you click on a tab. That could explain the bug._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-05-07T14:27:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Quick fix for you_dd_ replace window by window.parent in FreeCamera.prototype.attachControl for all calls to addEventListener. It works for me on chrome._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-07T14:47:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_37312_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_6213_qt_ data-ipsquote-username_eq__qt_gwenael_qt_ data-cite_eq__qt_gwenael_qt_ data-ipsquote-timestamp_eq__qt_1399472843_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Quick fix for you_dd_ replace window by window.parent in FreeCamera.prototype.attachControl for all calls to addEventListener. It works for me on chrome._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sorry gwenael_co_ I not understand what you would me propose to make_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-05-07T14:53:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In babylon.1.12-beta.js_co_ in method _t_FreeCamera.prototype.attachControl_t__co_ replace all _t_window.addEventListener_t_ by _t_window._lt_strong_gt_parent_lt_/strong_gt_.addEventListener_t_._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-07T15:28:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ah_co_ ok. There have not possibility to integrate it directly into Babylon by a function _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_FreeCamera.prototype.parentAttachControl_lt_/pre_gt__lt_p_gt_This could be useful for others. I do not use custom version of Babylon_co_ just one official version._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If it pais you Deltakosh_co_ you can add this fix_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-07T15:50:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_window.parent only works for you alas (because of iframe)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-07T16:02:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ for the moment_co_ but it may later there have also user with Iframe._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-07T16:24:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_I can not create a function apart. it is just 3 extra line of code that fixes this problem for me but may be for others in the future._lt_/div_gt__lt_div_gt_It remains a lack Babylon the specific uses. it mean that with babylon can not know the users specific application ?_lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Without adding new function_co_ I simply proposes to amend the attachControl function for specific cases by adding signature _qt_parent_qt_._lt_br_gt__lt_br_gt_Please Deltakosh. This would help me and maybe others too. that would exist in babylon well._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Fonction complete _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        FreeCamera.prototype.attachControl _eq_ function (element_co_ noPreventDefault_co_ parent) {                        //----            //you code no modified            //----\t\t\t            element.addEventListener(_qt_mousedown_qt__co_ this._onMouseDown_co_ false)_sm_            element.addEventListener(_qt_mouseup_qt__co_ this._onMouseUp_co_ false)_sm_            element.addEventListener(_qt_mouseout_qt__co_ this._onMouseOut_co_ false)_sm_            element.addEventListener(_qt_mousemove_qt__co_ this._onMouseMove_co_ false)_sm_\t    if(parent) {\t\twindow.parent.addEventListener(_qt_keydown_qt__co_ this._onKeyDown_co_ false)_sm_\t\twindow.parent.addEventListener(_qt_keyup_qt__co_ this._onKeyUp_co_ false)_sm_\t\twindow.parent.addEventListener(_qt_blur_qt__co_ this._onLostFocus_co_ false)_sm_\t    } else {\t\twindow.addEventListener(_qt_keydown_qt__co_ this._onKeyDown_co_ false)_sm_\t\twindow.addEventListener(_qt_keyup_qt__co_ this._onKeyUp_co_ false)_sm_\t\twindow.addEventListener(_qt_blur_qt__co_ this._onLostFocus_co_ false)_sm_\t    }        }_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-07T18:23:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I updated camera to_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_            var root _eq_ window.parent || window_sm_            root.addEventListener(_qt_keydown_qt__co_ this._onKeyDown_co_ false)_sm_            root.addEventListener(_qt_keyup_qt__co_ this._onKeyUp_co_ false)_sm_            root.addEventListener(_qt_blur_qt__co_ this._onLostFocus_co_ false)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-07T18:33:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you Deltakosh. your solution is even better.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]