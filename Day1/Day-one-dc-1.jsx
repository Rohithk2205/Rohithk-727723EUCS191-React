function SUB(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    alert(`Profile Information Submitted:\n\nName: ${name}\nAge: ${age}\nPhone: ${phone}\nEmail: ${email}`);
   
  }

 function App()
 {
    return(
         <div>
             <form onSubmit={SUB}>
                 <label>Name: </label>
                 <input type="text" id="name" name="name" />
                 <br />
                 <label>Age: </label>
                 <input type="number" id="age" name="age" />
                 <br />
                 <label>Phone: </label>
                 <input type="tel" id="phone" name="phone" />
                 <br />
                 <label>Email: </label>
                 <input type="email" id="email" name="email" />
                 <br />
                 <input type="submit" value="Submit" />
             </form>
         </div>
     )
 }export default App;