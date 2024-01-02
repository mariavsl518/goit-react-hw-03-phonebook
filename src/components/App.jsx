import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
    state = {
      contacts: [],
      filter: ''
    }

    addProfile=(formData)=> {

      const duplicateCheck = this.state.contacts.some(contact=>
        contact.name.toLowerCase()===formData.name.toLowerCase()
      );

      if (duplicateCheck)
        { alert(`Contact ${formData.name} already exists`)
          return} 
        else
          { return(
            this.setState(prevState=> {
              if(prevState===[])
              {return{
                contacts: [formData]
              }}
              else
              {return {
                contacts: [...prevState.contacts, formData]
              }}
             })
          )
        }
      }


    handleFilterSearch=(evt)=>{

      this.setState(
        {filter: evt.target.value}
      )
  }

    deleteContact=(id)=>{
      this.setState({
        contacts: this.state.contacts.filter(contact=>
          contact.id!==id)
      })
    }

    componentDidMount(){
      if(localStorage.getItem('contacts')){
        const getContacts = JSON.parse(localStorage.getItem('contacts'))
        this.setState(
         {contacts: getContacts}
        )
      }
    }

    componentDidUpdate(prevProps, prevState){
      if(prevState.contacts!==this.state.contacts){
        const contacts = JSON.stringify(this.state.contacts)
        localStorage.setItem('contacts', contacts)
      }
    }

  render() {

    const filterParam = 
    this.state.contacts.filter(contact=>
    contact.name.toLowerCase().includes(
      this.state.filter.trim().toLowerCase())
    )

    return (
      <div className='formBlock'>
        <h1>Phonebook</h1>
        <ContactForm 
        addProfile={this.addProfile} />

        <h2>Contacts</h2>
        
        <Filter 
        handleFilterSearch={this.handleFilterSearch}/>

        <ContactList 
        contacts={filterParam}
        deleteContact={this.deleteContact}
        />
      </div>
      )  
    };
  }
