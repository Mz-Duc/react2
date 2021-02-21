import React, { Component } from 'react';

class Adduser extends Component {
      
    constructor(props) {
      super(props);
      this.state={
        id:"",
        Name:"",
        phone:"",
        Permission:0
      }
    }
    
      ischange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
      
        this.setState({
          [name]:value
        });
        var item={};
        item.id=this.state.id;
        item.Name=this.state.Name;
        item.phone=this.state.phone;
        item.Permission=this.state.Permission;
        console.log(item);
      }
        
        
        hienthiform=()=>{
            if(this.props.st===true)
            return (
                <div className="col-12 mt-5">
                  <form method="post">
                <div className="card text-left border-primary mt-2">
           
                <div className="card-header"><h5>Thêm mới</h5></div>
                 <div className="card-body ">
                    <div class="form-group">
                   
                      <input type="text" onChange={(event)=>this.ischange(event)} name="Name" id="" class="form-control" placeholder="Tên user" aria-describedby="helpId"/>
                    </div>
                    <div class="form-group">
         
                      <input type="text" onChange={(event)=>this.ischange(event)} name="phone" id="" class="form-control" placeholder="Điện thoại" aria-describedby="helpId"/>
                    </div>
                    <div class="form-group">
                 
                       <select class="form-control" onChange={(event)=>this.ischange(event)} name="Permission" id="" >
                         <option value>Chọn quyền mặc định</option>
                         <option value={1}>Admin</option>
                         <option value={2}>Moderator</option>
                         <option value={3}>Normal</option>
                       </select>
                     </div>
                    <div class="form-group">
                    <input type="reset" className="btn btn-block btn-primary" onClick={(Name,phone,Permission)=>this.props.add(this.state.Name,this.state.phone,this.state.Permission)}
                        value="Thêm mới"
                    />
                 </div>
            </div>
            </div></form>
            </div>
            )
        }
    render() {

        return (
            <div >
   
            {this.hienthiform()}
        </div>
            

        );
    }
}

export default Adduser;