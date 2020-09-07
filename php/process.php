<?php 
    $start_time = microtime();
    $X = $_GET['X'];
    $Y = $_GET['Y'];
    $R = $_GET['R'];
    $hit = false;
    $optionsY = array('options' => array('min_range' => -5,'max_range' => 3,));

    if (filter_var($X, FILTER_VALIDATE_FLOAT) !== false and
        filter_var($Y, FILTER_VALIDATE_INT, $optionsY) !== false and
        filter_var($R, FILTER_VALIDATE_FLOAT) !== false and 
        $X >= -5 and $X <= 3){
            if ($X <= -$R and $Y <= $R/2) {
                $hit = true;
            }else if ($X * (-2) - $R <= $Y) {
                $hit = true;
            }
            // else if() {
                // $hit = true;
            // }
            
            $date_time = date('Y-m-d H:i:s');
        	$end_time = microtime();
        // 	$answer_time = $end_time - $start_time; 
        	
        	$dResponse = "{\"X\": \"$X\", \"Y\":$Y, \"R\":$R,\"hit\": ";
        	$dResponse .= $hit ? 'true': 'false';
        	$dResponse .= ",\"date_time\": \"$date_time\",}";
            
        // 	if (isset($_COOKIE["data"]))   
        // 	{   
        // 	    $dResponse=($_COOKIE["data"] . "," . $dResponse);
        // 	}	
        
        	header('Set-Cookie: data='.$dResponse."; samesite=lax");
        	echo true;
    } else {
	    echo false;
    }
 ?>