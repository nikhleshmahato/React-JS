import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyTag(){
  return (
    <h1>This is my custom Tag</h1>
  );
}

const directTag = <a href="http://google.com" target="_blank"> visit google</a> 

const objectTag = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    text: 'Click Me'
};

createRoot(document.getElementById("root")).render(
  <>
  {/* {objectTag}  doesn't work because render need tags or parsed tag not object*/}
  {directTag}
  {MyTag()}
  <App/>
  <MyTag/> 
  </>
);