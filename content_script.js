var Raven = require('raven-js');
    Raven.addPlugin(require('raven-js/plugins/chrome-extension'));

Raven.config('http://402f1559a7214c2c9539ae63fe60c335@localhost:8000/8',{
  release:'1.0.7'
}).install();

console.log("testing 1 2 3")
console.log("testing 1 2 3")
console.log("testing 1 2 3")


function walk(node)
{
	// I stole this function from someone who stole this function from here:
	// http://is.gd/mwZp7E

	// MLB added the check for the date, because it's only spooky if it's in spooktober ...

	var d = new Date();
		var child, next;

		switch ( node.nodeType )
		{
			case 1:  // Element
			case 9:  // Document
			case 11: // Document fragment
				child = node.firstChild;
				while ( child )
				{
					next = child.nextSibling;
					walk(child);
					child = next;
				}
				break;

			case 3: // Text node
				handleText(node);
				break;
		}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bCloud\b/g, "Butt");
	v = v.replace(/\bcloud\b/g, "butt");
	textNode.nodeValue = v;
	if(Math.random()>0.9){
		foo.bar();
	}
}

Raven.context(function () { // wraps in try/catch
	walk(document.body);
});
