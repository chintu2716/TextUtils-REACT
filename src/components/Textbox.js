import React,{useState} from 'react'

export default function Textbox(props) {

     const handleupClick = ()=>{
      //   console.log("button clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
     }
     
     const handleonChange = (event)=>{
      //   console.log("onchange");
        setText(event.target.value);
     }
     const handlelowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
     }
     const handleClearText = ()=>{
      let newText = "";
      setText(newText);
      props.showAlert("Text has been cleared","success");
     }
     const no_of_words = (text)=>{
           if(text==="")
           return 0;
           return (text.trim().split(" ").length);
     }
     const handleCapitalizeText = ()=>{
                 let myArr = text.split(/[ ]+/);
                 let len = myArr.length;
                 for(let i=0;i<len;i++){
                  myArr[i]=myArr[i].charAt(0).toUpperCase()+(myArr[i].substring(1)).toLowerCase();
                 }
                 let newText = "";
                 for(let i=0;i<len;i++){
               newText+=myArr[i];
               newText+=" ";
                 }
                  setText(newText);
                  props.showAlert("Text has been capitalized","success");
                }
               // instead you can also write
               //  setText(myArr.join(" "));
                //  }
                //  const handleCapitalizeText = () => {
                //   let lowercase = text.toLowerCase();
                //   let words = lowercase.split(" ");
                //   let newWords = words.map((word) => {
                //     return word.charAt(0).toUpperCase() + word.slice(1);
                //   });
                //   let newText = newWords.join(" ");
                //   setText(newText);
                // }

             const handleInverseText = ()=>{
                   let len = text.length;
                   let newText = ""; 
                   for(let i = 0; i <len; i++) {
                         const cur = text[i];  
                       if(cur.toUpperCase()===cur)
                            newText+=cur.toLowerCase();
                       else if(cur.toLowerCase()===cur)
                          newText+=cur.toUpperCase();
                        }   
                   
                  setText(newText); 
               }

           const handleCopyText = ()=>{
              var text = document.getElementById('textbox');       
              text.select();
              navigator.clipboard.writeText(text.value);
              alert("Text copied"); 
           }
           const handleDownloadText = ()=>{
               var text = document.getElementById('textbox').value;
               
               var hidden_a = document.createElement('a');
               hidden_a.setAttribute("href","data:text/plain;charset:utf-8,"+encodeURIComponent(text));
               hidden_a.setAttribute("download","text");

               document.body.appendChild(hidden_a);

               hidden_a.click();
               document.body.removeChild(hidden_a);
           } 

           const handleExtraSpaces = ()=>{
               var newText = text.split(/[ ]+/);
               setText(newText.join(" "));
           }

        const handleReverseText = ()=>{
             let newText = "";
             for (let i = text.length-1; i >=0;i--) {
                 newText+=text[i];
               
             }
             setText(newText);
        }    
   

    const [text, setText] = useState("");
  return (
    <>
    <div className="conainer" style={{color: props.mode==='dark'?'white':'#042743'}}>    
        <h2>{props.heading}</h2>
<div className="mb-3">
  
  <textarea className="form-control" value={text} id="textbox" style={{backgroundColor: props.mode==='dark'?'darkgrey':'white', color: props.mode==='dark'?'white':'#042743'}} onChange = {handleonChange} placeholder='Enter your text here' rows="8"></textarea>
  </div>
     <button className="btn btn-primary btn-sm mx-1 my-2" onClick={handleupClick}>Convert to Uppercase</button>
     <button className="btn btn-primary btn-sm mx-1" onClick={handlelowClick}>Convert to Lowercase</button>
     <button className="btn btn-primary btn-sm mx-1" onClick={handleInverseText}>Inverse Case</button>
     <button className="btn btn-primary btn-sm mx-1" onClick={handleCapitalizeText}>Capitalize Text</button>
     <button className="btn btn-primary btn-sm mx-1" onClick={handleExtraSpaces}>Remove Extraspaces</button>
     <button className="btn btn-primary btn-sm mx-1" onClick={handleReverseText}>Reverse Text</button>
     <button className="btn btn-primary btn-sm mx-1" onClick={handleCopyText}>Copy Text to clipboard</button>
     <button className="btn btn-primary btn-sm mx-1" onClick={handleDownloadText} >Download Text</button>
     <button className="btn btn-primary btn-sm mx-1" onClick={handleClearText}>Clear Text</button>         
                                              
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
       <h2>Your Text Summary</h2>
       <p>{no_of_words(text)} words and {text.length} characters</p>
       <p> {0.008*no_of_words(text)} minutes to read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter your text above to preview it here"}</p> 
    </div>

    </>
  )
}
