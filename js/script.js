function myFirstApp(name,age){
	alert("Привет, меня зовут " + name + ". Мне " + age + " . Это моя первая программа!");

	function showSkills(){
		var skills = [" html"," css"," Верстка по PSD макету"]
		for (var i = 0; i < skills.length; i++){
			alert("Я владею навыками:" + skills);
		}
	}
	showSkills();

	function AgeYou(){
		var ageW = prompt("Сколько тебе лет?");
		if (ageW >= 18){
			alert("Ты готов!");
		} else {
			alert("Подрости малыш!");
		}	
  	}
	  AgeYou();

	function calcPow(num){
		alert(num + " + 2 = " + (num+num));
	}
	calcPow(2);
}

myFirstApp( "Александр", 19);