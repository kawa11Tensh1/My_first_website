var count = 0;
document.getElementById("myButton").onclick = function () {
    count++;
	if (count % 2 == 0) {
        // Очищаем содержимое элемента с id "demo"
		document.getElemetnById("demo").innerHTML = "";
	} 
    else {
        // Создаем новый элемент img
		var img = document.createElement("img");
        // Устанавливаем источник изображения
        img.src = "https://kartinkof.club/uploads/posts/2022-03/1648227845_5-kartinkof-club-p-mem-kotik-milii-5.jpg"
        // Добавляем изображение в элемент с id "demo"
        document.getElementById("demo").appendChild(img);
	}
}