<?php echo validation_errors(); ?>
<?php echo form_open('users/login'); ?>
<div class="row">
	<div class="col-md-4 col-md-offset-4">
	   <h1 class="text-center"><?= $title ?></h1>	
	   <div class="form-group">
	   	<!--  <label>Username</label> -->
	   	 <input type="text" name="username" class="form-control" placeholder="Enter Username" required autofocus>
	   </div>
	   <div class="form-group">
	   	 <!-- <label>Password</label> -->
	   	 <input type="password" class="form-control" name="password" placeholder="Enter Password" required autofocus>
	   </div>
	   <button type="submit" class="btn btn-primary btn-block">Login</button>
	</div>
</div>
<?php echo form_close() ?>
