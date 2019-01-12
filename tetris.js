'use strict';

var j = 0;
var i = 0;
var figure = 0;
var rotated = false;
var a;
var stopped = false;

/*
* Обнуление переменных, интервала и создание новой фигуры в верхней части стакана
*/
function resetFigure() {
	
	clearInterval(a);
	j = 0;
	i = 0;
	figure = 0;
	rotated = false;
	stopped = false;
	makeFigure(j,i);
	a = setInterval( down, 700);
}

/*
* объявление интервала, создание фигуры в верхней части стакана, активация и деактивация кнопок
*/
function start() {
	
	a = setInterval( down, 700);
	makeFigure(j,i);
	($('.start')).attr('disabled', 'disabled');
	($('.restart')).attr('disabled', false);
	($('.pause')).attr('disabled', false );
	
}

/*
* Обнуление стакана, активация и деактивация кнопок, создание фигуры с объявлением интервала
*/
function restart() {
	
	($('.restart')).attr('disabled', 'disabled');
	var smallField = $('.smallField');
	smallField.remove();
	fillTheCup();
	($('.start')).attr('disabled', 'disabled');
	($('.restart')).attr('disabled', false);
	($('.pause')).attr('disabled', false );
	resetFigure();
	
}

/*
* если фигура не движется - начать движение, если движется - остановить
*/
function pause() {
	
	($('.pause')).attr('disabled', 'disabled');
	if ( stopped === false ) {
		
		clearInterval(a);
		stopped = true;
	
	} else {
		
		a = setInterval( down, 700);
		stopped = false;
	}
	
	($('.pause')).attr('disabled', false);
}

