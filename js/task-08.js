
const formRef = document.querySelector('.login-form');


formRef.addEventListener('submit', onFormSubmit );

function onFormSubmit (event) {
    event.preventDefault();  

    const formElements = event.currentTarget.elements;
    

    const email = formElements.email;
    const password = formElements.password;

    
    const objectValue = {email:email.value, password:password.value}

      if (email.value === "" || password.value === "")  {
         alert( 'Всі поля повинні бути заповнені!')
      } else {
        
         console.log(objectValue);

         event.currentTarget.reset();
      }
        
}
   
    
