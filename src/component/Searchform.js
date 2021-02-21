import React, { Component } from 'react';
import EditUser from './EditUser';

class Searchform extends Component {
    constructor(props) {
        super(props);
        this.state={
            findvalue:'',
            userojt:{}
        } 
    }
    getedituser=(info)=>{
            this.setState({
                userojt:info
            });
       
            this.props.getedituserforapp(info);
    }

    ischange=(event)=>{
        console.log(event.target.value);
        this.setState(
            {findvalue:event.target.value}
        )
        this.props.conectsearchform(this.state.findvalue);
    }
    hienthi=()=>{
        if(this.props.st===false){
            return <div className="btn btn-block btn-outline-info w-25 ml-2" onClick={()=>this.props.thaydoitrangthai()}>Thêm mới</div>;
        }
        else{
           return <div className="btn btn-block btn-outline-secondary w-25 ml-2" onClick={()=>this.props.thaydoitrangthai()}>Đóng</div>;
        }
    }

    isshowedit=()=>{
        if(this.props.editstatus===true){
            return <EditUser getedituser={(info)=>this.getedituser(info)}
             edituserobject={this.props.edituserobject} edituser={()=>this.props.edituser()}/>
        }
    }
    render() {
        return (
           <div>
               
                  
                      
                <div class="container row">
                    <div className="col mb-5">
                                {this.isshowedit()}
                    </div>  
                    
                </div>
                <div className="ml-4">
                      <div className=" form-group d-flex justify-content-start">
                <div className="btn-group search " >
                    <input type="text"
                    class="form-control ml-2" onChange={(event)=>this.ischange(event)} aria-describedby="helpId" placeholder="Nhập từ khóa"/>
                   <div className="btn btn-info ml-2 w-50" onClick={(dl)=>this.props.conectsearchform(this.state.findvalue)}>Tìm</div>   
               </div>{this.hienthi()}
               </div>
               
              
                
                
            </div>
          </div>
        );
    }
}

export default Searchform;