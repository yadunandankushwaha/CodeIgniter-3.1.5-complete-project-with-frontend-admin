            
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
                        <?php //print_r($viewBlogComments); ?>
                        <li class="breadcrumb-item"><a href="#!">Blogs</a>
                        </li>
                        <li class="breadcrumb-item"><a href="#!"><?php echo $title; ?></a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Page-body start -->
            <div class="page-body">
                <div class="row">
                    <div class="col-sm-12">
                        <!-- Blog card start -->
                        <div class="card blog-page">
                            <div class="card-block">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div id="comment-section" class="comment-single col-md-12">
                                            <h4 class="m-b-0 m-t-20">Comment</h4>
                                            <hr class="m-t-20 m-b-20">
                                                <ul class="media-list">
                                                    <li class="media">
                                                        <div class="media-left">
                                                            <a href="#">
                                                                <img class="media-object img-circle comment-img" src="<?php echo base_url(); ?>admintemplate/assets/images/avatar-1.png" alt="Generic placeholder image">
                                                            </a>
                                                        </div>
                                                        <div class="media-body blog-s-reply">
                                                            <h6 class="media-heading"><?php echo $viewBlogComments['username']; ?>
                                                                 <span><?php echo date("M d,Y H:i:s", strtotime($viewBlogComments['created_at'])); ?></span>
                                                             </h6>
                                                            <p><?php echo $viewBlogComments['comment']; ?></p>
                                                            <hr>
                                                         </div>
                                                </li>
                                                </ul>
                                                <div class="articles">
                                                    <?php if($viewBlogComments['status'] == 1){ ?>
                                                       <a class="label label-inverse-primary enable" href='<?php echo base_url(); ?>administrator/enable/<?php echo $viewBlogComments['id']; ?>?table=<?php echo base64_encode('comments'); ?>'>Enabled</a>
                                                        <?php }else{ ?> 
                                                        <a class="label label-inverse-warning disable" href='<?php echo base_url(); ?>administrator/desable/<?php echo $viewBlogComments['id']; ?>?table=<?php echo base64_encode('comments'); ?>'>Disabled</a>
                                                        <?php } ?>
                                                         <a class="label label-inverse-info" href='<?php echo base_url(); ?>administrator/blogs/blog-comments'> All Comments</a>
                                                </div>
                                        </div>
                                    </div>
                                    <!-- Related Articles Ends -->
                                </div>
                            </div>
                        </div>
                        <!-- Blog card end -->
                    </div>
                </div>
            </div>
            <!-- Page-body end -->
        </div>
    </div>