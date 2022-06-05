# Clean My JS Projects

 The majority of programmers agree that one of the biggest problems in the development of the JS world is the way of which project dependencies are managed, that in some cases the `node_modules` folder can exceed 1GB in your size.

  To resolve this, I create the **Clean My JS Project**, an script used to remove this `node_modules` folders in all your projects.

## 🚀 How to use it?
 Has two forms to use this script, that are:

### 🚄 Speed use
1. Clone this repository ([clicking here](https://codeload.github.com/MattFerreira18/cleanMyJsProjects/zip/refs/heads/main)) and move the entrypoint file (`index.js`) to the folder that has your JS projects.
2. Open your terminal in this folder and call the `index.js` with node (e.g: `node index.js`) and await to finish.

### 🛠️ Recommended use
1. Clone this repository ([clicking here](https://codeload.github.com/MattFerreira18/cleanMyJsProjects/zip/refs/heads/main)) in the folder of your preference.

2. Open the project folder, rename the `.env.example.json` to `.env.json`.

3. Open the `.env.json` and populate the environment variable with the path of the folder that has your JS projects.

4. Open the terminal in this folder and call the `index.js` with node (e.g: `node index.js`) and await to finish.


5. (optional) If you want to map this script in your S.O (obs: this are tested only in GNU systems), you can create a alias. Open the config file of your terminal in a code editor (if your terminal is Bash, the file has the name of `.bashrc`, or if is ZSH, the file has he name of `.zshrc`, both are in your **HOME** folder). In any location, create an alias pointing to the execution of the script, e.g:
```bash
  alias clean-js-projects = 'node ./${SCRIPT_LOCATION}'
```
## ✍ Author
<a href="https://www.github.com/MattFerreira18">
  <img src="https://www.github.com/MattFerreira18.png" style="border-radius: 50%" width="100px">
  <p>Matheus Ferreira</p>
</a>

<div>
  <a href="https://www.linkedin.com/in/matheus-ferreira-9267091b3/">
    <img src="https://img.shields.io/badge/-Matheus-blue?style=flat-square&logo=Linkedin&logoColor=white" alt="linkedIn badge">
  </a>
  <a href="https://github.com/MattFerreira18">
    <img src="https://img.shields.io/badge/-MattFerreira18-0d1117?style=flat-square&logo=github&logoColor=white" alt="">
  </a>
  <a href="mailto:matheusferreira.dev@gmail.com">
    <img src="https://img.shields.io/badge/-matheusferreira.dev@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white" alt="email badge">
  </a>
</div>