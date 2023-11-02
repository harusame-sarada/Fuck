function hasClass(el, className)
{
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

function addClass(el, className)
{
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
};

function removeClass(el, className)
{
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
};

subpanel = document.getElementById("sidenav");
function buildsettings(){
    $code = '<a onclick="closesettings();" class="fa-solid fa-circle-xmark closebutton"></a>';
    $settingsbox1 = '<div id="settings-boxes"></div>'
    $settingsbox2 = '<div id="settings-boxes"></div>'
    subpanel.innerHTML = $code;
    subpanel.innerHTML += $settingsbox1;
    subpanel.innerHTML += $settingsbox2;
};

function hide_sidenav(){
  if (subpanel.hidden == false){
      subpanel.hidden = true;
  }else{
      subpanel.hidden = false;
  }
};

icons = document.getElementById("icbuttons");
swtch = document.getElementById("switch");

function sidebar() {
  icons.style.display="grid";
  icons.style.position="fixed";
  icons.style.alignItems="center";
  icons.style.justifyItems="center";
  icons.style.right="0";
  icons.style.left="";
  localStorage.setItem("bar", "side");
  localStorage.setItem("icon", "off");
};

function topbar() {
  icons.style.display="flex";
  icons.style.alignItems="left";
  icons.style.justifyItems="left";
  icons.style.right="";
  icons.style.left="0";
  localStorage.setItem("bar", "top");
  localStorage.setItem("icon", "on");
  
};

function bartoggle() {
  if (localStorage.getItem("bar") == 'side'){
    topbar();
  }else{
    sidebar();
  }
};

function setuserbar() {
  if (localStorage.getItem("bar") == 'side'){
    sidebar();
  }else{
    topbar();
  }
};
function settoggleicon() {
  if (localStorage.getItem("icon") == 'off'){
    swtch.classList.add("fa-toggle-off");
    swtch.classList.remove("fa-toggle-on");
  }else{
    swtch.classList.add("fa-toggle-on");
    swtch.classList.remove("fa-toggle-off");
  }
};

function closesettings() {
    subpanel.hidden = true;
};
  
setuserbar();
settoggleicon();
buildsettings();
