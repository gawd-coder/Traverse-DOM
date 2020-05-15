//recursive function to iterate over all nodes and print the whole tree
function printNodes(node, level){
    //start the message that will identify the opening of this node
    let message = `${"-".repeat(4*level)}Node: ${node.nodeName}`;
    // If the node also has nodeValue associated with it,like Text and other text-line nodes
    if(node.nodeValue){
        message += `,content: '${node.nodeValue.trim()}'`;
    }
    console.log(message);
    //fetching child nodes
    var children = node.childNodes || [];
    if(children.length > 0){
        console.log(`${"-".repeat(4*level)}End of:${node.nodeName}`);
    }
    for(var i=0;i<children.length;i++){
        printNodes(children[i],level + 1);
    }
}

printNodes(document,0);