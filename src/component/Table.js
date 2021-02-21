import React, { Component } from 'react';
import Adduser from './Adduser';
import Datarow from './Datarow';

class Table extends Component {
    delbtn=(deluser)=>{
        this.props.deleteuser(deluser);
    }

    hienthidatauser=()=>this.props.Datauserprops.map((value,key)=>(
        <Datarow 
        delbtn={(deluser)=>this.delbtn(deluser)}
        edituser={()=>this.props.edituser()} 
        editcheck={(user)=>this.props.editfun(value)} 
        username={value.Name} stt={key} sdt={value.phone} permission={value.Permission}
        id={value.id}/>
        
    ))
        
    render() {
        
        return (
            <div className=" container row ">
                <div className="col-12 ">
                    <hr/>
                </div>
            <div className="col mt-5 ">
                <table class="table table-striped table-hover mb-5">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>SDT</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                       {this.hienthidatauser()}
                    
                     
                    </tbody>
                </table>
                
            </div>
        {/* hết col 12 */}
           <Adduser st={this.props.st} add={(Name,phone,Permission)=>this.props.add(Name,phone,Permission)}/>
            </div>
        );
    }
}

export default Table;