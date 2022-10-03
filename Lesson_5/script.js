//EX!
function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}

function modificator (func) {
    return func.bind(func, 'test', 'sample')
}

testFunc = modificator( sampleFunc )

testFunc()

//EX3
function testArguments () {
    function generateError ( numArgs ) {
        throw ( {
          name: "Application",
          message: "Invalid arguments",
          stack: `
              Function need 3 arguments, but only ${numArgs} present 
          `
     })
    }
    try {
        arguments.length >= 3 ? null : generateError ( arguments.length )
    }
    catch ( err ) {
        console.error ( `${err.name}: ${err.message}\n${err.stack}` )
    }
}

testArguments ( "Google" )