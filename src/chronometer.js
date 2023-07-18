class Chronometer {


//////////////////////////////////////////////////////////////////////////////////////////////////////! ITERACION 1

  constructor() {           //Implementar la clase sin argumentos
    
    this.currentTime = 0              //inicializadas 2 variables que apunten a la funcion con .this
    this.intervalId = null            //el valor de las variables tiene que ser (0) en una y (null) en otra
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////! ITERACION 2

  start(printTimeCallback) {                  //recibe 1 argumento que es (printTimeCallBack)
    
      this.intervalId = setInterval(() => {   //funcion de flecha para iterar sobre (intervalId)
        this.currentTime++                    //la variable (currentTime se incrementa de 1 en 1 con el (++))
        if (printTimeCallback) {              //condicion que llama al argumento del metodo
          printTimeCallback()                 //invoca la variable (printTimeCallBack) para que esta se vaya actualizando
        }
      }, 1000)                                //esto indica incrementarla cada segundo (1000ms)
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////! ITERACION 3


  getMinutes() {   //metodo sin argumentos
    return Math.floor(this.currentTime / 60)    //el metodo(math.floor) redondea el resultado hacia abajo 
  }                                             //la funcion retorna currentTime que es la variable donde se almacenan los segundos y los divide entre 60


  //////////////////////////////////////////////////////////////////////////////////////////////////////! ITERACION 4


  getSeconds() {   //metodo sin argumentos
    return this.currentTime % 60  //apunta con this a currentTime que es donde se acumula la cuenta  actual,
  }                               //utiliza el operador de modulo para que divida entre 60 y quedarnos con el resto
   

  //////////////////////////////////////////////////////////////////////////////////////////////////////! ITERACION 5


  computeTwoDigitNumber(value) {  //debe recibir un argumento llamado (value)

      if (value < 10) {          //creo un condicional que verifica si el valor es menor que 10
        return "0" + value;      //si se cumple la condicion retorna la string 0 + mas la variable (value) que es donde se almacena la cuenta. (concatenandolos) ejemplo si value es 5 devuelve 05
      } 
      else {                     //si el valor no es menor de 10 se ejecuta la siguiente condicion
        return value.toString()  //utiliza el metodo toString() para convertir en valor numerico la variable value
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////! ITERACION 6


  stop() {                          //no recibe ningun argumento
    clearInterval(this.intervalId)  //se usa la funcion clearInterval para detener el intervalo anterior producido por setInterval(), apunta a intervalId que es la que contiene setInterval()
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////! ITERACION 7


  reset() {                       //no recibe ningun argumento  
    this.currentTime = 0          //.this apunta a la variable currentTime incluida en esta clase y la da el valor numerico de 0
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////! ITERACION 8 BONUS


  split() {
    
  }
}
