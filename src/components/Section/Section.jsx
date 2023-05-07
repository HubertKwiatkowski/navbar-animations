import commonData from "../../data/commonData.js";
import PropTypes from "prop-types";

import './Section.css'

const cData = commonData


const Section = ({technology, time, title, imageUrl, background, color }) => {
  return (
    <div className="main-wrapper">
      <aside>
        <div className="img-wrapper" >
          <img src={imageUrl} alt={technology}/>
        </div>
      </aside>
      <section>
        <header style={{background, color}}>
          <div className="technology">
            <p>{technology}</p>
          </div>
          <div className="title">
            {title}
          </div>
          <div className="read-time">
            {time}
          </div>
        </header>
        <article>
          <p>
            Are you a junior developer looking to learn TypeScript? If so, you&#x27;ve come to the right place! In this article, we&#x27;ll guide you through the basics of TypeScript and help you get started with this powerful programming language.
          </p>
          <h3>Why Learn TypeScript?</h3>
          <p>
            TypeScript is a superset of JavaScript that adds static typing to the language. This means that you can catch many errors at compile time, rather than at runtime, which can save you a lot of time and headaches down the road. Additionally, TypeScript provides many features that make it easier to write complex applications, including interfaces, classes, and modules.
          </p>
          <h3>Installing TypeScript</h3>
          <p>
            The first step to getting started with TypeScript is to install it on your computer. You can do this using npm, the package manager for Node.js. Simply open a terminal and type the following command:<br/>
            npm install -g typescript<br/>
            This will install the TypeScript compiler globally on your machine, which you can then use to compile your TypeScript code into JavaScript.<br/>
            <br/>
            Basic Syntax<br/>
            TypeScript has a similar syntax to JavaScript, with a few key differences. One of the main differences is that TypeScript requires you to define the types of your variables, functions, and other objects. For example, here&#x27;s how you would define a variable with the type string:<br/>
            let myString: string = &quot;Hello, world!&quot;;<br/>
            TypeScript also supports interfaces, which allow you to define the shape of objects:<br/>
            {cData.const1}
          </p>
          <h3>Step-by-Step Guide</h3>
          <p>
            Now that you understand the basics of TypeScript, let&&#x27; s walk through a step-by-step guide to building a simple TypeScript application.<br/>
            <br/>
            Step 1: Create a New Project<br/>
            The first step is to create a new project directory and initialize it with npm. Open a terminal and navigate to the directory where you want to create your project, then type the following command:<br/>
            npm init<br/>
            This will walk you through the process of creating a new npm package, including specifying a name, version, and description for your project.<br/>
            <br/>
            Step 2: Install TypeScript<br/>
            Next, you&#x27;ll need to install TypeScript. Open a terminal and navigate to your project directory, then type the following command:<br/>
            npm install typescript --save-dev<br/>
            This will install TypeScript as a development dependency for your project.<br/>
            <br/>
            Step 3: Configure TypeScript<br/>
            Once TypeScript is installed, you&#x27;ll need to create a tsconfig.json file to configure your TypeScript project. This file tells the TypeScript compiler how to compile your code. Here&#x27;s an example tsconfig.json file:<br/>
            {cData.const2}<br/>
            This configuration sets the target to ECMAScript 5, the module system to CommonJS, and enables source maps for debugging.<br/>
            <br/>
            Step 4: Write Some TypeScript Code<br/>
            Now that your project is set up, you can start writing TypeScript code. Create a new file in your project directory called index.ts, and add the following code:
            function sayHello(name: string) {cData.const3} sayHello(&quot;World&quot;);
            This code defines a function that takes a string parameter and logs a message to the console.<br/>
            <br/>
            Step 5: Compile Your Code<br/>
            Finally, you need to compile your TypeScript code into JavaScript. Open a terminal, navigate to your project directory, and type the following command:<br/>
            tsc<br/>
            This will compile your TypeScript code into JavaScript and create a new file called index.js.<br/>
            <br/>
            Step 6: Run Your Code<br/>
            Now that your TypeScript code is compiled, you can run it using Node.js. Open a terminal, navigate to your project directory, and type the following command:<br/>
            node index.js<br/>
            This will run your compiled JavaScript code and log the message &quot;Hello, World!&quot; to the console.
          </p>
          <h3>Conclusion</h3>
          <p>
            Congratulations! You&#x27;ve now learned the basics of TypeScript and how to get started with this powerful programming language. By following this step-by-step guide, you should now be able to build simple TypeScript applications with ease. Good luck, and happy coding!
          </p>
        </article>

      </section>
    </div>
  )
}

Section.propTypes = {
  technology: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Section;