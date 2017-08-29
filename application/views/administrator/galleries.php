 <!-- jquery file upload Frame work -->
    <link href="<?php echo base_url(); ?>admintemplate/bower_components/jquery.filer/css/jquery.filer.css" type="text/css" rel="stylesheet" />
    <link href="<?php echo base_url(); ?>admintemplate/bower_components/jquery.filer/css/themes/jquery.filer-dragdropbox-theme.css" type="text/css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/bower_components/lightbox2/dist/css/lightbox.min.css">
    
<style type="text/css">
    .img-upper {
    float: right;
    margin: -26px 10px 0 0;
    position: relative;
    color: red;
}

</style>
    
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
                                            <div class="product-edit">
                                            <!-- Tab panes -->
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="">
                                                     
                                                     <!-- <input type="file" name="imgFiles[]" id="filer_input1" multiple="multiple"> -->
                                                            
                                                    <div class="row">
                                                     <?php foreach($galleries as $postImg) : ?>
                                                        <div class="col-lg-2 col-sm-3">
                                                            <div class="thumbnail">
                                                                <div class="thumb" style="">
                                                                    <a href="<?php echo site_url();?>assets/images/galleries/<?php echo $postImg['file_name']; ?>" data-lightbox="1" data-title="My caption 1">
                                                                        <img src="<?php echo site_url();?>assets/images/galleries/<?php echo $postImg['file_name']; ?>" alt="" class="img-fluid img-thumbnail">
                                                                    </a>
                                                                   

                                                                    <div class="img-upper"> <a class="label label-inverse-danger delete" href='<?php echo base_url(); ?>administrator/delete/<?php echo $postImg['id']; ?>?table=<?php echo base64_encode('galleries'); ?>'><i class="icofont icofont-ui-delete"></i></a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <?php endforeach; ?>
                                                       
                                                    </div>
                                            </div>
                                        </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Product edit card end -->
                    
                </div>
                        <!-- Basic Form Inputs card end -->
             

   

