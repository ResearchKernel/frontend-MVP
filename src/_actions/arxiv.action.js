import axios from "axios";
var XMLParser = require('react-xml-parser');
var XMLTojs = require('xml2js');

// // Changes XML to JSON
// function xmlToJson(xml) {
// 	// Create the return object
// 	var obj = {};
//     console.log(xml.nodeType)
// 	if (xml.nodeType == 1) { // element
// 		// do attributes
// 		if (xml.attributes.length > 0) {
// 		obj["@attributes"] = {};
// 			for (var j = 0; j < xml.attributes.length; j++) {
// 				var attribute = xml.attributes.item(j);
// 				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
// 			}
// 		}
// 	} else if (xml.nodeType == 3) { // text
// 		obj = xml.nodeValue;
// 	}

// 	// do children
// 	if (xml.hasChildNodes()) {
// 		for(var i = 0; i < xml.childNodes.length; i++) {
// 			var item = xml.childNodes.item(i);
// 			var nodeName = item.nodeName;
// 			if (typeof(obj[nodeName]) == "undefined") {
// 				obj[nodeName] = xmlToJson(item);
// 			} else {
// 				if (typeof(obj[nodeName].push) == "undefined") {
// 					var old = obj[nodeName];
// 					obj[nodeName] = [];
// 					obj[nodeName].push(old);
// 				}
// 				obj[nodeName].push(xmlToJson(item));
// 			}
// 		}
// 	}
// 	return obj;
// };

// function parseXml(xmlStr) {
//     return new window.DOMParser().parseFromString(xmlStr, "text/xml");
// }

export function fetchArxivData(query) {
  return dispatch => {
    axios.get(`http://export.arxiv.org/api/query?search_query=all:${query}`)
      .then(response => {
				// var xml = new XMLParser().parseFromString(response.data);
				// console.log(xml.getElementsByTagName("entry"));
				// var entry = xml.getElementsByTagName("entry");
        var arr = [];
        var parseString = XMLTojs.parseString;
        parseString(response.data, (error,result)=>{
          arr = result.feed.entry
        })
				// for (var key in entry){
				// 	arr.push([]);
				// 	var nodes = entry[key].children;
				// 	console.log(nodes);
				// 	for (var ele in nodes){  
				// 			if(nodes[ele]){
				// 				arr[key].push(nodes[ele]);
				// 			}
				// 	}
				// }
				// console.log(arr);
        dispatch({
          type: "ARXIV_FULFILLED",
          arxivData: arr,
        })
      }) 
      .catch(error => {
        dispatch({
          type: "AXIV_REJECTED",
          cardData: error,
      })
    })
  }
}
