export default {
    dateFormate(time){
        if(!time) return '';
        let nowTime = new Date(time);
        return `${nowTime.getFullYear()}-${nowTime.getMonth()+1}-${nowTime.getDay()}  ${nowTime.getHours() > 9 ? nowTime.getHours() : '0' + nowTime.getHours()}:${nowTime.getMinutes() > 9 ? nowTime.getMinutes() : '0' + nowTime.getMinutes()}:${nowTime.getSeconds()}`
    }
} 