const graph = {
  you: ['alice', 'bob', 'claire'],
  claire: ['thom', 'johny'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  anuj: [],
  peggy: [],
  thom: [],
  johny: []
}

const aa = (end_vertex) => {
  const startPoint = 'you'; // начальная точка графа(исток)
  const parents = {}; // объект с родителями, используется для построения кратчайшего пути
  const distances = { // объект с дистанцией, используется для определения дублирования захода в точку и расчета длины пути, по необходимости
    [startPoint]: 0 //нулеввая длина от начальной точки до неё самой
  };
  const queue = [startPoint]; // очередь для работы алгоритма, в нее складываем все элементы и извлекаем из неё
  while (queue.length>0) { // пока очередь имеет хоть один элемент цикл будет повторяться
    const currentFromQueue = queue[0]; //извлекаем первый элемент из очереди, на первой итерации он будет 'you'
    queue.shift(); //удаляем первый элемент сверху очереди
    for (let iter of graph[currentFromQueue]) { // для всех потомков рассматриваемого элемета
      if (!distances[iter]) {  // если дистанция нулевая(в точку еще не заходили)
        distances[iter] = distances[currentFromQueue]+1; // добавляем длину дистанции для рассматриваемого потомка
        queue.push(iter) // добавляем потомка в очередь
        parents[iter] = currentFromQueue; // добавляем в массив родителей информацию о том, что текущий потомок наследуется от рассматриваемого родителя
      }
    }
  }
  const path = [end_vertex]; // начало пути с конца
  let parent = parents[end_vertex]; // берем первого родителя потомка
  while (!!parent) { // пока родители существуют
    path.push(parent); //добавляем родителя в путь
    parent = parents[parent] // ищем родителя у текущего родителя
  }
  path.reverse() // реверсируем путь
  console.log(path)
}

aa('peggy')