"use strict";
(self["webpackChunkbundle_creator"] = self["webpackChunkbundle_creator"] || []).push([[316],{

/***/ 1316:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  offchainLookup: () => (/* binding */ offchainLookup),
  offchainLookupSignature: () => (/* binding */ offchainLookupSignature)
});

// UNUSED EXPORTS: ccipRequest, offchainLookupAbiItem

// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/public/call.js + 16 modules
var call = __webpack_require__(5176);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/stringify.js
var stringify = __webpack_require__(8463);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js + 1 modules
var base = __webpack_require__(1344);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/utils.js
var utils = __webpack_require__(1163);
;// ./node_modules/viem/_esm/errors/ccip.js



class OffchainLookupError extends base/* BaseError */.C {
    constructor({ callbackSelector, cause, data, extraData, sender, urls, }) {
        super(cause.shortMessage ||
            'An error occurred while fetching for an offchain result.', {
            cause,
            metaMessages: [
                ...(cause.metaMessages || []),
                cause.metaMessages?.length ? '' : [],
                'Offchain Gateway Call:',
                urls && [
                    '  Gateway URL(s):',
                    ...urls.map((url) => `    ${(0,utils/* getUrl */.I)(url)}`),
                ],
                `  Sender: ${sender}`,
                `  Data: ${data}`,
                `  Callback selector: ${callbackSelector}`,
                `  Extra data: ${extraData}`,
            ].flat(),
            name: 'OffchainLookupError',
        });
    }
}
class OffchainLookupResponseMalformedError extends base/* BaseError */.C {
    constructor({ result, url }) {
        super('Offchain gateway response is malformed. Response data must be a hex value.', {
            metaMessages: [
                `Gateway URL: ${(0,utils/* getUrl */.I)(url)}`,
                `Response: ${(0,stringify/* stringify */.A)(result)}`,
            ],
            name: 'OffchainLookupResponseMalformedError',
        });
    }
}
class OffchainLookupSenderMismatchError extends base/* BaseError */.C {
    constructor({ sender, to }) {
        super('Reverted sender address does not match target contract address (`to`).', {
            metaMessages: [
                `Contract address: ${to}`,
                `OffchainLookup sender address: ${sender}`,
            ],
            name: 'OffchainLookupSenderMismatchError',
        });
    }
}
//# sourceMappingURL=ccip.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/request.js
var request = __webpack_require__(6595);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeErrorResult.js
var decodeErrorResult = __webpack_require__(5462);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(4531);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/address.js
var address = __webpack_require__(4306);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/address/isAddress.js
var isAddress = __webpack_require__(9873);
;// ./node_modules/viem/_esm/utils/address/isAddressEqual.js


function isAddressEqual(a, b) {
    if (!(0,isAddress/* isAddress */.P)(a, { strict: false }))
        throw new address/* InvalidAddressError */.M({ address: a });
    if (!(0,isAddress/* isAddress */.P)(b, { strict: false }))
        throw new address/* InvalidAddressError */.M({ address: b });
    return a.toLowerCase() === b.toLowerCase();
}
//# sourceMappingURL=isAddressEqual.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(5419);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/isHex.js
var isHex = __webpack_require__(6394);
;// ./node_modules/viem/_esm/utils/ccip.js









const offchainLookupSignature = '0x556f1830';
const offchainLookupAbiItem = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
        {
            name: 'sender',
            type: 'address',
        },
        {
            name: 'urls',
            type: 'string[]',
        },
        {
            name: 'callData',
            type: 'bytes',
        },
        {
            name: 'callbackFunction',
            type: 'bytes4',
        },
        {
            name: 'extraData',
            type: 'bytes',
        },
    ],
};
async function offchainLookup(client, { blockNumber, blockTag, data, to, }) {
    const { args } = (0,decodeErrorResult/* decodeErrorResult */.W)({
        data,
        abi: [offchainLookupAbiItem],
    });
    const [sender, urls, callData, callbackSelector, extraData] = args;
    const { ccipRead } = client;
    const ccipRequest_ = ccipRead && typeof ccipRead?.request === 'function'
        ? ccipRead.request
        : ccipRequest;
    try {
        if (!isAddressEqual(to, sender))
            throw new OffchainLookupSenderMismatchError({ sender, to });
        const result = await ccipRequest_({ data: callData, sender, urls });
        const { data: data_ } = await (0,call/* call */.T)(client, {
            blockNumber,
            blockTag,
            data: (0,concat/* concat */.xW)([
                callbackSelector,
                (0,encodeAbiParameters/* encodeAbiParameters */.h)([{ type: 'bytes' }, { type: 'bytes' }], [result, extraData]),
            ]),
            to,
        });
        return data_;
    }
    catch (err) {
        throw new OffchainLookupError({
            callbackSelector,
            cause: err,
            data,
            extraData,
            sender,
            urls,
        });
    }
}
async function ccipRequest({ data, sender, urls, }) {
    let error = new Error('An unknown error occurred.');
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const method = url.includes('{data}') ? 'GET' : 'POST';
        const body = method === 'POST' ? { data, sender } : undefined;
        try {
            const response = await fetch(url.replace('{sender}', sender).replace('{data}', data), {
                body: JSON.stringify(body),
                method,
            });
            let result;
            if (response.headers.get('Content-Type')?.startsWith('application/json')) {
                result = (await response.json()).data;
            }
            else {
                result = (await response.text());
            }
            if (!response.ok) {
                error = new request/* HttpRequestError */.Ci({
                    body,
                    details: result?.error
                        ? (0,stringify/* stringify */.A)(result.error)
                        : response.statusText,
                    headers: response.headers,
                    status: response.status,
                    url,
                });
                continue;
            }
            if (!(0,isHex/* isHex */.q)(result)) {
                error = new OffchainLookupResponseMalformedError({
                    result,
                    url,
                });
                continue;
            }
            return result;
        }
        catch (err) {
            error = new request/* HttpRequestError */.Ci({
                body,
                details: err.message,
                url,
            });
        }
    }
    throw error;
}
//# sourceMappingURL=ccip.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cnJvcnMvY2NpcC5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy92aWVtL19lc20vdXRpbHMvYWRkcmVzcy9pc0FkZHJlc3NFcXVhbC5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy92aWVtL19lc20vdXRpbHMvY2NpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICcuLi91dGlscy9zdHJpbmdpZnkuanMnO1xuaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCB7IGdldFVybCB9IGZyb20gJy4vdXRpbHMuanMnO1xuZXhwb3J0IGNsYXNzIE9mZmNoYWluTG9va3VwRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHsgY2FsbGJhY2tTZWxlY3RvciwgY2F1c2UsIGRhdGEsIGV4dHJhRGF0YSwgc2VuZGVyLCB1cmxzLCB9KSB7XG4gICAgICAgIHN1cGVyKGNhdXNlLnNob3J0TWVzc2FnZSB8fFxuICAgICAgICAgICAgJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGZvciBhbiBvZmZjaGFpbiByZXN1bHQuJywge1xuICAgICAgICAgICAgY2F1c2UsXG4gICAgICAgICAgICBtZXRhTWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgICAuLi4oY2F1c2UubWV0YU1lc3NhZ2VzIHx8IFtdKSxcbiAgICAgICAgICAgICAgICBjYXVzZS5tZXRhTWVzc2FnZXM/Lmxlbmd0aCA/ICcnIDogW10sXG4gICAgICAgICAgICAgICAgJ09mZmNoYWluIEdhdGV3YXkgQ2FsbDonLFxuICAgICAgICAgICAgICAgIHVybHMgJiYgW1xuICAgICAgICAgICAgICAgICAgICAnICBHYXRld2F5IFVSTChzKTonLFxuICAgICAgICAgICAgICAgICAgICAuLi51cmxzLm1hcCgodXJsKSA9PiBgICAgICR7Z2V0VXJsKHVybCl9YCksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBgICBTZW5kZXI6ICR7c2VuZGVyfWAsXG4gICAgICAgICAgICAgICAgYCAgRGF0YTogJHtkYXRhfWAsXG4gICAgICAgICAgICAgICAgYCAgQ2FsbGJhY2sgc2VsZWN0b3I6ICR7Y2FsbGJhY2tTZWxlY3Rvcn1gLFxuICAgICAgICAgICAgICAgIGAgIEV4dHJhIGRhdGE6ICR7ZXh0cmFEYXRhfWAsXG4gICAgICAgICAgICBdLmZsYXQoKSxcbiAgICAgICAgICAgIG5hbWU6ICdPZmZjaGFpbkxvb2t1cEVycm9yJyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE9mZmNoYWluTG9va3VwUmVzcG9uc2VNYWxmb3JtZWRFcnJvciBleHRlbmRzIEJhc2VFcnJvciB7XG4gICAgY29uc3RydWN0b3IoeyByZXN1bHQsIHVybCB9KSB7XG4gICAgICAgIHN1cGVyKCdPZmZjaGFpbiBnYXRld2F5IHJlc3BvbnNlIGlzIG1hbGZvcm1lZC4gUmVzcG9uc2UgZGF0YSBtdXN0IGJlIGEgaGV4IHZhbHVlLicsIHtcbiAgICAgICAgICAgIG1ldGFNZXNzYWdlczogW1xuICAgICAgICAgICAgICAgIGBHYXRld2F5IFVSTDogJHtnZXRVcmwodXJsKX1gLFxuICAgICAgICAgICAgICAgIGBSZXNwb25zZTogJHtzdHJpbmdpZnkocmVzdWx0KX1gLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG5hbWU6ICdPZmZjaGFpbkxvb2t1cFJlc3BvbnNlTWFsZm9ybWVkRXJyb3InLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgT2ZmY2hhaW5Mb29rdXBTZW5kZXJNaXNtYXRjaEVycm9yIGV4dGVuZHMgQmFzZUVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHNlbmRlciwgdG8gfSkge1xuICAgICAgICBzdXBlcignUmV2ZXJ0ZWQgc2VuZGVyIGFkZHJlc3MgZG9lcyBub3QgbWF0Y2ggdGFyZ2V0IGNvbnRyYWN0IGFkZHJlc3MgKGB0b2ApLicsIHtcbiAgICAgICAgICAgIG1ldGFNZXNzYWdlczogW1xuICAgICAgICAgICAgICAgIGBDb250cmFjdCBhZGRyZXNzOiAke3RvfWAsXG4gICAgICAgICAgICAgICAgYE9mZmNoYWluTG9va3VwIHNlbmRlciBhZGRyZXNzOiAke3NlbmRlcn1gLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG5hbWU6ICdPZmZjaGFpbkxvb2t1cFNlbmRlck1pc21hdGNoRXJyb3InLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jY2lwLmpzLm1hcCIsImltcG9ydCB7IEludmFsaWRBZGRyZXNzRXJyb3IsIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2FkZHJlc3MuanMnO1xuaW1wb3J0IHsgaXNBZGRyZXNzIH0gZnJvbSAnLi9pc0FkZHJlc3MuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQWRkcmVzc0VxdWFsKGEsIGIpIHtcbiAgICBpZiAoIWlzQWRkcmVzcyhhLCB7IHN0cmljdDogZmFsc2UgfSkpXG4gICAgICAgIHRocm93IG5ldyBJbnZhbGlkQWRkcmVzc0Vycm9yKHsgYWRkcmVzczogYSB9KTtcbiAgICBpZiAoIWlzQWRkcmVzcyhiLCB7IHN0cmljdDogZmFsc2UgfSkpXG4gICAgICAgIHRocm93IG5ldyBJbnZhbGlkQWRkcmVzc0Vycm9yKHsgYWRkcmVzczogYiB9KTtcbiAgICByZXR1cm4gYS50b0xvd2VyQ2FzZSgpID09PSBiLnRvTG93ZXJDYXNlKCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FkZHJlc3NFcXVhbC5qcy5tYXAiLCJpbXBvcnQgeyBjYWxsIH0gZnJvbSAnLi4vYWN0aW9ucy9wdWJsaWMvY2FsbC5qcyc7XG5pbXBvcnQgeyBPZmZjaGFpbkxvb2t1cEVycm9yLCBPZmZjaGFpbkxvb2t1cFJlc3BvbnNlTWFsZm9ybWVkRXJyb3IsIE9mZmNoYWluTG9va3VwU2VuZGVyTWlzbWF0Y2hFcnJvciwgfSBmcm9tICcuLi9lcnJvcnMvY2NpcC5qcyc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdEVycm9yLCB9IGZyb20gJy4uL2Vycm9ycy9yZXF1ZXN0LmpzJztcbmltcG9ydCB7IGRlY29kZUVycm9yUmVzdWx0IH0gZnJvbSAnLi9hYmkvZGVjb2RlRXJyb3JSZXN1bHQuanMnO1xuaW1wb3J0IHsgZW5jb2RlQWJpUGFyYW1ldGVycyB9IGZyb20gJy4vYWJpL2VuY29kZUFiaVBhcmFtZXRlcnMuanMnO1xuaW1wb3J0IHsgaXNBZGRyZXNzRXF1YWwgfSBmcm9tICcuL2FkZHJlc3MvaXNBZGRyZXNzRXF1YWwuanMnO1xuaW1wb3J0IHsgY29uY2F0IH0gZnJvbSAnLi9kYXRhL2NvbmNhdC5qcyc7XG5pbXBvcnQgeyBpc0hleCB9IGZyb20gJy4vZGF0YS9pc0hleC5qcyc7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5leHBvcnQgY29uc3Qgb2ZmY2hhaW5Mb29rdXBTaWduYXR1cmUgPSAnMHg1NTZmMTgzMCc7XG5leHBvcnQgY29uc3Qgb2ZmY2hhaW5Mb29rdXBBYmlJdGVtID0ge1xuICAgIG5hbWU6ICdPZmZjaGFpbkxvb2t1cCcsXG4gICAgdHlwZTogJ2Vycm9yJyxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3NlbmRlcicsXG4gICAgICAgICAgICB0eXBlOiAnYWRkcmVzcycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd1cmxzJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmdbXScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdjYWxsRGF0YScsXG4gICAgICAgICAgICB0eXBlOiAnYnl0ZXMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnY2FsbGJhY2tGdW5jdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAnYnl0ZXM0JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2V4dHJhRGF0YScsXG4gICAgICAgICAgICB0eXBlOiAnYnl0ZXMnLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9mZmNoYWluTG9va3VwKGNsaWVudCwgeyBibG9ja051bWJlciwgYmxvY2tUYWcsIGRhdGEsIHRvLCB9KSB7XG4gICAgY29uc3QgeyBhcmdzIH0gPSBkZWNvZGVFcnJvclJlc3VsdCh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGFiaTogW29mZmNoYWluTG9va3VwQWJpSXRlbV0sXG4gICAgfSk7XG4gICAgY29uc3QgW3NlbmRlciwgdXJscywgY2FsbERhdGEsIGNhbGxiYWNrU2VsZWN0b3IsIGV4dHJhRGF0YV0gPSBhcmdzO1xuICAgIGNvbnN0IHsgY2NpcFJlYWQgfSA9IGNsaWVudDtcbiAgICBjb25zdCBjY2lwUmVxdWVzdF8gPSBjY2lwUmVhZCAmJiB0eXBlb2YgY2NpcFJlYWQ/LnJlcXVlc3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBjY2lwUmVhZC5yZXF1ZXN0XG4gICAgICAgIDogY2NpcFJlcXVlc3Q7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFpc0FkZHJlc3NFcXVhbCh0bywgc2VuZGVyKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBPZmZjaGFpbkxvb2t1cFNlbmRlck1pc21hdGNoRXJyb3IoeyBzZW5kZXIsIHRvIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjY2lwUmVxdWVzdF8oeyBkYXRhOiBjYWxsRGF0YSwgc2VuZGVyLCB1cmxzIH0pO1xuICAgICAgICBjb25zdCB7IGRhdGE6IGRhdGFfIH0gPSBhd2FpdCBjYWxsKGNsaWVudCwge1xuICAgICAgICAgICAgYmxvY2tOdW1iZXIsXG4gICAgICAgICAgICBibG9ja1RhZyxcbiAgICAgICAgICAgIGRhdGE6IGNvbmNhdChbXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBlbmNvZGVBYmlQYXJhbWV0ZXJzKFt7IHR5cGU6ICdieXRlcycgfSwgeyB0eXBlOiAnYnl0ZXMnIH1dLCBbcmVzdWx0LCBleHRyYURhdGFdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdG8sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YV87XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IE9mZmNoYWluTG9va3VwRXJyb3Ioe1xuICAgICAgICAgICAgY2FsbGJhY2tTZWxlY3RvcixcbiAgICAgICAgICAgIGNhdXNlOiBlcnIsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgZXh0cmFEYXRhLFxuICAgICAgICAgICAgc2VuZGVyLFxuICAgICAgICAgICAgdXJscyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNjaXBSZXF1ZXN0KHsgZGF0YSwgc2VuZGVyLCB1cmxzLCB9KSB7XG4gICAgbGV0IGVycm9yID0gbmV3IEVycm9yKCdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB1cmwgPSB1cmxzW2ldO1xuICAgICAgICBjb25zdCBtZXRob2QgPSB1cmwuaW5jbHVkZXMoJ3tkYXRhfScpID8gJ0dFVCcgOiAnUE9TVCc7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBtZXRob2QgPT09ICdQT1NUJyA/IHsgZGF0YSwgc2VuZGVyIH0gOiB1bmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybC5yZXBsYWNlKCd7c2VuZGVyfScsIHNlbmRlcikucmVwbGFjZSgne2RhdGF9JywgZGF0YSksIHtcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpPy5zdGFydHNXaXRoKCdhcHBsaWNhdGlvbi9qc29uJykpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKS5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gKGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgSHR0cFJlcXVlc3RFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IHJlc3VsdD8uZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc3RyaW5naWZ5KHJlc3VsdC5lcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNIZXgocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IE9mZmNoYWluTG9va3VwUmVzcG9uc2VNYWxmb3JtZWRFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvciA9IG5ldyBIdHRwUmVxdWVzdEVycm9yKHtcbiAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgIGRldGFpbHM6IGVyci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2NpcC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=