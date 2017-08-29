<?php
	class Category extends CI_Controller
	{
		
		public function create()
		{
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('users/login');
			}
			
			$data['title'] = 'Create Category';
			$this->form_validation->set_rules('name', 'Name', 'required');

			if($this->form_validation->run() === FALSE){
				$this->load->view('templates/header');
				$this->load->view('categories/create', $data);
				$this->load->view('templates/footer');
			}else{
				$this->Category_Model->create_category();

				//Set Message
				$this->session->set_flashdata('category_created', 'Your category has been created.');
				redirect('categories/create');
			}
		}

		public function index()
		{
			$data['title'] = 'Categories';

			$data['categories'] = $this->Category_Model->get_categories();

			$this->load->view('templates/header');
			$this->load->view('categories/index', $data);
			$this->load->view('templates/footer');
		}

		public function view($id = NULL)
		{
			$data['categories'] = $this->Category_Model->get_categories($id);
			if (empty($data['categories'])) {
				show_404();
			}
			$data['title'] = $data['categories']['title'];

			$this->load->view('templates/header');
			$this->load->view('categories/view', $data);
			$this->load->view('templates/footer');
		}

		public function posts($id){
			$data['title'] = $this->Category_Model->get_category($id)->name;

			$data['posts'] = $this->Post_Model->get_posts_by_category($id);

			$this->load->view('templates/header');
			$this->load->view('posts/index', $data);
			$this->load->view('templates/footer');
		}

		public function delete($id)
		{
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('users/login');
			}

			$this->Category_Model->delete_category($id);

			//Set Message
			$this->session->set_flashdata('category_deleted', 'Your category has been deleted.');
			redirect('categories');
		}
	}