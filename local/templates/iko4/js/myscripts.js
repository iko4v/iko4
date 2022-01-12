$(function () {

	let description = $('.item__preview-text'),
		itemIcon = $('.bookmarks__item_icon'),
		menuRootUl = $('ul.level');

	$(document).on('click', '.contain > a', function(e){
		e.preventDefault();
		$(this).stop().closest('li').find('.level').slideToggle(150).end().parent().toggleClass('current');
		$(this).toggleClass('current');
		$(this).stop().closest('li').toggleClass('current');
	});

	if($('ul.level li > a').hasClass('item-selected')){
		menuRootUl.addClass('current');
		$('.contain > a').addClass('current');
	};

	hljs.highlightAll();

	$(document).on('click', '.bookmarks__item_icon', function(e){
		$(this).stop().closest('.bookmarks__item').find('.item__preview-text').slideToggle(150).toggleClass('closed');
		$(this).toggleClass('closed');
	});

	$(document).on('click', '.description__hide', function () {
		description.slideUp(150).addClass('closed');
		itemIcon.addClass('closed');
	});

	$(document).on('click', '.description__show', function () {
		description.slideDown(150).removeClass('closed');
		itemIcon.removeClass('closed');
	});

});






