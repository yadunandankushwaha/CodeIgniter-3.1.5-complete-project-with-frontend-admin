   <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/bower_components/switchery/dist/switchery.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/assets/pages/advance-elements/css/bootstrap-datetimepicker.css">
    <!-- Date-range picker css  -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/bower_components/bootstrap-daterangepicker/daterangepicker.css" />
    <!-- Date-Dropper css -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/bower_components/datedropper/datedropper.min.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/bower_components/switchery/dist/switchery.min.css" />

    
            <div class="page-header">
                <div class="page-header-title">
                    <h4>Users</h4>
                </div>
                <div class="page-header-breadcrumb">
                    <ul class="breadcrumb-title">
                        <li class="breadcrumb-item">
                            <a href="index-2.html">
                                <i class="icofont icofont-home"></i>
                            </a>
                        </li>
                        <li class="breadcrumb-item"><a href="#!">Users</a>
                        </li>
                        <li class="breadcrumb-item"><a href="#!">Update Users</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Page header end -->
            <!-- Page body start -->
            <div class="page-body">
                <div class="row">
                    <div class="col-sm-12">
                        <!-- Basic Form Inputs card start -->
                        <div class="card">
                            <div class="card-header">
                                <h5>Update User -- <small style="text-decoration: underline;"><?php echo $user['username']; ?></small></h5>
                                <div class="card-header-right">
                                    <i class="icofont icofont-rounded-down"></i>
                                    <i class="icofont icofont-refresh"></i>
                                    <i class="icofont icofont-close-circled"></i>
                                </div>
                            </div>
                            <div class="card-block">
                             <div class="col-sm-8">
                               <?php echo form_open_multipart('administrator/update_user_data'); ?>
                                     <input type="hidden" name="id" class="form-control" value="<?php echo $user['id']; ?>">
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" name="name" class="form-control" value="<?php echo $user['name']; ?>" placeholder="Full Name">
                                        </div>
                                    </div>
                                     <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">User-Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" name="username" class="form-control" value="<?php echo $user['username']; ?>" placeholder="User Name">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="text"  name="email" class="form-control" value="<?php echo $user['email']; ?>" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Mobile No.</label>
                                        <div class="col-sm-10">
                                            <input type="text" name="contact" value="<?php echo $user['contact']; ?>" class="form-control" placeholder="Mobile No.">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Address</label>
                                        <div class="col-sm-10">
                                            <input type="text"  name="address" value="<?php echo $user['address']; ?>" class="form-control" placeholder="Address">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Zipcode</label>
                                        <div class="col-sm-10">
                                            <input type="text"  name="zipcode" value="<?php echo $user['zipcode']; ?>" class="form-control" placeholder="Zipcode">
                                        </div>
                                    </div>
                                    <div class="form-group row" style="float:center;">
                                    <label class="col-sm-2 col-form-label">Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                    
                                         <label>
                                            <input value="Female" <?php if($user['gender'] == 'Female'){ echo "checked"; } ?> name="gender" checked="" type="radio"><i class="helper"></i> Female
                                        </label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                        <label>
                                            <input value="Male" <?php if($user['gender'] == 'Male'){ echo "checked"; } ?> name="gender" type="radio"><i class="helper"></i> Male
                                        </label>
                                    </div>
                                     <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">User Image</label>
                                        <div class="col-sm-6">
                                           <img src="<?php echo base_url().'assets/images/users/'.$user['image']; ?>" width="70px">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Update Image</label>
                                        <div class="col-sm-6">
                                            <input type="file" name="userfile" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Date of Birth</label>
                                        <div class="col-sm-6">
                                        <input type="text" id="dropper-default" value="<?php echo $user['dob']; ?>" name="dob" class="form-control" placeholder="Select Your Birth Date">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Want to make Enable?</label>
                                        <div class="col-sm-3">
                                            <input type="checkbox" value="<?php echo $user['status']; ?>" name="status" class="js-single" <?php if($user['status'] == '1'){ echo "checked"; } ?> />
                                        </div>
                                    </div>
                                    
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label"></label>
                                        <div class="col-sm-10">
                                            <button type="submit" name="submit" class="btn btn-primary">Update</button>
                                        </div>
                                    </div>
                                    <textarea id="description" style="visibility: hidden;"></textarea>
                                </form>
                               </div>
                                   
                                </div>
                            </div>
                        </div>
                        <!-- Basic Form Inputs card end -->
                   

     <script type="text/javascript" src="<?php echo base_url(); ?>admintemplate/bower_components/switchery/dist/switchery.min.js"></script>
    <!-- Custom js -->
    <script type="text/javascript" src="<?php echo base_url(); ?>admintemplate/assets/pages/advance-elements/swithces.js"></script>
       <script type="text/javascript" src="<?php echo base_url(); ?>admintemplate/assets/pages/advance-elements/moment-with-locales.min.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>admintemplate/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>admintemplate/assets/pages/advance-elements/bootstrap-datetimepicker.min.js"></script>
    <!-- Date-range picker js -->
    <script type="text/javascript" src="<?php echo base_url(); ?>admintemplate/bower_components/bootstrap-daterangepicker/daterangepicker.js"></script>
    <!-- Date-dropper js -->
    <script type="text/javascript" src="<?php echo base_url(); ?>admintemplate/bower_components/datedropper/datedropper.min.js"></script>

   
    <!-- ck editor -->
    <script src="<?php echo base_url(); ?>admintemplate/bower_components/ckeditor/ckeditor.js"></script>
    <!-- echart js -->
  
    <script src="<?php echo base_url(); ?>admintemplate/assets/pages/user-profile.js"></script>