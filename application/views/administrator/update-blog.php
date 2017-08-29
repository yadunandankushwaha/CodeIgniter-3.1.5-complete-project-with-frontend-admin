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
                            <?php echo form_open_multipart('administrator/blogs/update-blog'); ?>
                              <input type="hidden" name="id" value="<?php echo $post['id']; ?>">
                                  <div class="form-group col-sm-8">
                                    <label>Title</label>
                                    <input type="text" class="form-control" name="title" placeholder="Add Title" value="<?php echo $post['title']; ?>">
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
                                        <label>Current Blog Image</label>
                                        <div class="col-sm-10">
                                           <img src="<?php echo site_url();?>assets/images/posts/<?php echo $post['post_image']; ?>" width="100px">
                                        </div>
                                    </div>
                                  <div class="form-group col-sm-6">
                                    <label>Upload New Image</label><br>
                                    <input type="file" name="userfile" class="form-control" size="20" value="" >
                                  </div>
                                  <div class="form-group col-sm-12">
                                    <label>Body</label>
                                    <textarea id="editor1" class="form-control" name="body" placeholder="Add Body"><?php echo $post['body']; ?></textarea>
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