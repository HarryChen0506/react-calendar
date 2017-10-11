import React, { render } from 'react';
import './assets/calendar.less';
import leftArrow from './assets/arrow-l.png';
import rightArrow from './assets/arrow-r.png';

export default class Calendar extends React.Component{
    render(){
        return (
            <div style={{ width: '277px', height: '355px', fontSize: '14px' }}>
                <div className="calendar-header"> 
                     <img
                        className="icon-left"
                        src={leftArrow}
                        onClick={this.handlerReduceMonth} />
                    
                        2007年9月
                    <img
                        className="icon-right"
                        src={rightArrow}
                        onClick={this.handlerIncreaseMonth} /> 
                             
                </div>
                <table className="calendar-table">
                    <tbody>
                        <tr>
                            <th>日</th>                       
                            <th>一</th>                       
                            <th>二</th>                       
                            <th>三</th>                       
                            <th>四</th>                       
                            <th>五</th>                       
                            <th>六</th>                       
                        </tr>
                        <tr>
                            <td>
                                <span className="item-light item-today">1</span>
                            </td>
                            <td>
                                <span className="item-light">2</span>
                            </td>
                            <td>
                                <span className="item-light">2</span>
                            </td>
                            <td>
                                <span className="item-light">2</span>
                            </td>
                            <td>
                                <span className="item-light">2</span>
                            </td>
                            <td>
                                <span className="item-light">2</span>
                            </td>
                            <td>
                                <span className="item-light">2</span>
                            </td>                            
                        </tr>
                        <tr>
                            <td>
                                <span className="item-light item-today">1</span>
                            </td>
                            <td>
                                <span className="item-active">2</span>
                            </td>
                            <td>
                                <span className="item-light">2</span>
                            </td>
                            <td>
                                <span className="item-light">2</span>
                            </td>
                            <td>
                                <span className="item-light">2</span>
                            </td>
                            <td>
                                <span className="item-light">2</span>
                            </td>
                            <td>
                                <span className="item-light">2</span>
                            </td>                            
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        )
    }
}