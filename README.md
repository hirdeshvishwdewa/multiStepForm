# multiStepForm
A simple but great jQuery plugin to create a multi-step form.

#Steps for how to use this plugin.
#Step 1. Simply include multistep-form.js.
#Step 2. Make sure you have added classes .tab , .previous , .next and .step inside your <form>. 
for example:
<pre>
<form id="myForm" action="/register.php">
	  <h1>Register:</h1>
	  <!-- One "tab" for each step in the form: -->
	  <div class="tab">Name:
	    <p><input placeholder="First name..." name="fname"></p>
	    <p><input placeholder="Last name..." name="lname"></p>
	  </div>
	  <div class="tab">Contact Info:
	    <p><input placeholder="E-mail..." name="email"></p>
	    <p><input placeholder="Phone..." name="phone"></p>
	  </div>
  <div style="overflow:auto;">
    <div style="float:right;">
      <button type="button" class="previous">Previous</button>
      <button type="button" class="next">Next</button>
      <button type="submit">Save</button>
    </div>
  </div>
  <!-- Circles which indicates the steps of the form: -->
  <div style="text-align:center;margin-top:40px;">
    <span class="step">1</span>
    <span class="step">2</span>
    <span class="step">3</span>
    <span class="step">4</span>
  </div>
  </form>
</pre>
Step 3. Simply call multiStepForm() on your form id, and thats it!
For example:
$("#myForm").multiStepForm(
{
  // defaultStep:0,
  callback : function(){
    console.log("save");
  }
}
).navigateTo(0);
