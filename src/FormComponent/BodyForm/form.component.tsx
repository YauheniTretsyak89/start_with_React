import React from 'react'
import TabsComponent from '../Tabs/tabs.component';
import BodyFooterComponent from '../BodyFooter/body_footer.component';
import ITabModel from '../../Models/tab.model';
import IFieldModel from '../../Models/field.model';
import IValidationModel from '../../Models/validation.model';
import Loader from '../../Loader/loader.component';

function FormComponent () {
    let [formState, setFormState] =  React.useState(false);

    let [loading, setLoader] =  React.useState(false);

    let [tabs, setTabs] = React.useState(
        [
          {id:0, value:"Personal info", isActive:true},
          {id:1, value:"Billing info", isActive:false},
          {id:2, value:"Additional info", isActive:false}
        ]
      );

      let [formFields, setFormFieldValue] = React.useState(
        [
          {id:0, label:"", value:"", isRequired:true, isValid:true},
          {id:1, label:"", value:"", isRequired:false, isValid:true},
          {id:3, label:"", value:"", isRequired:false, isValid:true},
          {id:4, label:"", value:"", isRequired:true, isValid:true},
          {id:5, label:"", value:"", isRequired:true, isValid:true},
          {id:6, label:"", value:"", isRequired:true, isValid:true},
          {id:7, label:"", value:"", isRequired:false, isValid:true},
          {id:8, label:"", value:"", isRequired:true, isValid:true},
          {id:9, label:"", value:"", isRequired:true, isValid:true},
          {id:10, label:"", value:"", isRequired:true, isValid:true},
          {id:11, label:"", value:"", isRequired:false, isValid:true}
        ]
      );      

    function toggle(id:number){
        setTabs(        
            tabs = tabs.map(
            (tab:ITabModel) =>{
                if(tab.id===id){
                    if(!tab.isActive){
                        tab.isActive = !tab.isActive;
                    }
                }else{
                    tab.isActive = false;
                }

                return tab;
            }
        ));
    }

    function changeHandler(event: any): void {
      
        const name = event.target.name;
        const value = event.target.value;
      
        setFormFieldValue(
            formFields = formFields.map(
                (field) =>{
                    if(field.id.toString()===name){
                        field.value = value;
                    }
    
                    return field;
                }           
        ));  
    }

    function validateField(field:IFieldModel):boolean{
        let result: boolean = false;

        if(formState && field){
            if(field.isRequired){
                result = field.value && field.value.trim().length > 0 ? true : false;
            } else{
                result = true;
            }
        }

        return result;
    }

    function trySubmit(): void{
        setFormState(formState = true);

        let validationModel: IValidationModel = {
            isFormValid : true,
            invalidFields:[]
        };

        formFields = formFields.map(
            (field:IFieldModel) =>{
                field.isValid = validateField(field);

                if(!field.isValid){
                    validationModel.invalidFields.push(field);
                }

                return field;
            }           
        )

        validationModel.isFormValid = validationModel.invalidFields.length === 0;

        console.log(validationModel.isFormValid);
        
        if(validationModel.isFormValid){
            //Send form
            setLoader(loading = true);

            setTimeout(() => {setLoader(loading = false)}, 2000);
            
            return;
        }

        //Need to be changed. Just for POC
        toggleToFirstInvalidTab(validationModel);       
    }

    function toggleToFirstInvalidTab(model:IValidationModel){
        const firstInvalidFieldId = model.invalidFields[0].id;
        let tabId:number = 0;
        //Update model to include these like children
        switch(firstInvalidFieldId) {             
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: { 
                tabId = 0;
                break; 
            } 
            case 6:
            case 7: { 
                tabId = 1;
                break; 
            } 
            case 8:
            case 9:
            case 10:
            case 11: { 
                tabId = 2;
                break; 
            } 
            default: { 
                tabId = 0;
                break; 
            } 
         } 

         toggle(tabId);
    }

    return (
        <div className="body_form_wrapper">
        {loading && <Loader/>}
        <TabsComponent data={tabs} toggle={toggle}/>
        <div className="form_page">
            <form className="form_page_content">
                <div className={tabs[0].isActive ? "" : "hide"}>
                <div className="form-input">
                    <label className={formFields[0].isValid ? "" : "invalid_field"}>
                    <input required
                        onChange={changeHandler} 
                        value={formFields[0].value}
                        name = {formFields[0].id.toString()}/>
                    <span className="placeholder">First name</span>
                    </label>
                </div>
                <div className="form-input">
                    <label className={formFields[1].isValid ? "" : "invalid_field"}>
                    <input required
                        onChange={changeHandler} 
                        value={formFields[1].value}
                        name = {formFields[1].id.toString()}/>
                    <span className="placeholder">First name</span>
                    </label>
                </div>
                <div className="form-input">
                    <label className={formFields[2].isValid ? "" : "invalid_field"}>
                    <input required
                        onChange={changeHandler} 
                        value={formFields[2].value}
                        name = {formFields[2].id.toString()}/>
                    <span className="placeholder">First name</span>
                    </label>
                </div>
                <div className="form-input">
                    <label className={formFields[3].isValid ? "" : "invalid_field"}>
                    <input required
                        onChange={changeHandler} 
                        value={formFields[3].value}
                        name = {formFields[3].id.toString()}/>
                    <span className="placeholder">First name</span>
                    </label>
                </div>
                <div className="form-input">
                    <label className={formFields[4].isValid ? "" : "invalid_field"}>
                    <input required
                        onChange={changeHandler} 
                        value={formFields[4].value}
                        name = {formFields[4].id.toString()}/>
                    <span className="placeholder">First name</span>
                    </label>
                </div>
                </div>

                <div className={tabs[1].isActive ? "" : "hide"}>
                    <div className="form-input">
                        <label className={formFields[5].isValid ? "" : "invalid_field"}>
                        <input required
                            onChange={changeHandler} 
                            value={formFields[5].value}
                            name = {formFields[5].id.toString()}/>
                        <span className="placeholder">First name</span>
                        </label>
                    </div>
                    <div className="form-input">
                        <label className={formFields[6].isValid ? "" : "invalid_field"}>
                        <input required
                            onChange={changeHandler} 
                            value={formFields[6].value}
                            name = {formFields[6].id.toString()}/>
                        <span className="placeholder">First name</span>
                        </label>
                    </div>
                </div>
                <div className={tabs[2].isActive ? "" : "hide"}>
                    <div className="form-input">
                            <label className={formFields[7].isValid ? "" : "invalid_field"}>
                            <input required
                            onChange={changeHandler} 
                            value={formFields[7].value}
                            name = {formFields[7].id.toString()}/>
                            <span className="placeholder">First name</span>
                            </label>
                    </div>
                    <div className="form-input">
                            <label className={formFields[8].isValid ? "" : "invalid_field"}>
                            <input required
                                onChange={changeHandler} 
                                value={formFields[8].value}
                                name = {formFields[8].id.toString()}/>
                            <span className="placeholder">First name</span>
                            </label>
                        </div>
                        <div className="form-input">
                            <label className={formFields[9].isValid ? "" : "invalid_field"}>
                            <input required
                                onChange={changeHandler} 
                                value={formFields[9].value}
                                name = {formFields[9].id.toString()}/>
                            <span className="placeholder">First name</span>
                            </label>
                        </div>
                        <div className="form-input">
                            <label className={formFields[10].isValid ? "" : "invalid_field"}>
                            <input required
                                onChange={changeHandler} 
                                value={formFields[10].value}
                                name = {formFields[10].id.toString()}/>
                            <span className="placeholder">First name</span>
                            </label>
                        </div>
                </div>
            </form>       
        </div>
        <BodyFooterComponent submit={trySubmit}/>
        </div>
    );
}

export default FormComponent;