function convertHTML(str) {
  // &colon;&rpar;
   return str.replace(/&/g,'&amp;')
  .replace(/>/g,'&gt;')
  .replace(/</g,'&lt;')
  .replace(/'/g,'&apos;')
  .replace(/"/g,'&quot;');
}
// convertToEntity('>');


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
// Passed

// convertHTML("<>") should return &​lt;&​gt; but returns '&lt;'
// Passed

// convertHTML("abc") should return abc.
// Passed
