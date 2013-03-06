steal(function() {
	/**
	 * @constructor documentjs/tags/description @description
	 * @tag documentation
	 * @parent DocumentJS 
	 * 
	 * The text following `@description` is added at the top
	 * of the documentation page. By default any text
	 * in a comment that isn't after a multi-line `@` directive is added to 
	 * the `description` of the [DocObject]. `@description`
	 * can be used to escape a multi-line `@` directive.
	 * 
	 * @signature `@description`
	 * 
	 * @codestart
	 * /**
	 *  * @signature `new lib.Component(name)`
	 *  * @description A component for the lib library.
	 *  *|
	 * lib.Component = function(name){}
	 * @codeend
	 * 
	 */
	return  {
		add: function( line ) {
			var m = line.match(/^\s*@description\s*(.*)/)
			if ( m ) {
				this.description = m[1]+" ";
				return ["default","description"]
			}
		}
	};
})