 <!-- jquery file upload Frame work -->
    <link href="<?php echo base_url(); ?>admintemplate/bower_components/jquery.filer/css/jquery.filer.css" type="text/css" rel="stylesheet" />
    <link href="<?php echo base_url(); ?>admintemplate/bower_components/jquery.filer/css/themes/jquery.filer-dragdropbox-theme.css" type="text/css" rel="stylesheet" />
    

    
            <div class="page-header">
                <div class="page-header-title">
                    <h4><?php echo $title; ?></h4>
                </div>
                <div class="page-header-breadcrumb">
                    <ul class="breadcrumb-title">
                        <li class="breadcrumb-item">
                            <a href="index-2.html">
                                <i class="icofont icofont-home"></i>
                            </a>
                        </li>
                        <li class="breadcrumb-item"><a href="#!"><?php echo $title; ?></a>
                        </li>
                        <li class="breadcrumb-item"><a href="#!">Update</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Page header end -->
            <!-- Page body start -->
            <div class="page-body">
                <div class="row">
                    <div class="col-sm-12">
                        <!-- Product edit card start -->
                        <div class="card">
                            <div class="card-header">
                                <h5><?php echo $title; ?></h5>
                            </div>
                            <div class="card-block">
                                <div class="row">
                                    <div class="col-sm-12">
                                     <?php echo form_open_multipart('administrator/update_siteconfiguration_data'); ?>
                                     <input class="form-control" value="<?php echo $siteconfiguration['id']; ?>" name="id" type="hidden">
                                        <div class="product-edit">
                                            <!-- Tab panes -->
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="">

                                                        <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">Site Name</label>
                                                            <div class="col-sm-6">
                                                               <input class="form-control" value="<?php echo $siteconfiguration['site_name']; ?>" name="site_name" placeholder="Site Name" type="text">
                                                            </div>
                                                        </div>
                                                         <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">Site Title</label>
                                                            <div class="col-sm-6">
                                                                <input class="form-control" value="<?php echo $siteconfiguration['site_title']; ?>" placeholder="Site Title" name="site_title" type="text">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">Current Logo</label>
                                                            <div class="col-sm-6">
                                                                <img src="<?php echo base_url(); ?>assets/images/<?php echo $siteconfiguration['logo_img']; ?>" width="100px">
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">New logo</label>
                                                            <div class="col-sm-6">
                                                                <input type="file" name="userfile" class="form-control">
                                                            </div>
                                                        </div>
                                                         


                                                             <div class="form-group">
                                                                <button type="submit" class="btn btn-primary waves-effect waves-light">Submit
                                                                </button>
                                                            </div>

                                                        </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Product edit card end -->
                    
                </div>
                        <!-- Basic Form Inputs card end -->
             

   

