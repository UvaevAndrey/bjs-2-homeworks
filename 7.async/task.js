class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null
    }

    addClock (time, callback, id) {
      this.timerId = id

      if (id === undefined) {
        const divideError = new Error("error text");
        throw divideError;
       } 
      if (this.alarmCollection.find((object) => {
         if (object.id === id) return true;
         else return false;
         })!==undefined) console.error('error') ;
         else {
                let clock = {
                    id,
                    time,
                    callback
                }
                this.alarmCollection.push(clock);
            }
        }

    removeClock (id) {
     
    let clock = null
      for (let i = 0; i < this.alarmCollection.length; i++) {
        if(this.alarmCollection[i].id === id) {
            clock = this.alarmCollection[i];  
        }
      }
      this.alarmCollection.splice(this.alarmCollection.findIndex (i => i===clock), 1)
      if((this.alarmCollection.splice(this.alarmCollection.findIndex (i => i===clock), 1)).ok){
            return true
      } return false;
    } 

    getCurrentFormattedTime () {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`
        let resultTime = `${hours}:${minutes}`
        return resultTime
    }

    start () {
        function checkClock (clock) {
            for (let j = 0; j < this.alarmCollection.length; j++) {
                if(this.alarmCollection[j].time === this.getCurrentFormattedTime()) {
                clock.callback();  
                }
            } 
        }
        if (this.id === null) {
            this.id = setInterval(this.alarmCollection.forEach(q => {checkClock(q)}),1000)           
        }
    }

    stop () {
        if (this.id !== null) {
            clearInterval (this.id)
            this.id === null           
        }
    }

    printAlarms () {
        this.alarmCollection.forEach(a => {
            console.log(`${a.id}`+"  "+`${a.time}`);
        });
    }

    clearAlarms () {
        this.stop ();
        this.alarmCollection = [];
    }

}


// задание 2

let phone = new AlarmClock;

let screenPhone = function() {
    console.log("Пора вставать")
} 

let now = new Date
let nowString = (now.getHours() > 10 ? `${now.getHours()}` : `0${now.getHours()}`)+":"+(now.getMinutes() > 10 ? `${now.getMinutes()}` : `0${now.getMinutes()}`)
phone.addClock(nowString,f => {screenPhone()},1);

function addMinutes(date, minutes) {
    let result = new Date(date);
    result.setMinutes(result.getMinutes() + minutes);
    return result;
  }

now = addMinutes(now,1)
nowString = (now.getHours() > 10 ? `${now.getHours()}` : `0${now.getHours()}`)+":"+(now.getMinutes() > 10 ? `${now.getMinutes()}` : `0${now.getMinutes()}`)
phone.addClock(nowString,f => {screenPhone()},2);


now = addMinutes(now,1)
nowString = (now.getHours() > 10 ? `${now.getHours()}` : `0${now.getHours()}`)+":"+(now.getMinutes() > 10 ? `${now.getMinutes()}` : `0${now.getMinutes()}`)
phone.addClock(nowString,f => {screenPhone()},3);

//phone.removeClock(3);

phone.printAlarms();

phone.start();