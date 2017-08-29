<?php
class Comment_Model extends CI_Model
{
	
	function __construct()
	{
		$this->load->database();
	}

	public function create_comment($post_id){
			$data = array(
				'username' => $this->input->post('name'),
			    'email' => $this->input->post('email'),
			    'comment' => $this->input->post('comment'),
			    'post_id' => $post_id
			    );
			return $this->db->insert('comments', $data);
	}

	public function get_comments($post_id){
		$query = $this->db->get_where('comments', array('post_id' => $post_id));
		return $query->result_array();
	}
}