

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
	getQuoteItem: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/quotes/{quoteId}/items/{quoteItemId}?responseFields={responseFields}'
	}),
	getQuoteItems: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/quotes/{quoteId}/items?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	getQuoteItemsByQuoteName: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/quotes/customers/{customerAccountId}/{quoteName}/items?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	addItemToQuote: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/quotes/{quoteId}/items?responseFields={responseFields}'
	}),
	updateQuoteItem: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/quotes/{quoteId}/items/{quoteItemId}?responseFields={responseFields}'
	}),
	deleteQuoteItem: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/quotes/{quoteId}/items/{quoteItemId}'
	})
});
