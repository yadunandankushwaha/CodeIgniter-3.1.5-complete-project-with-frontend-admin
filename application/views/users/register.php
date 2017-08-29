<div class="row">
	<div class="col-md-4 col-md-offset-4">
		<?php echo validation_errors(); ?>
		<?php echo form_open_multipart('users/register'); ?>
		<h3 class="text-center"><?= $title ?></h3>
		   <div class="form-group">
		   	 <label>Name</label>
		   	 <input type="text" class="form-control" name="name" placeholder="Name">
		   </div>
		   <div class="form-group">
		   	 <label>Username</label>
		   	 <input type="text" name="username" class="form-control" placeholder="Username">
		   </div>
		   <div class="form-group">
		   	 <label>Email</label>
		   	 <input type="text" name="email" class="form-control" placeholder="Email">
		   </div>
		   <div class="form-group">
		   	 <label>Password</label>
		   	 <input type="password" class="form-control" name="password" placeholder="Password">
		   </div>
		   <div class="form-group">
		   	 <label>Confirm Password</label>
		   	 <input type="password" class="form-control" name="password2" placeholder="Confirm Password">
		   </div>
		   <div class="form-group">
		   	 <label>Zipcode</label>
		   	 <input type="text" name="zipcode" class="form-control" placeholder="Zipcode">
		   </div>
		   <button type="submit" class="btn btn-primary">Submit</button>
		<?php echo form_close() ?>
	</div>
</div>