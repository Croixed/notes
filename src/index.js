import './style.css';
import { format } from 'date-fns'; 
import Apple from './apple.jpg'; // placeholder
import testLog from './alt.js';

const content = document.querySelector('.content');
const PROJECTS = [];
const projTemplate = document.querySelector('.project');

// test that date-fns is working
(function generateSample() {
  const newDate = format(new Date(2022, 3, 4), 'yyyy-MM-dd');
  const ele = document.createElement('div');
  ele.textContent = newDate;
  content.appendChild(ele);
  testLog();
})();


// generate vars for each project
const projFactory = (title, desc, priority) => {
  // const notes = ['first note', 'second note', 'third note'];
  // const dom = genProjElement(title, desc);
  return { title, desc, priority};
};


const newProjTest = projFactory('word', 'words', 3);
// content.appendChild(newProjTest.dom);
console.log(newProjTest.title);
console.log(newProjTest.dom);


// generate the DOM element based on input from the proj object
// using projTemplate as a reference
function genProjElement(title, desc) {
  const proj = projTemplate.cloneNode(true);
  const projTitle = proj.querySelector('.project-title');
  projTitle.textContent = title;
  const projDesc = proj.querySelector('.project-desc');
  projDesc.textContent = desc;

  return proj;
};

// new project note creator
function newProjHandler() {
  const title = "Project Title"; // prompt("enter project title: ");
  const desc =  "Project Description"; // prompt("Enter project description: ");
  const newProj = projFactory(title, desc, 3);
  PROJECTS.push(newProj);
  // console.log(PROJECTS);
  displayController.regenDom();
}


const displayController = (() => {
  const regenDom = () => {
    console.log('DC log 1');
    content.innerHTML = '';
    for (const ele of PROJECTS) {
      console.log(ele.title);
      const tempEle = genProjElement(ele.title, ele.desc);
      content.appendChild(tempEle);
    }
  }
  return {regenDom}
})();

const newButton = document.getElementById('proj-button');
newButton.addEventListener("click", newProjHandler)