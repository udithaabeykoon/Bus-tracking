import React, {
    Component
} from 'react';


class BusOwner extends Component {
    render() {
        return ( 
            <form >
            <fieldset >
            <legend > -- - Bus Owner Details-- - </legend> 
            <label > Name </label> 
            <div className = "form-row" >
            <div className = "col-md-6 mb-3" >
            <label for = "validationDefault01" > First name </label> 
            <input type = "text" className = "form-control" id = "validationDefault01" value = "" placeholder = "First Name" required />
            </div> 
            <div className = "col-md-6 mb-3" >
            <label for = "validationDefault02" > Last name </label> 
            <input type = "text" className = "form-control" id = "validationDefault02" value = "" placeholder = "Last Name" required />
            </div> 
            </div >
            <div className = "form-row" >
            <div className = "col-md-6 mb-3" >
            <label for = "validationDefault03" > ID Number </label> 
            <input type = "text" className = "form-control" id = "validationDefault03" value = "" placeholder = "ID Number" required />
            </div> 
            </div> 
            <div className = "form-group" >
            <label for = "inputAddress" > Address </label> 
            <input type = "text" className = "form-control" id = "inputAddress" placeholder = "1234 Main St" />
            </div> 
            <label> Contact Number </label>
            <div className = "form-row" >
            <div className = "col-md-6 mb-3" >
            <label for = "validationDefault04" > Emergency Contact Number </label>
            <input type = "text" className = "form-control" id = "validationDefault04" value = "" placeholder = "Emergency contact" required />
            </div> 
            <div className = "col-md-6 mb-3" >
            <label for = "validationDefault05" > Official Contact Number </label> 
            <input type = "text" className = "form-control" id = "validationDefault05" value = "" placeholder = "Official contact" required />
            </div> 
            </div > 
            </fieldset> 
            </form>
        );
    }
}

export default BusOwner;