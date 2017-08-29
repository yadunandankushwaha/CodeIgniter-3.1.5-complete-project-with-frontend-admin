     <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/bower_components/datatables.net-bs4/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/assets/pages/data-table/css/buttons.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/bower_components/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/bower_components/ekko-lightbox/dist/ekko-lightbox.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>admintemplate/bower_components/lightbox2/dist/css/lightbox.css">

<script type="text/javascript">
 $(document).ready(function(){
        $(".delete").click(function(e){ alert('as');
            $this  = $(this);
            e.preventDefault();
            var url = $(this).attr("href");
            $.get(url, function(r){
                if(r.success){
                    $this.closest("tr").remove();
                }
            })
        });
    });
$(document).ready(function(){
        $(".enable").click(function(e){ alert('as');
            $this  = $(this);
            e.preventDefault();
            var url = $(this).attr("href");
            $.get(url, function(r){
                if(r.success){
                    $this.closest("tr").remove();
                }
            })
        });
    });

$(document).ready(function(){
        $(".disable").click(function(e){ alert('as');
            $this  = $(this);
            e.preventDefault();
            var url = $(this).attr("href");
            $.get(url, function(r){
                if(r.success){
                    $this.closest("tr").remove();
                }
            })
        });
    });

</script>


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
                        <li class="breadcrumb-item"><a href="#!">Blogs</a>
                        </li>
                        <li class="breadcrumb-item"><a href="#!"><?php echo $title; ?></a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Page-header end -->
            <!-- Page-body start -->
            <div class="page-body">
                <!-- DOM/Jquery table start -->

                <div class="card">
                    <div class="card-block">
                        <div class="table-responsive dt-responsive">
                            <table id="dom-jqry" class="table table-striped table-bordered nowrap">
                                <thead>
                                    <tr>
                                       <th>Id</th>
                                       <th>Blog Title</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Comment</th>
                                         <th>Comment Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <?php foreach($listBlogComments as $comment) : ?>
                                 <tr>
                                        <td><?php echo $comment['commentId']; ?></td>
                                        
                                        <td><a href="<?php echo base_url(); ?>administrator/blogs/view-comment/<?php echo $comment['commentId']; ?>"><?php echo substr($comment['blogTitle'],0,7); ?>...</a></td>
                                        <td><?php echo $comment['username']; ?></td>
                                         <td><?php echo $comment['email']; ?></td>
                                         <td><a href="<?php echo base_url(); ?>administrator/blogs/view-comment/<?php echo $comment['commentId']; ?>"><?php echo substr($comment['comment'],0,15); ?>...</a></td>
                                         <td><?php echo date("M d,Y H:i:s", strtotime($comment['createdAt'])); ?></td>
                                        <td>
                                                <?php if($comment['commentStatus'] == 1){ ?>
                                               <a class="label label-inverse-primary enable" href='<?php echo base_url(); ?>administrator/enable/<?php echo $comment['commentId']; ?>?table=<?php echo base64_encode('comments'); ?>'>Enabled</a>
                                                <?php }else{ ?> 
                                                <a class="label label-inverse-warning disable" href='<?php echo base_url(); ?>administrator/desable/<?php echo $comment['commentId']; ?>?table=<?php echo base64_encode('comments'); ?>'>Disabled</a>
                                                <?php } ?>
                                                <!-- Edit Button -->
                                                <a class="label label-inverse-info" href='<?php echo base_url(); ?>administrator/blogs/view-comment/<?php echo $comment['commentId']; ?>'>View</a>
                                                <!-- Delete Button -->
                                                <a class="label label-inverse-danger delete" href='<?php echo base_url(); ?>administrator/delete/<?php echo $comment['commentId']; ?>?table=<?php echo base64_encode('comments'); ?>'>Delete</a>
                                            
                                        </td>
                                    </tr>
                                <?php endforeach; ?>

                                <!-- <div class="paginate-link">
                                    <?php //echo $this->pagination->create_links(); ?>
                                </div>  -->

                                 </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- DOM/Jquery table end -->
            </div>

  