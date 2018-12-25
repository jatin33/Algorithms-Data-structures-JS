function convertHTML(str) {
  // &colon;&rpar;
  const regex = new RegExp(/[!@#$%^&*(),.?":{}|<>]+/g);
  const charToReplace = str.charAt(str.search(regex));
  console.log(charToReplace);
  return str.replace(regex,convertToEntity(charToReplace));
}
// convertToEntity('>');

function convertToEntity(character){
  if(character === '>'){
   return '&gt;'; 
  }else if(character === '<'){
    return '&lt;'; 
  }else if(character === '&'){
    return '&amp;'; 
  }else if(character === "'"){
    return '&apos;'; 
  }
  else if(character === '"'){
    return '&quot;'; 
  }
}

// convertToEntity('>');
convertHTML("<>");

//===================Test Cases===================
// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// Passed

// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// Passed

// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// Passed

// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// Passed

// convertHTML("Schindler's List") should return Schindler&​apos;s List but returns 'Schindler\'s List'
// Failed

// convertHTML("<>") should return &​lt;&​gt; but returns '&lt;'
// Failed

// convertHTML("abc") should return abc.
// Passed
