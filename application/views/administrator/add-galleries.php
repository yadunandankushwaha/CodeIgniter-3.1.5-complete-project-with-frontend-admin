 <!-- jquery file upload Frame work -->
    <link href="<?php echo base_url(); ?>admintemplate/bower_components/jquery.filer/css/jquery.filer.css" type="text/css" rel="stylesheet" />
    <link href="<?php echo base_url(); ?>admintemplate/bower_components/jquery.filer/css/themes/jquery.filer-dragdropbox-theme.css" type="text/css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/bower_components/lightbox2/dist/css/lightbox.min.css">
    

    
            <div class="page-header">
                <div class="page-header-title">
                    <h4>Galleries</h4>
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
                        <li class="breadcrumb-item"><a href="#!"><?php echo $title; ?></a>
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
                                     <?php echo form_open_multipart('galleries/add_gallery_images'); ?>
                                            <div class="product-edit">
                                            <!-- Tab panes -->
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="">
                                                      <input name="name" value="gallery" id="" type="hidden">
                                                     <input type="file" name="imgFiles[]" id="filer_input" multiple="multiple">

                                                
                                                 <div class="form-group">
                                                    <button type="submit" name="submit" class="btn btn-primary waves-effect waves-light">Add Images
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                               
                                            </div>
                                        
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Product edit card end -->
                    
                </div>
                        <!-- Basic Form Inputs card end -->
             

   

