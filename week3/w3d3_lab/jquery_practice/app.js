const $body = $("body");

// Top Container

const $topContainer = $("<div>").attr("id", "top-container");

const $bottomContainer = $("<div>").attr("id", "bottom-container");

$body.append($topContainer, $bottomContainer);

$colorsH1 = $('<h1>').text('Trois couleurs: rouge, blanc, et blue');

$topContainer.append($colorsH1);

$rouge = $('<div>').addClass('couleur').addClass('rouge').css('backgroundColor', 'firebrick');
$blanc = $('<div>').addClass('couleur').addClass('blanc').css('backgroundColor', 'ivory');
$blue = $('<div>').addClass('couleur').addClass('blue').css('backgroundColor', 'cornflowerblue');

$topContainer.append($rouge);
$topContainer.append($blanc);
$topContainer.append($blue);

// Bottom Container

$bottomContainer.append($("<h1>").text("Lumpy Space Princess"));
$lumpyContainer = $("<div>").attr("id", "img-container");
$lumpyImage = $('<img>').attr(
	'src',
	'https://th.bing.com/th/id/R.062ccadd5a463d5da45e1bfcf2a164d4?rik=7b19uMofJNoZrQ&riu=http%3a%2f%2fmediamedusa.com%2fwp-content%2fuploads%2flsp_pin.jpg&ehk=YQ%2bqYlcXqRTjqLpkHsBnkB%2bPouCM3kclKiCsAHBzlGQ%3d&risl=&pid=ImgRaw&r=0'
);
$lumpyContainer.append($lumpyImage);
$bottomContainer.append($lumpyContainer);


// Continuing with jQuery

$colorsH1.text("Three colors: red, white, and blue");

$blanc.css("backgroundColor", "black");

$blue.css("backgroundColor", "orange");

$colorsH1.text("Three colors: red, black, and orange");

// Bonus Challenge

$body.append($topContainer)

$lumpyImage.attr(
	'src',
	'https://th.bing.com/th/id/OIP.O7nEvAjEq8_Zu58S0sS8MwHaD4?pid=ImgDet&rs=1'
);

$topContainer.remove();
$bottomContainer.remove();

$body.append($("<p>").text("the ice king waz here"))
