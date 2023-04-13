// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == ''|| document.form.choose5.value == '') {
			valid = false;
			return valid;
		}

		$(function()
{
    $("#form").validate(
      {
        rules: 
        {
          item: 
          {
            required: true
          }
        }
      });	
});
		$.ajax({
			type: "POST",
			url: "mailevent.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});



// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popuptest = $('.popuptest');
	if (e.target!=popuptest[0]&&popuptest.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});


// Отправка заявки 
$(document).ready(function() {
	$('#form2').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form2.name.value == '' || document.form2.email.value == '' || document.form2.phone.value == '' || document.form2.message2.value == '' ) {
			valid = false;
			return valid;
		}

		$(function()
{
    $("#form2").validate(
      {
        rules: 
        {
          item: 
          {
            required: true
          }
        }
      });	
});
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$('.msg-popup').fadeOut();
			$(this).find('input').val('');
			$('#form2').trigger('reset');
		});
		return false;
	});
});



// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popuptest = $('.popuptest');
	if (e.target!=popuptest[0]&&popuptest.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});



// Отправка заявки 
$(document).ready(function() {
	$('#form3').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form3.name.value == '' || document.form3.email.value == '' || document.form3.phone.value == '' || document.form3.message2.value == '' ) {
			valid = false;
			return valid;
		}

		$(function()
{
    $("#form3").validate(
      {
        rules: 
        {
          item: 
          {
            required: true
          }
        }
      });	
});
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$('.msg-popup').fadeOut();
			$(this).find('input').val('');
			$('#form2').trigger('reset');
		});
		return false;
	});
});



// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popuptest = $('.popuptest');
	if (e.target!=popuptest[0]&&popuptest.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});










