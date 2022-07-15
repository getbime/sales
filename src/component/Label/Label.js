import './Label.css'

const Label = ({loggedUser,isLoading}) => {
    return (
        <div className="label">
            {!isLoading && <h4>{loggedUser.companyName.toUpperCase()}</h4> }
        </div>
    );
}
 
export default Label;