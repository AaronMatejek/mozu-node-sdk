

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getCustomerSets: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/customer/customerSets/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&responseFields={responseFields}'
	}),
	getCustomerSet: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/customer/customerSets/{code}?responseFields={responseFields}'
	})
});
