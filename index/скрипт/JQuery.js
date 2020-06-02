$(document).ready(function () {/*(работа с документом)документ будет выполняться когда будет загружен*/
	$("h2").click(function () {
		$(this).css("background-color", "#D8BFD8");/*this значит обращение к предыдущему селектору то есть h2 мы меняем ему цвет*/
	}) /*действия начнут происходить когда произойдёт клик(нажатие на загаловок номер 2)поменяется после нажатия задний фон*/

	/*код выполняется в зависимости от перемещения по сайту*/
	var waypoint = new Waypoint({
		element: document.getElementById('res-description'),
		handler: function (direction) {
			if (direction == "down") {
				$("nav").attr("id", "sticky-nav")/*добавляется стиль на id*/
			} else {
				$("nav").removeAttr("id");/*удаляется стиль*/
			}
		},
		offset: 60
	});
	$(".butto-order").click(function () {
		$("html, body").animate({ scrollTop: $('#zakaz').offset().top }, 1000);

	});
	/*плавное перемещение по указанной вылке на сайте*/
	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
	var waypoint = new Waypoint({
		element: document.getElementById('res-description'),
		handler: function (direction) {
			$(".anim1").addClass("animated fadeIn");
		},
		offset: 60
	});

})
