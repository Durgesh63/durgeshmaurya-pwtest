const videolink = {
    'ReactJS - Introduction': "https://player.vimeo.com/video/365830978",
    'ReactJS - Understanding SPAs and MPAs': "https://player.vimeo.com/video/365831082",
    'ReactJS - Creating our First React App': "https://player.vimeo.com/video/365831149",
    'ReactJS - Project Structure created by CRA': "https://player.vimeo.com/video/365831198",
    'ReactJS - Introduction to JSX': "https://player.vimeo.com/video/365831286",
  
    'ReactJS - JSX Behind the Scenes': "https://player.vimeo.com/video/365831407",
  
    'ReactJS - Adding Styles to React Elements': "https://player.vimeo.com/video/365831502",
  
    'ReactJS - Create React Elements Dynamically': "https://player.vimeo.com/video/365933875",
  
    'ReactJS - Creating our First React Componen': "https://player.vimeo.com/video/365933945",
    'ReactJS - Passing Data to Components using Props': "https://player.vimeo.com/video/365933985",
  
    'ReactJS - Import and Export of Modules': "https://player.vimeo.com/video/365934021",
    'ReactJS - Introduction to CSS Modules':  "https://player.vimeo.com/video/365934058",
    'ReactJS - Creating Mobile Responsive Components': "https://player.vimeo.com/video/365934134",
    'ReactJS - Stateful vs Stateless Components': "https://player.vimeo.com/video/367441877",
    'ReactJS - Creating Class-based Components': "https://player.vimeo.com/video/367441923",
    'ReactJS - More about setState() Method':"https://player.vimeo.com/video/367442030",
    'ReactJS - Passing Props to Class-based Components': "https://player.vimeo.com/video/367442144",
    'ReactJS - Passing Function as Props': "https://player.vimeo.com/video/367442267",
    'ReactJS - Practice Problem: Product Details Page': "https://player.vimeo.com/video/367442372",
    'ReactJS - Practice Problem: Product Details Page [Solution] - Part 1': "https://player.vimeo.com/video/370491656",
    'ReactJS - Practice Problem: Product Details Page [Solution] - Part 2': "https://player.vimeo.com/video/370491701",
    'ReactJS - Practice Problem: Product Details Page [Solution] - Part 3': "https://player.vimeo.com/video/370491755",
    'ReactJS - render() method - Behind the scenes':"https://player.vimeo.com/video/370492483" ,
    'ReactJS - Component Lifecycle - Creation': "https://player.vimeo.com/video/370492495",
    'ReactJS - Component Lifecycle - Updation': "https://player.vimeo.com/video/370492500",
    'ReactJS - shouldComponentUpdate() Lifecycle Method': "https://player.vimeo.com/video/370492505",
  }

  function getVideo(elem){
    let iframeelemt = document.getElementById('videoframe')
    let tutorial_name = document.getElementById('tutorial-name')
    
    var conform = confirm(`Want to play ? " ${elem.innerHTML} "`)
    if(conform){
    iframeelemt.src = videolink[elem.innerHTML]
    tutorial_name.innerHTML = elem.innerHTML
    }
  }
