<?php
class Personality
{
	
	var $feeling;
	var $intuition;
	var $thinking;
	var $senses;
	
	// Feeling is Introverted (0) or Extroverted (1)
	// (How do you comunicate with others)
	
	// Intuition is Intuitive (0) or Senser (1)
	// (how do you take the information)
	
	// Thinking is Thinker (0) or Feeler (1)
	// (how do you make desicions)
	
	// Senses are Judger (0) or Perceiver (1)
	// (How do you live your life)
	
	var $responses = array(
		array(
			array(
				array(
					array('0000 or INTJ','Soy un arquitecto: Maestro de la estrategia y la planeacion'),
					array('0001 or INTP','Soy una lógica: Inventora innovadora. Siempre en busqueda del conocimiento.')
				),
				array(
					array('0010 or INFJ','Soy un abogado: callado y mistico, inparto la justicia en forma silenciosa'),
					array('0011 or INFP','Soy una mediadora: idealista, poetica, amable y altruiesta. Siempre busco ayudar en una buena causa')
				)
			),
			array(
				array(
					array('0100 or ISTJ','Soy un logista: Practico y enfocado  en los hechos, mi confiabilidad no puede dudarse'),
					array('0101 or ISTP','Soy un virtuoso: Experimentador audaz, Si tengo las herramientas, puedo crear lo que sea.')
				),
				array(
					array('0110 or ISFJ','Soy una defensora: Protejo a los que amo y me esfuerzo en lo que hago'),
					array('0111 or ISFP','Soy una aventurera: Artista, flexible y encantadora, lista para explorar cosas nuevas')
				)
			)
		),
		array(
			array(
				array(
					array('1000 or ENTJ','Soy una comandante: Lider, imaginativa y de voluntad fuerte: si no encuentro mi camino entonces lo crearé'),
					array('1001 or ENTP','Soy un innovador: Como un "Abogado del diablo" cuestiono las ideas que predominen buscando un reto mental')
				),
				array(
					array('1010 or ENFJ','Soy un protagonista: Lider carismatico e inspirador y de entusiasmo contagioso'),
					array('1011 or ENFP','Soy una activista: Soy un Espiritu libre entusiasta, creativo y sociable. Cambiare el mundo con mis ideas')
				)
			),
			array(
				array(
					array('1100 or ESTJ','Soy una ejecutiva: Administradora excelente, ciudadano modelo, amante de la tradicion y el orden'),
					array('1101 or ESTP','Soy un emprendedor: Inteligente, energico y perceptivo, disfruto mi aventura viviendola al limite')
				),
				array(
					array('1110 or ESFJ','Soy un cónsul: Soy el "popular" de la clase. Soy considerado y siempre busco ayudar'),
					array('1111 or ESFP','Soy una animadora: Espontanea, energica y entusiasta vivo el "hoy" al maximo, aunque soy mala planeando a futuro')
				)
			)
		)
	);
	
    function __construct()
    {
        $this->feeling = ''.mt_rand(0,1);
		$this->intuition = ''.mt_rand(0,1);
		$this->senses = ''.mt_rand(0,1);
		$this->thinking = ''.mt_rand(0,1);
    }
	
	function talk(){
		return $this->responses[$this->feeling][$this->intuition][$this->senses][$this->thinking][1];
	}
}
?>