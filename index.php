<?
	
	// Code Protect
	define('ENGINE', true);

	// Определение основных констант 
	// define('DOMAINS', 'http://jdm-trade/');
	define('INCDIR', 'inc/');
	define('TEMPDIR', 'temp/');
	define('ROUTEDIR', 'routes/');
	
	// Запуск сессии пользователя
	session_start();
	
	// Настройка вывода ошибок
	error_reporting(0);

	// PHP info
	// phpinfo();

	// Подключение библиотеки собственых финкций 
	// include 'libs/functions.php';
	
	// Файл конифигурации базы данных
	// require INCDIR.'dbconfig.php';
	
		// Что такое РОУТИНГ в WEB приложениях
		$module = $_GET['module'];
		$title = "";
		
		// Подгрузка роута
		ob_start();
		if($module == 'advantages'){
			include 'routes/advantages.php';
			$title = "Наши преимущества";
		}elseif($module == 'about'){
			include 'routes/about.php';
			$title = "О школе";
		}elseif($module == 'feedback'){
			include 'routes/feedback.php';
			$title = "Отзывы";
		}elseif($module == 'offer'){
			include 'routes/offer.php';
			$title = "Мы предлагаем";
		}else{

            include 'temp/pageWrapper.php';
            $title = "Гимназия имени марзии турлыхановой ";
        }
		$content = ob_get_contents();
		ob_end_clean();
		

	// Подключение шаблона
?>
