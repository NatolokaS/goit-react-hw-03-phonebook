import { ContactsItem } from "../ContactsItem/ContactsItem";
import css from "./Contacts.module.css";

export const Contacts = ({filteredContacts, handlerDel})=>{
	return(
		<div className={css.contacts}>
			{filteredContacts().map(contact => {
				return(<ContactsItem
					key ={contact.id}
			contact={contact}
			del={()=>handlerDel(contact.id)}/>)})}
		</div>
	)
}