'use strict';

const FirstClass = {
	hello() {
		console.log('Привет я метод родителя!');
	}
};

const SecondClass = { ...FirstClass, hello() { console.log('А я наследуемый метод!'); } };

FirstClass.hello();
SecondClass.hello();
