[{"Owner":"unicomp21","Date":"2017-02-18T12:15:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tInstanced meshes_co_ for a given root mesh_co_ would it be possible to have multiple arrays of instances where each has a different material?  I_t_m using geometries which tile across 3D space_co_ kinda like 3D noise_co_ being able to use multiple materials w/o cloning meshes would really help me save gpu memory.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2017-02-18T12:22:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI should clarify ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3D noise -&gt_sm_ periodic 3D noise\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhich tiles across 3D space\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-02-18T12:49:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tEach and every tile has a different material?_lt_br /_gt_\n\tIf not_co_ you could create one root mesh by each material and clone thoose meshes._lt_br /_gt_\n\tOr you could use SPS particles_co_ where you can color each particle mesh with different color._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2017-02-18T13:42:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo_co_ that_t_s why I_t_m asking for multiple instance arrays_co_ each with a different material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s say I have 3 different types of interlocking bricks I use for constructing buildings (in my case it_t_s a much higher count).  Allowing each of these bricks to have two instance arrays_co_ 1 for red material and 1 for brown material_co_ allows me to save gpu memory in that I don_t_t have to make copies of the _qt_root_qt_ brick meshes for each different color of brick.  The example I_t_ve given is trivial_co_ but when moving to hundreds or thousands of proc-generated meshes_co_ the overhead is no longer trival.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2017-02-18T13:43:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ll look at the SPS particle meshes.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2017-02-18T14:21:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThink I have the same dilema w/ SPS_co_ don_t_t see how I can have different groups of particles within an SPS_co_ each w/ a different material.  Looks like I still have to duplicate the mesh data.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-02-18T15:55:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUse sps  with a spritemap of materials. Spritemap use in a different context here\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/createbox_per_face_textures_and_colors_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/createbox_per_face_textures_and_colors_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut process of using uv is the same just read about uv in sps\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-02-18T15:58:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/solid_particle_system#uvs_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/solid_particle_system#uvs_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-02-18T19:58:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\twhat you could do is to import your model_co__lt_br /_gt_\n\tclone it one time for each different material_co__lt_br /_gt_\n\tdisable them all_co__lt_br /_gt_\n\tand then use them as base meshes for your instances\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2017-02-19T09:55:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks everyone!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2017-02-19T10:05:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn the beforeRender callback_co_ could I change materials multiple times and call setParticles() after each?  The setParticles() flushes out the render()_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2017-02-19T10:10:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tLong story short_co_ I_t_m wanting to use multiple PBRMaterial_t_s on the particle system.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2017-02-19T10:59:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there an example using SPS with web workers?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]