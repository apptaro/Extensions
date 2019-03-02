[{"Owner":"mout99","Date":"2017-06-23T17:07:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_Hello_co_ I have a scene and its zoom is very slow_co_ how do I increase? (_lt_/span_gt__lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_The zoom of the mouse scroll and the zoom with the fingers in the mobile_lt_/span_gt__lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_)_lt_/span_gt__lt_/pre_gt_\n\n\t_lt_pre_gt_\n_lt_code_gt_           if (BABYLON.Engine.isSupported()) {\n             var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n             var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n             var newScene_sm_\n\n             BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_js/teste.obj_qt__co_ engine_co_ function (newScene) {\n                 newScene.executeWhenReady(function () {\n                    var camera _eq_ new BABYLON.ArcRotateCamera(_qt_ArcRotateCamera_qt__co_ 0_co_ 0_co_ 0_co_ BABYLON.Vector3.Zero()_co_ newScene)_sm_\n                    camera.setPosition(new BABYLON.Vector3(7500_co_7500_co_7500))_sm_\n                    camera.attachControl(canvas_co_ true)_sm_\n                    camera.maxZ _eq_ 0_sm_\n                    camera.pinchPrecision _eq_ 30_sm_\n                    newScene.activeCamera _eq_ camera_sm_\n                    newScene.activeCamera.attachControl(canvas_co_ true)_sm_\n                    newScene.clearColor _eq_ new BABYLON.Color3(0.5_co_ 0.8_co_ 0.5)_sm_\n\n\n                     engine.runRenderLoop(function() {\n                        newScene.render()_sm_\n                     })_sm_\n\n                 })_sm_\n             }_co_function (progress) {\n             })_sm_\n\n           }\n           window.addEventListener(_qt_resize_qt__co_ function () {\n            engine.resize()_sm_\n        })_sm__lt_/code_gt__lt_/pre_gt_\n\n\t_lt_p_gt_\n\t\t \n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-23T20:05:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello and welcome!_lt_br /_gt_\n\tyou can use camera._lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_wheelPrecision_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mout99","Date":"2017-06-23T20:16:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_Thanks but did not solve_co_ I put several different values and even then it has not changed at all._lt_/span_gt__lt_/pre_gt_\n\n\t_lt_pre lang_eq__qt_en_qt_ style_eq__qt_color_dd_#212121_sm__qt_ xml_dd_lang_eq__qt_en_qt__gt_\n\n _lt_/pre_gt_\n_lt_/div_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-23T20:18:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt works here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#10D6YT%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#10D6YT#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsee how fast you can zoom with mouse wheel\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mout99","Date":"2017-06-23T20:37:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_           if (BABYLON.Engine.isSupported()) {\n             var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n             var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n             var newScene_sm_\n\n             BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_js/teste.obj_qt__co_ engine_co_ function (newScene) {\n                 newScene.executeWhenReady(function () {\n                  var camera _eq_ new BABYLON.ArcRotateCamera(_qt_camera_qt__co_ 4.712_co_ 1.571_co_ 0.05_co_ BABYLON.Vector3.Zero()_co_ newScene)_sm_\n                   newScene.activeCamera _eq_ camera_sm_\n                   camera.attachControl(canvas_co_ true)_sm_\n                    camera.setPosition(new BABYLON.Vector3(6800_co_6800_co_6800))_sm_\n                    camera.fov _eq_ 20_sm_\n                    camera.wheelPrecision _eq_ 100.0_sm_\n                    camera.maxZ _eq_ 0_sm_\n\n                    newScene.clearColor _eq_ new BABYLON.Color3(0.5_co_ 0.8_co_ 0.5)_sm_\n\n\n                     engine.runRenderLoop(function() {\n                        newScene.render()_sm_\n                     })_sm_\n\n                 })_sm_\n             }_co_function (progress) {\n             })_sm_\n\n           }\n           window.addEventListener(_qt_resize_qt__co_ function () {\n            engine.resize()_sm_\n        })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_After i put the camera.wheelPrecision _eq_ 100.0 fully latch_lt_/span_gt_\n_lt_/pre_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-23T21:36:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tcan you please repro it in the PG?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mout99","Date":"2017-06-23T21:38:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_In PG you are giving me the error You must at least create the camera_co_ how do I solve it?_lt_/span_gt__lt_/pre_gt_\n\n\t_lt_pre lang_eq__qt_en_qt_ style_eq__qt_color_dd_#212121_sm__qt_ xml_dd_lang_eq__qt_en_qt__gt_\n\n _lt_/pre_gt_\n_lt_/div_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-23T22:03:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcreate a camera _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYou need to create a function named _qt_createScene_qt_ which returns a scene with a camera_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#CQ0JWQ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#CQ0JWQ_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand then add your code in it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mout99","Date":"2017-06-23T22:19:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIn that link the code is running without a createScene () and is working_co__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#10D6YT%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#10D6YT#1_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-23T22:29:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tright.. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ it is a hack _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I should not have used this one\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mout99","Date":"2017-06-23T22:31:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_Can you show me the right way to do it? _co_ I need to use a file with .obj extension_co__lt_/span_gt__lt_/pre_gt_\n\n\t_lt_pre lang_eq__qt_en_qt_ style_eq__qt_color_dd_#212121_sm__qt_ xml_dd_lang_eq__qt_en_qt__gt_\n\n _lt_/pre_gt_\n_lt_/div_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-23T23:17:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tsure_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#J8USRK_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#J8USRK_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mout99","Date":"2017-06-26T14:28:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_doing_lt_/span_gt__lt_/pre_gt_\n\n_lt_pre_gt_\n_lt_code_gt_          var createScene _eq_ function () {\n            var scene _eq_ new BABYLON.Scene(engine)_sm_\n            var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n\n            //Adding a light\n            var light _eq_ new BABYLON.PointLight(_qt_Omni_qt__co_ new BABYLON.Vector3(20_co_ 20_co_ 100)_co_ scene)_sm_\n\n            //Adding an Arc Rotate Camera\n            var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 0.8_co_ 100_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\n            camera.attachControl(canvas_co_ false)_sm_\n\n            // The first parameter can be used to specify which mesh to import. Here we import all meshes\n            BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_js/_qt__co_ _qt_teste.obj_qt__co_ scene_co_ function (newMeshes) {\n                // Set the target of the camera to the first imported mesh\n                camera.target _eq_ newMeshes[0]_sm_\n            })_sm_\n\n            // Move the light with the camera\n            scene.registerBeforeRender(function () {\n                light.position _eq_ camera.position_sm_\n            })_sm_\n\n            return scene_sm_\n        }\n\n           window.addEventListener(_qt_resize_qt__co_ function () {\n            engine.resize()_sm_\n        })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_Simply does not work_lt_/span_gt__lt_/pre_gt_\n\n\t_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_What can it be?_lt_/span_gt__lt_/pre_gt_\n\n\t\t_lt_pre lang_eq__qt_en_qt_ style_eq__qt_color_dd_#212121_sm__qt_ xml_dd_lang_eq__qt_en_qt__gt_\n\n _lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mout99","Date":"2017-06-26T14:32:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_When I call the createScene() function_co_ it gives me the error_dd_ engine is not define_lt_/span_gt_\n_lt_/pre_gt_\n\n\t_lt_p dir_eq__qt_ltr_qt__gt_\n\t\t \n\t_lt_/p_gt_\n\n\t_lt_p dir_eq__qt_ltr_qt__gt_\n\t\t \n\t_lt_/p_gt_\n\n\t_lt_p dir_eq__qt_ltr_qt__gt_\n\t\t_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_@edit _lt_/span_gt_\n\t_lt_/p_gt_\n\n\t_lt_p dir_eq__qt_ltr_qt__gt_\n\t\t \n\t_lt_/p_gt_\n\n\t_lt_p dir_eq__qt_ltr_qt__gt_\n\t\t_lt_span style_eq__qt_color_dd_#212121_sm__qt__gt_Okay_co_ somehow I made it work_co_ except the zoom is still not working_co_ see_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#SDH7IS_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#SDH7IS_lt_/a_gt__lt_/span_gt_\n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-26T17:38:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi M99.  _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#SDH7IS%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#SDH7IS#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI show good mouseWheel zoom activity in BOTH of our playgrounds.  Yours was slow_co_ mine is faster.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo mouseWheel zoom for you?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mout99","Date":"2017-06-26T18:33:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_Ok_co_ I managed to solve the problem_co_ thank you very much for the attention of those who helped_co_ the problem was solved._lt_/span_gt__lt_/pre_gt_\n\n\t_lt_pre lang_eq__qt_en_qt_ style_eq__qt_color_dd_#212121_sm__qt_ xml_dd_lang_eq__qt_en_qt__gt_\n\n _lt_/pre_gt_\n_lt_/div_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]