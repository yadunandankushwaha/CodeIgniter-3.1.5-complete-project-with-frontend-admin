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
                        <li class="breadcrumb-item"><a href="<?php echo site_url();?>administrator/add/blog">Add Blogs</a>
                        </li>
                        <li class="breadcrumb-item"><a href="<?php echo site_url();?>administrator/blogs/list-blog">List Blogs</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Page body start -->
            <div class="page-body">
                <div class="row">
                    <div class="col-sm-12">
                        <!-- Basic Form Inputs card start -->
                        <div class="card">                           
                            <div class="card-block">
                            <?php echo form_open_multipart('administrator/blogs/add-blog'); ?>
                              <div class="form-group col-sm-8">
                                <label>Title</label>
                                <input type="text" class="form-control" name="title" placeholder="Add Title">
                              </div>
                              <div class="form-group col-sm-6">
                                <label>Category</label>
                                <select name="category_id" class="form-control">
                                <?php foreach ($categories as $category): ?>
                                    <option value="<?php echo $category['id']; ?>"><?php echo $category['name']; ?></option>
                                <?php endforeach; ?>
                                </select>
                              </div>

                              <div class="form-group col-sm-6">
                                <label>Upload Image</label><br>
                                <input type="file" class="form-control" name="userfile" size="20">
                              </div>

                              <div class="form-group col-sm-12">
                                <label>Body</label>
                                <textarea id="editor1" class="form-control" name="body" placeholder="Add Body"></textarea>
                              </div>
                              <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                            </div>
                        </div>
                        <!-- Basic Form Inputs card end -->
                    </div>
                </div>
            </div>
            <!-- Page body end -->
        </div>
    </div>