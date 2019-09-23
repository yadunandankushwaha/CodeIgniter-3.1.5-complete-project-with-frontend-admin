<?php 
	class Administrator extends CI_Controller{

		

		public function view($page = 'index'){
			if($this->session->userdata('login')) {
    			redirect('administrator/dashboard');
   			}

			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
				show_404();
			}
			$data['title'] = ucfirst($page);
			$this->load->view('administrator/header-script');
			//$this->load->view('administrator/header');
			//$this->load->view('administrator/index');
			$this->load->view('administrator/'.$page, $data);
			$this->load->view('administrator/footer');
		}

		public function home($page = 'home'){
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
				show_404();
			}
			$data['title'] = ucfirst($page);
			$this->load->view('administrator/header-script');
			$this->load->view('administrator/header');
			$this->load->view('administrator/header-bottom');
			$this->load->view('administrator/'.$page, $data);
			$this->load->view('administrator/footer');
		}

		public function dashboard($page = 'dashboard'){
		   if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
		   $data['title'] = ucfirst($page);
		   $this->load->view('administrator/header-script');
		   $this->load->view('administrator/header');
		   $this->load->view('administrator/header-bottom');
		   $this->load->view('administrator/'.$page, $data);
		   $this->load->view('administrator/footer');
		}

	 

	  // Log in Admin
		public function adminLogin(){
			$data['title'] = 'Admin Login';

			$this->form_validation->set_rules('email', 'Email', 'required');
			$this->form_validation->set_rules('password', 'Password', 'required');

			if($this->form_validation->run() === FALSE){
				//$data['title'] = ucfirst($page);
				$this->load->view('administrator/header-script');
				//$this->load->view('administrator/header');
				//$this->load->view('administrator/header-bottom');
				$this->load->view('administrator/index', $data);
				$this->load->view('administrator/footer');
			}else{
				// get email and Encrypt Password
				$email = $this->input->post('email');
				$encrypt_password = md5($this->input->post('password'));

				$user_id = $this->Administrator_Model->adminLogin($email, $encrypt_password);
				$sitelogo = $this->Administrator_Model->update_siteconfiguration(1);

				if ($user_id && $user_id->role_id == 1) {
					//Create Session
					$user_data = array(
								'user_id' => $user_id->id,
				 				'username' => $user_id->username,
				 				'email' => $user_id->email,
				 				'login' => true,
				 				'role' => $user_id->role_id,
				 				'image' => $user_id->image,
				 				'site_logo' => $sitelogo['logo_img']
				 	);

				 	$this->session->set_userdata($user_data);

					//Set Message
					$this->session->set_flashdata('success', 'Welcome to administrator Dashboard.');
					redirect('administrator/dashboard');
				}else{
					$this->session->set_flashdata('danger', 'Login Credential in invalid!');
					redirect('administrator/index');
				}
				
			}
		}

				// log admin out
		public function logout(){
			// unset user data
			$this->session->unset_userdata('login');
			$this->session->unset_userdata('user_id');
			$this->session->unset_userdata('username');
			$this->session->unset_userdata('role_id');
			$this->session->unset_userdata('email');
			$this->session->unset_userdata('image');
			$this->session->unset_userdata('site_logo');

			//Set Message
			$this->session->set_flashdata('success', 'You are logged out.');
			redirect(base_url().'administrator/index');
		}

		public function forget_password($page = 'forget-password'){
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
				show_404();
			}
			$data['title'] = ucfirst($page);
			$this->load->view('administrator/header-script');
			//$this->load->view('administrator/header');
			//$this->load->view('administrator/header-bottom');
			$this->load->view('administrator/'.$page, $data);
			$this->load->view('administrator/footer');
		}

		public function add_user($page = 'add-user')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Create User';

			//$data['add-user'] = $this->Administrator_Model->get_categories();

			$this->form_validation->set_rules('name', 'Name', 'required');
			$this->form_validation->set_rules('username', 'Username', 'required|callback_check_username_exists');
			$this->form_validation->set_rules('email', 'Email', 'required|callback_check_email_exists');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{
				//Upload Image
				$config['upload_path'] = './assets/images/users';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$errors =  array('error' => $this->upload->display_errors());
					$post_image = 'noimage.jpg';
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$post_image = $_FILES['userfile']['name'];
				}
				$password = md5('Test@123');
				$this->Administrator_Model->add_user($post_image,$password);

				//Set Message
				$this->session->set_flashdata('success', 'User has been created Successfull.');
				redirect('administrator/users');
			}
			
		}

		// Check user name exists
		public function check_username_exists($username){
			$this->form_validation->set_message('check_username_exists', 'That username is already taken, Please choose a different one.');

			if ($this->User_Model->check_username_exists($username)) {
				return true;
			}else{
				return false;
			}
		}


		// Check Email exists
		public function check_email_exists($email){
			$this->form_validation->set_message('check_email_exists', 'This email is already registered.');

			if ($this->User_Model->check_email_exists($email)) {
				return true;
			}else{
				return false;
			}
		}

		public function users($offset = 0)
		{
			// Pagination Config
			$config['base_url'] = base_url(). 'administrator/users/';
			$config['total_rows'] = $this->db->count_all('users');
			$config['per_page'] = 3;
			$config['uri_segment'] = 3;
			$config['attributes'] = array('class' => 'paginate-link');

			// Init Pagination
			$this->pagination->initialize($config);

			$data['title'] = 'Latest Users';

			$data['users'] = $this->Administrator_Model->get_users(FALSE, $config['per_page'], $offset);

			 	$this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/users', $data);
		  		$this->load->view('administrator/footer');
		}

		public function delete($id)
		{
			$table = base64_decode($this->input->get('table'));
			//$table = $this->input->post('table');
			$this->Administrator_Model->delete($id,$table);       
			$this->session->set_flashdata('success', 'Data has been deleted Successfully.');
			header('Location: ' . $_SERVER['HTTP_REFERER']);
		}
		public function enable($id)
		{
			$table = base64_decode($this->input->get('table'));
			//$table = $this->input->post('table');
			$this->Administrator_Model->enable($id,$table);       
			$this->session->set_flashdata('success', 'Desabled Successfully.');
			header('Location: ' . $_SERVER['HTTP_REFERER']);
		}
		public function desable($id)
		{
			$table = base64_decode($this->input->get('table'));
			//$table = $this->input->post('table');
			$this->Administrator_Model->desable($id,$table);       
			$this->session->set_flashdata('success', 'Enabled Successfully.');
			header('Location: ' . $_SERVER['HTTP_REFERER']);
		}

		public function update_user($id = NULL)
		{
			$data['user'] = $this->Administrator_Model->get_user($id);
			
			if (empty($data['user'])) {
				show_404();
			}
			$data['title'] = 'Update User';

			$this->load->view('administrator/header-script');
	 	 	 $this->load->view('administrator/header');
	  		 $this->load->view('administrator/header-bottom');
	   		 $this->load->view('administrator/update-user', $data);
	  		$this->load->view('administrator/footer');
		}

		public function update_user_data($page = 'update-user')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Update User';

			//$data['add-user'] = $this->Administrator_Model->get_categories();

			$this->form_validation->set_rules('name', 'Name', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{
				//Upload Image
				
				$config['upload_path'] = './assets/images/users';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$id = $this->input->post('id');
					$data['img'] = $this->Administrator_Model->get_user($id);
					$errors =  array('error' => $this->upload->display_errors());
					$post_image = $data['img']['image'];
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$post_image = $_FILES['userfile']['name'];
				}

				$this->Administrator_Model->update_user_data($post_image);

				//Set Message
				$this->session->set_flashdata('success', 'User has been Updated Successfull.');
				redirect('administrator/users');
			}
			
		}


		public function create_product_category()
		{
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}
			
			$data['title'] = 'Create Category';
			$this->form_validation->set_rules('name', 'Category Name', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/add-product-category', $data);
		  		 $this->load->view('administrator/footer');
			}else{
				$this->Administrator_Model->create_product_category();

				//Set Message
				$this->session->set_flashdata('category_created', 'Your category has been created.');
				redirect('administrator/product-categories');
			}
		}
		public function product_categories()
		{
			$data['title'] = 'Product Categories';
			$data['product_categories'] = $this->Administrator_Model->product_categories();

			 	$this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/product-categories', $data);
		  		 $this->load->view('administrator/footer');
		}

		public function update_product_category($id = NULL)
		{

			$data['productcategory'] = $this->Administrator_Model->update_product_category($id);
			//print_r($data['productcategory']);exit;
			
			if (empty($data['productcategory'])) {
				show_404();
			}
			$data['title'] = 'Update Product Category';

			$this->load->view('administrator/header-script');
	 	 	 $this->load->view('administrator/header');
	  		 $this->load->view('administrator/header-bottom');
	   		 $this->load->view('administrator/update-product-category', $data);
	  		$this->load->view('administrator/footer');
		}

		public function update_product_category_data()
		{
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}
			$data['title'] = 'Update Product Category';
			$this->form_validation->set_rules('name', 'Category Name', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/update-product-category', $data);
		  		 $this->load->view('administrator/footer');
			}else{
				$this->Administrator_Model->update_product_category_data();

				//Set Message
				$this->session->set_flashdata('success', 'Your category has been Updated Successfully.');
				redirect('administrator/product-categories');
			}
		}

		public function create_product($page = 'add-product')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['product_categories'] = $this->Administrator_Model->product_categories();
			
			$data['title'] = 'Create Product';

			$this->form_validation->set_rules('name', 'Name', 'required');
			$this->form_validation->set_rules('sku', 'SKU', 'required|callback_check_sku_exists');
			$this->form_validation->set_rules('price', 'Price', 'required');
			if (empty($_FILES['userfile']['name'])){
    		$this->form_validation->set_rules('userfile', 'Document', 'required');
			}
			$this->form_validation->set_rules('description', 'Product Description', 'required');
			$this->form_validation->set_rules('quantity', 'Quantity', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{
				//Upload Image
				$config['upload_path'] = './assets/images/products';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$errors =  array('error' => $this->upload->display_errors());
					$post_image = 'noimage.jpg';
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$post_image = $_FILES['userfile']['name'];
				}
				$dataID = $this->Administrator_Model->create_product($post_image);

				//$dataID = 1; 
				if (!empty($_FILES['imgFiles']['name'])){
				$multipleUpload =  $this->multipleImageUpload($_FILES['imgFiles'],$dataID);
				}
				//Set Message
				$this->session->set_flashdata('success', 'Product has been Added Successfull.');
				redirect('administrator/products');
			}
			
		}

	public function multipleImageUpload($images,$dataID){
		$images == $_FILES['imgFiles'];
        $data = array();
        if(!empty($_FILES['imgFiles']['name'])){
            $filesCount = count($_FILES['imgFiles']['name']);
            for($i = 0; $i < $filesCount; $i++){
                $_FILES['userFile']['name'] = $_FILES['imgFiles']['name'][$i];
                $_FILES['userFile']['type'] = $_FILES['imgFiles']['type'][$i];
                $_FILES['userFile']['tmp_name'] = $_FILES['imgFiles']['tmp_name'][$i];
                $_FILES['userFile']['error'] = $_FILES['imgFiles']['error'][$i];
                $_FILES['userFile']['size'] = $_FILES['imgFiles']['size'][$i];

                $uploadPath = './assets/images/products_multiple/';
                $config['upload_path'] = $uploadPath;
                $config['allowed_types'] = 'gif|jpg|png';
                
                $this->load->library('upload', $config);
                $this->upload->initialize($config);
                if($this->upload->do_upload('userFile')){
                    $fileData = $this->upload->data();
                    $uploadData[$i]['file_name'] = $fileData['file_name'];
                     $uploadData[$i]['product_id'] = $dataID;
                   /* $uploadData[$i]['created'] = date("Y-m-d H:i:s");
                    $uploadData[$i]['modified'] = date("Y-m-d H:i:s");*/
                }
            }
            
            if(!empty($uploadData)){
                //Insert file information into the database
                $insert = $this->Administrator_Model->insertproductsmultipleImages($uploadData);
                return $insert;
               /* $statusMsg = $insert?'Files uploaded successfully.':'Some problem occurred, please try again.';
                $this->session->set_flashdata('success',$statusMsg);*/
            }
        }
    }
		// Check Product SKU  exists
		public function check_sku_exists($sku){
			$this->form_validation->set_message('check_sku_exists', 'That SKU is already taken, Please choose a different one.');

			if ($this->Administrator_Model->check_sku_exists($sku)) {
				return true;
			}else{
				return false;
			}
		}

		public function get_products()
		{
			$data['products'] = $this->Administrator_Model->get_products();
			
			if (empty($data['products'])) {
				show_404();
			}
			$data['title'] = 'List products';

			$this->load->view('administrator/header-script');
	 	 	 $this->load->view('administrator/header');
	  		 $this->load->view('administrator/header-bottom');
	   		 $this->load->view('administrator/products', $data);
	  		$this->load->view('administrator/footer');
		}

		public function update_products($id = NULL)
		{
			$data['product_categories'] = $this->Administrator_Model->product_categories();
			$data['productsDetails'] = $this->Administrator_Model->update_products($id);
			$productId = $data['productsDetails']['id'];
			$data['productImages'] = $this->Administrator_Model->product_images($productId);
			
			if (empty($data['productsDetails'])) {
				show_404();
			}
			$data['title'] = 'Update Details';

			$this->load->view('administrator/header-script');
	 	 	 $this->load->view('administrator/header');
	  		 $this->load->view('administrator/header-bottom');
	   		 $this->load->view('administrator/update-products', $data);
	  		$this->load->view('administrator/footer');
		}


		public function update_products_data($page = 'update-product')
		{

			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}
			$data['title'] = 'Update Product';

			$this->form_validation->set_rules('name', 'Name', 'required');
			$this->form_validation->set_rules('price', 'Price', 'required');
			$this->form_validation->set_rules('description', 'Product Description', 'required');
			$this->form_validation->set_rules('quantity', 'Quantity', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');

			}else{
				//Upload Image
				$config['upload_path'] = './assets/images/products';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$errors =  array('error' => $this->upload->display_errors());
					$data['productsDetails'] = $this->Administrator_Model->update_products($this->input->post('id'));
					$post_image = $data['productsDetails']['image'];
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$post_image = $_FILES['userfile']['name'];
				}
				$dataID = $this->Administrator_Model->update_products_data($post_image);

				//$dataID = 1; 
				if (!empty($_FILES['imgFiles']['name'])){
				$multipleUpload =  $this->multipleImageUpload($_FILES['imgFiles'],$this->input->post('id'));
				}
				//Set Message
				$this->session->set_flashdata('success', 'Product has been Updated Successfull.');
				redirect('administrator/products');
			}
		}

		public function create_faq_category()
		{
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Create FAQ Category';
			$this->form_validation->set_rules('name', 'FAQ Category Name', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/add-faq-category', $data);
		  		 $this->load->view('administrator/footer');
			}else{
				$this->Administrator_Model->create_faq_category();
				//Set Message
				$this->session->set_flashdata('success', 'category has been created successfully.');
				redirect('administrator/faq-categories');
			}
		}
		public function faq_categories()
		{
			$data['title'] = 'FAQ Categories';
			$data['faq_categories'] = $this->Administrator_Model->faq_categories();

			 	$this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/faq-categories', $data);
		  		 $this->load->view('administrator/footer');
		}

		public function update_faq_category($id = NULL)
		{

			$data['faqcategory'] = $this->Administrator_Model->update_faq_category($id);

			$data['title'] = 'Update FAQ Category';

			$this->load->view('administrator/header-script');
	 	 	 $this->load->view('administrator/header');
	  		 $this->load->view('administrator/header-bottom');
	   		 $this->load->view('administrator/update-faq-category', $data);
	  		$this->load->view('administrator/footer');
		}

		public function update_faq_category_data()
		{
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}
			$data['title'] = 'Update FAQ Category';
			$this->form_validation->set_rules('name', 'Category Name', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/update-faq-category', $data);
		  		 $this->load->view('administrator/footer');
			}else{
				$this->Administrator_Model->update_faq_category_data();
				//Set Message
				$this->session->set_flashdata('success', 'Your category has been Updated Successfully.');
				redirect('administrator/faq-categories');
			}
		}

		//########################## functions start of faq ##############################

		public function create_faq($page = 'add-faq')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['faq_categories'] = $this->Administrator_Model->faq_categories();
			
			$data['title'] = 'Create FAQ';

			$this->form_validation->set_rules('question', 'Question', 'required');
			$this->form_validation->set_rules('answer', 'Answer', 'required');
			$this->form_validation->set_rules('faq_cat_id', 'FAQ Category Name', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{
				 $this->Administrator_Model->create_faq();
				//Set Message
				$this->session->set_flashdata('success', 'FAQ has been Added Successfull.');
				redirect('administrator/faqs');
			}
			
		}

	

		public function get_faqs($page = 'faqs')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    	show_404();
		   	}

			$data['faqs'] = $this->Administrator_Model->get_faqs();

			$data['title'] = 'List FAQS';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/faqs', $data);
	  		$this->load->view('administrator/footer');
		}

		public function update_faqs($id = NULL)
		{
			$data['faq_categories'] = $this->Administrator_Model->faq_categories();
			$data['faqsDetails'] = $this->Administrator_Model->update_faqs($id);
			
			$data['title'] = 'Update Details';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/update-faqs', $data);
	  		$this->load->view('administrator/footer');
		}


		public function update_faqs_data($page = 'update-faqs')
		{

			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}
			$data['title'] = 'Update faq';

			$this->form_validation->set_rules('question', 'Question', 'required');
			$this->form_validation->set_rules('answer', 'Answer', 'required');
			$this->form_validation->set_rules('faq_cat_id', 'FAQ Category Name', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{
				
				 $this->Administrator_Model->update_faq_data();
				//Set Message
				$this->session->set_flashdata('success', 'FAQ has been Updated Successfull.');
				redirect('administrator/faqs');
			}
		}

		//sco pages start
		public function get_scopages($page = 'scopages')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    	show_404();
		   	}

			$data['scopages'] = $this->Administrator_Model->get_scopages();

			$data['title'] = 'List SCO pages';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/scopages', $data);
	  		$this->load->view('administrator/footer');
		}

		public function update_scopages($id = NULL)
		{
			$data['scopages'] = $this->Administrator_Model->update_scopages($id);
			
			$data['title'] = 'Update Details';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/update-scopages', $data);
	  		$this->load->view('administrator/footer');
		}


		public function update_scopages_data($page = 'update-scopages')
		{

			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}
			$data['title'] = 'Update SCO Details';

			$this->form_validation->set_rules('title', 'Title', 'required');
			/*$this->form_validation->set_rules('answer', 'Answer', 'required');
			$this->form_validation->set_rules('faq_cat_id', 'FAQ Category Name', 'required');*/

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{
				
				 $this->Administrator_Model->update_scopages_data();
				//Set Message
				$this->session->set_flashdata('success', 'SCO Details has been Updated Successfull.');
				redirect('administrator/scopages');
			}
		}

		//social links
		public function get_sociallinks($page = 'sociallinks')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    	show_404();
		   	}

			$data['sociallinks'] = $this->Administrator_Model->get_sociallinks();

			$data['title'] = 'sociallinks';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/sociallinks', $data);
	  		$this->load->view('administrator/footer');
		}

		public function update_sociallinks($id = NULL)
		{
			$data['sociallinks'] = $this->Administrator_Model->update_sociallinks($id);
			
			$data['title'] = 'Update sociallinks';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/update-sociallinks', $data);
	  		$this->load->view('administrator/footer');
		}


		public function update_sociallinks_data($page = 'update-sociallinks')
		{

			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}
			$data['title'] = 'Update sociallinks';

			$this->form_validation->set_rules('link', 'Link', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{
				
				 $this->Administrator_Model->update_sociallinks_data();
				//Set Message
				$this->session->set_flashdata('success', 'sociallinks Details has been Updated Successfull.');
				redirect('administrator/sociallinks');
			}
		}


		// sliders
		public function create_slider($page = 'add-slider')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Create Sliders Image';

			//$data['add-user'] = $this->Administrator_Model->get_categories();

			$this->form_validation->set_rules('title', 'Title', 'required');
			if (empty($_FILES['userfile']['name'])){
    		$this->form_validation->set_rules('userfile', 'Document', 'required');
			}

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{
				//Upload Image
				$config['upload_path'] = './assets/images/sliders';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$errors =  array('error' => $this->upload->display_errors());
					$post_image = 'noimage.jpg';
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$post_image = $_FILES['userfile']['name'];
				}
				$this->Administrator_Model->create_slider($post_image);

				//Set Message
				$this->session->set_flashdata('success', 'Slider Image has been created Successfull.');
				redirect('administrator/sliders');
			}
			
		}


		public function get_sliders()
		{
			$data['sliders'] = $this->Administrator_Model->get_sliders();

			$data['title'] = 'Sliders';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/sliders', $data);
	  		$this->load->view('administrator/footer');
		}

		

		public function update_slider($id = NULL)
		{
			$data['sliders'] = $this->Administrator_Model->get_slider_data($id);
			$data['title'] = 'Update Slider';

			$this->load->view('administrator/header-script');
	 	 	 $this->load->view('administrator/header');
	  		 $this->load->view('administrator/header-bottom');
	   		 $this->load->view('administrator/update-slider', $data);
	  		$this->load->view('administrator/footer');
		}

		public function update_slider_data($page = 'update-slider')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}
			$data['title'] = 'Update Slider';

			$this->form_validation->set_rules('title', 'Title', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{
				//Upload Image
				
				$config['upload_path'] = './assets/images/sliders';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$id = $this->input->post('id');
					$data['img'] = $this->Administrator_Model->get_slider_data($id);
					$errors =  array('error' => $this->upload->display_errors());
					$post_image = $data['img']['image'];
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$post_image = $_FILES['userfile']['name'];
				}

				$this->Administrator_Model->update_slider_data($post_image);

				//Set Message
				$this->session->set_flashdata('success', 'Slider Images has been Updated Successfull.');
				redirect('administrator/sliders');
			}
			
		}

		// blogs functions start
		public function add_blog($page = 'add-blog')
		{
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Add Blog';

			$data['categories'] = $this->Post_Model->get_categories();

			$this->form_validation->set_rules('title', 'Title', 'required');
			$this->form_validation->set_rules('body', 'Body', 'required');

			if($this->form_validation->run() === FALSE){
				$this->load->view('administrator/header-script');
			   	$this->load->view('administrator/header');
			   	$this->load->view('administrator/header-bottom');
			   	$this->load->view('administrator/'.$page, $data);
			   	$this->load->view('administrator/footer');	
			}else{
				//Upload Image
				$config['upload_path'] = './assets/images/posts';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$errors =  array('error' => $this->upload->display_errors());
					$post_image = 'noimage.png';
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$post_image = $_FILES['userfile']['name'];
				}
				$this->Administrator_Model->create_blog($post_image);

				//Set Message
				$this->session->set_flashdata('post_created', 'Your post has been created.');
				redirect('administrator/blogs/list-blog');
			}
			
		}

		public function list_blog($offset = 0){
			// Pagination Config
			$config['base_url'] = base_url(). 'administrator/blogs/';
			$config['total_rows'] = $this->db->count_all('posts');
			$config['per_page'] = 3;
			$config['uri_segment'] = 3;
			$config['attributes'] = array('class' => 'paginate-link');

			// Init Pagination
			$this->pagination->initialize($config);

			$data['title'] = 'List of Blogs';

			$data['blogs'] = $this->Administrator_Model->listblogs(FALSE, $config['per_page'], $offset);

			$this->load->view('administrator/header-script');
			$this->load->view('administrator/header');
			$this->load->view('administrator/header-bottom');
			$this->load->view('administrator/list-blogs', $data);
			$this->load->view('administrator/footer');
		}
		public function update_blog($blog_id = false){
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Edit Blog';

			$data['categories'] = $this->Post_Model->get_categories();
			$data['post'] = $this->Administrator_Model->listblogs($blog_id);

			$this->form_validation->set_rules('title', 'Title', 'required');
			$this->form_validation->set_rules('body', 'Body', 'required');

			if($this->form_validation->run() === FALSE){
				$this->load->view('administrator/header-script');
			   	$this->load->view('administrator/header');
			   	$this->load->view('administrator/header-bottom');
			   	$this->load->view('administrator/update-blog', $data);
			   	$this->load->view('administrator/footer');	
			}else{
				//Upload Image
				$config['upload_path'] = './assets/images/posts';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$errors =  array('error' => $this->upload->display_errors());
					$data['postimg'] = $this->Administrator_Model->listblogs($this->input->post('id'));
					$post_image = $data['postimg']['post_image'];
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$post_image = $_FILES['userfile']['name'];
				}

				$this->Administrator_Model->update_blog_data($post_image);

			    //Set Message
			    $this->session->set_flashdata('success', 'Blog has been Updated Successfully.');
			    redirect('administrator/blogs/list-blog');
			}
		}

		public function list_blog_comments()
		{
			$data['listBlogComments'] = $this->Administrator_Model->list_blog_comments();

			$data['title'] = 'Blog Comments';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/blog-comments', $data);
	  		$this->load->view('administrator/footer');
		}

		public function view_blog_comments($id = NULL)
		{

			$data['viewBlogComments'] = $this->Administrator_Model->view_blog_comments($id);
			$data['title'] = 'View blog Comments';

			$this->load->view('administrator/header-script');
	 	 	 $this->load->view('administrator/header');
	  		 $this->load->view('administrator/header-bottom');
	   		 $this->load->view('administrator/view-blog-comment', $data);
	  		$this->load->view('administrator/footer');
		}


		//Site configuration
		public function get_siteconfiguration($page = 'site-configuration')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    	show_404();
		   	}

			$data['siteconfiguration'] = $this->Administrator_Model->get_siteconfiguration();

			$data['title'] = 'Site Configuration';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/update-site-configuration', $data);
	  		$this->load->view('administrator/footer');
		}

		public function update_siteconfiguration($id = NULL)
		{
			$data['siteconfiguration'] = $this->Administrator_Model->update_siteconfiguration($id);
			$data['title'] = 'Update Configuration';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/update-site-configuration', $data);
	  		$this->load->view('administrator/footer');
		}


		public function update_siteconfiguration_data($page = 'update-site-configuration')
		{

			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}
			$data['title'] = 'Update Configuration';

			$this->form_validation->set_rules('site_title', 'Site Title', 'required');
			$this->form_validation->set_rules('site_name', 'Site Name', 'required');
			
			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{

				//Upload Image
				$config['upload_path'] = './assets/images';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$errors =  array('error' => $this->upload->display_errors());
					$data['logo_imgs'] = $this->Administrator_Model->update_siteconfiguration($this->input->post('id'));
					$post_image = $data['logo_imgs']['logo_img'];
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$post_image = $_FILES['userfile']['name'];
				}
				
				 $this->Administrator_Model->update_siteconfiguration_data($post_image);
				//Set Message
				$this->session->set_flashdata('success', 'site configuration Details has been Updated Successfull.');
				redirect('administrator/site-configuration/update/1');
			}
		}



		// pages content details start
		public function get_pagecontents($page = 'page-contents')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    	show_404();
		   	}

			$data['pagecontents'] = $this->Administrator_Model->get_pagecontents();

			$data['title'] = 'List pages contents';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/'.$page, $data);
	  		$this->load->view('administrator/footer');
		}

		public function update_pagecontents($id = NULL)
		{
			$data['pagecontents'] = $this->Administrator_Model->update_pagecontents($id);
			
			$data['title'] = 'Update page contents';

			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/update-page-contents', $data);
	  		$this->load->view('administrator/footer');
		}


		public function update_pagecontents_data($page = 'update-page-contents')
		{

			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}
			$data['title'] = 'Update Page contents Details';

			$this->form_validation->set_rules('page_name', 'Page Name', 'required');
			$this->form_validation->set_rules('content', 'Page Content', 'required');
			
			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{
				
				 $this->Administrator_Model->update_pagecontents_data();
				//Set Message
				$this->session->set_flashdata('success', 'Page Contents Details has been Updated Successfull.');
				redirect('administrator/page-contents');
			}
		}


		// galleries 
		public function galleries()
		{
			$data['title'] = 'Add Galleries';
			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/add-galleries', $data);
	  		$this->load->view('administrator/footer');
		}
			
			
		public function add_team($page = 'add-team')
		{
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Add Blog';

			$this->form_validation->set_rules('name', 'Team Name', 'required');
			$this->form_validation->set_rules('designation', 'Designation', 'required');
			$this->form_validation->set_rules('description', 'Description', 'required');

			if($this->form_validation->run() === FALSE){
				$this->load->view('administrator/header-script');
			   	$this->load->view('administrator/header');
			   	$this->load->view('administrator/header-bottom');
			   	$this->load->view('administrator/'.$page, $data);
			   	$this->load->view('administrator/footer');	
			}else{
				//Upload Image
				$config['upload_path'] = './assets/images/teams';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$errors =  array('error' => $this->upload->display_errors());
					$team_image = 'noimage.png';
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$team_image = $_FILES['userfile']['name'];
				}
				$this->Administrator_Model->create_team($team_image);

				//Set Message
				$this->session->set_flashdata('success', 'Your team has been created.');
				redirect('administrator/team/list');
			}
			
		}

		public function list_team($offset = 0){
			// Pagination Config
			$config['base_url'] = base_url(). 'administrator/team/';
			$config['total_rows'] = $this->db->count_all('teams');
			$config['per_page'] = 3;
			$config['uri_segment'] = 3;
			$config['attributes'] = array('class' => 'paginate-link');

			// Init Pagination
			$this->pagination->initialize($config);

			$data['title'] = 'List of Teams';

			$data['teams'] = $this->Administrator_Model->listteams(FALSE, $config['per_page'], $offset);

			$this->load->view('administrator/header-script');
			$this->load->view('administrator/header');
			$this->load->view('administrator/header-bottom');
			$this->load->view('administrator/list-teams', $data);
			$this->load->view('administrator/footer');
		}

		public function update_team($teamId){
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Edit Team';

			$data['team'] = $this->Administrator_Model->listteams($teamId);

			$this->form_validation->set_rules('name', 'Team Name', 'required');
			$this->form_validation->set_rules('designation', 'Designation', 'required');
			$this->form_validation->set_rules('description', 'Description', 'required');

			if($this->form_validation->run() === FALSE){
				$this->load->view('administrator/header-script');
			   	$this->load->view('administrator/header');
			   	$this->load->view('administrator/header-bottom');
			   	$this->load->view('administrator/update-team', $data);
			   	$this->load->view('administrator/footer');	
			}else{
				//Upload Image
				$config['upload_path'] = './assets/images/teams';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$errors =  array('error' => $this->upload->display_errors());
					$data['teamimg'] = $this->Administrator_Model->listteams($this->input->post('id'));
					$post_image = $data['teamimg']['image'];
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$post_image = $_FILES['userfile']['name'];
				}

				$this->Administrator_Model->update_team_data($post_image);

			    //Set Message
			    $this->session->set_flashdata('success', 'Team has been Updated Successfully.');
			    redirect('administrator/team/list');
			}
		}

		public function add_testimonial($page = 'add-testimonial')
		{
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Add Testimonial';

			$this->form_validation->set_rules('name', 'Testimonial Name', 'required');
			$this->form_validation->set_rules('domain', 'Domain', 'required');
			$this->form_validation->set_rules('description', 'Description', 'required');

			if($this->form_validation->run() === FALSE){
				$this->load->view('administrator/header-script');
			   	$this->load->view('administrator/header');
			   	$this->load->view('administrator/header-bottom');
			   	$this->load->view('administrator/'.$page, $data);
			   	$this->load->view('administrator/footer');	
			}else{
				//Upload Image
				$config['upload_path'] = './assets/images/testimonials';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$errors =  array('error' => $this->upload->display_errors());
					$uploaded_image = 'noimage.png';
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$uploaded_image = $_FILES['userfile']['name'];
				}
				$this->Administrator_Model->create_testimonial($uploaded_image);

				//Set Message
				$this->session->set_flashdata('success', 'Testimonial has been created.');
				redirect('administrator/testimonials/list');
			}
			
		}

		public function list_testimonial($offset = 0){
			// Pagination Config
			$config['base_url'] = base_url(). 'administrator/team/';
			$config['total_rows'] = $this->db->count_all('teams');
			$config['per_page'] = 3;
			$config['uri_segment'] = 3;
			$config['attributes'] = array('class' => 'paginate-link');

			// Init Pagination
			$this->pagination->initialize($config);

			$data['title'] = 'List of Testimonials';

			$data['testimonials'] = $this->Administrator_Model->listtestimonial(FALSE, $config['per_page'], $offset);

			$this->load->view('administrator/header-script');
			$this->load->view('administrator/header');
			$this->load->view('administrator/header-bottom');
			$this->load->view('administrator/list-testimonials', $data);
			$this->load->view('administrator/footer');
		}

		public function update_testimonial($id){
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Edit Testimonial';

			$data['testimonial'] = $this->Administrator_Model->listtestimonial($id);

			$this->form_validation->set_rules('name', 'Testimonial Name', 'required');
			$this->form_validation->set_rules('domain', 'Domain', 'required');
			$this->form_validation->set_rules('description', 'Description', 'required');

			if($this->form_validation->run() === FALSE){
				$this->load->view('administrator/header-script');
			   	$this->load->view('administrator/header');
			   	$this->load->view('administrator/header-bottom');
			   	$this->load->view('administrator/edit-testimonial', $data);
			   	$this->load->view('administrator/footer');	
			}else{
				//Upload Image
				$config['upload_path'] = './assets/images/testimonials';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$errors =  array('error' => $this->upload->display_errors());
					$data['img'] = $this->Administrator_Model->listtestimonial($this->input->post('id'));
					$uploaded_image = $data['img']['image'];
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$uploaded_image = $_FILES['userfile']['name'];
				}

				$this->Administrator_Model->update_testimonial_data($uploaded_image);
			    //Set Message
			    $this->session->set_flashdata('success', 'Testimonial Updated Successfully.');
			    redirect('administrator/testimonials/list');
			}
		}

		public function get_admin_data()
		{
			$data['changePassword'] = $this->Administrator_Model->get_admin_data();
			$data['title'] = 'Change Password';

			$this->load->view('administrator/header-script');
	 	 	 $this->load->view('administrator/header');
	  		 $this->load->view('administrator/header-bottom');
	   		 $this->load->view('administrator/change-password', $data);
	  		$this->load->view('administrator/footer');
		}

		public function change_password($page = 'change-password')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Change password';

			//$data['add-user'] = $this->Administrator_Model->get_categories();

			$this->form_validation->set_rules('old_password', 'Old Password', 'required|callback_match_old_password');
			$this->form_validation->set_rules('new_password', 'New Password Field', 'required');
			$this->form_validation->set_rules('confirm_new_password', 'Confirm New Password', 'matches[new_password]');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{


				$this->Administrator_Model->change_password($this->input->post('new_password'));

				//Set Message
				$this->session->set_flashdata('success', 'Password Has Been Changed Successfull.');
				redirect('administrator/change-password');
			}
			
		}
		// Check user name exists
		public function match_old_password($old_password){
			
			$this->form_validation->set_message('match_old_password', 'Current Password Does not matched, Please Try Again.');
			$password = md5($old_password);
			$que = $this->Administrator_Model->match_old_password($password);
			if ($que) {
				return true; 
			}else{
				return false;
			}
		}

		public function update_admin_profile()
		{
			$data['user'] = $this->Administrator_Model->get_admin_data();
			$data['title'] = 'Update Profile';

			$this->load->view('administrator/header-script');
	 	 	 $this->load->view('administrator/header');
	  		 $this->load->view('administrator/header-bottom');
	   		 $this->load->view('administrator/update-profile', $data);
	  		$this->load->view('administrator/footer');
		}

		public function update_admin_profile_data($page = 'update-profile')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'Update Profile';

			//$data['add-user'] = $this->Administrator_Model->get_categories();

			$this->form_validation->set_rules('name', 'Name', 'required');

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{
				//Upload Image
				
				$config['upload_path'] = './assets/images/users';
				$config['allowed_types'] = 'gif|jpg|png|jpeg';
				$config['max_size'] = '2048';
				$config['max_width'] = '2000';
				$config['max_height'] = '2000';

				$this->load->library('upload', $config);

				if(!$this->upload->do_upload()){
					$id = $this->input->post('id');
					$data['img'] = $this->Administrator_Model->get_user($id);
					$errors =  array('error' => $this->upload->display_errors());
					$post_image = $data['img']['image'];
				}else{
					$data =  array('upload_data' => $this->upload->data());
					$post_image = $_FILES['userfile']['name'];
				}

				$this->Administrator_Model->update_user_data($post_image);

				//Set Message
				$this->session->set_flashdata('success', 'User has been Updated Successfull.');
				redirect('administrator/update-profile');
			}
			
		}


		//forget password functions start
		public function forget_password_mail(){
    $this->load->library('form_validation');
    $this->form_validation->set_rules('email', 'Email', 'required|trim|xss_clean|callback_validate_credentials');

            //check if email is in the database
        $this->load->model('Administrator_Model');
        if($this->Administrator_Model->email_exists()){
            //$them_pass is the varible to be sent to the user's email
            $temp_pass = md5(uniqid());
            //send email with #temp_pass as a link
            $this->load->library('email', array('mailtype'=>'html'));
            $this->email->from('admin1234567@gmail.com', "Site");
            $this->email->to($this->input->post('email'));
            $this->email->subject("Reset your Password");

            $message = "<p>This email has been sent as a request to reset our password</p>";
            $message .= "<p><a href='".base_url()."administrator/reset-password/$temp_pass'>Click here </a>if you want to reset your password,
                        if not, then ignore</p>";
            $this->email->message($message);

            if($this->email->send()){
                $this->load->model('Administrator_Model');
                if($this->Administrator_Model->temp_reset_password($temp_pass)){
                    echo "check your email for instructions, thank you";
                }
            }
            else{
                echo "email was not sent, please contact your administrator";
            }

        }else{
            echo "your email is not in our database";
        }
}
public function reset_password($temp_pass){
    $this->load->model('Administrator_Model');
    if($this->Administrator_Model->is_temp_pass_valid($temp_pass)){

        $this->load->view('reset-password');
       //once the user clicks submit $temp_pass is gone so therefore I can't catch the new password and   //associated with the user...

    }else{
        echo "the key is not valid";    
    }

}
public function update_password(){
    $this->load->library('form_validation');
        $this->form_validation->set_rules('password', 'Password', 'required|trim');
        $this->form_validation->set_rules('cpassword', 'Confirm Password', 'required|trim|matches[password]');
            if($this->form_validation->run()){
            echo "passwords match";
            }else{
            echo "passwords do not match";  
            }
}


		
	}
	




