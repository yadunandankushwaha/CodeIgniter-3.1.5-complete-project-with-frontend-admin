<?php 
	class Galleries extends CI_Controller{

		public function galleriesLoad()
		{
			$data['title'] = 'Add Galleries';
			$this->load->view('administrator/header-script');
	 	 	$this->load->view('administrator/header');
	  		$this->load->view('administrator/header-bottom');
	   		$this->load->view('administrator/add-galleries', $data);
	  		$this->load->view('administrator/footer');
		}

		public function get_gallery_images()
		{
			$data['galleries'] = $this->Galleries_Model->get_galleries_images();
			
			$data['title'] = 'List galleries Images';

			$this->load->view('administrator/header-script');
	 	 	 $this->load->view('administrator/header');
	  		 $this->load->view('administrator/header-bottom');
	   		 $this->load->view('administrator/galleries', $data);
	  		$this->load->view('administrator/footer');
		}


		public function add_gallery_images($page = 'add-galleries')
		{
			if (!file_exists(APPPATH.'views/administrator/'.$page.'.php')) {
		    show_404();
		   }
			// Check login
			if(!$this->session->userdata('login')) {
				redirect('administrator/index');
			}

			$data['title'] = 'add Galleries Images';

			$this->form_validation->set_rules('name', 'Name', 'required');
			if (empty($_FILES['imgFiles']['name'])){
    		$this->form_validation->set_rules('imgFiles', 'Document', 'required');
			}
			 

			if($this->form_validation->run() === FALSE){
				 $this->load->view('administrator/header-script');
		 	 	 $this->load->view('administrator/header');
		  		 $this->load->view('administrator/header-bottom');
		   		 $this->load->view('administrator/'.$page, $data);
		  		 $this->load->view('administrator/footer');
			}else{

				//$dataID = 1; 
				if (!empty($_FILES['imgFiles']['name'])){ 
				$multipleUpload =  $this->multipleImageUpload($_FILES['imgFiles'],$this->input->post('name'));
				}
				//Set Message
				$this->session->set_flashdata('success', 'images has been Added Successfull.');
				redirect('administrator/galleries');
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

                $uploadPath = './assets/images/galleries/';
                $config['upload_path'] = $uploadPath;
                $config['allowed_types'] = 'gif|jpg|png';
                
                $this->load->library('upload', $config);
                $this->upload->initialize($config);
                if($this->upload->do_upload('userFile')){
                    $fileData = $this->upload->data();
                    $uploadData[$i]['file_name'] = $fileData['file_name'];
                     $uploadData[$i]['name'] = $dataID;
                   /* $uploadData[$i]['created'] = date("Y-m-d H:i:s");
                    $uploadData[$i]['modified'] = date("Y-m-d H:i:s");*/
                }
            }
            
            if(!empty($uploadData)){
                //Insert file information into the database
                $insert = $this->Galleries_Model->insertproductsmultipleImages($uploadData);
                return $insert;
               /* $statusMsg = $insert?'Files uploaded successfully.':'Some problem occurred, please try again.';
                $this->session->set_flashdata('success',$statusMsg);*/
            }
        }
    }


		

	}
	




