<?php
	class Galleries_Model extends CI_Model
	{
		public function __construct()
		{
			$this->load->database();
		}

		public function get_galleries_images(){
			$this->db->order_by('id','desc');
			$query = $this->db->get('galleries');
			return $query->result_array();
		}

		public function insertproductsmultipleImages($data = array()){
       	 $insert = $this->db->insert_batch('galleries',$data);
       	 return $insert?true:false;
    	}


	}