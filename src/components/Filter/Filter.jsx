import css from './Filter.module.css';
export const Filter = ({ filterContacts }) => {
    return (
    <div className={css.filter}>
        <p>Find contacts by name:</p>
        <input className={css.filterInput} type="text" placeholder="Search" onChange={filterContacts}/>
    </div>
)

}