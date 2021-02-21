import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:this.props.edituserobject.id,
      Name:this.props.edituserobject.Name,
      phone:this.props.edituserobject.phone,
      Permission:this.props.edituserobject.Permission
    }
  }
  
    ischange=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
    
      this.setState({
        [name]:value
      });
    }

    savebutton=()=>{
      var info={};
      info.id=this.state.id;
      info.Name=this.state.Name;
      info.phone=this.state.phone;
      info.Permission=this.state.Permission
      this.props.getedituser(info);
      this.props.edituser();
    }
    render() {
      console.log(this.state);
        return (
            <div>
                <div className="col-12 mt-5">
                  <form method="post">
                <div className="card bg-warning text-left border-primary ">
           
                <div className="card-header"><h5>Sửa người dùng</h5></div>
                 <div className="card-body ">
                    <div class="form-group">
                   
                      <input defaultValue={this.props.edituserobject.Name} type="text" onChange={(event)=>this.ischange(event)} name="Name" id="" class="form-control" placeholder="Tên user" aria-describedby="helpId"/>
                    </div>
                    <div class="form-group">
         
                      <input defaultValue={this.props.edituserobject.phone} type="text" onChange={(event)=>this.ischange(event)} name="phone" id="" class="form-control" placeholder="Điện thoại" aria-describedby="helpId"/>
                    </div>
                    <div class="form-group">
                 
                       <select defaultValue={this.props.edituserobject.Permission} class="form-control" onChange={(event)=>this.ischange(event)} name="Permission" id="" >
                         <option value>Chọn quyền mặc định</option>
                         <option value={1}>Admin</option>
                         <option value={2}>Moderator</option>
                         <option value={3}>Normal</option>
                       </select>
                     </div>
                    <div class="form-group">
                    <input type="button" className="btn btn-block btn-primary" 
                        value="Lưu" onClick={()=>this.savebutton()}
                    />
                 </div>
            </div>
            </div></form>
            </div>
            </div>
        );
    }
}

export default EditUser;