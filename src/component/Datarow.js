import React, { Component } from 'react';

class Datarow extends Component {
    hienthiquyen=()=>{
        if(this.props.permission== 1){
            return "Admin"
        }
        else if(this.props.permission==2){
            return "Moderator"
        }
        else {
            return "Normal"
        }
    }
    editclick=()=>{
        this.props.editcheck();
        this.props.edituser();
    }

    clickbtndel=(deluser)=>{
        this.props.delbtn(deluser);
    }
    render() {
        return (
                          <tr>
                            <td scope="row">{this.props.stt+1}</td>
                            <td>{this.props.username}</td>
                            <td>{this.props.sdt}</td>
                            <td>{this.hienthiquyen()}</td>
                            <td>
                                <div className="btn-group">
                                    <div  onClick={()=>this.editclick()} className="btn btn-warning sua"><i class="fa fa-edit    "></i>Sửa</div>
                                    <div onClick={(deluser)=>this.clickbtndel(this.props.id)} className="btn btn-danger xoa"><i class="fa fa-delete    "></i>Xóa</div>
                                </div>
                            </td>
                        </tr>
            
        );
    }
}

export default Datarow;