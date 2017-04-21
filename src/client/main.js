// import hljs from "highlight.js";
import riot from "riot";
import compiler from "riot-compiler";

// riot.mount('*');

compiler.compile(function() {
  // here tags are compiled and riot.mount works synchronously
  var tags = riot.mount('*')
  console.log("tags", tags);
})