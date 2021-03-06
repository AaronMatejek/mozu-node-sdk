

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getFacet: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/facets/{facetId}?validate={validate}&responseFields={responseFields}'
	}),
	getFacetCategoryList: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/facets/category/{categoryId}?includeAvailable={includeAvailable}&validate={validate}&responseFields={responseFields}'
	}),
	addFacet: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/facets/?responseFields={responseFields}'
	}),
	updateFacet: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/catalog/admin/facets/{facetId}?responseFields={responseFields}'
	}),
	deleteFacetById: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/catalog/admin/facets/{facetId}'
	})
});
