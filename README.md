# JS_Training

<h1> What is Atomic Design ? </h1>
</br>
  <p> The Atomic Design methodology created by Brad Frost is a design methodology for crafting robust design systems with an explicit order and hierarchy. As the name suggests, it’s derived from a basic chemistry concept; the composition of all matter </p>
  <p> The levels of Atomic Design are as follows : 
    <ul>
    <li>Subatomic Particles </li>
       <li>Atoms </li>
         <li>Molecules</li>
           <li>Organisms </li>
           <li>Templates</li>
             <li>Pages</li>

   </ul>
  
  
  </p>

  <h2> All matter is made up of tiny particles called Atoms.
      
</h2>

</br>
<p> 
   Brad Frost's approach to design systems is based on the same chemistry principle. The principle of Atomic Design focuses on the breaking down of interfaces into smaller parts called atoms. The atoms act as the building blocks for the entire design system. This may seem like a straightforward process, but it can quickly become quite complex depending on the complexity of the project.

</p>

<img src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*U-jFHRJxePDHHBWtd19M8g.png" alt="Atomic Design"/>

<p> 
<b>Subatomic particles</b>
<br>
The subatomic particles would be the bare-minimum foundational elements you’d need for all your components. These consists of elements like your color palette, typography, shadows, and spacing.
</p>

<p>
<b>Atoms</b> </br>
atoms in design systems are the smallest elements that cannot be broken down further. These include things like buttons, input fields, switches, etc. 
</p>

<p> 
<b>Molecules</b> </br>
molecules that are combinations of multiple atoms.
Ex Card Items

</p>

<p>
<b>Organisms</b> </br>
These are the highest complexity levels of any given interface component.
 The header, menu bar, data grids, etc., are the commonly defined organisms in most design systems
</p>

<p>
<b> Templates </b> </br>
Templates in design systems help define a standard page layout across multiple pages with similar functionality. Templates are standardized layouts for organizing atoms, molecules, and organisms across your product.
</p>

<p> 
<b>Pages </b> </br>
Pages in atomic design are instances of templates in our user interface. Pages are what our users will see in the finished product.</p>

</hr>
</br> </br>
<h1>2.  12 Factor App </h1>
 </br>
<p>The Twelve-factor app is a set of 12 principles or best practices for building web applications which now days are more commonly known as Software-As-A-Service (SAAS) applications. It provides a set of best practices to create robust, scalable, and maintainable apps </p>
<p>The factors are as follows: </p>

<ol>
<li><b>Codebase: </b>  Maintain one codebase tracked in revision control, but deploy it to many environments.</li>
<li><b> Dependencies: </b>Explicitly declare and isolate dependencies to ensure consistency</li>
<li><b> Config: </b>Store configuration in the environment, separate from the code.</li>
<li><b> Backing Services: </b>Treat backing services (databases, queues, etc.) as attached resources.</li>
<li><b> Build,Release & Run: </b>Strictly separate build and run stages to avoid surprises.</li>
<li><b> Processes: </b>Execute the app as one or more stateless processes.</li>
<li><b> Port Binding: </b>Export services via port binding.</li>
<li><b> Concurrency: </b>Scale out via the process model.</li>
<li><b>Disposability : </b>Maximize robustness with fast startup and graceful shutdown.</li>
<li><b> Development/Production Parity: </b>Keep development, staging, and production as similar as possible.</li>
<li><b> Logs: </b>Treat logs as event streams.</li>
<li><b> Admin Processes: </b>Run admin/management tasks as one-off processes.</li>

 </ol>



</hr>