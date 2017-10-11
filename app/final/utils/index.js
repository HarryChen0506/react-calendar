/**
 * 日期格式化 'YYYY-MM-DD'
 * 
 * @export
 * @param {any} date 
 * @returns 
 */
export function dateFormat(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const monthStr = month < 10 ? `0${month}` : `${month}`
  const dayStr = day < 10 ? `0${day}` : `${day}`

  return `${year}-${monthStr}-${dayStr}`
}

/**
 * 获取日期列表
 * @param y 年份
 * @param m 月份
 * @return []
 */
export function getDateList(y,m){
    let dataList = [];
    const year = y;     //当前年份
    const month = m-1;  //当前月份的js下标
    const now = new Date(year, month); //当前月份 第一天
    const monthEnd = new Date(year, month+1, 0)   //当月最后一天
    const lastMonthEnd = new Date(year, month, 0)  //上月最后一天
    const firstDay = +now.getDay();  //当月第一天是星期几
    const mEDate = monthEnd.getDate(); //当月最后一天的日期
    const lMEDate = lastMonthEnd.getDate(); //上个月最后一天的日期

    console.log('当月第一天是星期几',firstDay);
    console.log('当月最后一天的日期',mEDate);
    console.log('上个月最后一天的日期',lMEDate);

    //计算上个月应该出现在日历里面的日期
    for(let i=0; i< firstDay; i++){
        const tempM = month>0? month: 12;
        const temY = month>0? year: year-1;
        const strMonth = tempM<10? `0${tempM}`: `${tempM}`;
        const tempDate = lMEDate-i;
        const strFullDate = `${temY}-${strMonth}-${tempDate}`;
        dataList.unshift(strFullDate)
    }
    //计算当月应该出现在日历里面的日期
    for(let i=1; i<=mEDate; i++){
        const tempY = year;
        const tempM = month+1;
        const strMonth = tempM<10? `0${tempM}`: `${tempM}`;
        const strDate = i<10? `0${i}`: `${i}`;       
        const strFullDate = `${tempY}-${strMonth}-${strDate}`;
        dataList.push(strFullDate)
    }
    //计算下个月应该出现在日历里的日期
    const nextMonthLength = 42- firstDay - mEDate;
    for(let i=1; i<=nextMonthLength; i++){
        const tempY = year;
        const tempM = month+2;
        const strMonth = tempM<10? `0${tempM}`: `${tempM}`;
        const strDate = i<10? `0${i}`: `${i}`;  
        const strFullDate = `${tempY}-${strMonth}-${strDate}`;
        dataList.push(strFullDate)
    }

    return dataList
}
/**
 * 
 * @param {*} dateList  日期一维数组
 * @param {*} row  行数
 */
export function convertDyadicArray(dateList, row){
    let arr = [];
    let col = dateList.length/row;
    for(let i=0; i<row; i++){        
        let tempRow = dateList.slice(i*col,(i+1)*col);
        arr.push(tempRow)
    }
    return arr;
}
