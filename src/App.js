
import './App.css';
import { getUsers } from './components/getUsers';
import React, { Component} from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import RezultatCautare from './RezultatCautare';


const users = getUsers(100);



class App extends Component {

 

  constructor() {
    super(...arguments);
    this.listviewInstance = null;
   this.fields = { name: "text", iconCss: "icon" };
}
listTemplate(data) {
    return (<div className="text-content">
{data.name}
<span className="delete-icon" onClick={this.deleteItem.bind(this)}/>
</div>);
}
deleteItem(args) {
    args.stopPropagation();
    let liItem = args.target.closest('li');
    this.listviewInstance.removeItem(liItem);
}
 
 
  render() {



  return (

    <div>
    <RezultatCautare />
        <ListViewComponent id="sample-list" dataSource={users} fields={this.fields} template={this.listTemplate.bind(this)} ref={listview => {
            this.listviewInstance = listview;
        }}/>
   </div>
  );
  }
}

export default App;
