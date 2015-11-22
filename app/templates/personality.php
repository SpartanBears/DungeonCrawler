<?php
class personality
{
	
	public $feeling ;
	public $intuition;
	public $senses ;
	public $thinking ;
	
	
    function __construct()
    {
        $feeling = mt_rand(0,1);
		$intuition = mt_rand(0,1);
		$senses = mt_rand(0,1);
		$thinking = mt_rand(0,1);
    }
	
	function ask($response){
		
	
	}
}
?>