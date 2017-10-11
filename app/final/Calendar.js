import React, { render } from 'react';
import './assets/calendar.less';
import leftArrow from './assets/arrow-l.png';
import rightArrow from './assets/arrow-r.png';
import {dateFormat, getDateList, convertDyadicArray} from './utils'

export default class Calendar extends React.Component{  
    constructor(props){
        super(props);        
        this.handlerSelectDate = this.handlerSelectDate.bind(this);

        const now = new Date();
        const today = dateFormat(now);
        const year = +today.slice(0,4);
        const month = +today.slice(5,7);
        const dateList = getDateList(year,month);
        const list = convertDyadicArray(dateList, 6);
        const activeDate = today;
        
        this.state = {
            today,
            year,
            month,       
            dateList,
            list,
            activeDate
        }
    }
    getClassName(date){
        const { year, month, today, dateList,list,activeDate } = this.state;
        const strYM = `${year}-${month}`;
        let className;
        if(date.indexOf(strYM)>-1){           
            className = ''
        }else{
            className = 'item-disable'
        }  
        if(date===today){
            className += ' item-today'
        } 
        if(date===activeDate){
             className += ' item-active'
        }

        //当前日期 'item-today'  
        //选中日期 'item-active' 
        console.log('today',today)     
        return className
    }
    handlerSelectDate(){
        this.props.onSelect('hello');
        console.log(this.state);

        // this.setState((prevState) => ({ activeDate }))
    }
    render(){
        return (
            <div style={{ width: '277px', height: '355px', fontSize: '14px' }}>
                <div className="calendar-header"> 
                     <img
                        className="icon-left"
                        src={leftArrow}
                        onClick={this.handlerReduceMonth} />                    
                        {this.state.year}年{this.state.month}月
                    <img
                        className="icon-right"
                        src={rightArrow}
                        onClick={this.handlerIncreaseMonth} /> 
                             
                </div>
                <table className="calendar-table">
                    <thead>
                        <tr>
                            <th>日</th>                       
                            <th>一</th>                       
                            <th>二</th>                       
                            <th>三</th>                       
                            <th>四</th>                       
                            <th>五</th>                       
                            <th>六</th>                       
                        </tr>
                    </thead>
                    <tbody onClick={this.handlerSelectDate}>
                        {
                            this.state.list.map((arr, index)=>{
                                return(<tr key={'row-'+index}>
                                    {arr.map((item, index)=>{
                                        return (
                                            <td key={'col-'+index}>
                                                <span className={this.getClassName(item)}>{item.slice(8)}</span>
                                            </td>
                                        )
                                    })}
                                </tr>)                                 
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
Calendar.defaultProps = {
	onSelect() { console.log('默认选中回调函数')}   
}
