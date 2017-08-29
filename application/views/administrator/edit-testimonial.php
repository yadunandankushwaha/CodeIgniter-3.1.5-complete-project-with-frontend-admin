           <div class="page-header">
                <div class="page-header-title">
                    <h4>Testimonials</h4>
                </div>
                <div class="page-header-breadcrumb">
                    <ul class="breadcrumb-title">
                        <li class="breadcrumb-item">
                            <a href="index-2.html">
                                <i class="icofont icofont-home"></i>
                            </a>
                        </li>
                        <li class="breadcrumb-item"><a href="#!">Testimonials</a>
                        </li>
                        <li class="breadcrumb-item"><a href="#!">Add Testimonials</a>
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
                                <h5>Add Testimonials</h5>
                                <div class="card-header-right">
                                    <i class="icofont icofont-rounded-down"></i>
                                    <i class="icofont icofont-refresh"></i>
                                    <i class="icofont icofont-close-circled"></i>
                                </div>
                            </div>

                            <div class="card-block">

                                <h4><?= $title ?></h4>
                                <?php echo form_open_multipart('administrator/testimonials/update/'.$testimonial['id']); ?>
                                    <input type="hidden" name="id" value="<?php echo $testimonial['id']; ?>">
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" required="" value="<?php echo $testimonial['name']; ?>" name="name" class="form-control" placeholder="Type your title in Placeholder">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Domain</label>
                                        <div class="col-sm-10">
                                            <input type="text" required="" value="<?php echo $testimonial['domain']; ?>" name="domain" class="form-control" placeholder="Type your title in Placeholder">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Current Image</label>
                                        <div class="col-sm-10">
                                           <img src="<?php echo site_url();?>assets/images/testimonials/<?php echo $testimonial['image']; ?>" width="100px">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Image</label>
                                        <div class="col-sm-10">
                                            <input type="file" name="userfile" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Description</label>
                                        <div class="col-sm-10">
                                            <textarea id="editor1" rows="10" required="" cols="5" class="form-control" name="description" placeholder="Default textarea"><?php echo $testimonial['description']; ?></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Want to make Enable?</label>
                                        <div class="col-sm-3">
                                            <input type="checkbox" value="1" name="status" class="js-single" <?php if($testimonial['status'] == 1){ echo "checked"; } else { echo ""; } ?> />
                                        </div>
                                    </div>
                                    
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label"></label>
                                        <div class="col-sm-10">
                                            <button type="submit" name="submit" class="btn btn-primary">Update</button>
                                        </div>
                                    </div>

                                    
                                </form>
                               
                                   
                                </div>
                            </div>
                        </div>
                        <!-- Basic Form Inputs card end -->
                        
                      

                    </div>
                </div>
            </div>
            <!-- Page body end -->
        </div>
    </div>

    <!-- ck editor -->
    <script src="<?php echo base_url(); ?>admintemplate/bower_components/ckeditor/ckeditor.js"></script>