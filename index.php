<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>sites-templates</title>
</head>
<body>
	<h1>sites-templates</h1>



<?php

	$arr_dirs = DirFilesR(__DIR__.'/training');
	$repl_url = 'http://';
	// $pattern_url = '|^.*domains\\\|';
	$pattern_url = '|^\w:\\\\.*?\\\|';
	$pattern_index = '|index\.|';
	$pattern_tite_site = '|http://sites-templates/Training/(.*?)/|i';
	$arr_res_tite_site = [];

	foreach ($arr_dirs as $value) {
		if (preg_match_all($pattern_index, $value)) {
			$url = preg_replace($pattern_url, $repl_url, $value);
			preg_match_all($pattern_tite_site, $url, $arr_res_tite_site);
?>
			<a href="<?echo($url);?>"><?echo($arr_res_tite_site[1][0]);?></a>
<?
			echo'<br>';
		}
	}
?>

<?php
function DirFilesR($dir){  
	$handle = opendir($dir) or die("Can't open directory $dir");  
	$files = Array();  
	$subfiles = Array();  
	while (false !== ($file = readdir($handle))) {  
		if ($file != "." && $file != ".."){  
			if(is_dir($dir."/".$file)) {  
				// Получим список файлов  
				// вложенной папки...  
				$subfiles = DirFilesR($dir."/".$file); 
				// ...и добавим их к общему списку  
				$files = array_merge($files,$subfiles);  
			}else{  
				$files[] = $dir."/".$file;  
			}  
		} 

	}  
	closedir($handle);  
	return $files;  
	}
?>






<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>


</body>
</html>