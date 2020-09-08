<?php 
    $start_time = microtime(true);
    $X = $_GET['X'];
    $Y = $_GET['Y'];
    $R = $_GET['R'];
    $optionsY = array('options' => array('min_range' => -5,'max_range' => 3,));

    if (filter_var($X, FILTER_VALIDATE_FLOAT) !== false and
        filter_var($Y, FILTER_VALIDATE_INT, $optionsY) !== false and
        filter_var($R, FILTER_VALIDATE_FLOAT) !== false and 
        $X >= -5 and $X <= 3){
            if ($X >= -$R and $X <=0 and $Y <= $R/2 and $Y >=0 ) {
                $hit = true;
            }
            else if ($X * (-2) - $R <= $Y and $Y <= 0 and $X <= 0) {
                $hit = true;
            }
            else if($X>=0  and $Y <= 0 and ($X**2 + $Y**2 <= $R**2)) {
                $hit = true;
            }
            else {
                $hit = false;
            }
            
            $date_time = date('Y-m-d H:i:s');
        	$answer_time = microtime(true) - $start_time; 
        	
        	$dResponse = "{\"X\": \"$X\", \"Y\":$Y, \"R\":$R,\"hit\": ";
        	$dResponse .= $hit ? 'true': 'false';
        	$dResponse .= ",\"date_time\": \"$date_time\", \"answer_time\": \"$answer_time\"}";
            
        	if (isset($_COOKIE["data"]))   
        	{   
        	    $dResponse=($_COOKIE["data"] . "," . $dResponse);
        	}	
        
        	header('Set-Cookie: data='.$dResponse."; path=/; domain:se.ifmo.ru samesite=lax");
        	echo true;
    } else {
	    echo false;
    }
 ?>