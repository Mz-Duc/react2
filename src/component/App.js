import logo from './../logo.svg';
import './../App.css';
import Header from './Header'
import Searchform from './Searchform';
import Table from './Table';
import Adduser from './Adduser';
import Datauser from './Data.json'

import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
        st:false
        ,Data:[],
        searchtext:'',
        edituser:false
        ,edituserobject:{}
    }
}


  componentWillMount() {
    if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData',JSON.stringify(Datauser))
    }
    else{
      var temp=JSON.parse(localStorage.getItem('userData'));
      this.setState({
        Data:temp
      });
    }
  }


thaydoitrangthai=()=>{
  this.setState({
      st:!this.state.st
  }
);}
thaydoitrangthaiedit=()=>{
  this.setState({
    edituser:!this.state.edituser
  });
}
deleteuser=(deluser)=>{
  var temdata=this.state.Data.filter(item => item.id !== deluser)
  this.setState({
    Data:temdata
  })
  localStorage.setItem('userData',JSON.stringify(temdata));
}
getedituserforapp=(info)=>{
    console.log("thong tin da sua xong"+info.Name);
    this.state.Data.forEach((value,key)=>{
      if(value.id===info.id){
        value.Name=info.Name;
        value.phone=info.phone;
        value.Permission=info.Permission;
      } 
    })
    localStorage.setItem('userData',JSON.stringify(this.state.Data));
}
edituser=(user)=>{
  this.setState({
    edituserobject:user
  });
console.log(user);
}
getnewuser=(Name,phone,Permission)=>{
  var item={};
  item.id=uuidv1();
  item.Name=Name;
  item.phone=phone;
  item.Permission=Permission;
  var items=this.state.Data;
  items.push(item);

  this.setState({
    Data:items
  })
  localStorage.setItem('userData',JSON.stringify(items));
}
gettextsearch=(dl)=>{
  this.setState(
    {searchtext:dl}
  )
  console.log("Đây là dữ liệu tìm"+dl);
}
  render() {
   
    
    var kq=[];
    this.state.Data.forEach((item) => {
      if(item.Name.indexOf(this.state.searchtext)!==-1){
        kq.push(item);
      }
    });

    console.log(kq);
    return (
      <div className="App">
     <Header/>
     <div className="searchForm">
        <div className="container row">
          <div >
          <Searchform
          getedituserforapp={(info)=>this.getedituserforapp(info)}
          edituserobject={this.state.edituserobject}
          editstatus={this.state.edituser}
          edituser={()=>this.thaydoitrangthaiedit()}
          conectsearchform={(dl)=>this.gettextsearch(dl)}
          thaydoitrangthai={()=>this.thaydoitrangthai()} st={this.state.st}/>
          <Table
          deleteuser={(deluser)=>this.deleteuser(deluser)}
          edituser={()=>this.thaydoitrangthaiedit()}
          editfun={(user)=>this.edituser(user)}
           st={this.state.st} Datauserprops={kq}
            add={(Name,phone,Permission)=>this.getnewuser(Name,phone,Permission)}/>
          </div>
        </div>
     </div>
    </div>
    );
  }
}

export default App;
