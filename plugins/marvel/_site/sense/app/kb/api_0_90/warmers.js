define([],function(){return function(e){e.addEndpointDescription("_get_warmer",{patterns:["_warmer","_warmer/{id}"]}),e.addEndpointDescription("_delete_warmer",{methods:["DELETE"],patterns:["{indices}/_warmer","{indices}/_warmer/{id}"]}),e.addEndpointDescription("_put_warmer",{methods:["PUT"],patterns:["{indices}/_warmer","{indices}/_warmer/{id}","{indices}/{types}/_warmer/{id}"],data_autocomplete_rules:{query:{},facets:{}}})}});