/*
* создание СЛУЧАЙНОЙ фигуры в верхней части стакана, если верх не забит
*/
function makeFigure(j,i)	{
	
	if (((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
		((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
		((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
		((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
		((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
		(($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )	{
	
		switch ( getRandom(1,7) ) {
		
			case 1:
			
				makeQuad(j,i);
				break;
				
			case 2:
			
				makeLine(j,i);
				break;
				
			case 3:
			
				makeTFirst(j,i);
				break;
			
			case 4:
			
				makeGFirst(j,i);
				break;
				
			case 5:
			
				makeGFirstRev(j,i);
				break;
				
			case 6:
				
				makeZ(j,i);
				break;
				
			case 7:
				
				makeZRev(j,i);
				break;
		}
	} else {
		
		alert('Игра окончена!');
	}
}

/*
* Функция получения случайного целого числа
*/
function getRandom( min, max ) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

/*
* Заполнение стакана ячейками
*/
function fillTheCup() {
		
	for ( var i = 0 ; i < 20 ; i++ ) {
		
		var j = 0;
		var field = $('.field');
		field.append($('<div class="smallField" style="background-color: ;" row = ' + i + ' column = ' + j + ' ></div>'));
	
		for ( j = 0 ; j < 9 ; j++ ) {
			
			field.append($('<div class="smallField" style="background-color: ;" row = ' + i + ' column = '+ (j+1) +' ></div>'));
		}
	}
}

/*
* создание квадрата в верхней части стакана
*/
function makeQuad(j,i) {
	
	figure = 1;
	
	($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание линии в верхней части стакана
*/
function makeLine(j,i) {
	
	figure = 2;
		
	($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание "т"-образной фигуры в верхней части стакана
*/
function makeTFirst(j,i) {
	
	figure = 3;
	
	($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание повёрнутой 1 раз "т"-образной фигуры в верхней части стакана
*/
function makeTSecond(j,i) {
	
	figure = 4;
	
	($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание повёрнутой 2 раза "т"-образной фигуры в верхней части стакана
*/
function makeTThird(j,i) {
	
	figure = 5;
	
	($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание повёрнутой 3 раза "т"-образной фигуры в верхней части стакана
*/
function makeTFourth(j,i) {
	
	figure = 6;
	
	($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание "Г"-образной фигуры в верхней части стакана
*/
function makeGFirst(j,i) {
	
	figure = 7;
	
	($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание повёрнутой 1 раз "Г"-образной фигуры в верхней части стакана
*/
function makeGSecond(j,i) {
	
	figure = 8;
	
	($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + j + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание повёрнутой 2 раза "Г"-образной фигуры в верхней части стакана
*/
function makeGThird(j,i) {
	
	figure = 9;
	
	($('[row = "' + j + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание повёрнутой 3 раза "Г"-образной фигуры в верхней части стакана
*/
function makeGFourth(j,i) {
	
	figure = 10;
	
	($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание зеркальной "Г"-образной фигуры в верхней части стакана
*/
function makeGFirstRev(j,i) {
	
	figure = 11;
	
	($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание повёрнутой 1 раз зеркальной "Г"-образной фигуры в верхней части стакана
*/
function makeGSecondRev(j,i) {
	
	figure = 12;
	
	($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание повёрнутой 2 раза зеркальной "Г"-образной фигуры в верхней части стакана
*/
function makeGThirdRev(j,i) {
	
	figure = 13;
	
	($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание повёрнутой 3 раза зеркальной "Г"-образной фигуры в верхней части стакана
*/
function makeGFourthRev(j,i) {
	
	figure = 14;
	
	($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание "Z"-образной фигуры в верхней части стакана
*/
function makeZ(j,i) {
	
	figure = 15;
	
	($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* создание зеркальной "Z"-образной фигуры в верхней части стакана
*/
function makeZRev(j,i) {
	
	figure = 16;
	
	($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
	($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
	
}

/*
* движение фигуры вниз, в соответствии с тем, какая фигура перемещается
*/
function down() {
	// квадрат
	if ( figure === 1 ) { 
		
		if (((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ))	{
			
			j++;
				
			($('[row = "' + (j-1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j-1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			
			makeQuad(j,i)
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// линия
	if ( figure === 2 ) {
		// если она вертикальная
		if ( rotated === false ) {
			
			if (((($('[row = "' + (j+4) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+4) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ))	{
				
				j++;
				
				($('[row = "' + (j-1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				
				makeLine(j,i)
				
			} else {
				
				checkRow(j);
				resetFigure();
				
			}
		// если горизонтальная
		} else {
			
			if (((($('[row = "' + (j+3) + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+3) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ))	{
					
				j++;
					
				($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				
				($('[row = "' + (j+2) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );	
				
			} else {
				
				checkRow(j);
				resetFigure();
				
			}
		}
	}
	// "т"-образная
	if ( figure === 3 ) {
		
		if (((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ))	{
			
			j++;
			
			($('[row = "' + (j) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j-1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			
			makeTFirst(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// "т"-образная повёрнутая 1 раз
	if ( figure === 4 ) {
	
		if (((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) && 
			((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ))	{
			
			j++;
			
			($('[row = "' + (j-1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
						
			makeTSecond(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// "т"-образная повёрнутая 2 раза
	if ( figure === 5 ) {
	
		if (((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) && 
			((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			j++;
			
			($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
						
			makeTThird(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// "т"-образная повёрнутая 3 раза
	if ( figure === 6 ) {
	
		if (((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) && 
			((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			j++;
			
			($('[row = "' + (j-1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
									
			makeTFourth(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// "Г"-образная
	if ( figure === 7 ) {
	
		if (((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) && 
			((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			j++;
			
			($('[row = "' + (j-1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j-1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
									
			makeGFirst(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// "Г"-образная повёрнутая 1 раз
	if ( figure === 8 ) {
	
		if (((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			j++;
			
			($('[row = "' + (j-1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j-1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j-1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
									
			makeGSecond(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// "Г"-образная повёрнутая 2 раза
	if ( figure === 9 ) {
	
		if (((($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+3) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+3) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			j++;
			
			($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j-1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
												
			makeGThird(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// "Г"-образная повёрнутая 3 раза
	if ( figure === 10 ) {
	
		if (((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+3) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			j++;
			
			($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
												
			makeGFourth(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// зеркальная // "Г"-образная
	if ( figure === 11 ) {
	
		if (((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			j++;
			
			($('[row = "' + (j-1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j-1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
															
			makeGFirstRev(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// зеркальная "Г"-образная повёрнутая 1 раз
	if ( figure === 12 ) {
	
		if (((($('[row = "' + (j+3) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			j++;
			
			($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
															
			makeGSecondRev(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// // зеркальная "Г"-образная повёрнутая 2 раза
	if ( figure === 13 ) {
	
		if (((($('[row = "' + (j+3) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			j++;
			
			($('[row = "' + (j-1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
																		
			makeGThirdRev(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// зеркальная "Г"-образная повёрнутая 3 раза
	if ( figure === 14 ) {
	
		if (((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			j++;
			
			($('[row = "' + (j-1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j-1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j-1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
																		
			makeGFourthRev(j,i);
			
		} else {
			
			checkRow(j);
			resetFigure();
			
		}
	}
	// "Z"-образная
	if ( figure === 15 ) {
		// если оригинальная
		if ( rotated === false ) {
	
			if (((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )) {
				
				j++;
				
				($('[row = "' + (j-1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				
				makeZ(j,i);
				
			} else {
				
				checkRow(j);
				resetFigure();
				
			}
		// если повёрнутая
		} else {
			
			if (((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			
			j++;
			
			($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
			($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
			($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
			
			} else {
				
				checkRow(j);
				resetFigure();
				
			}
			
		}
		
	}
	// зеркальная "Z"-образная
	if ( figure === 16 ) {
		// если оригинальная
		if ( rotated === false ) {
	
			if (((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )) {
				
				j++;
				
				($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j-1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				
				makeZRev(j,i);
				
			} else {
				
				checkRow(j);
				resetFigure();
				
			}
		// если повёрнутая
		} else {
			
			if (((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' )) {
			
			($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
			
			j++;
			
			($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
			($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
			($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , 'red' );
			
			} else {
				
				checkRow(j);
				resetFigure();
			}
		}
	}
}

/*
* движение фигур вправо, аналогично с движением фигур вниз
*/
function right() {
	
	if ( figure === 1 ) {
		
		if (((($('[row = "' + (j) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ))	{
			
			i++;
			
			($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			
			makeQuad(j,i)
		}
	}
	
	if ( figure === 2 ) {
		
		if ( rotated === false ) {
				
			if (((($('[row = "' + (j) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ))	{
					
				i++;
		
				($('[row = "' + (j) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+3) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				
				makeLine(j,i);
				
			}
			
		} else {
			
			if (((($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ))	{

				i++;
				
				($('[row = "' + (j+2) + '"][column = "' + (i+1) + '"]')).css( 'backgroundColor' , '' );
				
				($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
			
			}
		}
	}
	
	if ( figure === 3 ) {
		
		if (((($('[row = "' + (j) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ))	{
		
			i++;
			
			($('[row = "' + (j) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
			
			makeTFirst(j,i);
		
		}
	}
	
	if ( figure === 4 ) {
		
		if (((($('[row = "' + (j) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
			(($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )	{
		
			i++;
			
			($('[row = "' + (j) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			
			makeTSecond(j,i);
		
		}
	}
	
	if ( figure === 5 ) {
		
		if (((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
			(($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )	{
		
			i++;
			
			($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
					
			makeTThird(j,i);
		
		}
	}
	
	if ( figure === 6 ) {
		
		if (((($('[row = "' + (j) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
			(($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )	{
		
			i++;
			
			($('[row = "' + (j) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			
			makeTFourth(j,i);
		
		}
	}
	
	if ( figure === 7 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + j + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
			(($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' )	{
		
			i++;
			
			($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			
			makeGFirst(j,i);
		
		}
	}
	
	if ( figure === 8 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+7) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + (i+7) + '"]')).attr('style')) !== undefined ) &&
			(($('[row = "' + (j+1) + '"][column = "' + (i+7) + '"]')).attr('style')) !== 'background-color: red;' )	{
		
			i++;
			
			($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
					
			makeGSecond(j,i);
		
		}
	}
	
	if ( figure === 9 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+7) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+7) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+7) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+7) + '"]')).attr('style')) !== 'background-color: red;' ))	{
			
			i++;
			
			($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
					
			makeGThird(j,i);
		
		}
	}
	
	if ( figure === 10 ) {
		
		if (((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+7) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+7) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i++;
			
			($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
							
			makeGFourth(j,i);
		
		}
	}
	
	if ( figure === 11 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i++;
			
			($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
							
			makeGFirstRev(j,i);
		
		}
	}
	
	if ( figure === 12 ) {
		
		if (((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i++;
			
			($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
										
			makeGSecondRev(j,i);
		
		}
	}
	
	if ( figure === 13 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i++;
			
			($('[row = "' + j + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
							
			makeGThirdRev(j,i);
		
		}
	}
	
	if ( figure === 14 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i++;
			
			($('[row = "' + j + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
										
			makeGFourthRev(j,i);
		
		}
	}
	
	if ( figure === 15 ) {
		
		if ( rotated === false ) {
		
			if (((($('[row = "' + j + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ))	{
			
				i++;
				
				($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
											
				makeZ(j,i);
			
			}
			
		} else {
			
			if (((($('[row = "' + j + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + j + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ))	{
			
				i++;
				
				($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
								
				($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
											
			}
			
		}
		
	}
	
	if ( figure === 16 ) {
		
		if ( rotated === false ) {
		
			if (((($('[row = "' + j + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ))	{
			
				i++;
				
				($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
											
				makeZRev(j,i);
			
			}
			
		} else {
			
			if (((($('[row = "' + j + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+7) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+7) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
				i++;
				
				($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				
				($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , 'red' );
				
			}
			
		}
		
	}
	
}

/*
* движение фигур влево, аналогично с движением фигур вниз
*/
function left() {
	
	if ( figure === 1 ) {
		
		if (((($('[row = "' + (j) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ))	{
		
			i--;
			
			($('[row = "' + j + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
			
			makeQuad(j,i)
		}
	}
	
	if ( figure === 2 ) {
		
		if ( rotated === false ) {
		
			if (((($('[row = "' + (j) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+3) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+3) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ))	{
					
				i--;

				($('[row = "' + (j) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+3) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				
				makeLine(j,i);

			}
			
		} else {
			
			if (((($('[row = "' + (j+2) + '"][column = "' + (i+1) + '"]')).attr('style')) !== 'background-color: red;' ) && 
				((($('[row = "' + (j+2) + '"][column = "' + (i+1) + '"]')).attr('style')) !== undefined ))	{

				i--;
				
				($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
				
				($('[row = "' + (j+2) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , 'red' );
			
			}
		}
	}	
	
	if ( figure === 3 ) {
		
		if (((($('[row = "' + (j) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).attr('style')) !== undefined ))	{
		
			i--;
			
			($('[row = "' + (j) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
			
			makeTFirst(j,i);
		
		}
	}

	if ( figure === 4 ) {
		
		if (((($('[row = "' + (j) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ))	{
		
			i--;
			
			($('[row = "' + (j) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			
			makeTSecond(j,i);
		
		}
	}	

	if ( figure === 5 ) {
		
		if (((($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).attr('style')) !== undefined ) &&
			(($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' )	{
		
			i--;
			
			($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
					
			makeTThird(j,i);
		
		}
	}
	
	if ( figure === 6 ) {
		
		if (((($('[row = "' + (j) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).attr('style')) !== undefined ) &&
			(($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' )	{
		
			i--;
			
			($('[row = "' + (j) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			
			makeTFourth(j,i);
		
		}
	}
	
	if ( figure === 7 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) && 
			((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
			(($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' )	{
		
			i--;
			
			($('[row = "' + j + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			
			makeGFirst(j,i);
		
		}
	}
	
	if ( figure === 8 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i--;
			
			($('[row = "' + j + '"][column = "' + (i+7) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+7) + '"]')).css( 'backgroundColor' , '' );
						
			makeGSecond(j,i);
		
		}
	}
	
	if ( figure === 9 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i--;
			
			($('[row = "' + j + '"][column = "' + (i+7) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+7) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+7) + '"]')).css( 'backgroundColor' , '' );
						
			makeGThird(j,i);
		
		}
	}
	
	if ( figure === 10 ) {
		
		if (((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i--;
			
			($('[row = "' + (j+2) + '"][column = "' + (i+7) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
								
			makeGFourth(j,i);
		
		}
	}	

	if ( figure === 11 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i--;
			
			($('[row = "' + j + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
								
			makeGFirstRev(j,i);
		
		}
	}
	
	if ( figure === 12 ) {
		
		if (((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+2) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i--;
			
			($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
											
			makeGSecondRev(j,i);
		
		}
	}
	
	if ( figure === 13 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + (i+2) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+2) + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i--;
			
			($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
								
			makeGThirdRev(j,i);
		
		}
	}
	
	if ( figure === 14 ) {
		
		if (((($('[row = "' + j + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).attr('style')) !== undefined ) &&
			((($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
			i--;
			
			($('[row = "' + j + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
			($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
											
			makeGFourthRev(j,i);
		
		}
	}
	
	if ( figure === 15 ) {
		
		if ( rotated === false ) {
		
			if (((($('[row = "' + j + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ))	{
			
				i--;
				
				($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
											
				makeZ(j,i);
			
			}
			
		} else {
			
			if (((($('[row = "' + j + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ))	{
			
				i--;
				
				($('[row = "' + j + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				
				($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
				
			}
		}
	}
	
	if ( figure === 16 ) {
		
		if ( rotated === false ) {
		
			if (((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ))	{
			
				i--;
				
				($('[row = "' + j + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				
				makeZRev(j,i);
			
			}
			
		} else {
			
			if (((($('[row = "' + j + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + j + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ))	{
			
				i--;
				
				($('[row = "' + j + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+7) + '"]')).css( 'backgroundColor' , '' );
				
				($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
				
			}
		}
	}
}

/*
* Ротация фигур по часовой стрелке, если это возможно
* Частные случаи для фигур, у которых только 2 положения
* switch-конструкция для остальных
*/
function rotate() {
	
	if ( figure === 2) {
		
		if ( rotated === false ) {	// вертикальная
		
			if (((($('[row = "' + (j+2) + '"][column = "' + (i+2) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+2) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ))	{
		
				($('[row = "' + (j+2) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );		
				
				($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				
				rotated = true;
			
			}
		
		} else {	// горизонтальная
				
			if (((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+3) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ))	{
			
				makeLine(j,i);
				
				($('[row = "' + (j+2) + '"][column = "' + (i+2) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				
				rotated = false;
				
			}
		}
	}
	
	if ( figure === 15) {
		
		if ( rotated === false ) {	// вертикальная
		
			if (((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + j + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + j + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ))	{
	
				($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );		
				
				($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
						
				rotated = true;
				
			}
			
		} else {	// горизонтальная
			
			if (((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ))	{
			
				makeZ(j,i);
				
				($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
								
				rotated = false;
				
			}
		}
	}
	
	if ( figure === 16) {
		
		if ( rotated === false ) {	// вертикальная
	
			if (((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ))	{
	
				($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , 'red' );
				($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , 'red' );
				
				($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
						
				rotated = true;
			}
			
		} else {	// горизонтальная
			
			if (((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ))	{
			
				makeZRev(j,i);
				
				($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
								
				rotated = false;
				
			}
		}
	}
	
	switch (figure) {
		
		case 3:
		
			if (((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined )) {
					
				($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				
				makeTSecond(j,i);
								
			}
			
			break;
				
		case 4:
		
			if (((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined )) {
			
				($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				
				makeTThird(j,i);
								
			}
			
			break;
		
		case 5:
		
			if (((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined )) {
					
				($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
			
				makeTFourth(j,i);
								
			}
				
				break;
				
		case 6:
		
			if (((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined )) {
		
				($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
							
				makeTFirst(j,i);
				
			}
			
			break;
			
		case 7:
		
			if (((($('[row = "' + j + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + j + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined )) {
					
				($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				
				makeGSecond(j,i);
			}
			
			break;
			
		case 8:
					
			if (((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).attr('style')) !== undefined )) {
					
				($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
							
				makeGThird(j,i);
				
			}
				
			break;
			
		case 9:
		
			if (((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined )) {
					
					
				($('[row = "' + j + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
							
				makeGFourth(j,i);
			
			}
			
			break;
			
		case 10:
		
			if (((($('[row = "' + j + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + j + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined )) {
						
				($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+6) + '"]')).css( 'backgroundColor' , '' );
							
				makeGFirst(j,i);
				
			}
				
			break;
			
		case 11:
					
			if (((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined )) {
					
				($('[row = "' + j + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + j + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
				
				makeGSecondRev(j,i);
				
			}
				
			break;
			
		case 12:
		
			if (((($('[row = "' + j + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + j + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).attr('style')) !== undefined )) {
		
				($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).css( 'backgroundColor' , '' );
							
				makeGThirdRev(j,i);
				
			}
				
			break;
			
		case 13:
		
			if (((($('[row = "' + j + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + j + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + j + '"][column = "' + (i+4) + '"]')).attr('style')) !== undefined )) {
		
				($('[row = "' + (j+2) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+2) + '"][column = "' + (i+4) + '"]')).css( 'backgroundColor' , '' );
							
				makeGFourthRev(j,i);
				
			}
				
			break;
			
		case 14:
		
			if (((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+1) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== 'background-color: red;' ) &&
				((($('[row = "' + (j+2) + '"][column = "' + (i+5) + '"]')).attr('style')) !== undefined )) {
		
				($('[row = "' + j + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
				($('[row = "' + (j+1) + '"][column = "' + (i+3) + '"]')).css( 'backgroundColor' , '' );
							
				makeGFirstRev(j,i);
				
			}
				
			break;
	}
}

/*
* привязка функций движения и ротации на клавиши клавиатуры
*/
document.onkeydown = function move(event)	{
	
	var keycode;
	
	if (!event) {
		
		var event = window.event;
		
	}	else if (event.which) {
		
		keycode = event.which; }
		
	switch ( keycode ) {
		
		case 32:
		
			clearInterval(a);
			a = setInterval( down, 20 );
			break;
		
		case 37:
		
			left();
			break;
			
		case 38:
		
			rotate();
			break;
			
		case 39:
		
			right();
			break;
			
		case 40:
		
			down();
			break;
		
	}
}

/*
* проверка на полностью закрытую линию
*/
function checkRow(j) {
	
	var counter = 0;

	if (((($('[row = "' + j + '"][column = "' + 0 + '"]')).attr('style')) === 'background-color: red;' ) && 
		((($('[row = "' + j + '"][column = "' + 1 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + j + '"][column = "' + 2 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + j + '"][column = "' + 3 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + j + '"][column = "' + 4 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + j + '"][column = "' + 5 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + j + '"][column = "' + 6 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + j + '"][column = "' + 7 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + j + '"][column = "' + 8 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + j + '"][column = "' + 9 + '"]')).attr('style')) === 'background-color: red;' )) {
counter++;
		for ( var i = 0; i < 10; i++ ) {
			($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , '' );
		}
	}

	if (((($('[row = "' + (j+1) + '"][column = "' + 0 + '"]')).attr('style')) === 'background-color: red;' ) && 
		((($('[row = "' + (j+1) + '"][column = "' + 1 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+1) + '"][column = "' + 2 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+1) + '"][column = "' + 3 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+1) + '"][column = "' + 4 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+1) + '"][column = "' + 5 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+1) + '"][column = "' + 6 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+1) + '"][column = "' + 7 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+1) + '"][column = "' + 8 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+1) + '"][column = "' + 9 + '"]')).attr('style')) === 'background-color: red;' )) {
counter++;
		for ( var i = 0; i < 10; i++ ) {
			($('[row = "' + (j+1) + '"][column = "' + i + '"]')).css( 'backgroundColor' , '' );
		}
	}
	
	if (((($('[row = "' + (j+2) + '"][column = "' + 0 + '"]')).attr('style')) === 'background-color: red;' ) && 
		((($('[row = "' + (j+2) + '"][column = "' + 1 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+2) + '"][column = "' + 2 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+2) + '"][column = "' + 3 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+2) + '"][column = "' + 4 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+2) + '"][column = "' + 5 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+2) + '"][column = "' + 6 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+2) + '"][column = "' + 7 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+2) + '"][column = "' + 8 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+2) + '"][column = "' + 9 + '"]')).attr('style')) === 'background-color: red;' )) {
counter++;
		for ( var i = 0; i < 10; i++ ) {
			($('[row = "' + (j+2) + '"][column = "' + i + '"]')).css( 'backgroundColor' , '' );
		}
	}
	
	if (((($('[row = "' + (j+3) + '"][column = "' + 0 + '"]')).attr('style')) === 'background-color: red;' ) && 
		((($('[row = "' + (j+3) + '"][column = "' + 1 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+3) + '"][column = "' + 2 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+3) + '"][column = "' + 3 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+3) + '"][column = "' + 4 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+3) + '"][column = "' + 5 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+3) + '"][column = "' + 6 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+3) + '"][column = "' + 7 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+3) + '"][column = "' + 8 + '"]')).attr('style')) === 'background-color: red;' ) &&
		((($('[row = "' + (j+3) + '"][column = "' + 9 + '"]')).attr('style')) === 'background-color: red;' )) {
counter++;
		for ( var i = 0; i < 10; i++ ) {
			($('[row = "' + (j+3) + '"][column = "' + i + '"]')).css( 'backgroundColor' , '' );
		}
	}
	
	if ( counter > 0 ) { lineDown(counter); };
}

function lineDown(x) {

	switch (x) {
		case 1:
			for ( var j = 19 ; j >= 2 ; j-- ) {
				for (var  i = 0 ; i < 10 ; i++ ) {
					
					if (($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') === 'background-color: red;' ) {
			
						($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , 'red' );
					}

					if (((($('[row = "' + (j-1) + '"][column = "' + 0 + '"]')).attr('style')) === 'background-color: red;' ) || 
						((($('[row = "' + (j-1) + '"][column = "' + 1 + '"]')).attr('style')) === 'background-color: red;' ) ||
						((($('[row = "' + (j-1) + '"][column = "' + 2 + '"]')).attr('style')) === 'background-color: red;' ) ||
						((($('[row = "' + (j-1) + '"][column = "' + 3 + '"]')).attr('style')) === 'background-color: red;' ) ||
						((($('[row = "' + (j-1) + '"][column = "' + 4 + '"]')).attr('style')) === 'background-color: red;' ) ||
						((($('[row = "' + (j-1) + '"][column = "' + 5 + '"]')).attr('style')) === 'background-color: red;' ) ||
						((($('[row = "' + (j-1) + '"][column = "' + 6 + '"]')).attr('style')) === 'background-color: red;' ) ||
						((($('[row = "' + (j-1) + '"][column = "' + 7 + '"]')).attr('style')) === 'background-color: red;' ) ||
						((($('[row = "' + (j-1) + '"][column = "' + 8 + '"]')).attr('style')) === 'background-color: red;' ) ||
						((($('[row = "' + (j-1) + '"][column = "' + 9 + '"]')).attr('style')) === 'background-color: red;' )) {
							
						if (($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') !== 'background-color: red;' ) {
								
							($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , '' );
						}
					}
				}
			}
		break;
	
		case 2:
			for ( var a = 0; a < 2; a++ ) {
				for ( var j = 19 ; j >= 2 ; j-- ) {
					for (var  i = 0 ; i < 10 ; i++ ) {
						
						if (($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') === 'background-color: red;' ) {
				
							($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , 'red' );
						}
						
						if (((($('[row = "' + (j-1) + '"][column = "' + 0 + '"]')).attr('style')) === 'background-color: red;' ) || 
							((($('[row = "' + (j-1) + '"][column = "' + 1 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 2 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 3 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 4 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 5 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 6 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 7 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 8 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 9 + '"]')).attr('style')) === 'background-color: red;' )) {
								
							if (($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') !== 'background-color: red;' ) {
									
								($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , '' );
							}
						}
					}
				}
			}
		break;
	
		case 3:
			for ( var a = 0; a < 3; a++ ) {
				for ( var j = 19 ; j >= 2 ; j-- ) {
					for (var  i = 0 ; i < 10 ; i++ ) {
						
						if (($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') === 'background-color: red;' ) {
				
							($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , 'red' );
						}
						
						if (((($('[row = "' + (j-1) + '"][column = "' + 0 + '"]')).attr('style')) === 'background-color: red;' ) || 
							((($('[row = "' + (j-1) + '"][column = "' + 1 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 2 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 3 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 4 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 5 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 6 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 7 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 8 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 9 + '"]')).attr('style')) === 'background-color: red;' )) {
						
							if (($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') !== 'background-color: red;' ) {
									
								($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , '' );
							}
						}
					}
				}
			}
		break;
		
		case 4:
			for ( var a = 0; a < 4; a++ ) {
				for ( var j = 19 ; j >= 2 ; j-- ) {
					for (var  i = 0 ; i < 10 ; i++ ) {
						
						if (($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') === 'background-color: red;' ) {
				
							($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , 'red' );
						}
						
						if (((($('[row = "' + (j-1) + '"][column = "' + 0 + '"]')).attr('style')) === 'background-color: red;' ) || 
							((($('[row = "' + (j-1) + '"][column = "' + 1 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 2 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 3 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 4 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 5 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 6 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 7 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 8 + '"]')).attr('style')) === 'background-color: red;' ) ||
							((($('[row = "' + (j-1) + '"][column = "' + 9 + '"]')).attr('style')) === 'background-color: red;' )) {
								
							if (($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') !== 'background-color: red;' ) {
									
								($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , '' );
							}
						}
					}
				}
			}
		break;
	}
}

/*function checkRow2() {			ЧЕРНОВИК
	
	for ( var j = 19; j >= 2; j-- ) {
	
		if (((($('[row = "' + j + '"][column = "' + 0 + '"]')).attr('style')) === 'background-color: red;' ) && 
			((($('[row = "' + j + '"][column = "' + 1 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 2 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 3 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 4 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 5 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 6 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 7 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 8 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 9 + '"]')).attr('style')) === 'background-color: red;' )) {
				
				for ( var i = 0; i <= 9; i++ ) {
					
					if (($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') === 'background-color: red;' ) {
			
						($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , 'red' );
					
					}
					
					if ((($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') === 'background-color: ;' ) ||
						(($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') === "" ) ||
						(($('[row = "' + (j-1) + '"][column = "' + i + '"]')).attr('style') === undefined )) {
						
						($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , '' );
					}
					
				}
			
		}
	}
}*/

/*function checkRow() {
	var counter = 0;
	for ( var j = 19; j >= 2; j-- ) {
		if ( counter === 4 ) { break; };
		if (((($('[row = "' + j + '"][column = "' + 0 + '"]')).attr('style')) === 'background-color: red;' ) && 
			((($('[row = "' + j + '"][column = "' + 1 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 2 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 3 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 4 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 5 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 6 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 7 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 8 + '"]')).attr('style')) === 'background-color: red;' ) &&
			((($('[row = "' + j + '"][column = "' + 9 + '"]')).attr('style')) === 'background-color: red;' )) {
			
			counter++;
			for ( var i = 0; i < 10; i++ ) {
			($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , '' );
			}
		}
	}
	if ( counter > 0 ) {
		for ( var j = 19; j >= 2; j-- ) {
		
				for ( var i = 0; i <= 9; i++ ) {
					var k = j;
					
					if (((($('[row = "' + (j-1) + '"][column = "' + 0 + '"]')).attr('style')) !== 'background-color: red;' ) && 
						((($('[row = "' + (j-1) + '"][column = "' + 1 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-1) + '"][column = "' + 2 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-1) + '"][column = "' + 3 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-1) + '"][column = "' + 4 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-1) + '"][column = "' + 5 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-1) + '"][column = "' + 6 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-1) + '"][column = "' + 7 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-1) + '"][column = "' + 8 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-1) + '"][column = "' + 9 + '"]')).attr('style')) !== 'background-color: red;' )) {
							
							k--;
					}
					
					if (((($('[row = "' + (j-2) + '"][column = "' + 0 + '"]')).attr('style')) !== 'background-color: red;' ) && 
						((($('[row = "' + (j-2) + '"][column = "' + 1 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-2) + '"][column = "' + 2 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-2) + '"][column = "' + 3 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-2) + '"][column = "' + 4 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-2) + '"][column = "' + 5 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-2) + '"][column = "' + 6 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-2) + '"][column = "' + 7 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-2) + '"][column = "' + 8 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-2) + '"][column = "' + 9 + '"]')).attr('style')) !== 'background-color: red;' )) {
							
							k--;
					}
					
					if (((($('[row = "' + (j-3) + '"][column = "' + 0 + '"]')).attr('style')) !== 'background-color: red;' ) && 
						((($('[row = "' + (j-3) + '"][column = "' + 1 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-3) + '"][column = "' + 2 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-3) + '"][column = "' + 3 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-3) + '"][column = "' + 4 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-3) + '"][column = "' + 5 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-3) + '"][column = "' + 6 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-3) + '"][column = "' + 7 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-3) + '"][column = "' + 8 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-3) + '"][column = "' + 9 + '"]')).attr('style')) !== 'background-color: red;' )) {
							
							k--;
					}
					
					if (((($('[row = "' + (j-4) + '"][column = "' + 0 + '"]')).attr('style')) !== 'background-color: red;' ) && 
						((($('[row = "' + (j-4) + '"][column = "' + 1 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-4) + '"][column = "' + 2 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-4) + '"][column = "' + 3 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-4) + '"][column = "' + 4 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-4) + '"][column = "' + 5 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-4) + '"][column = "' + 6 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-4) + '"][column = "' + 7 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-4) + '"][column = "' + 8 + '"]')).attr('style')) !== 'background-color: red;' ) &&
						((($('[row = "' + (j-4) + '"][column = "' + 9 + '"]')).attr('style')) !== 'background-color: red;' )) {
							
							k--;
					}
					
					if (($('[row = "' + (k-1) + '"][column = "' + i + '"]')).attr('style') === 'background-color: red;' ) {
				
						($('[row = "' + j + '"][column = "' + i + '"]')).css( 'backgroundColor' , 'red' );
					}
					
					if ( i === 9 ) {
						for ( var i = 0; i <= 9; i++ ) {
							($('[row = "' + (k-1) + '"][column = "' + i + '"]')).css( 'backgroundColor' , '' );
					}
				}
			}
		}
	}
}*/