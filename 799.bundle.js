"use strict";
(self["webpackChunkbundle_creator"] = self["webpackChunkbundle_creator"] || []).push([[799],{

/***/ 6799:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  secp256k1: () => (/* binding */ secp256k1)
});

// UNUSED EXPORTS: encodeToCurve, hashToCurve, schnorr

// NAMESPACE OBJECT: ./node_modules/viem/node_modules/@noble/curves/esm/abstract/utils.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, {
  aK: () => (utils_aInRange),
  e8: () => (abool),
  DO: () => (abytes),
  dJ: () => (bitLen),
  OG: () => (bitMask),
  My: () => (bytesToHex),
  Ph: () => (utils_bytesToNumberBE),
  lX: () => (utils_bytesToNumberLE),
  Id: () => (utils_concatBytes),
  fg: () => (createHmacDrbg),
  qj: () => (utils_ensureBytes),
  aT: () => (hexToBytes),
  r4: () => (utils_inRange),
  aY: () => (isBytes),
  x: () => (memoized),
  lq: () => (utils_numberToBytesBE),
  z: () => (numberToBytesLE),
  zW: () => (numberToHexUnpadded),
  Q5: () => (validateObject)
});

// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/sha256.js + 1 modules
var esm_sha256 = __webpack_require__(7663);
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/_assert.js
var _assert = __webpack_require__(9190);
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/utils.js + 1 modules
var utils = __webpack_require__(2531);
;// ./node_modules/@noble/hashes/esm/hmac.js


// HMAC (RFC 2104)
class HMAC extends utils/* Hash */.Vw {
    constructor(hash, _key) {
        super();
        this.finished = false;
        this.destroyed = false;
        (0,_assert/* hash */.tW)(hash);
        const key = (0,utils/* toBytes */.ZJ)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function')
            throw new Error('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for (let i = 0; i < pad.length; i++)
            pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for (let i = 0; i < pad.length; i++)
            pad[i] ^= 0x36 ^ 0x5c;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        (0,_assert/* exists */.t2)(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        (0,_assert/* exists */.t2)(this);
        (0,_assert/* bytes */.ee)(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 * @example
 * import { hmac } from '@noble/hashes/hmac';
 * import { sha256 } from '@noble/hashes/sha2';
 * const mac1 = hmac(sha256, 'key', 'message');
 */
const hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
hmac.create = (hash, key) => new HMAC(hash, key);
//# sourceMappingURL=hmac.js.map
;// ./node_modules/viem/node_modules/@noble/curves/esm/abstract/utils.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// 100 lines of code in the file are duplicated from noble-hashes (utils).
// This is OK: `abstract` directory does not use noble-hashes.
// User may opt-in into using different hashing library. This way, noble-hashes
// won't be included into their bundle.
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
function isBytes(a) {
    return (a instanceof Uint8Array ||
        (a != null && typeof a === 'object' && a.constructor.name === 'Uint8Array'));
}
function abytes(item) {
    if (!isBytes(item))
        throw new Error('Uint8Array expected');
}
function abool(title, value) {
    if (typeof value !== 'boolean')
        throw new Error(`${title} must be valid boolean, got "${value}".`);
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    abytes(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    // Big Endian
    return BigInt(hex === '' ? '0' : `0x${hex}`);
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
    return;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('padded hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
    }
    return array;
}
// BE: Big Endian, LE: Little Endian
function utils_bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function utils_bytesToNumberLE(bytes) {
    abytes(bytes);
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
function utils_numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
function numberToBytesLE(n, len) {
    return utils_numberToBytesBE(n, len).reverse();
}
// Unpadded, rarely used
function numberToVarBytesBE(n) {
    return hexToBytes(numberToHexUnpadded(n));
}
/**
 * Takes hex string or Uint8Array, converts to Uint8Array.
 * Validates output length.
 * Will throw error for other types.
 * @param title descriptive title for an error e.g. 'private key'
 * @param hex hex string or Uint8Array
 * @param expectedLength optional, will compare to result array's length
 * @returns
 */
function utils_ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === 'string') {
        try {
            res = hexToBytes(hex);
        }
        catch (e) {
            throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
        }
    }
    else if (isBytes(hex)) {
        // Uint8Array.from() instead of hash.slice() because node.js Buffer
        // is instance of Uint8Array, and its slice() creates **mutable** copy
        res = Uint8Array.from(hex);
    }
    else {
        throw new Error(`${title} must be hex string or Uint8Array`);
    }
    const len = res.length;
    if (typeof expectedLength === 'number' && len !== expectedLength)
        throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
    return res;
}
/**
 * Copies several Uint8Arrays into one.
 */
function utils_concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
// Compares 2 u8a-s in kinda constant time
function equalBytes(a, b) {
    if (a.length !== b.length)
        return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++)
        diff |= a[i] ^ b[i];
    return diff === 0;
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
// Is positive bigint
const isPosBig = (n) => typeof n === 'bigint' && _0n <= n;
function utils_inRange(n, min, max) {
    return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
}
/**
 * Asserts min <= n < max. NOTE: It's < max and not <= max.
 * @example
 * aInRange('x', x, 1n, 256n); // would assume x is in (1n..255n)
 */
function utils_aInRange(title, n, min, max) {
    // Why min <= n < max and not a (min < n < max) OR b (min <= n <= max)?
    // consider P=256n, min=0n, max=P
    // - a for min=0 would require -1:          `inRange('x', x, -1n, P)`
    // - b would commonly require subtraction:  `inRange('x', x, 0n, P - 1n)`
    // - our way is the cleanest:               `inRange('x', x, 0n, P)
    if (!utils_inRange(n, min, max))
        throw new Error(`expected valid ${title}: ${min} <= n < ${max}, got ${typeof n} ${n}`);
}
// Bit operations
/**
 * Calculates amount of bits in a bigint.
 * Same as `n.toString(2).length`
 */
function bitLen(n) {
    let len;
    for (len = 0; n > _0n; n >>= _1n, len += 1)
        ;
    return len;
}
/**
 * Gets single bit at position.
 * NOTE: first bit position is 0 (same as arrays)
 * Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
 */
function bitGet(n, pos) {
    return (n >> BigInt(pos)) & _1n;
}
/**
 * Sets single bit at position.
 */
function bitSet(n, pos, value) {
    return n | ((value ? _1n : _0n) << BigInt(pos));
}
/**
 * Calculate mask for N bits. Not using ** operator with bigints because of old engines.
 * Same as BigInt(`0b${Array(i).fill('1').join('')}`)
 */
const bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
// DRBG
const u8n = (data) => new Uint8Array(data); // creates Uint8Array
const u8fr = (arr) => Uint8Array.from(arr); // another shortcut
/**
 * Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
 * @returns function that will call DRBG until 2nd arg returns something meaningful
 * @example
 *   const drbg = createHmacDRBG<Key>(32, 32, hmac);
 *   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
 */
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== 'number' || hashLen < 2)
        throw new Error('hashLen must be a number');
    if (typeof qByteLen !== 'number' || qByteLen < 2)
        throw new Error('qByteLen must be a number');
    if (typeof hmacFn !== 'function')
        throw new Error('hmacFn must be a function');
    // Step B, Step C: set hashLen to 8*ceil(hlen/8)
    let v = u8n(hashLen); // Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
    let k = u8n(hashLen); // Steps B and C of RFC6979 3.2: set hashLen, in our case always same
    let i = 0; // Iterations counter, will throw when over 1000
    const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
    };
    const h = (...b) => hmacFn(k, v, ...b); // hmac(k)(v, ...values)
    const reseed = (seed = u8n()) => {
        // HMAC-DRBG reseed() function. Steps D-G
        k = h(u8fr([0x00]), seed); // k = hmac(k || v || 0x00 || seed)
        v = h(); // v = hmac(k || v)
        if (seed.length === 0)
            return;
        k = h(u8fr([0x01]), seed); // k = hmac(k || v || 0x01 || seed)
        v = h(); // v = hmac(k || v)
    };
    const gen = () => {
        // HMAC-DRBG generate() function
        if (i++ >= 1000)
            throw new Error('drbg: tried 1000 values');
        let len = 0;
        const out = [];
        while (len < qByteLen) {
            v = h();
            const sl = v.slice();
            out.push(sl);
            len += v.length;
        }
        return utils_concatBytes(...out);
    };
    const genUntil = (seed, pred) => {
        reset();
        reseed(seed); // Steps D-G
        let res = undefined; // Step H: grind until k is in [1..n-1]
        while (!(res = pred(gen())))
            reseed();
        reset();
        return res;
    };
    return genUntil;
}
// Validating curves and fields
const validatorFns = {
    bigint: (val) => typeof val === 'bigint',
    function: (val) => typeof val === 'function',
    boolean: (val) => typeof val === 'boolean',
    string: (val) => typeof val === 'string',
    stringOrUint8Array: (val) => typeof val === 'string' || isBytes(val),
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === 'function' && Number.isSafeInteger(val.outputLen),
};
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
        const checkVal = validatorFns[type];
        if (typeof checkVal !== 'function')
            throw new Error(`Invalid validator "${type}", expected function`);
        const val = object[fieldName];
        if (isOptional && val === undefined)
            return;
        if (!checkVal(val, object)) {
            throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
        }
    };
    for (const [fieldName, type] of Object.entries(validators))
        checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
        checkField(fieldName, type, true);
    return object;
}
// validate type tests
// const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
// const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
// // Should fail type-check
// const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
// const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
// const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
// const z4 = validateObject(o, { a: 'boolean', z: 'bug' });
/**
 * throws not implemented error
 */
const notImplemented = () => {
    throw new Error('not implemented');
};
/**
 * Memoizes (caches) computation result.
 * Uses WeakMap: the value is going auto-cleaned by GC after last reference is removed.
 */
function memoized(fn) {
    const map = new WeakMap();
    return (arg, ...args) => {
        const val = map.get(arg);
        if (val !== undefined)
            return val;
        const computed = fn(arg, ...args);
        map.set(arg, computed);
        return computed;
    };
}
//# sourceMappingURL=utils.js.map
;// ./node_modules/viem/node_modules/@noble/curves/esm/abstract/modular.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Utilities for modular arithmetics and finite fields

// prettier-ignore
const modular_0n = BigInt(0), modular_1n = BigInt(1), modular_2n = BigInt(2), _3n = BigInt(3);
// prettier-ignore
const _4n = BigInt(4), _5n = BigInt(5), _8n = BigInt(8);
// prettier-ignore
const _9n = BigInt(9), _16n = BigInt(16);
// Calculates a modulo b
function modular_mod(a, b) {
    const result = a % b;
    return result >= modular_0n ? result : b + result;
}
/**
 * Efficiently raise num to power and do modular division.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 * @example
 * pow(2n, 6n, 11n) // 64n % 11n == 9n
 */
// TODO: use field version && remove
function pow(num, power, modulo) {
    if (modulo <= modular_0n || power < modular_0n)
        throw new Error('Expected power/modulo > 0');
    if (modulo === modular_1n)
        return modular_0n;
    let res = modular_1n;
    while (power > modular_0n) {
        if (power & modular_1n)
            res = (res * num) % modulo;
        num = (num * num) % modulo;
        power >>= modular_1n;
    }
    return res;
}
// Does x ^ (2 ^ power) mod p. pow2(30, 4) == 30 ^ (2 ^ 4)
function pow2(x, power, modulo) {
    let res = x;
    while (power-- > modular_0n) {
        res *= res;
        res %= modulo;
    }
    return res;
}
// Inverses number over modulo
function invert(number, modulo) {
    if (number === modular_0n || modulo <= modular_0n) {
        throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    }
    // Euclidean GCD https://brilliant.org/wiki/extended-euclidean-algorithm/
    // Fermat's little theorem "CT-like" version inv(n) = n^(m-2) mod m is 30x slower.
    let a = modular_mod(number, modulo);
    let b = modulo;
    // prettier-ignore
    let x = modular_0n, y = modular_1n, u = modular_1n, v = modular_0n;
    while (a !== modular_0n) {
        // JIT applies optimization if those two lines follow each other
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        // prettier-ignore
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== modular_1n)
        throw new Error('invert: does not exist');
    return modular_mod(x, modulo);
}
/**
 * Tonelli-Shanks square root search algorithm.
 * 1. https://eprint.iacr.org/2012/685.pdf (page 12)
 * 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
 * Will start an infinite loop if field order P is not prime.
 * @param P field order
 * @returns function that takes field Fp (created from P) and number n
 */
function tonelliShanks(P) {
    // Legendre constant: used to calculate Legendre symbol (a | p),
    // which denotes the value of a^((p-1)/2) (mod p).
    // (a | p) ≡ 1    if a is a square (mod p)
    // (a | p) ≡ -1   if a is not a square (mod p)
    // (a | p) ≡ 0    if a ≡ 0 (mod p)
    const legendreC = (P - modular_1n) / modular_2n;
    let Q, S, Z;
    // Step 1: By factoring out powers of 2 from p - 1,
    // find q and s such that p - 1 = q*(2^s) with q odd
    for (Q = P - modular_1n, S = 0; Q % modular_2n === modular_0n; Q /= modular_2n, S++)
        ;
    // Step 2: Select a non-square z such that (z | p) ≡ -1 and set c ≡ zq
    for (Z = modular_2n; Z < P && pow(Z, legendreC, P) !== P - modular_1n; Z++)
        ;
    // Fast-path
    if (S === 1) {
        const p1div4 = (P + modular_1n) / _4n;
        return function tonelliFast(Fp, n) {
            const root = Fp.pow(n, p1div4);
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // Slow-path
    const Q1div2 = (Q + modular_1n) / modular_2n;
    return function tonelliSlow(Fp, n) {
        // Step 0: Check that n is indeed a square: (n | p) should not be ≡ -1
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE))
            throw new Error('Cannot find square root');
        let r = S;
        // TODO: will fail at Fp2/etc
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q); // will update both x and b
        let x = Fp.pow(n, Q1div2); // first guess at the square root
        let b = Fp.pow(n, Q); // first guess at the fudge factor
        while (!Fp.eql(b, Fp.ONE)) {
            if (Fp.eql(b, Fp.ZERO))
                return Fp.ZERO; // https://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm (4. If t = 0, return r = 0)
            // Find m such b^(2^m)==1
            let m = 1;
            for (let t2 = Fp.sqr(b); m < r; m++) {
                if (Fp.eql(t2, Fp.ONE))
                    break;
                t2 = Fp.sqr(t2); // t2 *= t2
            }
            // NOTE: r-m-1 can be bigger than 32, need to convert to bigint before shift, otherwise there will be overflow
            const ge = Fp.pow(g, modular_1n << BigInt(r - m - 1)); // ge = 2^(r-m-1)
            g = Fp.sqr(ge); // g = ge * ge
            x = Fp.mul(x, ge); // x *= ge
            b = Fp.mul(b, g); // b *= g
            r = m;
        }
        return x;
    };
}
function FpSqrt(P) {
    // NOTE: different algorithms can give different roots, it is up to user to decide which one they want.
    // For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
    // P ≡ 3 (mod 4)
    // √n = n^((P+1)/4)
    if (P % _4n === _3n) {
        // Not all roots possible!
        // const ORDER =
        //   0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaabn;
        // const NUM = 72057594037927816n;
        const p1div4 = (P + modular_1n) / _4n;
        return function sqrt3mod4(Fp, n) {
            const root = Fp.pow(n, p1div4);
            // Throw if root**2 != n
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // Atkin algorithm for q ≡ 5 (mod 8), https://eprint.iacr.org/2012/685.pdf (page 10)
    if (P % _8n === _5n) {
        const c1 = (P - _5n) / _8n;
        return function sqrt5mod8(Fp, n) {
            const n2 = Fp.mul(n, modular_2n);
            const v = Fp.pow(n2, c1);
            const nv = Fp.mul(n, v);
            const i = Fp.mul(Fp.mul(nv, modular_2n), v);
            const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // P ≡ 9 (mod 16)
    if (P % _16n === _9n) {
        // NOTE: tonelli is too slow for bls-Fp2 calculations even on start
        // Means we cannot use sqrt for constants at all!
        //
        // const c1 = Fp.sqrt(Fp.negate(Fp.ONE)); //  1. c1 = sqrt(-1) in F, i.e., (c1^2) == -1 in F
        // const c2 = Fp.sqrt(c1);                //  2. c2 = sqrt(c1) in F, i.e., (c2^2) == c1 in F
        // const c3 = Fp.sqrt(Fp.negate(c1));     //  3. c3 = sqrt(-c1) in F, i.e., (c3^2) == -c1 in F
        // const c4 = (P + _7n) / _16n;           //  4. c4 = (q + 7) / 16        # Integer arithmetic
        // sqrt = (x) => {
        //   let tv1 = Fp.pow(x, c4);             //  1. tv1 = x^c4
        //   let tv2 = Fp.mul(c1, tv1);           //  2. tv2 = c1 * tv1
        //   const tv3 = Fp.mul(c2, tv1);         //  3. tv3 = c2 * tv1
        //   let tv4 = Fp.mul(c3, tv1);           //  4. tv4 = c3 * tv1
        //   const e1 = Fp.equals(Fp.square(tv2), x); //  5.  e1 = (tv2^2) == x
        //   const e2 = Fp.equals(Fp.square(tv3), x); //  6.  e2 = (tv3^2) == x
        //   tv1 = Fp.cmov(tv1, tv2, e1); //  7. tv1 = CMOV(tv1, tv2, e1)  # Select tv2 if (tv2^2) == x
        //   tv2 = Fp.cmov(tv4, tv3, e2); //  8. tv2 = CMOV(tv4, tv3, e2)  # Select tv3 if (tv3^2) == x
        //   const e3 = Fp.equals(Fp.square(tv2), x); //  9.  e3 = (tv2^2) == x
        //   return Fp.cmov(tv1, tv2, e3); //  10.  z = CMOV(tv1, tv2, e3)  # Select the sqrt from tv1 and tv2
        // }
    }
    // Other cases: Tonelli-Shanks algorithm
    return tonelliShanks(P);
}
// Little-endian check for first LE bit (last BE bit);
const isNegativeLE = (num, modulo) => (modular_mod(num, modulo) & modular_1n) === modular_1n;
// prettier-ignore
const FIELD_FIELDS = [
    'create', 'isValid', 'is0', 'neg', 'inv', 'sqrt', 'sqr',
    'eql', 'add', 'sub', 'mul', 'pow', 'div',
    'addN', 'subN', 'mulN', 'sqrN'
];
function validateField(field) {
    const initial = {
        ORDER: 'bigint',
        MASK: 'bigint',
        BYTES: 'isSafeInteger',
        BITS: 'isSafeInteger',
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
        map[val] = 'function';
        return map;
    }, initial);
    return validateObject(field, opts);
}
// Generic field functions
/**
 * Same as `pow` but for Fp: non-constant-time.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 */
function FpPow(f, num, power) {
    // Should have same speed as pow for bigints
    // TODO: benchmark!
    if (power < modular_0n)
        throw new Error('Expected power > 0');
    if (power === modular_0n)
        return f.ONE;
    if (power === modular_1n)
        return num;
    let p = f.ONE;
    let d = num;
    while (power > modular_0n) {
        if (power & modular_1n)
            p = f.mul(p, d);
        d = f.sqr(d);
        power >>= modular_1n;
    }
    return p;
}
/**
 * Efficiently invert an array of Field elements.
 * `inv(0)` will return `undefined` here: make sure to throw an error.
 */
function FpInvertBatch(f, nums) {
    const tmp = new Array(nums.length);
    // Walk from first to last, multiply them by each other MOD p
    const lastMultiplied = nums.reduce((acc, num, i) => {
        if (f.is0(num))
            return acc;
        tmp[i] = acc;
        return f.mul(acc, num);
    }, f.ONE);
    // Invert last element
    const inverted = f.inv(lastMultiplied);
    // Walk from last to first, multiply them by inverted each other MOD p
    nums.reduceRight((acc, num, i) => {
        if (f.is0(num))
            return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num);
    }, inverted);
    return tmp;
}
function FpDiv(f, lhs, rhs) {
    return f.mul(lhs, typeof rhs === 'bigint' ? invert(rhs, f.ORDER) : f.inv(rhs));
}
function FpLegendre(order) {
    // (a | p) ≡ 1    if a is a square (mod p), quadratic residue
    // (a | p) ≡ -1   if a is not a square (mod p), quadratic non residue
    // (a | p) ≡ 0    if a ≡ 0 (mod p)
    const legendreConst = (order - modular_1n) / modular_2n; // Integer arithmetic
    return (f, x) => f.pow(x, legendreConst);
}
// This function returns True whenever the value x is a square in the field F.
function FpIsSquare(f) {
    const legendre = FpLegendre(f.ORDER);
    return (x) => {
        const p = legendre(f, x);
        return f.eql(p, f.ZERO) || f.eql(p, f.ONE);
    };
}
// CURVE.n lengths
function nLength(n, nBitLength) {
    // Bit size, byte size of CURVE.n
    const _nBitLength = nBitLength !== undefined ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
}
/**
 * Initializes a finite field over prime. **Non-primes are not supported.**
 * Do not init in loop: slow. Very fragile: always run a benchmark on a change.
 * Major performance optimizations:
 * * a) denormalized operations like mulN instead of mul
 * * b) same object shape: never add or remove keys
 * * c) Object.freeze
 * NOTE: operations don't check 'isValid' for all elements for performance reasons,
 * it is caller responsibility to check this.
 * This is low-level code, please make sure you know what you doing.
 * @param ORDER prime positive bigint
 * @param bitLen how many bits the field consumes
 * @param isLE (def: false) if encoding / decoding should be in little-endian
 * @param redef optional faster redefinitions of sqrt and other methods
 */
function Field(ORDER, bitLen, isLE = false, redef = {}) {
    if (ORDER <= modular_0n)
        throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
    if (BYTES > 2048)
        throw new Error('Field lengths over 2048 bytes are not supported');
    const sqrtP = FpSqrt(ORDER);
    const f = Object.freeze({
        ORDER,
        BITS,
        BYTES,
        MASK: bitMask(BITS),
        ZERO: modular_0n,
        ONE: modular_1n,
        create: (num) => modular_mod(num, ORDER),
        isValid: (num) => {
            if (typeof num !== 'bigint')
                throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
            return modular_0n <= num && num < ORDER; // 0 is valid element, but it's not invertible
        },
        is0: (num) => num === modular_0n,
        isOdd: (num) => (num & modular_1n) === modular_1n,
        neg: (num) => modular_mod(-num, ORDER),
        eql: (lhs, rhs) => lhs === rhs,
        sqr: (num) => modular_mod(num * num, ORDER),
        add: (lhs, rhs) => modular_mod(lhs + rhs, ORDER),
        sub: (lhs, rhs) => modular_mod(lhs - rhs, ORDER),
        mul: (lhs, rhs) => modular_mod(lhs * rhs, ORDER),
        pow: (num, power) => FpPow(f, num, power),
        div: (lhs, rhs) => modular_mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num) => num * num,
        addN: (lhs, rhs) => lhs + rhs,
        subN: (lhs, rhs) => lhs - rhs,
        mulN: (lhs, rhs) => lhs * rhs,
        inv: (num) => invert(num, ORDER),
        sqrt: redef.sqrt || ((n) => sqrtP(f, n)),
        invertBatch: (lst) => FpInvertBatch(f, lst),
        // TODO: do we really need constant cmov?
        // We don't have const-time bigints anyway, so probably will be not very useful
        cmov: (a, b, c) => (c ? b : a),
        toBytes: (num) => (isLE ? numberToBytesLE(num, BYTES) : utils_numberToBytesBE(num, BYTES)),
        fromBytes: (bytes) => {
            if (bytes.length !== BYTES)
                throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
            return isLE ? utils_bytesToNumberLE(bytes) : utils_bytesToNumberBE(bytes);
        },
    });
    return Object.freeze(f);
}
function FpSqrtOdd(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? root : Fp.neg(root);
}
function FpSqrtEven(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? Fp.neg(root) : root;
}
/**
 * "Constant-time" private key generation utility.
 * Same as mapKeyToField, but accepts less bytes (40 instead of 48 for 32-byte field).
 * Which makes it slightly more biased, less secure.
 * @deprecated use mapKeyToField instead
 */
function hashToPrivateScalar(hash, groupOrder, isLE = false) {
    hash = ensureBytes('privateHash', hash);
    const hashLen = hash.length;
    const minLen = nLength(groupOrder).nByteLength + 8;
    if (minLen < 24 || hashLen < minLen || hashLen > 1024)
        throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
    const num = isLE ? bytesToNumberLE(hash) : bytesToNumberBE(hash);
    return modular_mod(num, groupOrder - modular_1n) + modular_1n;
}
/**
 * Returns total number of bytes consumed by the field element.
 * For example, 32 bytes for usual 256-bit weierstrass curve.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of field
 */
function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== 'bigint')
        throw new Error('field order must be bigint');
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
}
/**
 * Returns minimal amount of bytes that can be safely reduced
 * by field order.
 * Should be 2^-128 for 128-bit curve such as P256.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of target hash
 */
function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
}
/**
 * "Constant-time" private key generation utility.
 * Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
 * and convert them into private scalar, with the modulo bias being negligible.
 * Needs at least 48 bytes of input for 32-byte private key.
 * https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
 * FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
 * RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
 * @param hash hash output from SHA3 or a similar function
 * @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
 * @param isLE interpret hash bytes as LE num
 * @returns valid private scalar
 */
function mapHashToField(key, fieldOrder, isLE = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    // No small numbers: need to understand bias story. No huge numbers: easier to detect JS timings.
    if (len < 16 || len < minLen || len > 1024)
        throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
    const num = isLE ? utils_bytesToNumberBE(key) : utils_bytesToNumberLE(key);
    // `mod(x, 11)` can sometimes produce 0. `mod(x, 10) + 1` is the same, but no 0
    const reduced = modular_mod(num, fieldOrder - modular_1n) + modular_1n;
    return isLE ? numberToBytesLE(reduced, fieldLen) : utils_numberToBytesBE(reduced, fieldLen);
}
//# sourceMappingURL=modular.js.map
;// ./node_modules/viem/node_modules/@noble/curves/esm/abstract/curve.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Abelian group utilities


const curve_0n = BigInt(0);
const curve_1n = BigInt(1);
// Since points in different groups cannot be equal (different object constructor),
// we can have single place to store precomputes
const pointPrecomputes = new WeakMap();
const pointWindowSizes = new WeakMap(); // This allows use make points immutable (nothing changes inside)
// Elliptic curve multiplication of Point by scalar. Fragile.
// Scalars should always be less than curve order: this should be checked inside of a curve itself.
// Creates precomputation tables for fast multiplication:
// - private scalar is split by fixed size windows of W bits
// - every window point is collected from window's table & added to accumulator
// - since windows are different, same point inside tables won't be accessed more than once per calc
// - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
// - +1 window is neccessary for wNAF
// - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
// TODO: Research returning 2d JS array of windows, instead of a single window. This would allow
// windows to be in different memory locations
function wNAF(c, bits) {
    const constTimeNegate = (condition, item) => {
        const neg = item.negate();
        return condition ? neg : item;
    };
    const validateW = (W) => {
        if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
            throw new Error(`Wrong window size=${W}, should be [1..${bits}]`);
    };
    const opts = (W) => {
        validateW(W);
        const windows = Math.ceil(bits / W) + 1; // +1, because
        const windowSize = 2 ** (W - 1); // -1 because we skip zero
        return { windows, windowSize };
    };
    return {
        constTimeNegate,
        // non-const time multiplication ladder
        unsafeLadder(elm, n) {
            let p = c.ZERO;
            let d = elm;
            while (n > curve_0n) {
                if (n & curve_1n)
                    p = p.add(d);
                d = d.double();
                n >>= curve_1n;
            }
            return p;
        },
        /**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @returns precomputed point tables flattened to a single array
         */
        precomputeWindow(elm, W) {
            const { windows, windowSize } = opts(W);
            const points = [];
            let p = elm;
            let base = p;
            for (let window = 0; window < windows; window++) {
                base = p;
                points.push(base);
                // =1, because we skip zero
                for (let i = 1; i < windowSize; i++) {
                    base = base.add(p);
                    points.push(base);
                }
                p = base.double();
            }
            return points;
        },
        /**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */
        wNAF(W, precomputes, n) {
            // TODO: maybe check that scalar is less than group order? wNAF behavious is undefined otherwise
            // But need to carefully remove other checks before wNAF. ORDER == bits here
            const { windows, windowSize } = opts(W);
            let p = c.ZERO;
            let f = c.BASE;
            const mask = BigInt(2 ** W - 1); // Create mask with W ones: 0b1111 for W=4 etc.
            const maxNumber = 2 ** W;
            const shiftBy = BigInt(W);
            for (let window = 0; window < windows; window++) {
                const offset = window * windowSize;
                // Extract W bits.
                let wbits = Number(n & mask);
                // Shift number by W bits.
                n >>= shiftBy;
                // If the bits are bigger than max size, we'll split those.
                // +224 => 256 - 32
                if (wbits > windowSize) {
                    wbits -= maxNumber;
                    n += curve_1n;
                }
                // This code was first written with assumption that 'f' and 'p' will never be infinity point:
                // since each addition is multiplied by 2 ** W, it cannot cancel each other. However,
                // there is negate now: it is possible that negated element from low value
                // would be the same as high element, which will create carry into next window.
                // It's not obvious how this can fail, but still worth investigating later.
                // Check if we're onto Zero point.
                // Add random point inside current window to f.
                const offset1 = offset;
                const offset2 = offset + Math.abs(wbits) - 1; // -1 because we skip zero
                const cond1 = window % 2 !== 0;
                const cond2 = wbits < 0;
                if (wbits === 0) {
                    // The most important part for const-time getPublicKey
                    f = f.add(constTimeNegate(cond1, precomputes[offset1]));
                }
                else {
                    p = p.add(constTimeNegate(cond2, precomputes[offset2]));
                }
            }
            // JIT-compiler should not eliminate f here, since it will later be used in normalizeZ()
            // Even if the variable is still unused, there are some checks which will
            // throw an exception, so compiler needs to prove they won't happen, which is hard.
            // At this point there is a way to F be infinity-point even if p is not,
            // which makes it less const-time: around 1 bigint multiply.
            return { p, f };
        },
        wNAFCached(P, n, transform) {
            const W = pointWindowSizes.get(P) || 1;
            // Calculate precomputes on a first run, reuse them after
            let comp = pointPrecomputes.get(P);
            if (!comp) {
                comp = this.precomputeWindow(P, W);
                if (W !== 1)
                    pointPrecomputes.set(P, transform(comp));
            }
            return this.wNAF(W, comp, n);
        },
        // We calculate precomputes for elliptic curve point multiplication
        // using windowed method. This specifies window size and
        // stores precomputed values. Usually only base point would be precomputed.
        setWindowSize(P, W) {
            validateW(W);
            pointWindowSizes.set(P, W);
            pointPrecomputes.delete(P);
        },
    };
}
/**
 * Pippenger algorithm for multi-scalar multiplication (MSM).
 * MSM is basically (Pa + Qb + Rc + ...).
 * 30x faster vs naive addition on L=4096, 10x faster with precomputes.
 * For N=254bit, L=1, it does: 1024 ADD + 254 DBL. For L=5: 1536 ADD + 254 DBL.
 * Algorithmically constant-time (for same L), even when 1 point + scalar, or when scalar = 0.
 * @param c Curve Point constructor
 * @param field field over CURVE.N - important that it's not over CURVE.P
 * @param points array of L curve points
 * @param scalars array of L scalars (aka private keys / bigints)
 */
function pippenger(c, field, points, scalars) {
    // If we split scalars by some window (let's say 8 bits), every chunk will only
    // take 256 buckets even if there are 4096 scalars, also re-uses double.
    // TODO:
    // - https://eprint.iacr.org/2024/750.pdf
    // - https://tches.iacr.org/index.php/TCHES/article/view/10287
    // 0 is accepted in scalars
    if (!Array.isArray(points) || !Array.isArray(scalars) || scalars.length !== points.length)
        throw new Error('arrays of points and scalars must have equal length');
    scalars.forEach((s, i) => {
        if (!field.isValid(s))
            throw new Error(`wrong scalar at index ${i}`);
    });
    points.forEach((p, i) => {
        if (!(p instanceof c))
            throw new Error(`wrong point at index ${i}`);
    });
    const wbits = bitLen(BigInt(points.length));
    const windowSize = wbits > 12 ? wbits - 3 : wbits > 4 ? wbits - 2 : wbits ? 2 : 1; // in bits
    const MASK = (1 << windowSize) - 1;
    const buckets = new Array(MASK + 1).fill(c.ZERO); // +1 for zero array
    const lastBits = Math.floor((field.BITS - 1) / windowSize) * windowSize;
    let sum = c.ZERO;
    for (let i = lastBits; i >= 0; i -= windowSize) {
        buckets.fill(c.ZERO);
        for (let j = 0; j < scalars.length; j++) {
            const scalar = scalars[j];
            const wbits = Number((scalar >> BigInt(i)) & BigInt(MASK));
            buckets[wbits] = buckets[wbits].add(points[j]);
        }
        let resI = c.ZERO; // not using this will do small speed-up, but will lose ct
        // Skip first bucket, because it is zero
        for (let j = buckets.length - 1, sumI = c.ZERO; j > 0; j--) {
            sumI = sumI.add(buckets[j]);
            resI = resI.add(sumI);
        }
        sum = sum.add(resI);
        if (i !== 0)
            for (let j = 0; j < windowSize; j++)
                sum = sum.double();
    }
    return sum;
}
function validateBasic(curve) {
    validateField(curve.Fp);
    validateObject(curve, {
        n: 'bigint',
        h: 'bigint',
        Gx: 'field',
        Gy: 'field',
    }, {
        nBitLength: 'isSafeInteger',
        nByteLength: 'isSafeInteger',
    });
    // Set defaults
    return Object.freeze({
        ...nLength(curve.n, curve.nBitLength),
        ...curve,
        ...{ p: curve.Fp.ORDER },
    });
}
//# sourceMappingURL=curve.js.map
;// ./node_modules/viem/node_modules/@noble/curves/esm/abstract/weierstrass.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Short Weierstrass curve. The formula is: y² = x³ + ax + b




function validateSigVerOpts(opts) {
    if (opts.lowS !== undefined)
        abool('lowS', opts.lowS);
    if (opts.prehash !== undefined)
        abool('prehash', opts.prehash);
}
function validatePointOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
        a: 'field',
        b: 'field',
    }, {
        allowedPrivateKeyLengths: 'array',
        wrapPrivateKey: 'boolean',
        isTorsionFree: 'function',
        clearCofactor: 'function',
        allowInfinityPoint: 'boolean',
        fromBytes: 'function',
        toBytes: 'function',
    });
    const { endo, Fp, a } = opts;
    if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) {
            throw new Error('Endomorphism can only be defined for Koblitz curves that have a=0');
        }
        if (typeof endo !== 'object' ||
            typeof endo.beta !== 'bigint' ||
            typeof endo.splitScalar !== 'function') {
            throw new Error('Expected endomorphism with beta: bigint and splitScalar: function');
        }
    }
    return Object.freeze({ ...opts });
}
const { /* bytesToNumberBE */ "Ph": b2n, /* hexToBytes */ "aT": h2b } = utils_namespaceObject;
/**
 * ASN.1 DER encoding utilities. ASN is very complex & fragile. Format:
 *
 *     [0x30 (SEQUENCE), bytelength, 0x02 (INTEGER), intLength, R, 0x02 (INTEGER), intLength, S]
 *
 * Docs: https://letsencrypt.org/docs/a-warm-welcome-to-asn1-and-der/, https://luca.ntop.org/Teaching/Appunti/asn1.html
 */
const DER = {
    // asn.1 DER encoding utils
    Err: class DERErr extends Error {
        constructor(m = '') {
            super(m);
        }
    },
    // Basic building block is TLV (Tag-Length-Value)
    _tlv: {
        encode: (tag, data) => {
            const { Err: E } = DER;
            if (tag < 0 || tag > 256)
                throw new E('tlv.encode: wrong tag');
            if (data.length & 1)
                throw new E('tlv.encode: unpadded data');
            const dataLen = data.length / 2;
            const len = numberToHexUnpadded(dataLen);
            if ((len.length / 2) & 128)
                throw new E('tlv.encode: long form length too big');
            // length of length with long form flag
            const lenLen = dataLen > 127 ? numberToHexUnpadded((len.length / 2) | 128) : '';
            return `${numberToHexUnpadded(tag)}${lenLen}${len}${data}`;
        },
        // v - value, l - left bytes (unparsed)
        decode(tag, data) {
            const { Err: E } = DER;
            let pos = 0;
            if (tag < 0 || tag > 256)
                throw new E('tlv.encode: wrong tag');
            if (data.length < 2 || data[pos++] !== tag)
                throw new E('tlv.decode: wrong tlv');
            const first = data[pos++];
            const isLong = !!(first & 128); // First bit of first length byte is flag for short/long form
            let length = 0;
            if (!isLong)
                length = first;
            else {
                // Long form: [longFlag(1bit), lengthLength(7bit), length (BE)]
                const lenLen = first & 127;
                if (!lenLen)
                    throw new E('tlv.decode(long): indefinite length not supported');
                if (lenLen > 4)
                    throw new E('tlv.decode(long): byte length is too big'); // this will overflow u32 in js
                const lengthBytes = data.subarray(pos, pos + lenLen);
                if (lengthBytes.length !== lenLen)
                    throw new E('tlv.decode: length bytes not complete');
                if (lengthBytes[0] === 0)
                    throw new E('tlv.decode(long): zero leftmost byte');
                for (const b of lengthBytes)
                    length = (length << 8) | b;
                pos += lenLen;
                if (length < 128)
                    throw new E('tlv.decode(long): not minimal encoding');
            }
            const v = data.subarray(pos, pos + length);
            if (v.length !== length)
                throw new E('tlv.decode: wrong value length');
            return { v, l: data.subarray(pos + length) };
        },
    },
    // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
    // since we always use positive integers here. It must always be empty:
    // - add zero byte if exists
    // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
    _int: {
        encode(num) {
            const { Err: E } = DER;
            if (num < weierstrass_0n)
                throw new E('integer: negative integers are not allowed');
            let hex = numberToHexUnpadded(num);
            // Pad with zero byte if negative flag is present
            if (Number.parseInt(hex[0], 16) & 0b1000)
                hex = '00' + hex;
            if (hex.length & 1)
                throw new E('unexpected assertion');
            return hex;
        },
        decode(data) {
            const { Err: E } = DER;
            if (data[0] & 128)
                throw new E('Invalid signature integer: negative');
            if (data[0] === 0x00 && !(data[1] & 128))
                throw new E('Invalid signature integer: unnecessary leading zero');
            return b2n(data);
        },
    },
    toSig(hex) {
        // parse DER signature
        const { Err: E, _int: int, _tlv: tlv } = DER;
        const data = typeof hex === 'string' ? h2b(hex) : hex;
        abytes(data);
        const { v: seqBytes, l: seqLeftBytes } = tlv.decode(0x30, data);
        if (seqLeftBytes.length)
            throw new E('Invalid signature: left bytes after parsing');
        const { v: rBytes, l: rLeftBytes } = tlv.decode(0x02, seqBytes);
        const { v: sBytes, l: sLeftBytes } = tlv.decode(0x02, rLeftBytes);
        if (sLeftBytes.length)
            throw new E('Invalid signature: left bytes after parsing');
        return { r: int.decode(rBytes), s: int.decode(sBytes) };
    },
    hexFromSig(sig) {
        const { _tlv: tlv, _int: int } = DER;
        const seq = `${tlv.encode(0x02, int.encode(sig.r))}${tlv.encode(0x02, int.encode(sig.s))}`;
        return tlv.encode(0x30, seq);
    },
};
// Be friendly to bad ECMAScript parsers by not using bigint literals
// prettier-ignore
const weierstrass_0n = BigInt(0), weierstrass_1n = BigInt(1), weierstrass_2n = BigInt(2), weierstrass_3n = BigInt(3), weierstrass_4n = BigInt(4);
function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp } = CURVE; // All curves has same field / group length as for now, but they can differ
    const Fn = Field(CURVE.n, CURVE.nBitLength);
    const toBytes = CURVE.toBytes ||
        ((_c, point, _isCompressed) => {
            const a = point.toAffine();
            return utils_concatBytes(Uint8Array.from([0x04]), Fp.toBytes(a.x), Fp.toBytes(a.y));
        });
    const fromBytes = CURVE.fromBytes ||
        ((bytes) => {
            // const head = bytes[0];
            const tail = bytes.subarray(1);
            // if (head !== 0x04) throw new Error('Only non-compressed encoding is supported');
            const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
            const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
            return { x, y };
        });
    /**
     * y² = x³ + ax + b: Short weierstrass curve formula
     * @returns y²
     */
    function weierstrassEquation(x) {
        const { a, b } = CURVE;
        const x2 = Fp.sqr(x); // x * x
        const x3 = Fp.mul(x2, x); // x2 * x
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b); // x3 + a * x + b
    }
    // Validate whether the passed curve params are valid.
    // We check if curve equation works for generator point.
    // `assertValidity()` won't work: `isTorsionFree()` is not available at this point in bls12-381.
    // ProjectivePoint class has not been initialized yet.
    if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
        throw new Error('bad generator point: equation left != right');
    // Valid group elements reside in range 1..n-1
    function isWithinCurveOrder(num) {
        return utils_inRange(num, weierstrass_1n, CURVE.n);
    }
    // Validates if priv key is valid and converts it to bigint.
    // Supports options allowedPrivateKeyLengths and wrapPrivateKey.
    function normPrivateKeyToScalar(key) {
        const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
        if (lengths && typeof key !== 'bigint') {
            if (isBytes(key))
                key = bytesToHex(key);
            // Normalize to hex string, pad. E.g. P521 would norm 130-132 char hex to 132-char bytes
            if (typeof key !== 'string' || !lengths.includes(key.length))
                throw new Error('Invalid key');
            key = key.padStart(nByteLength * 2, '0');
        }
        let num;
        try {
            num =
                typeof key === 'bigint'
                    ? key
                    : utils_bytesToNumberBE(utils_ensureBytes('private key', key, nByteLength));
        }
        catch (error) {
            throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
        }
        if (wrapPrivateKey)
            num = modular_mod(num, N); // disabled by default, enabled for BLS
        utils_aInRange('private key', num, weierstrass_1n, N); // num in range [1..N-1]
        return num;
    }
    function assertPrjPoint(other) {
        if (!(other instanceof Point))
            throw new Error('ProjectivePoint expected');
    }
    // Memoized toAffine / validity check. They are heavy. Points are immutable.
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    const toAffineMemo = memoized((p, iz) => {
        const { px: x, py: y, pz: z } = p;
        // Fast-path for normalized points
        if (Fp.eql(z, Fp.ONE))
            return { x, y };
        const is0 = p.is0();
        // If invZ was 0, we return zero point. However we still want to execute
        // all operations, so we replace invZ with a random number, 1.
        if (iz == null)
            iz = is0 ? Fp.ONE : Fp.inv(z);
        const ax = Fp.mul(x, iz);
        const ay = Fp.mul(y, iz);
        const zz = Fp.mul(z, iz);
        if (is0)
            return { x: Fp.ZERO, y: Fp.ZERO };
        if (!Fp.eql(zz, Fp.ONE))
            throw new Error('invZ was invalid');
        return { x: ax, y: ay };
    });
    // NOTE: on exception this will crash 'cached' and no value will be set.
    // Otherwise true will be return
    const assertValidMemo = memoized((p) => {
        if (p.is0()) {
            // (0, 1, 0) aka ZERO is invalid in most contexts.
            // In BLS, ZERO can be serialized, so we allow it.
            // (0, 0, 0) is wrong representation of ZERO and is always invalid.
            if (CURVE.allowInfinityPoint && !Fp.is0(p.py))
                return;
            throw new Error('bad point: ZERO');
        }
        // Some 3rd-party test vectors require different wording between here & `fromCompressedHex`
        const { x, y } = p.toAffine();
        // Check if x, y are valid field elements
        if (!Fp.isValid(x) || !Fp.isValid(y))
            throw new Error('bad point: x or y not FE');
        const left = Fp.sqr(y); // y²
        const right = weierstrassEquation(x); // x³ + ax + b
        if (!Fp.eql(left, right))
            throw new Error('bad point: equation left != right');
        if (!p.isTorsionFree())
            throw new Error('bad point: not in prime-order subgroup');
        return true;
    });
    /**
     * Projective Point works in 3d / projective (homogeneous) coordinates: (x, y, z) ∋ (x=x/z, y=y/z)
     * Default Point works in 2d / affine coordinates: (x, y)
     * We're doing calculations in projective, because its operations don't require costly inversion.
     */
    class Point {
        constructor(px, py, pz) {
            this.px = px;
            this.py = py;
            this.pz = pz;
            if (px == null || !Fp.isValid(px))
                throw new Error('x required');
            if (py == null || !Fp.isValid(py))
                throw new Error('y required');
            if (pz == null || !Fp.isValid(pz))
                throw new Error('z required');
            Object.freeze(this);
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(p) {
            const { x, y } = p || {};
            if (!p || !Fp.isValid(x) || !Fp.isValid(y))
                throw new Error('invalid affine point');
            if (p instanceof Point)
                throw new Error('projective point not allowed');
            const is0 = (i) => Fp.eql(i, Fp.ZERO);
            // fromAffine(x:0, y:0) would produce (x:0, y:0, z:1), but we need (x:0, y:1, z:0)
            if (is0(x) && is0(y))
                return Point.ZERO;
            return new Point(x, y, Fp.ONE);
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        /**
         * Takes a bunch of Projective Points but executes only one
         * inversion on all of them. Inversion is very slow operation,
         * so this improves performance massively.
         * Optimization: converts a list of projective points to a list of identical points with Z=1.
         */
        static normalizeZ(points) {
            const toInv = Fp.invertBatch(points.map((p) => p.pz));
            return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        /**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */
        static fromHex(hex) {
            const P = Point.fromAffine(fromBytes(utils_ensureBytes('pointHex', hex)));
            P.assertValidity();
            return P;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(privateKey) {
            return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        // Multiscalar Multiplication
        static msm(points, scalars) {
            return pippenger(Point, Fn, points, scalars);
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
            wnaf.setWindowSize(this, windowSize);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
            assertValidMemo(this);
        }
        hasEvenY() {
            const { y } = this.toAffine();
            if (Fp.isOdd)
                return !Fp.isOdd(y);
            throw new Error("Field doesn't support isOdd");
        }
        /**
         * Compare one point to another.
         */
        equals(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
            const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
            return U1 && U2;
        }
        /**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */
        negate() {
            return new Point(this.px, Fp.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
            const { a, b } = CURVE;
            const b3 = Fp.mul(b, weierstrass_3n);
            const { px: X1, py: Y1, pz: Z1 } = this;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            let t0 = Fp.mul(X1, X1); // step 1
            let t1 = Fp.mul(Y1, Y1);
            let t2 = Fp.mul(Z1, Z1);
            let t3 = Fp.mul(X1, Y1);
            t3 = Fp.add(t3, t3); // step 5
            Z3 = Fp.mul(X1, Z1);
            Z3 = Fp.add(Z3, Z3);
            X3 = Fp.mul(a, Z3);
            Y3 = Fp.mul(b3, t2);
            Y3 = Fp.add(X3, Y3); // step 10
            X3 = Fp.sub(t1, Y3);
            Y3 = Fp.add(t1, Y3);
            Y3 = Fp.mul(X3, Y3);
            X3 = Fp.mul(t3, X3);
            Z3 = Fp.mul(b3, Z3); // step 15
            t2 = Fp.mul(a, t2);
            t3 = Fp.sub(t0, t2);
            t3 = Fp.mul(a, t3);
            t3 = Fp.add(t3, Z3);
            Z3 = Fp.add(t0, t0); // step 20
            t0 = Fp.add(Z3, t0);
            t0 = Fp.add(t0, t2);
            t0 = Fp.mul(t0, t3);
            Y3 = Fp.add(Y3, t0);
            t2 = Fp.mul(Y1, Z1); // step 25
            t2 = Fp.add(t2, t2);
            t0 = Fp.mul(t2, t3);
            X3 = Fp.sub(X3, t0);
            Z3 = Fp.mul(t2, t1);
            Z3 = Fp.add(Z3, Z3); // step 30
            Z3 = Fp.add(Z3, Z3);
            return new Point(X3, Y3, Z3);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            const a = CURVE.a;
            const b3 = Fp.mul(CURVE.b, weierstrass_3n);
            let t0 = Fp.mul(X1, X2); // step 1
            let t1 = Fp.mul(Y1, Y2);
            let t2 = Fp.mul(Z1, Z2);
            let t3 = Fp.add(X1, Y1);
            let t4 = Fp.add(X2, Y2); // step 5
            t3 = Fp.mul(t3, t4);
            t4 = Fp.add(t0, t1);
            t3 = Fp.sub(t3, t4);
            t4 = Fp.add(X1, Z1);
            let t5 = Fp.add(X2, Z2); // step 10
            t4 = Fp.mul(t4, t5);
            t5 = Fp.add(t0, t2);
            t4 = Fp.sub(t4, t5);
            t5 = Fp.add(Y1, Z1);
            X3 = Fp.add(Y2, Z2); // step 15
            t5 = Fp.mul(t5, X3);
            X3 = Fp.add(t1, t2);
            t5 = Fp.sub(t5, X3);
            Z3 = Fp.mul(a, t4);
            X3 = Fp.mul(b3, t2); // step 20
            Z3 = Fp.add(X3, Z3);
            X3 = Fp.sub(t1, Z3);
            Z3 = Fp.add(t1, Z3);
            Y3 = Fp.mul(X3, Z3);
            t1 = Fp.add(t0, t0); // step 25
            t1 = Fp.add(t1, t0);
            t2 = Fp.mul(a, t2);
            t4 = Fp.mul(b3, t4);
            t1 = Fp.add(t1, t2);
            t2 = Fp.sub(t0, t2); // step 30
            t2 = Fp.mul(a, t2);
            t4 = Fp.add(t4, t2);
            t0 = Fp.mul(t1, t4);
            Y3 = Fp.add(Y3, t0);
            t0 = Fp.mul(t5, t4); // step 35
            X3 = Fp.mul(t3, X3);
            X3 = Fp.sub(X3, t0);
            t0 = Fp.mul(t3, t1);
            Z3 = Fp.mul(t5, Z3);
            Z3 = Fp.add(Z3, t0); // step 40
            return new Point(X3, Y3, Z3);
        }
        subtract(other) {
            return this.add(other.negate());
        }
        is0() {
            return this.equals(Point.ZERO);
        }
        wNAF(n) {
            return wnaf.wNAFCached(this, n, Point.normalizeZ);
        }
        /**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */
        multiplyUnsafe(sc) {
            utils_aInRange('scalar', sc, weierstrass_0n, CURVE.n);
            const I = Point.ZERO;
            if (sc === weierstrass_0n)
                return I;
            if (sc === weierstrass_1n)
                return this;
            const { endo } = CURVE;
            if (!endo)
                return wnaf.unsafeLadder(this, sc);
            // Apply endomorphism
            let { k1neg, k1, k2neg, k2 } = endo.splitScalar(sc);
            let k1p = I;
            let k2p = I;
            let d = this;
            while (k1 > weierstrass_0n || k2 > weierstrass_0n) {
                if (k1 & weierstrass_1n)
                    k1p = k1p.add(d);
                if (k2 & weierstrass_1n)
                    k2p = k2p.add(d);
                d = d.double();
                k1 >>= weierstrass_1n;
                k2 >>= weierstrass_1n;
            }
            if (k1neg)
                k1p = k1p.negate();
            if (k2neg)
                k2p = k2p.negate();
            k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
            return k1p.add(k2p);
        }
        /**
         * Constant time multiplication.
         * Uses wNAF method. Windowed method may be 10% faster,
         * but takes 2x longer to generate and consumes 2x memory.
         * Uses precomputes when available.
         * Uses endomorphism for Koblitz curves.
         * @param scalar by which the point would be multiplied
         * @returns New point
         */
        multiply(scalar) {
            const { endo, n: N } = CURVE;
            utils_aInRange('scalar', scalar, weierstrass_1n, N);
            let point, fake; // Fake point is used to const-time mult
            if (endo) {
                const { k1neg, k1, k2neg, k2 } = endo.splitScalar(scalar);
                let { p: k1p, f: f1p } = this.wNAF(k1);
                let { p: k2p, f: f2p } = this.wNAF(k2);
                k1p = wnaf.constTimeNegate(k1neg, k1p);
                k2p = wnaf.constTimeNegate(k2neg, k2p);
                k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
                point = k1p.add(k2p);
                fake = f1p.add(f2p);
            }
            else {
                const { p, f } = this.wNAF(scalar);
                point = p;
                fake = f;
            }
            // Normalize `z` for both points, but return only real one
            return Point.normalizeZ([point, fake])[0];
        }
        /**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */
        multiplyAndAddUnsafe(Q, a, b) {
            const G = Point.BASE; // No Strauss-Shamir trick: we have 10% faster G precomputes
            const mul = (P, a // Select faster multiply() method
            ) => (a === weierstrass_0n || a === weierstrass_1n || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a));
            const sum = mul(this, a).add(mul(Q, b));
            return sum.is0() ? undefined : sum;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(iz) {
            return toAffineMemo(this, iz);
        }
        isTorsionFree() {
            const { h: cofactor, isTorsionFree } = CURVE;
            if (cofactor === weierstrass_1n)
                return true; // No subgroups, always torsion-free
            if (isTorsionFree)
                return isTorsionFree(Point, this);
            throw new Error('isTorsionFree() has not been declared for the elliptic curve');
        }
        clearCofactor() {
            const { h: cofactor, clearCofactor } = CURVE;
            if (cofactor === weierstrass_1n)
                return this; // Fast-path
            if (clearCofactor)
                return clearCofactor(Point, this);
            return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
            abool('isCompressed', isCompressed);
            this.assertValidity();
            return toBytes(Point, this, isCompressed);
        }
        toHex(isCompressed = true) {
            abool('isCompressed', isCompressed);
            return bytesToHex(this.toRawBytes(isCompressed));
        }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
    Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = wNAF(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    // Validate if generator point is on curve
    return {
        CURVE,
        ProjectivePoint: Point,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder,
    };
}
function validateOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
        hash: 'hash',
        hmac: 'function',
        randomBytes: 'function',
    }, {
        bits2int: 'function',
        bits2int_modN: 'function',
        lowS: 'boolean',
    });
    return Object.freeze({ lowS: true, ...opts });
}
/**
 * Creates short weierstrass curve and ECDSA signature methods for it.
 * @example
 * import { Field } from '@noble/curves/abstract/modular';
 * // Before that, define BigInt-s: a, b, p, n, Gx, Gy
 * const curve = weierstrass({ a, b, Fp: Field(p), n, Gx, Gy, h: 1n })
 */
function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp, n: CURVE_ORDER } = CURVE;
    const compressedLen = Fp.BYTES + 1; // e.g. 33 for 32
    const uncompressedLen = 2 * Fp.BYTES + 1; // e.g. 65 for 32
    function modN(a) {
        return modular_mod(a, CURVE_ORDER);
    }
    function invN(a) {
        return invert(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder, } = weierstrassPoints({
        ...CURVE,
        toBytes(_c, point, isCompressed) {
            const a = point.toAffine();
            const x = Fp.toBytes(a.x);
            const cat = utils_concatBytes;
            abool('isCompressed', isCompressed);
            if (isCompressed) {
                return cat(Uint8Array.from([point.hasEvenY() ? 0x02 : 0x03]), x);
            }
            else {
                return cat(Uint8Array.from([0x04]), x, Fp.toBytes(a.y));
            }
        },
        fromBytes(bytes) {
            const len = bytes.length;
            const head = bytes[0];
            const tail = bytes.subarray(1);
            // this.assertValidity() is done inside of fromHex
            if (len === compressedLen && (head === 0x02 || head === 0x03)) {
                const x = utils_bytesToNumberBE(tail);
                if (!utils_inRange(x, weierstrass_1n, Fp.ORDER))
                    throw new Error('Point is not on curve');
                const y2 = weierstrassEquation(x); // y² = x³ + ax + b
                let y;
                try {
                    y = Fp.sqrt(y2); // y = y² ^ (p+1)/4
                }
                catch (sqrtError) {
                    const suffix = sqrtError instanceof Error ? ': ' + sqrtError.message : '';
                    throw new Error('Point is not on curve' + suffix);
                }
                const isYOdd = (y & weierstrass_1n) === weierstrass_1n;
                // ECDSA
                const isHeadOdd = (head & 1) === 1;
                if (isHeadOdd !== isYOdd)
                    y = Fp.neg(y);
                return { x, y };
            }
            else if (len === uncompressedLen && head === 0x04) {
                const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
                const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
                return { x, y };
            }
            else {
                throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
            }
        },
    });
    const numToNByteStr = (num) => bytesToHex(utils_numberToBytesBE(num, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number) {
        const HALF = CURVE_ORDER >> weierstrass_1n;
        return number > HALF;
    }
    function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
    }
    // slice bytes num
    const slcNum = (b, from, to) => utils_bytesToNumberBE(b.slice(from, to));
    /**
     * ECDSA signature with its (r, s) properties. Supports DER & compact representations.
     */
    class Signature {
        constructor(r, s, recovery) {
            this.r = r;
            this.s = s;
            this.recovery = recovery;
            this.assertValidity();
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(hex) {
            const l = CURVE.nByteLength;
            hex = utils_ensureBytes('compactSignature', hex, l * 2);
            return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(hex) {
            const { r, s } = DER.toSig(utils_ensureBytes('DER', hex));
            return new Signature(r, s);
        }
        assertValidity() {
            utils_aInRange('r', this.r, weierstrass_1n, CURVE_ORDER); // r in [1..N]
            utils_aInRange('s', this.s, weierstrass_1n, CURVE_ORDER); // s in [1..N]
        }
        addRecoveryBit(recovery) {
            return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
            const { r, s, recovery: rec } = this;
            const h = bits2int_modN(utils_ensureBytes('msgHash', msgHash)); // Truncate hash
            if (rec == null || ![0, 1, 2, 3].includes(rec))
                throw new Error('recovery id invalid');
            const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
            if (radj >= Fp.ORDER)
                throw new Error('recovery id 2 or 3 invalid');
            const prefix = (rec & 1) === 0 ? '02' : '03';
            const R = Point.fromHex(prefix + numToNByteStr(radj));
            const ir = invN(radj); // r^-1
            const u1 = modN(-h * ir); // -hr^-1
            const u2 = modN(s * ir); // sr^-1
            const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2); // (sr^-1)R-(hr^-1)G = -(hr^-1)G + (sr^-1)
            if (!Q)
                throw new Error('point at infinify'); // unsafe is fine: no priv data leaked
            Q.assertValidity();
            return Q;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
            return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
            return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
        }
        // DER-encoded
        toDERRawBytes() {
            return hexToBytes(this.toDERHex());
        }
        toDERHex() {
            return DER.hexFromSig({ r: this.r, s: this.s });
        }
        // padded bytes of r, then padded bytes of s
        toCompactRawBytes() {
            return hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
            return numToNByteStr(this.r) + numToNByteStr(this.s);
        }
    }
    const utils = {
        isValidPrivateKey(privateKey) {
            try {
                normPrivateKeyToScalar(privateKey);
                return true;
            }
            catch (error) {
                return false;
            }
        },
        normPrivateKeyToScalar: normPrivateKeyToScalar,
        /**
         * Produces cryptographically secure private key from random of size
         * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
         */
        randomPrivateKey: () => {
            const length = getMinHashLength(CURVE.n);
            return mapHashToField(CURVE.randomBytes(length), CURVE.n);
        },
        /**
         * Creates precompute table for an arbitrary EC point. Makes point "cached".
         * Allows to massively speed-up `point.multiply(scalar)`.
         * @returns cached point
         * @example
         * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
         * fast.multiply(privKey); // much faster ECDH now
         */
        precompute(windowSize = 8, point = Point.BASE) {
            point._setWindowSize(windowSize);
            point.multiply(BigInt(3)); // 3 is arbitrary, just need any number here
            return point;
        },
    };
    /**
     * Computes public key for a private key. Checks for validity of the private key.
     * @param privateKey private key
     * @param isCompressed whether to return compact (default), or full key
     * @returns Public key, full when isCompressed=false; short when isCompressed=true
     */
    function getPublicKey(privateKey, isCompressed = true) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    /**
     * Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
     */
    function isProbPub(item) {
        const arr = isBytes(item);
        const str = typeof item === 'string';
        const len = (arr || str) && item.length;
        if (arr)
            return len === compressedLen || len === uncompressedLen;
        if (str)
            return len === 2 * compressedLen || len === 2 * uncompressedLen;
        if (item instanceof Point)
            return true;
        return false;
    }
    /**
     * ECDH (Elliptic Curve Diffie Hellman).
     * Computes shared public key from private key and public key.
     * Checks: 1) private key validity 2) shared key is on-curve.
     * Does NOT hash the result.
     * @param privateA private key
     * @param publicB different public key
     * @param isCompressed whether to return compact (default), or full key
     * @returns shared public key
     */
    function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA))
            throw new Error('first arg must be private key');
        if (!isProbPub(publicB))
            throw new Error('second arg must be public key');
        const b = Point.fromHex(publicB); // check for being on-curve
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    // RFC6979: ensure ECDSA msg is X bytes and < N. RFC suggests optional truncating via bits2octets.
    // FIPS 186-4 4.6 suggests the leftmost min(nBitLen, outLen) bits, which matches bits2int.
    // bits2int can produce res>N, we can do mod(res, N) since the bitLen is the same.
    // int2octets can't be used; pads small msgs with 0: unacceptatble for trunc as per RFC vectors
    const bits2int = CURVE.bits2int ||
        function (bytes) {
            // For curves with nBitLength % 8 !== 0: bits2octets(bits2octets(m)) !== bits2octets(m)
            // for some cases, since bytes.length * 8 is not actual bitLength.
            const num = utils_bytesToNumberBE(bytes); // check for == u8 done here
            const delta = bytes.length * 8 - CURVE.nBitLength; // truncate to nBitLength leftmost bits
            return delta > 0 ? num >> BigInt(delta) : num;
        };
    const bits2int_modN = CURVE.bits2int_modN ||
        function (bytes) {
            return modN(bits2int(bytes)); // can't use bytesToNumberBE here
        };
    // NOTE: pads output with zero as per spec
    const ORDER_MASK = bitMask(CURVE.nBitLength);
    /**
     * Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
     */
    function int2octets(num) {
        utils_aInRange(`num < 2^${CURVE.nBitLength}`, num, weierstrass_0n, ORDER_MASK);
        // works with order, can have different size than numToField!
        return utils_numberToBytesBE(num, CURVE.nByteLength);
    }
    // Steps A, D of RFC6979 3.2
    // Creates RFC6979 seed; converts msg/privKey to numbers.
    // Used only in sign, not in verify.
    // NOTE: we cannot assume here that msgHash has same amount of bytes as curve order, this will be wrong at least for P521.
    // Also it can be bigger for P224 + SHA256
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if (['recovered', 'canonical'].some((k) => k in opts))
            throw new Error('sign() legacy options not supported');
        const { hash, randomBytes } = CURVE;
        let { lowS, prehash, extraEntropy: ent } = opts; // generates low-s sigs by default
        if (lowS == null)
            lowS = true; // RFC6979 3.2: we skip step A, because we already provide hash
        msgHash = utils_ensureBytes('msgHash', msgHash);
        validateSigVerOpts(opts);
        if (prehash)
            msgHash = utils_ensureBytes('prehashed msgHash', hash(msgHash));
        // We can't later call bits2octets, since nested bits2int is broken for curves
        // with nBitLength % 8 !== 0. Because of that, we unwrap it here as int2octets call.
        // const bits2octets = (bits) => int2octets(bits2int_modN(bits))
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey); // validate private key, convert to bigint
        const seedArgs = [int2octets(d), int2octets(h1int)];
        // extraEntropy. RFC6979 3.6: additional k' (optional).
        if (ent != null && ent !== false) {
            // K = HMAC_K(V || 0x00 || int2octets(x) || bits2octets(h1) || k')
            const e = ent === true ? randomBytes(Fp.BYTES) : ent; // generate random bytes OR pass as-is
            seedArgs.push(utils_ensureBytes('extraEntropy', e)); // check for being bytes
        }
        const seed = utils_concatBytes(...seedArgs); // Step D of RFC6979 3.2
        const m = h1int; // NOTE: no need to call bits2int second time here, it is inside truncateHash!
        // Converts signature params into point w r/s, checks result for validity.
        function k2sig(kBytes) {
            // RFC 6979 Section 3.2, step 3: k = bits2int(T)
            const k = bits2int(kBytes); // Cannot use fields methods, since it is group element
            if (!isWithinCurveOrder(k))
                return; // Important: all mod() calls here must be done over N
            const ik = invN(k); // k^-1 mod n
            const q = Point.BASE.multiply(k).toAffine(); // q = Gk
            const r = modN(q.x); // r = q.x mod n
            if (r === weierstrass_0n)
                return;
            // Can use scalar blinding b^-1(bm + bdr) where b ∈ [1,q−1] according to
            // https://tches.iacr.org/index.php/TCHES/article/view/7337/6509. We've decided against it:
            // a) dependency on CSPRNG b) 15% slowdown c) doesn't really help since bigints are not CT
            const s = modN(ik * modN(m + r * d)); // Not using blinding here
            if (s === weierstrass_0n)
                return;
            let recovery = (q.x === r ? 0 : 2) | Number(q.y & weierstrass_1n); // recovery bit (2 or 3, when q.x > n)
            let normS = s;
            if (lowS && isBiggerThanHalfOrder(s)) {
                normS = normalizeS(s); // if lowS was passed, ensure s is always
                recovery ^= 1; // // in the bottom half of N
            }
            return new Signature(r, normS, recovery); // use normS, not s
        }
        return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    /**
     * Signs message hash with a private key.
     * ```
     * sign(m, d, k) where
     *   (x, y) = G × k
     *   r = x mod n
     *   s = (m + dr)/k mod n
     * ```
     * @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
     * @param privKey private key
     * @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
     * @returns signature with recovery param
     */
    function sign(msgHash, privKey, opts = defaultSigOpts) {
        const { seed, k2sig } = prepSig(msgHash, privKey, opts); // Steps A, D of RFC6979 3.2.
        const C = CURVE;
        const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
        return drbg(seed, k2sig); // Steps B, C, D, E, F, G
    }
    // Enable precomputes. Slows down first publicKey computation by 20ms.
    Point.BASE._setWindowSize(8);
    // utils.precompute(8, ProjectivePoint.BASE)
    /**
     * Verifies a signature against message hash and public key.
     * Rejects lowS signatures by default: to override,
     * specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
     *
     * ```
     * verify(r, s, h, P) where
     *   U1 = hs^-1 mod n
     *   U2 = rs^-1 mod n
     *   R = U1⋅G - U2⋅P
     *   mod(R.x, n) == r
     * ```
     */
    function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
        const sg = signature;
        msgHash = utils_ensureBytes('msgHash', msgHash);
        publicKey = utils_ensureBytes('publicKey', publicKey);
        if ('strict' in opts)
            throw new Error('options.strict was renamed to lowS');
        validateSigVerOpts(opts);
        const { lowS, prehash } = opts;
        let _sig = undefined;
        let P;
        try {
            if (typeof sg === 'string' || isBytes(sg)) {
                // Signature can be represented in 2 ways: compact (2*nByteLength) & DER (variable-length).
                // Since DER can also be 2*nByteLength bytes, we check for it first.
                try {
                    _sig = Signature.fromDER(sg);
                }
                catch (derError) {
                    if (!(derError instanceof DER.Err))
                        throw derError;
                    _sig = Signature.fromCompact(sg);
                }
            }
            else if (typeof sg === 'object' && typeof sg.r === 'bigint' && typeof sg.s === 'bigint') {
                const { r, s } = sg;
                _sig = new Signature(r, s);
            }
            else {
                throw new Error('PARSE');
            }
            P = Point.fromHex(publicKey);
        }
        catch (error) {
            if (error.message === 'PARSE')
                throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
            return false;
        }
        if (lowS && _sig.hasHighS())
            return false;
        if (prehash)
            msgHash = CURVE.hash(msgHash);
        const { r, s } = _sig;
        const h = bits2int_modN(msgHash); // Cannot use fields methods, since it is group element
        const is = invN(s); // s^-1
        const u1 = modN(h * is); // u1 = hs^-1 mod n
        const u2 = modN(r * is); // u2 = rs^-1 mod n
        const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine(); // R = u1⋅G + u2⋅P
        if (!R)
            return false;
        const v = modN(R.x);
        return v === r;
    }
    return {
        CURVE,
        getPublicKey,
        getSharedSecret,
        sign,
        verify,
        ProjectivePoint: Point,
        Signature,
        utils,
    };
}
/**
 * Implementation of the Shallue and van de Woestijne method for any weierstrass curve.
 * TODO: check if there is a way to merge this with uvRatio in Edwards; move to modular.
 * b = True and y = sqrt(u / v) if (u / v) is square in F, and
 * b = False and y = sqrt(Z * (u / v)) otherwise.
 * @param Fp
 * @param Z
 * @returns
 */
function SWUFpSqrtRatio(Fp, Z) {
    // Generic implementation
    const q = Fp.ORDER;
    let l = weierstrass_0n;
    for (let o = q - weierstrass_1n; o % weierstrass_2n === weierstrass_0n; o /= weierstrass_2n)
        l += weierstrass_1n;
    const c1 = l; // 1. c1, the largest integer such that 2^c1 divides q - 1.
    // We need 2n ** c1 and 2n ** (c1-1). We can't use **; but we can use <<.
    // 2n ** c1 == 2n << (c1-1)
    const _2n_pow_c1_1 = weierstrass_2n << (c1 - weierstrass_1n - weierstrass_1n);
    const _2n_pow_c1 = _2n_pow_c1_1 * weierstrass_2n;
    const c2 = (q - weierstrass_1n) / _2n_pow_c1; // 2. c2 = (q - 1) / (2^c1)  # Integer arithmetic
    const c3 = (c2 - weierstrass_1n) / weierstrass_2n; // 3. c3 = (c2 - 1) / 2            # Integer arithmetic
    const c4 = _2n_pow_c1 - weierstrass_1n; // 4. c4 = 2^c1 - 1                # Integer arithmetic
    const c5 = _2n_pow_c1_1; // 5. c5 = 2^(c1 - 1)                  # Integer arithmetic
    const c6 = Fp.pow(Z, c2); // 6. c6 = Z^c2
    const c7 = Fp.pow(Z, (c2 + weierstrass_1n) / weierstrass_2n); // 7. c7 = Z^((c2 + 1) / 2)
    let sqrtRatio = (u, v) => {
        let tv1 = c6; // 1. tv1 = c6
        let tv2 = Fp.pow(v, c4); // 2. tv2 = v^c4
        let tv3 = Fp.sqr(tv2); // 3. tv3 = tv2^2
        tv3 = Fp.mul(tv3, v); // 4. tv3 = tv3 * v
        let tv5 = Fp.mul(u, tv3); // 5. tv5 = u * tv3
        tv5 = Fp.pow(tv5, c3); // 6. tv5 = tv5^c3
        tv5 = Fp.mul(tv5, tv2); // 7. tv5 = tv5 * tv2
        tv2 = Fp.mul(tv5, v); // 8. tv2 = tv5 * v
        tv3 = Fp.mul(tv5, u); // 9. tv3 = tv5 * u
        let tv4 = Fp.mul(tv3, tv2); // 10. tv4 = tv3 * tv2
        tv5 = Fp.pow(tv4, c5); // 11. tv5 = tv4^c5
        let isQR = Fp.eql(tv5, Fp.ONE); // 12. isQR = tv5 == 1
        tv2 = Fp.mul(tv3, c7); // 13. tv2 = tv3 * c7
        tv5 = Fp.mul(tv4, tv1); // 14. tv5 = tv4 * tv1
        tv3 = Fp.cmov(tv2, tv3, isQR); // 15. tv3 = CMOV(tv2, tv3, isQR)
        tv4 = Fp.cmov(tv5, tv4, isQR); // 16. tv4 = CMOV(tv5, tv4, isQR)
        // 17. for i in (c1, c1 - 1, ..., 2):
        for (let i = c1; i > weierstrass_1n; i--) {
            let tv5 = i - weierstrass_2n; // 18.    tv5 = i - 2
            tv5 = weierstrass_2n << (tv5 - weierstrass_1n); // 19.    tv5 = 2^tv5
            let tvv5 = Fp.pow(tv4, tv5); // 20.    tv5 = tv4^tv5
            const e1 = Fp.eql(tvv5, Fp.ONE); // 21.    e1 = tv5 == 1
            tv2 = Fp.mul(tv3, tv1); // 22.    tv2 = tv3 * tv1
            tv1 = Fp.mul(tv1, tv1); // 23.    tv1 = tv1 * tv1
            tvv5 = Fp.mul(tv4, tv1); // 24.    tv5 = tv4 * tv1
            tv3 = Fp.cmov(tv2, tv3, e1); // 25.    tv3 = CMOV(tv2, tv3, e1)
            tv4 = Fp.cmov(tvv5, tv4, e1); // 26.    tv4 = CMOV(tv5, tv4, e1)
        }
        return { isValid: isQR, value: tv3 };
    };
    if (Fp.ORDER % weierstrass_4n === weierstrass_3n) {
        // sqrt_ratio_3mod4(u, v)
        const c1 = (Fp.ORDER - weierstrass_3n) / weierstrass_4n; // 1. c1 = (q - 3) / 4     # Integer arithmetic
        const c2 = Fp.sqrt(Fp.neg(Z)); // 2. c2 = sqrt(-Z)
        sqrtRatio = (u, v) => {
            let tv1 = Fp.sqr(v); // 1. tv1 = v^2
            const tv2 = Fp.mul(u, v); // 2. tv2 = u * v
            tv1 = Fp.mul(tv1, tv2); // 3. tv1 = tv1 * tv2
            let y1 = Fp.pow(tv1, c1); // 4. y1 = tv1^c1
            y1 = Fp.mul(y1, tv2); // 5. y1 = y1 * tv2
            const y2 = Fp.mul(y1, c2); // 6. y2 = y1 * c2
            const tv3 = Fp.mul(Fp.sqr(y1), v); // 7. tv3 = y1^2; 8. tv3 = tv3 * v
            const isQR = Fp.eql(tv3, u); // 9. isQR = tv3 == u
            let y = Fp.cmov(y2, y1, isQR); // 10. y = CMOV(y2, y1, isQR)
            return { isValid: isQR, value: y }; // 11. return (isQR, y) isQR ? y : y*c2
        };
    }
    // No curves uses that
    // if (Fp.ORDER % _8n === _5n) // sqrt_ratio_5mod8
    return sqrtRatio;
}
/**
 * Simplified Shallue-van de Woestijne-Ulas Method
 * https://www.rfc-editor.org/rfc/rfc9380#section-6.6.2
 */
function weierstrass_mapToCurveSimpleSWU(Fp, opts) {
    mod.validateField(Fp);
    if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
        throw new Error('mapToCurveSimpleSWU: invalid opts');
    const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
    if (!Fp.isOdd)
        throw new Error('Fp.isOdd is not implemented!');
    // Input: u, an element of F.
    // Output: (x, y), a point on E.
    return (u) => {
        // prettier-ignore
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u); // 1.  tv1 = u^2
        tv1 = Fp.mul(tv1, opts.Z); // 2.  tv1 = Z * tv1
        tv2 = Fp.sqr(tv1); // 3.  tv2 = tv1^2
        tv2 = Fp.add(tv2, tv1); // 4.  tv2 = tv2 + tv1
        tv3 = Fp.add(tv2, Fp.ONE); // 5.  tv3 = tv2 + 1
        tv3 = Fp.mul(tv3, opts.B); // 6.  tv3 = B * tv3
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO)); // 7.  tv4 = CMOV(Z, -tv2, tv2 != 0)
        tv4 = Fp.mul(tv4, opts.A); // 8.  tv4 = A * tv4
        tv2 = Fp.sqr(tv3); // 9.  tv2 = tv3^2
        tv6 = Fp.sqr(tv4); // 10. tv6 = tv4^2
        tv5 = Fp.mul(tv6, opts.A); // 11. tv5 = A * tv6
        tv2 = Fp.add(tv2, tv5); // 12. tv2 = tv2 + tv5
        tv2 = Fp.mul(tv2, tv3); // 13. tv2 = tv2 * tv3
        tv6 = Fp.mul(tv6, tv4); // 14. tv6 = tv6 * tv4
        tv5 = Fp.mul(tv6, opts.B); // 15. tv5 = B * tv6
        tv2 = Fp.add(tv2, tv5); // 16. tv2 = tv2 + tv5
        x = Fp.mul(tv1, tv3); // 17.   x = tv1 * tv3
        const { isValid, value } = sqrtRatio(tv2, tv6); // 18. (is_gx1_square, y1) = sqrt_ratio(tv2, tv6)
        y = Fp.mul(tv1, u); // 19.   y = tv1 * u  -> Z * u^3 * y1
        y = Fp.mul(y, value); // 20.   y = y * y1
        x = Fp.cmov(x, tv3, isValid); // 21.   x = CMOV(x, tv3, is_gx1_square)
        y = Fp.cmov(y, value, isValid); // 22.   y = CMOV(y, y1, is_gx1_square)
        const e1 = Fp.isOdd(u) === Fp.isOdd(y); // 23.  e1 = sgn0(u) == sgn0(y)
        y = Fp.cmov(Fp.neg(y), y, e1); // 24.   y = CMOV(-y, y, e1)
        x = Fp.div(x, tv4); // 25.   x = x / tv4
        return { x, y };
    };
}
//# sourceMappingURL=weierstrass.js.map
;// ./node_modules/viem/node_modules/@noble/curves/esm/_shortw_utils.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */



// connects noble-curves to noble-hashes
function getHash(hash) {
    return {
        hash,
        hmac: (key, ...msgs) => hmac(hash, key, (0,utils/* concatBytes */.Id)(...msgs)),
        randomBytes: utils/* randomBytes */.po,
    };
}
function createCurve(curveDef, defHash) {
    const create = (hash) => weierstrass({ ...curveDef, ...getHash(hash) });
    return Object.freeze({ ...create(defHash), create });
}
//# sourceMappingURL=_shortw_utils.js.map
;// ./node_modules/viem/node_modules/@noble/curves/esm/secp256k1.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */







const secp256k1P = BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f');
const secp256k1N = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
const secp256k1_1n = BigInt(1);
const secp256k1_2n = BigInt(2);
const divNearest = (a, b) => (a + b / secp256k1_2n) / b;
/**
 * √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
 * (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
 */
function sqrtMod(y) {
    const P = secp256k1P;
    // prettier-ignore
    const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    // prettier-ignore
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = (y * y * y) % P; // x^3, 11
    const b3 = (b2 * b2 * y) % P; // x^7
    const b6 = (pow2(b3, _3n, P) * b3) % P;
    const b9 = (pow2(b6, _3n, P) * b3) % P;
    const b11 = (pow2(b9, secp256k1_2n, P) * b2) % P;
    const b22 = (pow2(b11, _11n, P) * b11) % P;
    const b44 = (pow2(b22, _22n, P) * b22) % P;
    const b88 = (pow2(b44, _44n, P) * b44) % P;
    const b176 = (pow2(b88, _88n, P) * b88) % P;
    const b220 = (pow2(b176, _44n, P) * b44) % P;
    const b223 = (pow2(b220, _3n, P) * b3) % P;
    const t1 = (pow2(b223, _23n, P) * b22) % P;
    const t2 = (pow2(t1, _6n, P) * b2) % P;
    const root = pow2(t2, secp256k1_2n, P);
    if (!Fp.eql(Fp.sqr(root), y))
        throw new Error('Cannot find square root');
    return root;
}
const Fp = Field(secp256k1P, undefined, undefined, { sqrt: sqrtMod });
/**
 * secp256k1 short weierstrass curve and ECDSA signatures over it.
 */
const secp256k1 = createCurve({
    a: BigInt(0), // equation params: a, b
    b: BigInt(7), // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
    Fp, // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
    n: secp256k1N, // Curve order, total count of valid points in the field
    // Base point (x, y) aka generator point
    Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
    Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
    h: BigInt(1), // Cofactor
    lowS: true, // Allow only low-S signatures by default in sign() and verify()
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */
    endo: {
        beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
        splitScalar: (k) => {
            const n = secp256k1N;
            const a1 = BigInt('0x3086d221a7d46bcde86c90e49284eb15');
            const b1 = -secp256k1_1n * BigInt('0xe4437ed6010e88286f547fa90abfe4c3');
            const a2 = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8');
            const b2 = a1;
            const POW_2_128 = BigInt('0x100000000000000000000000000000000'); // (2n**128n).toString(16)
            const c1 = divNearest(b2 * k, n);
            const c2 = divNearest(-b1 * k, n);
            let k1 = modular_mod(k - c1 * a1 - c2 * a2, n);
            let k2 = modular_mod(-c1 * b1 - c2 * b2, n);
            const k1neg = k1 > POW_2_128;
            const k2neg = k2 > POW_2_128;
            if (k1neg)
                k1 = n - k1;
            if (k2neg)
                k2 = n - k2;
            if (k1 > POW_2_128 || k2 > POW_2_128) {
                throw new Error('splitScalar: Endomorphism failed, k=' + k);
            }
            return { k1neg, k1, k2neg, k2 };
        },
    },
}, esm_sha256/* sha256 */.sc);
// Schnorr signatures are superior to ECDSA from above. Below is Schnorr-specific BIP0340 code.
// https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
const secp256k1_0n = BigInt(0);
/** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */
const TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === undefined) {
        const tagH = sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
        tagP = concatBytes(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return sha256(concatBytes(tagP, ...messages));
}
// ECDSA compact points are 33-byte. Schnorr is 32: we strip first byte 0x02 or 0x03
const pointToBytes = (point) => point.toRawBytes(true).slice(1);
const numTo32b = (n) => numberToBytesBE(n, 32);
const modP = (x) => mod(x, secp256k1P);
const modN = (x) => mod(x, secp256k1N);
const Point = secp256k1.ProjectivePoint;
const GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
// Calculate point, scalar and bytes
function schnorrGetExtPubKey(priv) {
    let d_ = secp256k1.utils.normPrivateKeyToScalar(priv); // same method executed in fromPrivateKey
    let p = Point.fromPrivateKey(d_); // P = d'⋅G; 0 < d' < n check is done inside
    const scalar = p.hasEvenY() ? d_ : modN(-d_);
    return { scalar: scalar, bytes: pointToBytes(p) };
}
/**
 * lift_x from BIP340. Convert 32-byte x coordinate to elliptic curve point.
 * @returns valid point checked for being on-curve
 */
function lift_x(x) {
    aInRange('x', x, secp256k1_1n, secp256k1P); // Fail if x ≥ p.
    const xx = modP(x * x);
    const c = modP(xx * x + BigInt(7)); // Let c = x³ + 7 mod p.
    let y = sqrtMod(c); // Let y = c^(p+1)/4 mod p.
    if (y % secp256k1_2n !== secp256k1_0n)
        y = modP(-y); // Return the unique point P such that x(P) = x and
    const p = new Point(x, y, secp256k1_1n); // y(P) = y if y mod 2 = 0 or y(P) = p-y otherwise.
    p.assertValidity();
    return p;
}
const num = (/* unused pure expression or super */ null && (bytesToNumberBE));
/**
 * Create tagged hash, convert it to bigint, reduce modulo-n.
 */
function challenge(...args) {
    return modN(num(taggedHash('BIP0340/challenge', ...args)));
}
/**
 * Schnorr public key is just `x` coordinate of Point as per BIP340.
 */
function schnorrGetPublicKey(privateKey) {
    return schnorrGetExtPubKey(privateKey).bytes; // d'=int(sk). Fail if d'=0 or d'≥n. Ret bytes(d'⋅G)
}
/**
 * Creates Schnorr signature as per BIP340. Verifies itself before returning anything.
 * auxRand is optional and is not the sole source of k generation: bad CSPRNG won't be dangerous.
 */
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
    const m = ensureBytes('message', message);
    const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey); // checks for isWithinCurveOrder
    const a = ensureBytes('auxRand', auxRand, 32); // Auxiliary random data a: a 32-byte array
    const t = numTo32b(d ^ num(taggedHash('BIP0340/aux', a))); // Let t be the byte-wise xor of bytes(d) and hash/aux(a)
    const rand = taggedHash('BIP0340/nonce', t, px, m); // Let rand = hash/nonce(t || bytes(P) || m)
    const k_ = modN(num(rand)); // Let k' = int(rand) mod n
    if (k_ === secp256k1_0n)
        throw new Error('sign failed: k is zero'); // Fail if k' = 0.
    const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_); // Let R = k'⋅G.
    const e = challenge(rx, px, m); // Let e = int(hash/challenge(bytes(R) || bytes(P) || m)) mod n.
    const sig = new Uint8Array(64); // Let sig = bytes(R) || bytes((k + ed) mod n).
    sig.set(rx, 0);
    sig.set(numTo32b(modN(k + e * d)), 32);
    // If Verify(bytes(P), m, sig) (see below) returns failure, abort
    if (!schnorrVerify(sig, m, px))
        throw new Error('sign: Invalid signature produced');
    return sig;
}
/**
 * Verifies Schnorr signature.
 * Will swallow errors & return false except for initial type validation of arguments.
 */
function schnorrVerify(signature, message, publicKey) {
    const sig = ensureBytes('signature', signature, 64);
    const m = ensureBytes('message', message);
    const pub = ensureBytes('publicKey', publicKey, 32);
    try {
        const P = lift_x(num(pub)); // P = lift_x(int(pk)); fail if that fails
        const r = num(sig.subarray(0, 32)); // Let r = int(sig[0:32]); fail if r ≥ p.
        if (!inRange(r, secp256k1_1n, secp256k1P))
            return false;
        const s = num(sig.subarray(32, 64)); // Let s = int(sig[32:64]); fail if s ≥ n.
        if (!inRange(s, secp256k1_1n, secp256k1N))
            return false;
        const e = challenge(numTo32b(r), pointToBytes(P), m); // int(challenge(bytes(r)||bytes(P)||m))%n
        const R = GmulAdd(P, s, modN(-e)); // R = s⋅G - e⋅P
        if (!R || !R.hasEvenY() || R.toAffine().x !== r)
            return false; // -eP == (n-e)P
        return true; // Fail if is_infinite(R) / not has_even_y(R) / x(R) ≠ r.
    }
    catch (error) {
        return false;
    }
}
/**
 * Schnorr signatures over secp256k1.
 */
const schnorr = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => ({
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    utils: {
        randomPrivateKey: secp256k1.utils.randomPrivateKey,
        lift_x,
        pointToBytes,
        numberToBytesBE,
        bytesToNumberBE,
        taggedHash,
        mod,
    },
}))()));
const isoMap = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => isogenyMap(Fp, [
    // xNum
    [
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7',
        '0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581',
        '0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262',
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c',
    ],
    // xDen
    [
        '0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b',
        '0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
    // yNum
    [
        '0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c',
        '0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3',
        '0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931',
        '0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84',
    ],
    // yDen
    [
        '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b',
        '0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573',
        '0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
].map((i) => i.map((j) => BigInt(j)))))()));
const mapSWU = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => mapToCurveSimpleSWU(Fp, {
    A: BigInt('0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533'),
    B: BigInt('1771'),
    Z: Fp.create(BigInt('-11')),
}))()));
const htf = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => createHasher(secp256k1.ProjectivePoint, (scalars) => {
    const { x, y } = mapSWU(Fp.create(scalars[0]));
    return isoMap(x, y);
}, {
    DST: 'secp256k1_XMD:SHA-256_SSWU_RO_',
    encodeDST: 'secp256k1_XMD:SHA-256_SSWU_NU_',
    p: Fp.ORDER,
    m: 1,
    k: 128,
    expand: 'xmd',
    hash: sha256,
}))()));
const hashToCurve = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => htf.hashToCurve)()));
const encodeToCurve = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => htf.encodeToCurve)()));
//# sourceMappingURL=secp256k1.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxvQ0FBb0MseUVBQXlCO0FBQzdELHNDQUFzQywyRUFBMkI7QUFDeEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9Abm9ibGUvaGFzaGVzL2VzbS9obWFjLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL3ZpZW0vbm9kZV9tb2R1bGVzL0Bub2JsZS9jdXJ2ZXMvZXNtL2Fic3RyYWN0L3V0aWxzLmpzIiwid2VicGFjazovL2J1bmRsZS1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL3ZpZW0vbm9kZV9tb2R1bGVzL0Bub2JsZS9jdXJ2ZXMvZXNtL2Fic3RyYWN0L21vZHVsYXIuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvdmllbS9ub2RlX21vZHVsZXMvQG5vYmxlL2N1cnZlcy9lc20vYWJzdHJhY3QvY3VydmUuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvdmllbS9ub2RlX21vZHVsZXMvQG5vYmxlL2N1cnZlcy9lc20vYWJzdHJhY3Qvd2VpZXJzdHJhc3MuanMiLCJ3ZWJwYWNrOi8vYnVuZGxlLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvdmllbS9ub2RlX21vZHVsZXMvQG5vYmxlL2N1cnZlcy9lc20vX3Nob3J0d191dGlscy5qcyIsIndlYnBhY2s6Ly9idW5kbGUtY3JlYXRvci8uL25vZGVfbW9kdWxlcy92aWVtL25vZGVfbW9kdWxlcy9Abm9ibGUvY3VydmVzL2VzbS9zZWNwMjU2azEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzaCBhcyBhc3NlcnRIYXNoLCBieXRlcyBhcyBhc3NlcnRCeXRlcywgZXhpc3RzIGFzIGFzc2VydEV4aXN0cyB9IGZyb20gJy4vX2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBIYXNoLCB0b0J5dGVzIH0gZnJvbSAnLi91dGlscy5qcyc7XG4vLyBITUFDIChSRkMgMjEwNClcbmV4cG9ydCBjbGFzcyBITUFDIGV4dGVuZHMgSGFzaCB7XG4gICAgY29uc3RydWN0b3IoaGFzaCwgX2tleSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG4gICAgICAgIGFzc2VydEhhc2goaGFzaCk7XG4gICAgICAgIGNvbnN0IGtleSA9IHRvQnl0ZXMoX2tleSk7XG4gICAgICAgIHRoaXMuaUhhc2ggPSBoYXNoLmNyZWF0ZSgpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaUhhc2gudXBkYXRlICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBpbnN0YW5jZSBvZiBjbGFzcyB3aGljaCBleHRlbmRzIHV0aWxzLkhhc2gnKTtcbiAgICAgICAgdGhpcy5ibG9ja0xlbiA9IHRoaXMuaUhhc2guYmxvY2tMZW47XG4gICAgICAgIHRoaXMub3V0cHV0TGVuID0gdGhpcy5pSGFzaC5vdXRwdXRMZW47XG4gICAgICAgIGNvbnN0IGJsb2NrTGVuID0gdGhpcy5ibG9ja0xlbjtcbiAgICAgICAgY29uc3QgcGFkID0gbmV3IFVpbnQ4QXJyYXkoYmxvY2tMZW4pO1xuICAgICAgICAvLyBibG9ja0xlbiBjYW4gYmUgYmlnZ2VyIHRoYW4gb3V0cHV0TGVuXG4gICAgICAgIHBhZC5zZXQoa2V5Lmxlbmd0aCA+IGJsb2NrTGVuID8gaGFzaC5jcmVhdGUoKS51cGRhdGUoa2V5KS5kaWdlc3QoKSA6IGtleSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFkLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgcGFkW2ldIF49IDB4MzY7XG4gICAgICAgIHRoaXMuaUhhc2gudXBkYXRlKHBhZCk7XG4gICAgICAgIC8vIEJ5IGRvaW5nIHVwZGF0ZSAocHJvY2Vzc2luZyBvZiBmaXJzdCBibG9jaykgb2Ygb3V0ZXIgaGFzaCBoZXJlIHdlIGNhbiByZS11c2UgaXQgYmV0d2VlbiBtdWx0aXBsZSBjYWxscyB2aWEgY2xvbmVcbiAgICAgICAgdGhpcy5vSGFzaCA9IGhhc2guY3JlYXRlKCk7XG4gICAgICAgIC8vIFVuZG8gaW50ZXJuYWwgWE9SICYmIGFwcGx5IG91dGVyIFhPUlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHBhZFtpXSBePSAweDM2IF4gMHg1YztcbiAgICAgICAgdGhpcy5vSGFzaC51cGRhdGUocGFkKTtcbiAgICAgICAgcGFkLmZpbGwoMCk7XG4gICAgfVxuICAgIHVwZGF0ZShidWYpIHtcbiAgICAgICAgYXNzZXJ0RXhpc3RzKHRoaXMpO1xuICAgICAgICB0aGlzLmlIYXNoLnVwZGF0ZShidWYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGlnZXN0SW50byhvdXQpIHtcbiAgICAgICAgYXNzZXJ0RXhpc3RzKHRoaXMpO1xuICAgICAgICBhc3NlcnRCeXRlcyhvdXQsIHRoaXMub3V0cHV0TGVuKTtcbiAgICAgICAgdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaUhhc2guZGlnZXN0SW50byhvdXQpO1xuICAgICAgICB0aGlzLm9IYXNoLnVwZGF0ZShvdXQpO1xuICAgICAgICB0aGlzLm9IYXNoLmRpZ2VzdEludG8ob3V0KTtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICAgIGRpZ2VzdCgpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5vSGFzaC5vdXRwdXRMZW4pO1xuICAgICAgICB0aGlzLmRpZ2VzdEludG8ob3V0KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgX2Nsb25lSW50byh0bykge1xuICAgICAgICAvLyBDcmVhdGUgbmV3IGluc3RhbmNlIHdpdGhvdXQgY2FsbGluZyBjb25zdHJ1Y3RvciBzaW5jZSBrZXkgYWxyZWFkeSBpbiBzdGF0ZSBhbmQgd2UgZG9uJ3Qga25vdyBpdC5cbiAgICAgICAgdG8gfHwgKHRvID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIHt9KSk7XG4gICAgICAgIGNvbnN0IHsgb0hhc2gsIGlIYXNoLCBmaW5pc2hlZCwgZGVzdHJveWVkLCBibG9ja0xlbiwgb3V0cHV0TGVuIH0gPSB0aGlzO1xuICAgICAgICB0byA9IHRvO1xuICAgICAgICB0by5maW5pc2hlZCA9IGZpbmlzaGVkO1xuICAgICAgICB0by5kZXN0cm95ZWQgPSBkZXN0cm95ZWQ7XG4gICAgICAgIHRvLmJsb2NrTGVuID0gYmxvY2tMZW47XG4gICAgICAgIHRvLm91dHB1dExlbiA9IG91dHB1dExlbjtcbiAgICAgICAgdG8ub0hhc2ggPSBvSGFzaC5fY2xvbmVJbnRvKHRvLm9IYXNoKTtcbiAgICAgICAgdG8uaUhhc2ggPSBpSGFzaC5fY2xvbmVJbnRvKHRvLmlIYXNoKTtcbiAgICAgICAgcmV0dXJuIHRvO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMub0hhc2guZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmlIYXNoLmRlc3Ryb3koKTtcbiAgICB9XG59XG4vKipcbiAqIEhNQUM6IFJGQzIxMDQgbWVzc2FnZSBhdXRoZW50aWNhdGlvbiBjb2RlLlxuICogQHBhcmFtIGhhc2ggLSBmdW5jdGlvbiB0aGF0IHdvdWxkIGJlIHVzZWQgZS5nLiBzaGEyNTZcbiAqIEBwYXJhbSBrZXkgLSBtZXNzYWdlIGtleVxuICogQHBhcmFtIG1lc3NhZ2UgLSBtZXNzYWdlIGRhdGFcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBobWFjIH0gZnJvbSAnQG5vYmxlL2hhc2hlcy9obWFjJztcbiAqIGltcG9ydCB7IHNoYTI1NiB9IGZyb20gJ0Bub2JsZS9oYXNoZXMvc2hhMic7XG4gKiBjb25zdCBtYWMxID0gaG1hYyhzaGEyNTYsICdrZXknLCAnbWVzc2FnZScpO1xuICovXG5leHBvcnQgY29uc3QgaG1hYyA9IChoYXNoLCBrZXksIG1lc3NhZ2UpID0+IG5ldyBITUFDKGhhc2gsIGtleSkudXBkYXRlKG1lc3NhZ2UpLmRpZ2VzdCgpO1xuaG1hYy5jcmVhdGUgPSAoaGFzaCwga2V5KSA9PiBuZXcgSE1BQyhoYXNoLCBrZXkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG1hYy5qcy5tYXAiLCIvKiEgbm9ibGUtY3VydmVzIC0gTUlUIExpY2Vuc2UgKGMpIDIwMjIgUGF1bCBNaWxsZXIgKHBhdWxtaWxsci5jb20pICovXG4vLyAxMDAgbGluZXMgb2YgY29kZSBpbiB0aGUgZmlsZSBhcmUgZHVwbGljYXRlZCBmcm9tIG5vYmxlLWhhc2hlcyAodXRpbHMpLlxuLy8gVGhpcyBpcyBPSzogYGFic3RyYWN0YCBkaXJlY3RvcnkgZG9lcyBub3QgdXNlIG5vYmxlLWhhc2hlcy5cbi8vIFVzZXIgbWF5IG9wdC1pbiBpbnRvIHVzaW5nIGRpZmZlcmVudCBoYXNoaW5nIGxpYnJhcnkuIFRoaXMgd2F5LCBub2JsZS1oYXNoZXNcbi8vIHdvbid0IGJlIGluY2x1ZGVkIGludG8gdGhlaXIgYnVuZGxlLlxuY29uc3QgXzBuID0gLyogQF9fUFVSRV9fICovIEJpZ0ludCgwKTtcbmNvbnN0IF8xbiA9IC8qIEBfX1BVUkVfXyAqLyBCaWdJbnQoMSk7XG5jb25zdCBfMm4gPSAvKiBAX19QVVJFX18gKi8gQmlnSW50KDIpO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQnl0ZXMoYSkge1xuICAgIHJldHVybiAoYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHxcbiAgICAgICAgKGEgIT0gbnVsbCAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnVWludDhBcnJheScpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhYnl0ZXMoaXRlbSkge1xuICAgIGlmICghaXNCeXRlcyhpdGVtKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVaW50OEFycmF5IGV4cGVjdGVkJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWJvb2wodGl0bGUsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGl0bGV9IG11c3QgYmUgdmFsaWQgYm9vbGVhbiwgZ290IFwiJHt2YWx1ZX1cIi5gKTtcbn1cbi8vIEFycmF5IHdoZXJlIGluZGV4IDB4ZjAgKDI0MCkgaXMgbWFwcGVkIHRvIHN0cmluZyAnZjAnXG5jb25zdCBoZXhlcyA9IC8qIEBfX1BVUkVfXyAqLyBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyNTYgfSwgKF8sIGkpID0+IGkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpO1xuLyoqXG4gKiBAZXhhbXBsZSBieXRlc1RvSGV4KFVpbnQ4QXJyYXkuZnJvbShbMHhjYSwgMHhmZSwgMHgwMSwgMHgyM10pKSAvLyAnY2FmZTAxMjMnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvSGV4KGJ5dGVzKSB7XG4gICAgYWJ5dGVzKGJ5dGVzKTtcbiAgICAvLyBwcmUtY2FjaGluZyBpbXByb3ZlcyB0aGUgc3BlZWQgNnhcbiAgICBsZXQgaGV4ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBoZXggKz0gaGV4ZXNbYnl0ZXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gaGV4O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvSGV4VW5wYWRkZWQobnVtKSB7XG4gICAgY29uc3QgaGV4ID0gbnVtLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gaGV4Lmxlbmd0aCAmIDEgPyBgMCR7aGV4fWAgOiBoZXg7XG59XG5leHBvcnQgZnVuY3Rpb24gaGV4VG9OdW1iZXIoaGV4KSB7XG4gICAgaWYgKHR5cGVvZiBoZXggIT09ICdzdHJpbmcnKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2hleCBzdHJpbmcgZXhwZWN0ZWQsIGdvdCAnICsgdHlwZW9mIGhleCk7XG4gICAgLy8gQmlnIEVuZGlhblxuICAgIHJldHVybiBCaWdJbnQoaGV4ID09PSAnJyA/ICcwJyA6IGAweCR7aGV4fWApO1xufVxuLy8gV2UgdXNlIG9wdGltaXplZCB0ZWNobmlxdWUgdG8gY29udmVydCBoZXggc3RyaW5nIHRvIGJ5dGUgYXJyYXlcbmNvbnN0IGFzY2lpcyA9IHsgXzA6IDQ4LCBfOTogNTcsIF9BOiA2NSwgX0Y6IDcwLCBfYTogOTcsIF9mOiAxMDIgfTtcbmZ1bmN0aW9uIGFzY2lpVG9CYXNlMTYoY2hhcikge1xuICAgIGlmIChjaGFyID49IGFzY2lpcy5fMCAmJiBjaGFyIDw9IGFzY2lpcy5fOSlcbiAgICAgICAgcmV0dXJuIGNoYXIgLSBhc2NpaXMuXzA7XG4gICAgaWYgKGNoYXIgPj0gYXNjaWlzLl9BICYmIGNoYXIgPD0gYXNjaWlzLl9GKVxuICAgICAgICByZXR1cm4gY2hhciAtIChhc2NpaXMuX0EgLSAxMCk7XG4gICAgaWYgKGNoYXIgPj0gYXNjaWlzLl9hICYmIGNoYXIgPD0gYXNjaWlzLl9mKVxuICAgICAgICByZXR1cm4gY2hhciAtIChhc2NpaXMuX2EgLSAxMCk7XG4gICAgcmV0dXJuO1xufVxuLyoqXG4gKiBAZXhhbXBsZSBoZXhUb0J5dGVzKCdjYWZlMDEyMycpIC8vIFVpbnQ4QXJyYXkuZnJvbShbMHhjYSwgMHhmZSwgMHgwMSwgMHgyM10pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb0J5dGVzKGhleCkge1xuICAgIGlmICh0eXBlb2YgaGV4ICE9PSAnc3RyaW5nJylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoZXggc3RyaW5nIGV4cGVjdGVkLCBnb3QgJyArIHR5cGVvZiBoZXgpO1xuICAgIGNvbnN0IGhsID0gaGV4Lmxlbmd0aDtcbiAgICBjb25zdCBhbCA9IGhsIC8gMjtcbiAgICBpZiAoaGwgJSAyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BhZGRlZCBoZXggc3RyaW5nIGV4cGVjdGVkLCBnb3QgdW5wYWRkZWQgaGV4IG9mIGxlbmd0aCAnICsgaGwpO1xuICAgIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYWwpO1xuICAgIGZvciAobGV0IGFpID0gMCwgaGkgPSAwOyBhaSA8IGFsOyBhaSsrLCBoaSArPSAyKSB7XG4gICAgICAgIGNvbnN0IG4xID0gYXNjaWlUb0Jhc2UxNihoZXguY2hhckNvZGVBdChoaSkpO1xuICAgICAgICBjb25zdCBuMiA9IGFzY2lpVG9CYXNlMTYoaGV4LmNoYXJDb2RlQXQoaGkgKyAxKSk7XG4gICAgICAgIGlmIChuMSA9PT0gdW5kZWZpbmVkIHx8IG4yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBoZXhbaGldICsgaGV4W2hpICsgMV07XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2hleCBzdHJpbmcgZXhwZWN0ZWQsIGdvdCBub24taGV4IGNoYXJhY3RlciBcIicgKyBjaGFyICsgJ1wiIGF0IGluZGV4ICcgKyBoaSk7XG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlbYWldID0gbjEgKiAxNiArIG4yO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG4vLyBCRTogQmlnIEVuZGlhbiwgTEU6IExpdHRsZSBFbmRpYW5cbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvTnVtYmVyQkUoYnl0ZXMpIHtcbiAgICByZXR1cm4gaGV4VG9OdW1iZXIoYnl0ZXNUb0hleChieXRlcykpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzVG9OdW1iZXJMRShieXRlcykge1xuICAgIGFieXRlcyhieXRlcyk7XG4gICAgcmV0dXJuIGhleFRvTnVtYmVyKGJ5dGVzVG9IZXgoVWludDhBcnJheS5mcm9tKGJ5dGVzKS5yZXZlcnNlKCkpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJUb0J5dGVzQkUobiwgbGVuKSB7XG4gICAgcmV0dXJuIGhleFRvQnl0ZXMobi50b1N0cmluZygxNikucGFkU3RhcnQobGVuICogMiwgJzAnKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9CeXRlc0xFKG4sIGxlbikge1xuICAgIHJldHVybiBudW1iZXJUb0J5dGVzQkUobiwgbGVuKS5yZXZlcnNlKCk7XG59XG4vLyBVbnBhZGRlZCwgcmFyZWx5IHVzZWRcbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJUb1ZhckJ5dGVzQkUobikge1xuICAgIHJldHVybiBoZXhUb0J5dGVzKG51bWJlclRvSGV4VW5wYWRkZWQobikpO1xufVxuLyoqXG4gKiBUYWtlcyBoZXggc3RyaW5nIG9yIFVpbnQ4QXJyYXksIGNvbnZlcnRzIHRvIFVpbnQ4QXJyYXkuXG4gKiBWYWxpZGF0ZXMgb3V0cHV0IGxlbmd0aC5cbiAqIFdpbGwgdGhyb3cgZXJyb3IgZm9yIG90aGVyIHR5cGVzLlxuICogQHBhcmFtIHRpdGxlIGRlc2NyaXB0aXZlIHRpdGxlIGZvciBhbiBlcnJvciBlLmcuICdwcml2YXRlIGtleSdcbiAqIEBwYXJhbSBoZXggaGV4IHN0cmluZyBvciBVaW50OEFycmF5XG4gKiBAcGFyYW0gZXhwZWN0ZWRMZW5ndGggb3B0aW9uYWwsIHdpbGwgY29tcGFyZSB0byByZXN1bHQgYXJyYXkncyBsZW5ndGhcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVCeXRlcyh0aXRsZSwgaGV4LCBleHBlY3RlZExlbmd0aCkge1xuICAgIGxldCByZXM7XG4gICAgaWYgKHR5cGVvZiBoZXggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXMgPSBoZXhUb0J5dGVzKGhleCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0aXRsZX0gbXVzdCBiZSB2YWxpZCBoZXggc3RyaW5nLCBnb3QgXCIke2hleH1cIi4gQ2F1c2U6ICR7ZX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0J5dGVzKGhleCkpIHtcbiAgICAgICAgLy8gVWludDhBcnJheS5mcm9tKCkgaW5zdGVhZCBvZiBoYXNoLnNsaWNlKCkgYmVjYXVzZSBub2RlLmpzIEJ1ZmZlclxuICAgICAgICAvLyBpcyBpbnN0YW5jZSBvZiBVaW50OEFycmF5LCBhbmQgaXRzIHNsaWNlKCkgY3JlYXRlcyAqKm11dGFibGUqKiBjb3B5XG4gICAgICAgIHJlcyA9IFVpbnQ4QXJyYXkuZnJvbShoZXgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RpdGxlfSBtdXN0IGJlIGhleCBzdHJpbmcgb3IgVWludDhBcnJheWApO1xuICAgIH1cbiAgICBjb25zdCBsZW4gPSByZXMubGVuZ3RoO1xuICAgIGlmICh0eXBlb2YgZXhwZWN0ZWRMZW5ndGggPT09ICdudW1iZXInICYmIGxlbiAhPT0gZXhwZWN0ZWRMZW5ndGgpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0aXRsZX0gZXhwZWN0ZWQgJHtleHBlY3RlZExlbmd0aH0gYnl0ZXMsIGdvdCAke2xlbn1gKTtcbiAgICByZXR1cm4gcmVzO1xufVxuLyoqXG4gKiBDb3BpZXMgc2V2ZXJhbCBVaW50OEFycmF5cyBpbnRvIG9uZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdEJ5dGVzKC4uLmFycmF5cykge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBhcnJheXNbaV07XG4gICAgICAgIGFieXRlcyhhKTtcbiAgICAgICAgc3VtICs9IGEubGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBuZXcgVWludDhBcnJheShzdW0pO1xuICAgIGZvciAobGV0IGkgPSAwLCBwYWQgPSAwOyBpIDwgYXJyYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBhcnJheXNbaV07XG4gICAgICAgIHJlcy5zZXQoYSwgcGFkKTtcbiAgICAgICAgcGFkICs9IGEubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuLy8gQ29tcGFyZXMgMiB1OGEtcyBpbiBraW5kYSBjb25zdGFudCB0aW1lXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxCeXRlcyhhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBkaWZmID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspXG4gICAgICAgIGRpZmYgfD0gYVtpXSBeIGJbaV07XG4gICAgcmV0dXJuIGRpZmYgPT09IDA7XG59XG4vKipcbiAqIEBleGFtcGxlIHV0ZjhUb0J5dGVzKCdhYmMnKSAvLyBuZXcgVWludDhBcnJheShbOTcsIDk4LCA5OV0pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1dGY4VG9CeXRlcyhzdHIpIHtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdXRmOFRvQnl0ZXMgZXhwZWN0ZWQgc3RyaW5nLCBnb3QgJHt0eXBlb2Ygc3RyfWApO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc3RyKSk7IC8vIGh0dHBzOi8vYnVnemlsLmxhLzE2ODE4MDlcbn1cbi8vIElzIHBvc2l0aXZlIGJpZ2ludFxuY29uc3QgaXNQb3NCaWcgPSAobikgPT4gdHlwZW9mIG4gPT09ICdiaWdpbnQnICYmIF8wbiA8PSBuO1xuZXhwb3J0IGZ1bmN0aW9uIGluUmFuZ2UobiwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gaXNQb3NCaWcobikgJiYgaXNQb3NCaWcobWluKSAmJiBpc1Bvc0JpZyhtYXgpICYmIG1pbiA8PSBuICYmIG4gPCBtYXg7XG59XG4vKipcbiAqIEFzc2VydHMgbWluIDw9IG4gPCBtYXguIE5PVEU6IEl0J3MgPCBtYXggYW5kIG5vdCA8PSBtYXguXG4gKiBAZXhhbXBsZVxuICogYUluUmFuZ2UoJ3gnLCB4LCAxbiwgMjU2bik7IC8vIHdvdWxkIGFzc3VtZSB4IGlzIGluICgxbi4uMjU1bilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFJblJhbmdlKHRpdGxlLCBuLCBtaW4sIG1heCkge1xuICAgIC8vIFdoeSBtaW4gPD0gbiA8IG1heCBhbmQgbm90IGEgKG1pbiA8IG4gPCBtYXgpIE9SIGIgKG1pbiA8PSBuIDw9IG1heCk/XG4gICAgLy8gY29uc2lkZXIgUD0yNTZuLCBtaW49MG4sIG1heD1QXG4gICAgLy8gLSBhIGZvciBtaW49MCB3b3VsZCByZXF1aXJlIC0xOiAgICAgICAgICBgaW5SYW5nZSgneCcsIHgsIC0xbiwgUClgXG4gICAgLy8gLSBiIHdvdWxkIGNvbW1vbmx5IHJlcXVpcmUgc3VidHJhY3Rpb246ICBgaW5SYW5nZSgneCcsIHgsIDBuLCBQIC0gMW4pYFxuICAgIC8vIC0gb3VyIHdheSBpcyB0aGUgY2xlYW5lc3Q6ICAgICAgICAgICAgICAgYGluUmFuZ2UoJ3gnLCB4LCAwbiwgUClcbiAgICBpZiAoIWluUmFuZ2UobiwgbWluLCBtYXgpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGV4cGVjdGVkIHZhbGlkICR7dGl0bGV9OiAke21pbn0gPD0gbiA8ICR7bWF4fSwgZ290ICR7dHlwZW9mIG59ICR7bn1gKTtcbn1cbi8vIEJpdCBvcGVyYXRpb25zXG4vKipcbiAqIENhbGN1bGF0ZXMgYW1vdW50IG9mIGJpdHMgaW4gYSBiaWdpbnQuXG4gKiBTYW1lIGFzIGBuLnRvU3RyaW5nKDIpLmxlbmd0aGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpdExlbihuKSB7XG4gICAgbGV0IGxlbjtcbiAgICBmb3IgKGxlbiA9IDA7IG4gPiBfMG47IG4gPj49IF8xbiwgbGVuICs9IDEpXG4gICAgICAgIDtcbiAgICByZXR1cm4gbGVuO1xufVxuLyoqXG4gKiBHZXRzIHNpbmdsZSBiaXQgYXQgcG9zaXRpb24uXG4gKiBOT1RFOiBmaXJzdCBiaXQgcG9zaXRpb24gaXMgMCAoc2FtZSBhcyBhcnJheXMpXG4gKiBTYW1lIGFzIGAhIStBcnJheS5mcm9tKG4udG9TdHJpbmcoMikpLnJldmVyc2UoKVtwb3NdYFxuICovXG5leHBvcnQgZnVuY3Rpb24gYml0R2V0KG4sIHBvcykge1xuICAgIHJldHVybiAobiA+PiBCaWdJbnQocG9zKSkgJiBfMW47XG59XG4vKipcbiAqIFNldHMgc2luZ2xlIGJpdCBhdCBwb3NpdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpdFNldChuLCBwb3MsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG4gfCAoKHZhbHVlID8gXzFuIDogXzBuKSA8PCBCaWdJbnQocG9zKSk7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBtYXNrIGZvciBOIGJpdHMuIE5vdCB1c2luZyAqKiBvcGVyYXRvciB3aXRoIGJpZ2ludHMgYmVjYXVzZSBvZiBvbGQgZW5naW5lcy5cbiAqIFNhbWUgYXMgQmlnSW50KGAwYiR7QXJyYXkoaSkuZmlsbCgnMScpLmpvaW4oJycpfWApXG4gKi9cbmV4cG9ydCBjb25zdCBiaXRNYXNrID0gKG4pID0+IChfMm4gPDwgQmlnSW50KG4gLSAxKSkgLSBfMW47XG4vLyBEUkJHXG5jb25zdCB1OG4gPSAoZGF0YSkgPT4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7IC8vIGNyZWF0ZXMgVWludDhBcnJheVxuY29uc3QgdThmciA9IChhcnIpID0+IFVpbnQ4QXJyYXkuZnJvbShhcnIpOyAvLyBhbm90aGVyIHNob3J0Y3V0XG4vKipcbiAqIE1pbmltYWwgSE1BQy1EUkJHIGZyb20gTklTVCA4MDAtOTAgZm9yIFJGQzY5Nzkgc2lncy5cbiAqIEByZXR1cm5zIGZ1bmN0aW9uIHRoYXQgd2lsbCBjYWxsIERSQkcgdW50aWwgMm5kIGFyZyByZXR1cm5zIHNvbWV0aGluZyBtZWFuaW5nZnVsXG4gKiBAZXhhbXBsZVxuICogICBjb25zdCBkcmJnID0gY3JlYXRlSG1hY0RSQkc8S2V5PigzMiwgMzIsIGhtYWMpO1xuICogICBkcmJnKHNlZWQsIGJ5dGVzVG9LZXkpOyAvLyBieXRlc1RvS2V5IG11c3QgcmV0dXJuIEtleSBvciB1bmRlZmluZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhtYWNEcmJnKGhhc2hMZW4sIHFCeXRlTGVuLCBobWFjRm4pIHtcbiAgICBpZiAodHlwZW9mIGhhc2hMZW4gIT09ICdudW1iZXInIHx8IGhhc2hMZW4gPCAyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2hhc2hMZW4gbXVzdCBiZSBhIG51bWJlcicpO1xuICAgIGlmICh0eXBlb2YgcUJ5dGVMZW4gIT09ICdudW1iZXInIHx8IHFCeXRlTGVuIDwgMilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdxQnl0ZUxlbiBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gICAgaWYgKHR5cGVvZiBobWFjRm4gIT09ICdmdW5jdGlvbicpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaG1hY0ZuIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIC8vIFN0ZXAgQiwgU3RlcCBDOiBzZXQgaGFzaExlbiB0byA4KmNlaWwoaGxlbi84KVxuICAgIGxldCB2ID0gdThuKGhhc2hMZW4pOyAvLyBNaW5pbWFsIG5vbi1mdWxsLXNwZWMgSE1BQy1EUkJHIGZyb20gTklTVCA4MDAtOTAgZm9yIFJGQzY5Nzkgc2lncy5cbiAgICBsZXQgayA9IHU4bihoYXNoTGVuKTsgLy8gU3RlcHMgQiBhbmQgQyBvZiBSRkM2OTc5IDMuMjogc2V0IGhhc2hMZW4sIGluIG91ciBjYXNlIGFsd2F5cyBzYW1lXG4gICAgbGV0IGkgPSAwOyAvLyBJdGVyYXRpb25zIGNvdW50ZXIsIHdpbGwgdGhyb3cgd2hlbiBvdmVyIDEwMDBcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgdi5maWxsKDEpO1xuICAgICAgICBrLmZpbGwoMCk7XG4gICAgICAgIGkgPSAwO1xuICAgIH07XG4gICAgY29uc3QgaCA9ICguLi5iKSA9PiBobWFjRm4oaywgdiwgLi4uYik7IC8vIGhtYWMoaykodiwgLi4udmFsdWVzKVxuICAgIGNvbnN0IHJlc2VlZCA9IChzZWVkID0gdThuKCkpID0+IHtcbiAgICAgICAgLy8gSE1BQy1EUkJHIHJlc2VlZCgpIGZ1bmN0aW9uLiBTdGVwcyBELUdcbiAgICAgICAgayA9IGgodThmcihbMHgwMF0pLCBzZWVkKTsgLy8gayA9IGhtYWMoayB8fCB2IHx8IDB4MDAgfHwgc2VlZClcbiAgICAgICAgdiA9IGgoKTsgLy8gdiA9IGhtYWMoayB8fCB2KVxuICAgICAgICBpZiAoc2VlZC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGsgPSBoKHU4ZnIoWzB4MDFdKSwgc2VlZCk7IC8vIGsgPSBobWFjKGsgfHwgdiB8fCAweDAxIHx8IHNlZWQpXG4gICAgICAgIHYgPSBoKCk7IC8vIHYgPSBobWFjKGsgfHwgdilcbiAgICB9O1xuICAgIGNvbnN0IGdlbiA9ICgpID0+IHtcbiAgICAgICAgLy8gSE1BQy1EUkJHIGdlbmVyYXRlKCkgZnVuY3Rpb25cbiAgICAgICAgaWYgKGkrKyA+PSAxMDAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkcmJnOiB0cmllZCAxMDAwIHZhbHVlcycpO1xuICAgICAgICBsZXQgbGVuID0gMDtcbiAgICAgICAgY29uc3Qgb3V0ID0gW107XG4gICAgICAgIHdoaWxlIChsZW4gPCBxQnl0ZUxlbikge1xuICAgICAgICAgICAgdiA9IGgoKTtcbiAgICAgICAgICAgIGNvbnN0IHNsID0gdi5zbGljZSgpO1xuICAgICAgICAgICAgb3V0LnB1c2goc2wpO1xuICAgICAgICAgICAgbGVuICs9IHYubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jYXRCeXRlcyguLi5vdXQpO1xuICAgIH07XG4gICAgY29uc3QgZ2VuVW50aWwgPSAoc2VlZCwgcHJlZCkgPT4ge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXNlZWQoc2VlZCk7IC8vIFN0ZXBzIEQtR1xuICAgICAgICBsZXQgcmVzID0gdW5kZWZpbmVkOyAvLyBTdGVwIEg6IGdyaW5kIHVudGlsIGsgaXMgaW4gWzEuLm4tMV1cbiAgICAgICAgd2hpbGUgKCEocmVzID0gcHJlZChnZW4oKSkpKVxuICAgICAgICAgICAgcmVzZWVkKCk7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgICByZXR1cm4gZ2VuVW50aWw7XG59XG4vLyBWYWxpZGF0aW5nIGN1cnZlcyBhbmQgZmllbGRzXG5jb25zdCB2YWxpZGF0b3JGbnMgPSB7XG4gICAgYmlnaW50OiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSAnYmlnaW50JyxcbiAgICBmdW5jdGlvbjogKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyxcbiAgICBib29sZWFuOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicsXG4gICAgc3RyaW5nOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyxcbiAgICBzdHJpbmdPclVpbnQ4QXJyYXk6ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IGlzQnl0ZXModmFsKSxcbiAgICBpc1NhZmVJbnRlZ2VyOiAodmFsKSA9PiBOdW1iZXIuaXNTYWZlSW50ZWdlcih2YWwpLFxuICAgIGFycmF5OiAodmFsKSA9PiBBcnJheS5pc0FycmF5KHZhbCksXG4gICAgZmllbGQ6ICh2YWwsIG9iamVjdCkgPT4gb2JqZWN0LkZwLmlzVmFsaWQodmFsKSxcbiAgICBoYXNoOiAodmFsKSA9PiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nICYmIE51bWJlci5pc1NhZmVJbnRlZ2VyKHZhbC5vdXRwdXRMZW4pLFxufTtcbi8vIHR5cGUgUmVjb3JkPEsgZXh0ZW5kcyBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsIFQ+ID0geyBbUCBpbiBLXTogVDsgfVxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0KG9iamVjdCwgdmFsaWRhdG9ycywgb3B0VmFsaWRhdG9ycyA9IHt9KSB7XG4gICAgY29uc3QgY2hlY2tGaWVsZCA9IChmaWVsZE5hbWUsIHR5cGUsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tWYWwgPSB2YWxpZGF0b3JGbnNbdHlwZV07XG4gICAgICAgIGlmICh0eXBlb2YgY2hlY2tWYWwgIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdmFsaWRhdG9yIFwiJHt0eXBlfVwiLCBleHBlY3RlZCBmdW5jdGlvbmApO1xuICAgICAgICBjb25zdCB2YWwgPSBvYmplY3RbZmllbGROYW1lXTtcbiAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghY2hlY2tWYWwodmFsLCBvYmplY3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcGFyYW0gJHtTdHJpbmcoZmllbGROYW1lKX09JHt2YWx9ICgke3R5cGVvZiB2YWx9KSwgZXhwZWN0ZWQgJHt0eXBlfWApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IFtmaWVsZE5hbWUsIHR5cGVdIG9mIE9iamVjdC5lbnRyaWVzKHZhbGlkYXRvcnMpKVxuICAgICAgICBjaGVja0ZpZWxkKGZpZWxkTmFtZSwgdHlwZSwgZmFsc2UpO1xuICAgIGZvciAoY29uc3QgW2ZpZWxkTmFtZSwgdHlwZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0VmFsaWRhdG9ycykpXG4gICAgICAgIGNoZWNrRmllbGQoZmllbGROYW1lLCB0eXBlLCB0cnVlKTtcbiAgICByZXR1cm4gb2JqZWN0O1xufVxuLy8gdmFsaWRhdGUgdHlwZSB0ZXN0c1xuLy8gY29uc3QgbzogeyBhOiBudW1iZXI7IGI6IG51bWJlcjsgYzogbnVtYmVyIH0gPSB7IGE6IDEsIGI6IDUsIGM6IDYgfTtcbi8vIGNvbnN0IHowID0gdmFsaWRhdGVPYmplY3QobywgeyBhOiAnaXNTYWZlSW50ZWdlcicgfSwgeyBjOiAnYmlnaW50JyB9KTsgLy8gT2shXG4vLyAvLyBTaG91bGQgZmFpbCB0eXBlLWNoZWNrXG4vLyBjb25zdCB6MSA9IHZhbGlkYXRlT2JqZWN0KG8sIHsgYTogJ3RtcCcgfSwgeyBjOiAnenonIH0pO1xuLy8gY29uc3QgejIgPSB2YWxpZGF0ZU9iamVjdChvLCB7IGE6ICdpc1NhZmVJbnRlZ2VyJyB9LCB7IGM6ICd6eicgfSk7XG4vLyBjb25zdCB6MyA9IHZhbGlkYXRlT2JqZWN0KG8sIHsgdGVzdDogJ2Jvb2xlYW4nLCB6OiAnYnVnJyB9KTtcbi8vIGNvbnN0IHo0ID0gdmFsaWRhdGVPYmplY3QobywgeyBhOiAnYm9vbGVhbicsIHo6ICdidWcnIH0pO1xuLyoqXG4gKiB0aHJvd3Mgbm90IGltcGxlbWVudGVkIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBub3RJbXBsZW1lbnRlZCA9ICgpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xufTtcbi8qKlxuICogTWVtb2l6ZXMgKGNhY2hlcykgY29tcHV0YXRpb24gcmVzdWx0LlxuICogVXNlcyBXZWFrTWFwOiB0aGUgdmFsdWUgaXMgZ29pbmcgYXV0by1jbGVhbmVkIGJ5IEdDIGFmdGVyIGxhc3QgcmVmZXJlbmNlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZW1vaXplZChmbikge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgcmV0dXJuIChhcmcsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgdmFsID0gbWFwLmdldChhcmcpO1xuICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICBjb25zdCBjb21wdXRlZCA9IGZuKGFyZywgLi4uYXJncyk7XG4gICAgICAgIG1hcC5zZXQoYXJnLCBjb21wdXRlZCk7XG4gICAgICAgIHJldHVybiBjb21wdXRlZDtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiLyohIG5vYmxlLWN1cnZlcyAtIE1JVCBMaWNlbnNlIChjKSAyMDIyIFBhdWwgTWlsbGVyIChwYXVsbWlsbHIuY29tKSAqL1xuLy8gVXRpbGl0aWVzIGZvciBtb2R1bGFyIGFyaXRobWV0aWNzIGFuZCBmaW5pdGUgZmllbGRzXG5pbXBvcnQgeyBiaXRNYXNrLCBieXRlc1RvTnVtYmVyQkUsIGJ5dGVzVG9OdW1iZXJMRSwgZW5zdXJlQnl0ZXMsIG51bWJlclRvQnl0ZXNCRSwgbnVtYmVyVG9CeXRlc0xFLCB2YWxpZGF0ZU9iamVjdCwgfSBmcm9tICcuL3V0aWxzLmpzJztcbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgXzBuID0gQmlnSW50KDApLCBfMW4gPSBCaWdJbnQoMSksIF8ybiA9IEJpZ0ludCgyKSwgXzNuID0gQmlnSW50KDMpO1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBfNG4gPSBCaWdJbnQoNCksIF81biA9IEJpZ0ludCg1KSwgXzhuID0gQmlnSW50KDgpO1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBfOW4gPSBCaWdJbnQoOSksIF8xNm4gPSBCaWdJbnQoMTYpO1xuLy8gQ2FsY3VsYXRlcyBhIG1vZHVsbyBiXG5leHBvcnQgZnVuY3Rpb24gbW9kKGEsIGIpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhICUgYjtcbiAgICByZXR1cm4gcmVzdWx0ID49IF8wbiA/IHJlc3VsdCA6IGIgKyByZXN1bHQ7XG59XG4vKipcbiAqIEVmZmljaWVudGx5IHJhaXNlIG51bSB0byBwb3dlciBhbmQgZG8gbW9kdWxhciBkaXZpc2lvbi5cbiAqIFVuc2FmZSBpbiBzb21lIGNvbnRleHRzOiB1c2VzIGxhZGRlciwgc28gY2FuIGV4cG9zZSBiaWdpbnQgYml0cy5cbiAqIEBleGFtcGxlXG4gKiBwb3coMm4sIDZuLCAxMW4pIC8vIDY0biAlIDExbiA9PSA5blxuICovXG4vLyBUT0RPOiB1c2UgZmllbGQgdmVyc2lvbiAmJiByZW1vdmVcbmV4cG9ydCBmdW5jdGlvbiBwb3cobnVtLCBwb3dlciwgbW9kdWxvKSB7XG4gICAgaWYgKG1vZHVsbyA8PSBfMG4gfHwgcG93ZXIgPCBfMG4pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcG93ZXIvbW9kdWxvID4gMCcpO1xuICAgIGlmIChtb2R1bG8gPT09IF8xbilcbiAgICAgICAgcmV0dXJuIF8wbjtcbiAgICBsZXQgcmVzID0gXzFuO1xuICAgIHdoaWxlIChwb3dlciA+IF8wbikge1xuICAgICAgICBpZiAocG93ZXIgJiBfMW4pXG4gICAgICAgICAgICByZXMgPSAocmVzICogbnVtKSAlIG1vZHVsbztcbiAgICAgICAgbnVtID0gKG51bSAqIG51bSkgJSBtb2R1bG87XG4gICAgICAgIHBvd2VyID4+PSBfMW47XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG4vLyBEb2VzIHggXiAoMiBeIHBvd2VyKSBtb2QgcC4gcG93MigzMCwgNCkgPT0gMzAgXiAoMiBeIDQpXG5leHBvcnQgZnVuY3Rpb24gcG93Mih4LCBwb3dlciwgbW9kdWxvKSB7XG4gICAgbGV0IHJlcyA9IHg7XG4gICAgd2hpbGUgKHBvd2VyLS0gPiBfMG4pIHtcbiAgICAgICAgcmVzICo9IHJlcztcbiAgICAgICAgcmVzICU9IG1vZHVsbztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbi8vIEludmVyc2VzIG51bWJlciBvdmVyIG1vZHVsb1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChudW1iZXIsIG1vZHVsbykge1xuICAgIGlmIChudW1iZXIgPT09IF8wbiB8fCBtb2R1bG8gPD0gXzBuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52ZXJ0OiBleHBlY3RlZCBwb3NpdGl2ZSBpbnRlZ2VycywgZ290IG49JHtudW1iZXJ9IG1vZD0ke21vZHVsb31gKTtcbiAgICB9XG4gICAgLy8gRXVjbGlkZWFuIEdDRCBodHRwczovL2JyaWxsaWFudC5vcmcvd2lraS9leHRlbmRlZC1ldWNsaWRlYW4tYWxnb3JpdGhtL1xuICAgIC8vIEZlcm1hdCdzIGxpdHRsZSB0aGVvcmVtIFwiQ1QtbGlrZVwiIHZlcnNpb24gaW52KG4pID0gbl4obS0yKSBtb2QgbSBpcyAzMHggc2xvd2VyLlxuICAgIGxldCBhID0gbW9kKG51bWJlciwgbW9kdWxvKTtcbiAgICBsZXQgYiA9IG1vZHVsbztcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBsZXQgeCA9IF8wbiwgeSA9IF8xbiwgdSA9IF8xbiwgdiA9IF8wbjtcbiAgICB3aGlsZSAoYSAhPT0gXzBuKSB7XG4gICAgICAgIC8vIEpJVCBhcHBsaWVzIG9wdGltaXphdGlvbiBpZiB0aG9zZSB0d28gbGluZXMgZm9sbG93IGVhY2ggb3RoZXJcbiAgICAgICAgY29uc3QgcSA9IGIgLyBhO1xuICAgICAgICBjb25zdCByID0gYiAlIGE7XG4gICAgICAgIGNvbnN0IG0gPSB4IC0gdSAqIHE7XG4gICAgICAgIGNvbnN0IG4gPSB5IC0gdiAqIHE7XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBiID0gYSwgYSA9IHIsIHggPSB1LCB5ID0gdiwgdSA9IG0sIHYgPSBuO1xuICAgIH1cbiAgICBjb25zdCBnY2QgPSBiO1xuICAgIGlmIChnY2QgIT09IF8xbilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZlcnQ6IGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgcmV0dXJuIG1vZCh4LCBtb2R1bG8pO1xufVxuLyoqXG4gKiBUb25lbGxpLVNoYW5rcyBzcXVhcmUgcm9vdCBzZWFyY2ggYWxnb3JpdGhtLlxuICogMS4gaHR0cHM6Ly9lcHJpbnQuaWFjci5vcmcvMjAxMi82ODUucGRmIChwYWdlIDEyKVxuICogMi4gU3F1YXJlIFJvb3RzIGZyb20gMTsgMjQsIDUxLCAxMCB0byBEYW4gU2hhbmtzXG4gKiBXaWxsIHN0YXJ0IGFuIGluZmluaXRlIGxvb3AgaWYgZmllbGQgb3JkZXIgUCBpcyBub3QgcHJpbWUuXG4gKiBAcGFyYW0gUCBmaWVsZCBvcmRlclxuICogQHJldHVybnMgZnVuY3Rpb24gdGhhdCB0YWtlcyBmaWVsZCBGcCAoY3JlYXRlZCBmcm9tIFApIGFuZCBudW1iZXIgblxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9uZWxsaVNoYW5rcyhQKSB7XG4gICAgLy8gTGVnZW5kcmUgY29uc3RhbnQ6IHVzZWQgdG8gY2FsY3VsYXRlIExlZ2VuZHJlIHN5bWJvbCAoYSB8IHApLFxuICAgIC8vIHdoaWNoIGRlbm90ZXMgdGhlIHZhbHVlIG9mIGFeKChwLTEpLzIpIChtb2QgcCkuXG4gICAgLy8gKGEgfCBwKSDiiaEgMSAgICBpZiBhIGlzIGEgc3F1YXJlIChtb2QgcClcbiAgICAvLyAoYSB8IHApIOKJoSAtMSAgIGlmIGEgaXMgbm90IGEgc3F1YXJlIChtb2QgcClcbiAgICAvLyAoYSB8IHApIOKJoSAwICAgIGlmIGEg4omhIDAgKG1vZCBwKVxuICAgIGNvbnN0IGxlZ2VuZHJlQyA9IChQIC0gXzFuKSAvIF8ybjtcbiAgICBsZXQgUSwgUywgWjtcbiAgICAvLyBTdGVwIDE6IEJ5IGZhY3RvcmluZyBvdXQgcG93ZXJzIG9mIDIgZnJvbSBwIC0gMSxcbiAgICAvLyBmaW5kIHEgYW5kIHMgc3VjaCB0aGF0IHAgLSAxID0gcSooMl5zKSB3aXRoIHEgb2RkXG4gICAgZm9yIChRID0gUCAtIF8xbiwgUyA9IDA7IFEgJSBfMm4gPT09IF8wbjsgUSAvPSBfMm4sIFMrKylcbiAgICAgICAgO1xuICAgIC8vIFN0ZXAgMjogU2VsZWN0IGEgbm9uLXNxdWFyZSB6IHN1Y2ggdGhhdCAoeiB8IHApIOKJoSAtMSBhbmQgc2V0IGMg4omhIHpxXG4gICAgZm9yIChaID0gXzJuOyBaIDwgUCAmJiBwb3coWiwgbGVnZW5kcmVDLCBQKSAhPT0gUCAtIF8xbjsgWisrKVxuICAgICAgICA7XG4gICAgLy8gRmFzdC1wYXRoXG4gICAgaWYgKFMgPT09IDEpIHtcbiAgICAgICAgY29uc3QgcDFkaXY0ID0gKFAgKyBfMW4pIC8gXzRuO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gdG9uZWxsaUZhc3QoRnAsIG4pIHtcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBGcC5wb3cobiwgcDFkaXY0KTtcbiAgICAgICAgICAgIGlmICghRnAuZXFsKEZwLnNxcihyb290KSwgbikpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBzcXVhcmUgcm9vdCcpO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIFNsb3ctcGF0aFxuICAgIGNvbnN0IFExZGl2MiA9IChRICsgXzFuKSAvIF8ybjtcbiAgICByZXR1cm4gZnVuY3Rpb24gdG9uZWxsaVNsb3coRnAsIG4pIHtcbiAgICAgICAgLy8gU3RlcCAwOiBDaGVjayB0aGF0IG4gaXMgaW5kZWVkIGEgc3F1YXJlOiAobiB8IHApIHNob3VsZCBub3QgYmUg4omhIC0xXG4gICAgICAgIGlmIChGcC5wb3cobiwgbGVnZW5kcmVDKSA9PT0gRnAubmVnKEZwLk9ORSkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIHNxdWFyZSByb290Jyk7XG4gICAgICAgIGxldCByID0gUztcbiAgICAgICAgLy8gVE9ETzogd2lsbCBmYWlsIGF0IEZwMi9ldGNcbiAgICAgICAgbGV0IGcgPSBGcC5wb3coRnAubXVsKEZwLk9ORSwgWiksIFEpOyAvLyB3aWxsIHVwZGF0ZSBib3RoIHggYW5kIGJcbiAgICAgICAgbGV0IHggPSBGcC5wb3cobiwgUTFkaXYyKTsgLy8gZmlyc3QgZ3Vlc3MgYXQgdGhlIHNxdWFyZSByb290XG4gICAgICAgIGxldCBiID0gRnAucG93KG4sIFEpOyAvLyBmaXJzdCBndWVzcyBhdCB0aGUgZnVkZ2UgZmFjdG9yXG4gICAgICAgIHdoaWxlICghRnAuZXFsKGIsIEZwLk9ORSkpIHtcbiAgICAgICAgICAgIGlmIChGcC5lcWwoYiwgRnAuWkVSTykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZwLlpFUk87IC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RvbmVsbGklRTIlODAlOTNTaGFua3NfYWxnb3JpdGhtICg0LiBJZiB0ID0gMCwgcmV0dXJuIHIgPSAwKVxuICAgICAgICAgICAgLy8gRmluZCBtIHN1Y2ggYl4oMl5tKT09MVxuICAgICAgICAgICAgbGV0IG0gPSAxO1xuICAgICAgICAgICAgZm9yIChsZXQgdDIgPSBGcC5zcXIoYik7IG0gPCByOyBtKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoRnAuZXFsKHQyLCBGcC5PTkUpKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB0MiA9IEZwLnNxcih0Mik7IC8vIHQyICo9IHQyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOT1RFOiByLW0tMSBjYW4gYmUgYmlnZ2VyIHRoYW4gMzIsIG5lZWQgdG8gY29udmVydCB0byBiaWdpbnQgYmVmb3JlIHNoaWZ0LCBvdGhlcndpc2UgdGhlcmUgd2lsbCBiZSBvdmVyZmxvd1xuICAgICAgICAgICAgY29uc3QgZ2UgPSBGcC5wb3coZywgXzFuIDw8IEJpZ0ludChyIC0gbSAtIDEpKTsgLy8gZ2UgPSAyXihyLW0tMSlcbiAgICAgICAgICAgIGcgPSBGcC5zcXIoZ2UpOyAvLyBnID0gZ2UgKiBnZVxuICAgICAgICAgICAgeCA9IEZwLm11bCh4LCBnZSk7IC8vIHggKj0gZ2VcbiAgICAgICAgICAgIGIgPSBGcC5tdWwoYiwgZyk7IC8vIGIgKj0gZ1xuICAgICAgICAgICAgciA9IG07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBGcFNxcnQoUCkge1xuICAgIC8vIE5PVEU6IGRpZmZlcmVudCBhbGdvcml0aG1zIGNhbiBnaXZlIGRpZmZlcmVudCByb290cywgaXQgaXMgdXAgdG8gdXNlciB0byBkZWNpZGUgd2hpY2ggb25lIHRoZXkgd2FudC5cbiAgICAvLyBGb3IgZXhhbXBsZSB0aGVyZSBpcyBGcFNxcnRPZGQvRnBTcXJ0RXZlbiB0byBjaG9pY2Ugcm9vdCBiYXNlZCBvbiBvZGRuZXNzICh1c2VkIGZvciBoYXNoLXRvLWN1cnZlKS5cbiAgICAvLyBQIOKJoSAzIChtb2QgNClcbiAgICAvLyDiiJpuID0gbl4oKFArMSkvNClcbiAgICBpZiAoUCAlIF80biA9PT0gXzNuKSB7XG4gICAgICAgIC8vIE5vdCBhbGwgcm9vdHMgcG9zc2libGUhXG4gICAgICAgIC8vIGNvbnN0IE9SREVSID1cbiAgICAgICAgLy8gICAweDFhMDExMWVhMzk3ZmU2OWE0YjFiYTdiNjQzNGJhY2Q3NjQ3NzRiODRmMzg1MTJiZjY3MzBkMmEwZjZiMGY2MjQxZWFiZmZmZWIxNTNmZmZmYjlmZWZmZmZmZmZmYWFhYm47XG4gICAgICAgIC8vIGNvbnN0IE5VTSA9IDcyMDU3NTk0MDM3OTI3ODE2bjtcbiAgICAgICAgY29uc3QgcDFkaXY0ID0gKFAgKyBfMW4pIC8gXzRuO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3FydDNtb2Q0KEZwLCBuKSB7XG4gICAgICAgICAgICBjb25zdCByb290ID0gRnAucG93KG4sIHAxZGl2NCk7XG4gICAgICAgICAgICAvLyBUaHJvdyBpZiByb290KioyICE9IG5cbiAgICAgICAgICAgIGlmICghRnAuZXFsKEZwLnNxcihyb290KSwgbikpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBzcXVhcmUgcm9vdCcpO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIEF0a2luIGFsZ29yaXRobSBmb3IgcSDiiaEgNSAobW9kIDgpLCBodHRwczovL2VwcmludC5pYWNyLm9yZy8yMDEyLzY4NS5wZGYgKHBhZ2UgMTApXG4gICAgaWYgKFAgJSBfOG4gPT09IF81bikge1xuICAgICAgICBjb25zdCBjMSA9IChQIC0gXzVuKSAvIF84bjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNxcnQ1bW9kOChGcCwgbikge1xuICAgICAgICAgICAgY29uc3QgbjIgPSBGcC5tdWwobiwgXzJuKTtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBGcC5wb3cobjIsIGMxKTtcbiAgICAgICAgICAgIGNvbnN0IG52ID0gRnAubXVsKG4sIHYpO1xuICAgICAgICAgICAgY29uc3QgaSA9IEZwLm11bChGcC5tdWwobnYsIF8ybiksIHYpO1xuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IEZwLm11bChudiwgRnAuc3ViKGksIEZwLk9ORSkpO1xuICAgICAgICAgICAgaWYgKCFGcC5lcWwoRnAuc3FyKHJvb3QpLCBuKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIHNxdWFyZSByb290Jyk7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gUCDiiaEgOSAobW9kIDE2KVxuICAgIGlmIChQICUgXzE2biA9PT0gXzluKSB7XG4gICAgICAgIC8vIE5PVEU6IHRvbmVsbGkgaXMgdG9vIHNsb3cgZm9yIGJscy1GcDIgY2FsY3VsYXRpb25zIGV2ZW4gb24gc3RhcnRcbiAgICAgICAgLy8gTWVhbnMgd2UgY2Fubm90IHVzZSBzcXJ0IGZvciBjb25zdGFudHMgYXQgYWxsIVxuICAgICAgICAvL1xuICAgICAgICAvLyBjb25zdCBjMSA9IEZwLnNxcnQoRnAubmVnYXRlKEZwLk9ORSkpOyAvLyAgMS4gYzEgPSBzcXJ0KC0xKSBpbiBGLCBpLmUuLCAoYzFeMikgPT0gLTEgaW4gRlxuICAgICAgICAvLyBjb25zdCBjMiA9IEZwLnNxcnQoYzEpOyAgICAgICAgICAgICAgICAvLyAgMi4gYzIgPSBzcXJ0KGMxKSBpbiBGLCBpLmUuLCAoYzJeMikgPT0gYzEgaW4gRlxuICAgICAgICAvLyBjb25zdCBjMyA9IEZwLnNxcnQoRnAubmVnYXRlKGMxKSk7ICAgICAvLyAgMy4gYzMgPSBzcXJ0KC1jMSkgaW4gRiwgaS5lLiwgKGMzXjIpID09IC1jMSBpbiBGXG4gICAgICAgIC8vIGNvbnN0IGM0ID0gKFAgKyBfN24pIC8gXzE2bjsgICAgICAgICAgIC8vICA0LiBjNCA9IChxICsgNykgLyAxNiAgICAgICAgIyBJbnRlZ2VyIGFyaXRobWV0aWNcbiAgICAgICAgLy8gc3FydCA9ICh4KSA9PiB7XG4gICAgICAgIC8vICAgbGV0IHR2MSA9IEZwLnBvdyh4LCBjNCk7ICAgICAgICAgICAgIC8vICAxLiB0djEgPSB4XmM0XG4gICAgICAgIC8vICAgbGV0IHR2MiA9IEZwLm11bChjMSwgdHYxKTsgICAgICAgICAgIC8vICAyLiB0djIgPSBjMSAqIHR2MVxuICAgICAgICAvLyAgIGNvbnN0IHR2MyA9IEZwLm11bChjMiwgdHYxKTsgICAgICAgICAvLyAgMy4gdHYzID0gYzIgKiB0djFcbiAgICAgICAgLy8gICBsZXQgdHY0ID0gRnAubXVsKGMzLCB0djEpOyAgICAgICAgICAgLy8gIDQuIHR2NCA9IGMzICogdHYxXG4gICAgICAgIC8vICAgY29uc3QgZTEgPSBGcC5lcXVhbHMoRnAuc3F1YXJlKHR2MiksIHgpOyAvLyAgNS4gIGUxID0gKHR2Ml4yKSA9PSB4XG4gICAgICAgIC8vICAgY29uc3QgZTIgPSBGcC5lcXVhbHMoRnAuc3F1YXJlKHR2MyksIHgpOyAvLyAgNi4gIGUyID0gKHR2M14yKSA9PSB4XG4gICAgICAgIC8vICAgdHYxID0gRnAuY21vdih0djEsIHR2MiwgZTEpOyAvLyAgNy4gdHYxID0gQ01PVih0djEsIHR2MiwgZTEpICAjIFNlbGVjdCB0djIgaWYgKHR2Ml4yKSA9PSB4XG4gICAgICAgIC8vICAgdHYyID0gRnAuY21vdih0djQsIHR2MywgZTIpOyAvLyAgOC4gdHYyID0gQ01PVih0djQsIHR2MywgZTIpICAjIFNlbGVjdCB0djMgaWYgKHR2M14yKSA9PSB4XG4gICAgICAgIC8vICAgY29uc3QgZTMgPSBGcC5lcXVhbHMoRnAuc3F1YXJlKHR2MiksIHgpOyAvLyAgOS4gIGUzID0gKHR2Ml4yKSA9PSB4XG4gICAgICAgIC8vICAgcmV0dXJuIEZwLmNtb3YodHYxLCB0djIsIGUzKTsgLy8gIDEwLiAgeiA9IENNT1YodHYxLCB0djIsIGUzKSAgIyBTZWxlY3QgdGhlIHNxcnQgZnJvbSB0djEgYW5kIHR2MlxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC8vIE90aGVyIGNhc2VzOiBUb25lbGxpLVNoYW5rcyBhbGdvcml0aG1cbiAgICByZXR1cm4gdG9uZWxsaVNoYW5rcyhQKTtcbn1cbi8vIExpdHRsZS1lbmRpYW4gY2hlY2sgZm9yIGZpcnN0IExFIGJpdCAobGFzdCBCRSBiaXQpO1xuZXhwb3J0IGNvbnN0IGlzTmVnYXRpdmVMRSA9IChudW0sIG1vZHVsbykgPT4gKG1vZChudW0sIG1vZHVsbykgJiBfMW4pID09PSBfMW47XG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IEZJRUxEX0ZJRUxEUyA9IFtcbiAgICAnY3JlYXRlJywgJ2lzVmFsaWQnLCAnaXMwJywgJ25lZycsICdpbnYnLCAnc3FydCcsICdzcXInLFxuICAgICdlcWwnLCAnYWRkJywgJ3N1YicsICdtdWwnLCAncG93JywgJ2RpdicsXG4gICAgJ2FkZE4nLCAnc3ViTicsICdtdWxOJywgJ3Nxck4nXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmllbGQoZmllbGQpIHtcbiAgICBjb25zdCBpbml0aWFsID0ge1xuICAgICAgICBPUkRFUjogJ2JpZ2ludCcsXG4gICAgICAgIE1BU0s6ICdiaWdpbnQnLFxuICAgICAgICBCWVRFUzogJ2lzU2FmZUludGVnZXInLFxuICAgICAgICBCSVRTOiAnaXNTYWZlSW50ZWdlcicsXG4gICAgfTtcbiAgICBjb25zdCBvcHRzID0gRklFTERfRklFTERTLnJlZHVjZSgobWFwLCB2YWwpID0+IHtcbiAgICAgICAgbWFwW3ZhbF0gPSAnZnVuY3Rpb24nO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH0sIGluaXRpYWwpO1xuICAgIHJldHVybiB2YWxpZGF0ZU9iamVjdChmaWVsZCwgb3B0cyk7XG59XG4vLyBHZW5lcmljIGZpZWxkIGZ1bmN0aW9uc1xuLyoqXG4gKiBTYW1lIGFzIGBwb3dgIGJ1dCBmb3IgRnA6IG5vbi1jb25zdGFudC10aW1lLlxuICogVW5zYWZlIGluIHNvbWUgY29udGV4dHM6IHVzZXMgbGFkZGVyLCBzbyBjYW4gZXhwb3NlIGJpZ2ludCBiaXRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gRnBQb3coZiwgbnVtLCBwb3dlcikge1xuICAgIC8vIFNob3VsZCBoYXZlIHNhbWUgc3BlZWQgYXMgcG93IGZvciBiaWdpbnRzXG4gICAgLy8gVE9ETzogYmVuY2htYXJrIVxuICAgIGlmIChwb3dlciA8IF8wbilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBwb3dlciA+IDAnKTtcbiAgICBpZiAocG93ZXIgPT09IF8wbilcbiAgICAgICAgcmV0dXJuIGYuT05FO1xuICAgIGlmIChwb3dlciA9PT0gXzFuKVxuICAgICAgICByZXR1cm4gbnVtO1xuICAgIGxldCBwID0gZi5PTkU7XG4gICAgbGV0IGQgPSBudW07XG4gICAgd2hpbGUgKHBvd2VyID4gXzBuKSB7XG4gICAgICAgIGlmIChwb3dlciAmIF8xbilcbiAgICAgICAgICAgIHAgPSBmLm11bChwLCBkKTtcbiAgICAgICAgZCA9IGYuc3FyKGQpO1xuICAgICAgICBwb3dlciA+Pj0gXzFuO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbn1cbi8qKlxuICogRWZmaWNpZW50bHkgaW52ZXJ0IGFuIGFycmF5IG9mIEZpZWxkIGVsZW1lbnRzLlxuICogYGludigwKWAgd2lsbCByZXR1cm4gYHVuZGVmaW5lZGAgaGVyZTogbWFrZSBzdXJlIHRvIHRocm93IGFuIGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gRnBJbnZlcnRCYXRjaChmLCBudW1zKSB7XG4gICAgY29uc3QgdG1wID0gbmV3IEFycmF5KG51bXMubGVuZ3RoKTtcbiAgICAvLyBXYWxrIGZyb20gZmlyc3QgdG8gbGFzdCwgbXVsdGlwbHkgdGhlbSBieSBlYWNoIG90aGVyIE1PRCBwXG4gICAgY29uc3QgbGFzdE11bHRpcGxpZWQgPSBudW1zLnJlZHVjZSgoYWNjLCBudW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGYuaXMwKG51bSkpXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB0bXBbaV0gPSBhY2M7XG4gICAgICAgIHJldHVybiBmLm11bChhY2MsIG51bSk7XG4gICAgfSwgZi5PTkUpO1xuICAgIC8vIEludmVydCBsYXN0IGVsZW1lbnRcbiAgICBjb25zdCBpbnZlcnRlZCA9IGYuaW52KGxhc3RNdWx0aXBsaWVkKTtcbiAgICAvLyBXYWxrIGZyb20gbGFzdCB0byBmaXJzdCwgbXVsdGlwbHkgdGhlbSBieSBpbnZlcnRlZCBlYWNoIG90aGVyIE1PRCBwXG4gICAgbnVtcy5yZWR1Y2VSaWdodCgoYWNjLCBudW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGYuaXMwKG51bSkpXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB0bXBbaV0gPSBmLm11bChhY2MsIHRtcFtpXSk7XG4gICAgICAgIHJldHVybiBmLm11bChhY2MsIG51bSk7XG4gICAgfSwgaW52ZXJ0ZWQpO1xuICAgIHJldHVybiB0bXA7XG59XG5leHBvcnQgZnVuY3Rpb24gRnBEaXYoZiwgbGhzLCByaHMpIHtcbiAgICByZXR1cm4gZi5tdWwobGhzLCB0eXBlb2YgcmhzID09PSAnYmlnaW50JyA/IGludmVydChyaHMsIGYuT1JERVIpIDogZi5pbnYocmhzKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gRnBMZWdlbmRyZShvcmRlcikge1xuICAgIC8vIChhIHwgcCkg4omhIDEgICAgaWYgYSBpcyBhIHNxdWFyZSAobW9kIHApLCBxdWFkcmF0aWMgcmVzaWR1ZVxuICAgIC8vIChhIHwgcCkg4omhIC0xICAgaWYgYSBpcyBub3QgYSBzcXVhcmUgKG1vZCBwKSwgcXVhZHJhdGljIG5vbiByZXNpZHVlXG4gICAgLy8gKGEgfCBwKSDiiaEgMCAgICBpZiBhIOKJoSAwIChtb2QgcClcbiAgICBjb25zdCBsZWdlbmRyZUNvbnN0ID0gKG9yZGVyIC0gXzFuKSAvIF8ybjsgLy8gSW50ZWdlciBhcml0aG1ldGljXG4gICAgcmV0dXJuIChmLCB4KSA9PiBmLnBvdyh4LCBsZWdlbmRyZUNvbnN0KTtcbn1cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBUcnVlIHdoZW5ldmVyIHRoZSB2YWx1ZSB4IGlzIGEgc3F1YXJlIGluIHRoZSBmaWVsZCBGLlxuZXhwb3J0IGZ1bmN0aW9uIEZwSXNTcXVhcmUoZikge1xuICAgIGNvbnN0IGxlZ2VuZHJlID0gRnBMZWdlbmRyZShmLk9SREVSKTtcbiAgICByZXR1cm4gKHgpID0+IHtcbiAgICAgICAgY29uc3QgcCA9IGxlZ2VuZHJlKGYsIHgpO1xuICAgICAgICByZXR1cm4gZi5lcWwocCwgZi5aRVJPKSB8fCBmLmVxbChwLCBmLk9ORSk7XG4gICAgfTtcbn1cbi8vIENVUlZFLm4gbGVuZ3Roc1xuZXhwb3J0IGZ1bmN0aW9uIG5MZW5ndGgobiwgbkJpdExlbmd0aCkge1xuICAgIC8vIEJpdCBzaXplLCBieXRlIHNpemUgb2YgQ1VSVkUublxuICAgIGNvbnN0IF9uQml0TGVuZ3RoID0gbkJpdExlbmd0aCAhPT0gdW5kZWZpbmVkID8gbkJpdExlbmd0aCA6IG4udG9TdHJpbmcoMikubGVuZ3RoO1xuICAgIGNvbnN0IG5CeXRlTGVuZ3RoID0gTWF0aC5jZWlsKF9uQml0TGVuZ3RoIC8gOCk7XG4gICAgcmV0dXJuIHsgbkJpdExlbmd0aDogX25CaXRMZW5ndGgsIG5CeXRlTGVuZ3RoIH07XG59XG4vKipcbiAqIEluaXRpYWxpemVzIGEgZmluaXRlIGZpZWxkIG92ZXIgcHJpbWUuICoqTm9uLXByaW1lcyBhcmUgbm90IHN1cHBvcnRlZC4qKlxuICogRG8gbm90IGluaXQgaW4gbG9vcDogc2xvdy4gVmVyeSBmcmFnaWxlOiBhbHdheXMgcnVuIGEgYmVuY2htYXJrIG9uIGEgY2hhbmdlLlxuICogTWFqb3IgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uczpcbiAqICogYSkgZGVub3JtYWxpemVkIG9wZXJhdGlvbnMgbGlrZSBtdWxOIGluc3RlYWQgb2YgbXVsXG4gKiAqIGIpIHNhbWUgb2JqZWN0IHNoYXBlOiBuZXZlciBhZGQgb3IgcmVtb3ZlIGtleXNcbiAqICogYykgT2JqZWN0LmZyZWV6ZVxuICogTk9URTogb3BlcmF0aW9ucyBkb24ndCBjaGVjayAnaXNWYWxpZCcgZm9yIGFsbCBlbGVtZW50cyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyxcbiAqIGl0IGlzIGNhbGxlciByZXNwb25zaWJpbGl0eSB0byBjaGVjayB0aGlzLlxuICogVGhpcyBpcyBsb3ctbGV2ZWwgY29kZSwgcGxlYXNlIG1ha2Ugc3VyZSB5b3Uga25vdyB3aGF0IHlvdSBkb2luZy5cbiAqIEBwYXJhbSBPUkRFUiBwcmltZSBwb3NpdGl2ZSBiaWdpbnRcbiAqIEBwYXJhbSBiaXRMZW4gaG93IG1hbnkgYml0cyB0aGUgZmllbGQgY29uc3VtZXNcbiAqIEBwYXJhbSBpc0xFIChkZWY6IGZhbHNlKSBpZiBlbmNvZGluZyAvIGRlY29kaW5nIHNob3VsZCBiZSBpbiBsaXR0bGUtZW5kaWFuXG4gKiBAcGFyYW0gcmVkZWYgb3B0aW9uYWwgZmFzdGVyIHJlZGVmaW5pdGlvbnMgb2Ygc3FydCBhbmQgb3RoZXIgbWV0aG9kc1xuICovXG5leHBvcnQgZnVuY3Rpb24gRmllbGQoT1JERVIsIGJpdExlbiwgaXNMRSA9IGZhbHNlLCByZWRlZiA9IHt9KSB7XG4gICAgaWYgKE9SREVSIDw9IF8wbilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBGaWVsZCBPUkRFUiA+IDAsIGdvdCAke09SREVSfWApO1xuICAgIGNvbnN0IHsgbkJpdExlbmd0aDogQklUUywgbkJ5dGVMZW5ndGg6IEJZVEVTIH0gPSBuTGVuZ3RoKE9SREVSLCBiaXRMZW4pO1xuICAgIGlmIChCWVRFUyA+IDIwNDgpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmllbGQgbGVuZ3RocyBvdmVyIDIwNDggYnl0ZXMgYXJlIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICBjb25zdCBzcXJ0UCA9IEZwU3FydChPUkRFUik7XG4gICAgY29uc3QgZiA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBPUkRFUixcbiAgICAgICAgQklUUyxcbiAgICAgICAgQllURVMsXG4gICAgICAgIE1BU0s6IGJpdE1hc2soQklUUyksXG4gICAgICAgIFpFUk86IF8wbixcbiAgICAgICAgT05FOiBfMW4sXG4gICAgICAgIGNyZWF0ZTogKG51bSkgPT4gbW9kKG51bSwgT1JERVIpLFxuICAgICAgICBpc1ZhbGlkOiAobnVtKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG51bSAhPT0gJ2JpZ2ludCcpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGZpZWxkIGVsZW1lbnQ6IGV4cGVjdGVkIGJpZ2ludCwgZ290ICR7dHlwZW9mIG51bX1gKTtcbiAgICAgICAgICAgIHJldHVybiBfMG4gPD0gbnVtICYmIG51bSA8IE9SREVSOyAvLyAwIGlzIHZhbGlkIGVsZW1lbnQsIGJ1dCBpdCdzIG5vdCBpbnZlcnRpYmxlXG4gICAgICAgIH0sXG4gICAgICAgIGlzMDogKG51bSkgPT4gbnVtID09PSBfMG4sXG4gICAgICAgIGlzT2RkOiAobnVtKSA9PiAobnVtICYgXzFuKSA9PT0gXzFuLFxuICAgICAgICBuZWc6IChudW0pID0+IG1vZCgtbnVtLCBPUkRFUiksXG4gICAgICAgIGVxbDogKGxocywgcmhzKSA9PiBsaHMgPT09IHJocyxcbiAgICAgICAgc3FyOiAobnVtKSA9PiBtb2QobnVtICogbnVtLCBPUkRFUiksXG4gICAgICAgIGFkZDogKGxocywgcmhzKSA9PiBtb2QobGhzICsgcmhzLCBPUkRFUiksXG4gICAgICAgIHN1YjogKGxocywgcmhzKSA9PiBtb2QobGhzIC0gcmhzLCBPUkRFUiksXG4gICAgICAgIG11bDogKGxocywgcmhzKSA9PiBtb2QobGhzICogcmhzLCBPUkRFUiksXG4gICAgICAgIHBvdzogKG51bSwgcG93ZXIpID0+IEZwUG93KGYsIG51bSwgcG93ZXIpLFxuICAgICAgICBkaXY6IChsaHMsIHJocykgPT4gbW9kKGxocyAqIGludmVydChyaHMsIE9SREVSKSwgT1JERVIpLFxuICAgICAgICAvLyBTYW1lIGFzIGFib3ZlLCBidXQgZG9lc24ndCBub3JtYWxpemVcbiAgICAgICAgc3FyTjogKG51bSkgPT4gbnVtICogbnVtLFxuICAgICAgICBhZGROOiAobGhzLCByaHMpID0+IGxocyArIHJocyxcbiAgICAgICAgc3ViTjogKGxocywgcmhzKSA9PiBsaHMgLSByaHMsXG4gICAgICAgIG11bE46IChsaHMsIHJocykgPT4gbGhzICogcmhzLFxuICAgICAgICBpbnY6IChudW0pID0+IGludmVydChudW0sIE9SREVSKSxcbiAgICAgICAgc3FydDogcmVkZWYuc3FydCB8fCAoKG4pID0+IHNxcnRQKGYsIG4pKSxcbiAgICAgICAgaW52ZXJ0QmF0Y2g6IChsc3QpID0+IEZwSW52ZXJ0QmF0Y2goZiwgbHN0KSxcbiAgICAgICAgLy8gVE9ETzogZG8gd2UgcmVhbGx5IG5lZWQgY29uc3RhbnQgY21vdj9cbiAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSBjb25zdC10aW1lIGJpZ2ludHMgYW55d2F5LCBzbyBwcm9iYWJseSB3aWxsIGJlIG5vdCB2ZXJ5IHVzZWZ1bFxuICAgICAgICBjbW92OiAoYSwgYiwgYykgPT4gKGMgPyBiIDogYSksXG4gICAgICAgIHRvQnl0ZXM6IChudW0pID0+IChpc0xFID8gbnVtYmVyVG9CeXRlc0xFKG51bSwgQllURVMpIDogbnVtYmVyVG9CeXRlc0JFKG51bSwgQllURVMpKSxcbiAgICAgICAgZnJvbUJ5dGVzOiAoYnl0ZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChieXRlcy5sZW5ndGggIT09IEJZVEVTKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRnAuZnJvbUJ5dGVzOiBleHBlY3RlZCAke0JZVEVTfSwgZ290ICR7Ynl0ZXMubGVuZ3RofWApO1xuICAgICAgICAgICAgcmV0dXJuIGlzTEUgPyBieXRlc1RvTnVtYmVyTEUoYnl0ZXMpIDogYnl0ZXNUb051bWJlckJFKGJ5dGVzKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShmKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBGcFNxcnRPZGQoRnAsIGVsbSkge1xuICAgIGlmICghRnAuaXNPZGQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmllbGQgZG9lc24ndCBoYXZlIGlzT2RkYCk7XG4gICAgY29uc3Qgcm9vdCA9IEZwLnNxcnQoZWxtKTtcbiAgICByZXR1cm4gRnAuaXNPZGQocm9vdCkgPyByb290IDogRnAubmVnKHJvb3QpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEZwU3FydEV2ZW4oRnAsIGVsbSkge1xuICAgIGlmICghRnAuaXNPZGQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmllbGQgZG9lc24ndCBoYXZlIGlzT2RkYCk7XG4gICAgY29uc3Qgcm9vdCA9IEZwLnNxcnQoZWxtKTtcbiAgICByZXR1cm4gRnAuaXNPZGQocm9vdCkgPyBGcC5uZWcocm9vdCkgOiByb290O1xufVxuLyoqXG4gKiBcIkNvbnN0YW50LXRpbWVcIiBwcml2YXRlIGtleSBnZW5lcmF0aW9uIHV0aWxpdHkuXG4gKiBTYW1lIGFzIG1hcEtleVRvRmllbGQsIGJ1dCBhY2NlcHRzIGxlc3MgYnl0ZXMgKDQwIGluc3RlYWQgb2YgNDggZm9yIDMyLWJ5dGUgZmllbGQpLlxuICogV2hpY2ggbWFrZXMgaXQgc2xpZ2h0bHkgbW9yZSBiaWFzZWQsIGxlc3Mgc2VjdXJlLlxuICogQGRlcHJlY2F0ZWQgdXNlIG1hcEtleVRvRmllbGQgaW5zdGVhZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaFRvUHJpdmF0ZVNjYWxhcihoYXNoLCBncm91cE9yZGVyLCBpc0xFID0gZmFsc2UpIHtcbiAgICBoYXNoID0gZW5zdXJlQnl0ZXMoJ3ByaXZhdGVIYXNoJywgaGFzaCk7XG4gICAgY29uc3QgaGFzaExlbiA9IGhhc2gubGVuZ3RoO1xuICAgIGNvbnN0IG1pbkxlbiA9IG5MZW5ndGgoZ3JvdXBPcmRlcikubkJ5dGVMZW5ndGggKyA4O1xuICAgIGlmIChtaW5MZW4gPCAyNCB8fCBoYXNoTGVuIDwgbWluTGVuIHx8IGhhc2hMZW4gPiAxMDI0KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGhhc2hUb1ByaXZhdGVTY2FsYXI6IGV4cGVjdGVkICR7bWluTGVufS0xMDI0IGJ5dGVzIG9mIGlucHV0LCBnb3QgJHtoYXNoTGVufWApO1xuICAgIGNvbnN0IG51bSA9IGlzTEUgPyBieXRlc1RvTnVtYmVyTEUoaGFzaCkgOiBieXRlc1RvTnVtYmVyQkUoaGFzaCk7XG4gICAgcmV0dXJuIG1vZChudW0sIGdyb3VwT3JkZXIgLSBfMW4pICsgXzFuO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRvdGFsIG51bWJlciBvZiBieXRlcyBjb25zdW1lZCBieSB0aGUgZmllbGQgZWxlbWVudC5cbiAqIEZvciBleGFtcGxlLCAzMiBieXRlcyBmb3IgdXN1YWwgMjU2LWJpdCB3ZWllcnN0cmFzcyBjdXJ2ZS5cbiAqIEBwYXJhbSBmaWVsZE9yZGVyIG51bWJlciBvZiBmaWVsZCBlbGVtZW50cywgdXN1YWxseSBDVVJWRS5uXG4gKiBAcmV0dXJucyBieXRlIGxlbmd0aCBvZiBmaWVsZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmllbGRCeXRlc0xlbmd0aChmaWVsZE9yZGVyKSB7XG4gICAgaWYgKHR5cGVvZiBmaWVsZE9yZGVyICE9PSAnYmlnaW50JylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaWVsZCBvcmRlciBtdXN0IGJlIGJpZ2ludCcpO1xuICAgIGNvbnN0IGJpdExlbmd0aCA9IGZpZWxkT3JkZXIudG9TdHJpbmcoMikubGVuZ3RoO1xuICAgIHJldHVybiBNYXRoLmNlaWwoYml0TGVuZ3RoIC8gOCk7XG59XG4vKipcbiAqIFJldHVybnMgbWluaW1hbCBhbW91bnQgb2YgYnl0ZXMgdGhhdCBjYW4gYmUgc2FmZWx5IHJlZHVjZWRcbiAqIGJ5IGZpZWxkIG9yZGVyLlxuICogU2hvdWxkIGJlIDJeLTEyOCBmb3IgMTI4LWJpdCBjdXJ2ZSBzdWNoIGFzIFAyNTYuXG4gKiBAcGFyYW0gZmllbGRPcmRlciBudW1iZXIgb2YgZmllbGQgZWxlbWVudHMsIHVzdWFsbHkgQ1VSVkUublxuICogQHJldHVybnMgYnl0ZSBsZW5ndGggb2YgdGFyZ2V0IGhhc2hcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbkhhc2hMZW5ndGgoZmllbGRPcmRlcikge1xuICAgIGNvbnN0IGxlbmd0aCA9IGdldEZpZWxkQnl0ZXNMZW5ndGgoZmllbGRPcmRlcik7XG4gICAgcmV0dXJuIGxlbmd0aCArIE1hdGguY2VpbChsZW5ndGggLyAyKTtcbn1cbi8qKlxuICogXCJDb25zdGFudC10aW1lXCIgcHJpdmF0ZSBrZXkgZ2VuZXJhdGlvbiB1dGlsaXR5LlxuICogQ2FuIHRha2UgKG4gKyBuLzIpIG9yIG1vcmUgYnl0ZXMgb2YgdW5pZm9ybSBpbnB1dCBlLmcuIGZyb20gQ1NQUk5HIG9yIEtERlxuICogYW5kIGNvbnZlcnQgdGhlbSBpbnRvIHByaXZhdGUgc2NhbGFyLCB3aXRoIHRoZSBtb2R1bG8gYmlhcyBiZWluZyBuZWdsaWdpYmxlLlxuICogTmVlZHMgYXQgbGVhc3QgNDggYnl0ZXMgb2YgaW5wdXQgZm9yIDMyLWJ5dGUgcHJpdmF0ZSBrZXkuXG4gKiBodHRwczovL3Jlc2VhcmNoLmt1ZGVsc2tpc2VjdXJpdHkuY29tLzIwMjAvMDcvMjgvdGhlLWRlZmluaXRpdmUtZ3VpZGUtdG8tbW9kdWxvLWJpYXMtYW5kLWhvdy10by1hdm9pZC1pdC9cbiAqIEZJUFMgMTg2LTUsIEEuMiBodHRwczovL2NzcmMubmlzdC5nb3YvcHVibGljYXRpb25zL2RldGFpbC9maXBzLzE4Ni81L2ZpbmFsXG4gKiBSRkMgOTM4MCwgaHR0cHM6Ly93d3cucmZjLWVkaXRvci5vcmcvcmZjL3JmYzkzODAjc2VjdGlvbi01XG4gKiBAcGFyYW0gaGFzaCBoYXNoIG91dHB1dCBmcm9tIFNIQTMgb3IgYSBzaW1pbGFyIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZ3JvdXBPcmRlciBzaXplIG9mIHN1Ymdyb3VwIC0gKGUuZy4gc2VjcDI1NmsxLkNVUlZFLm4pXG4gKiBAcGFyYW0gaXNMRSBpbnRlcnByZXQgaGFzaCBieXRlcyBhcyBMRSBudW1cbiAqIEByZXR1cm5zIHZhbGlkIHByaXZhdGUgc2NhbGFyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBIYXNoVG9GaWVsZChrZXksIGZpZWxkT3JkZXIsIGlzTEUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGxlbiA9IGtleS5sZW5ndGg7XG4gICAgY29uc3QgZmllbGRMZW4gPSBnZXRGaWVsZEJ5dGVzTGVuZ3RoKGZpZWxkT3JkZXIpO1xuICAgIGNvbnN0IG1pbkxlbiA9IGdldE1pbkhhc2hMZW5ndGgoZmllbGRPcmRlcik7XG4gICAgLy8gTm8gc21hbGwgbnVtYmVyczogbmVlZCB0byB1bmRlcnN0YW5kIGJpYXMgc3RvcnkuIE5vIGh1Z2UgbnVtYmVyczogZWFzaWVyIHRvIGRldGVjdCBKUyB0aW1pbmdzLlxuICAgIGlmIChsZW4gPCAxNiB8fCBsZW4gPCBtaW5MZW4gfHwgbGVuID4gMTAyNClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBleHBlY3RlZCAke21pbkxlbn0tMTAyNCBieXRlcyBvZiBpbnB1dCwgZ290ICR7bGVufWApO1xuICAgIGNvbnN0IG51bSA9IGlzTEUgPyBieXRlc1RvTnVtYmVyQkUoa2V5KSA6IGJ5dGVzVG9OdW1iZXJMRShrZXkpO1xuICAgIC8vIGBtb2QoeCwgMTEpYCBjYW4gc29tZXRpbWVzIHByb2R1Y2UgMC4gYG1vZCh4LCAxMCkgKyAxYCBpcyB0aGUgc2FtZSwgYnV0IG5vIDBcbiAgICBjb25zdCByZWR1Y2VkID0gbW9kKG51bSwgZmllbGRPcmRlciAtIF8xbikgKyBfMW47XG4gICAgcmV0dXJuIGlzTEUgPyBudW1iZXJUb0J5dGVzTEUocmVkdWNlZCwgZmllbGRMZW4pIDogbnVtYmVyVG9CeXRlc0JFKHJlZHVjZWQsIGZpZWxkTGVuKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsYXIuanMubWFwIiwiLyohIG5vYmxlLWN1cnZlcyAtIE1JVCBMaWNlbnNlIChjKSAyMDIyIFBhdWwgTWlsbGVyIChwYXVsbWlsbHIuY29tKSAqL1xuLy8gQWJlbGlhbiBncm91cCB1dGlsaXRpZXNcbmltcG9ydCB7IHZhbGlkYXRlRmllbGQsIG5MZW5ndGggfSBmcm9tICcuL21vZHVsYXIuanMnO1xuaW1wb3J0IHsgdmFsaWRhdGVPYmplY3QsIGJpdExlbiB9IGZyb20gJy4vdXRpbHMuanMnO1xuY29uc3QgXzBuID0gQmlnSW50KDApO1xuY29uc3QgXzFuID0gQmlnSW50KDEpO1xuLy8gU2luY2UgcG9pbnRzIGluIGRpZmZlcmVudCBncm91cHMgY2Fubm90IGJlIGVxdWFsIChkaWZmZXJlbnQgb2JqZWN0IGNvbnN0cnVjdG9yKSxcbi8vIHdlIGNhbiBoYXZlIHNpbmdsZSBwbGFjZSB0byBzdG9yZSBwcmVjb21wdXRlc1xuY29uc3QgcG9pbnRQcmVjb21wdXRlcyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwb2ludFdpbmRvd1NpemVzID0gbmV3IFdlYWtNYXAoKTsgLy8gVGhpcyBhbGxvd3MgdXNlIG1ha2UgcG9pbnRzIGltbXV0YWJsZSAobm90aGluZyBjaGFuZ2VzIGluc2lkZSlcbi8vIEVsbGlwdGljIGN1cnZlIG11bHRpcGxpY2F0aW9uIG9mIFBvaW50IGJ5IHNjYWxhci4gRnJhZ2lsZS5cbi8vIFNjYWxhcnMgc2hvdWxkIGFsd2F5cyBiZSBsZXNzIHRoYW4gY3VydmUgb3JkZXI6IHRoaXMgc2hvdWxkIGJlIGNoZWNrZWQgaW5zaWRlIG9mIGEgY3VydmUgaXRzZWxmLlxuLy8gQ3JlYXRlcyBwcmVjb21wdXRhdGlvbiB0YWJsZXMgZm9yIGZhc3QgbXVsdGlwbGljYXRpb246XG4vLyAtIHByaXZhdGUgc2NhbGFyIGlzIHNwbGl0IGJ5IGZpeGVkIHNpemUgd2luZG93cyBvZiBXIGJpdHNcbi8vIC0gZXZlcnkgd2luZG93IHBvaW50IGlzIGNvbGxlY3RlZCBmcm9tIHdpbmRvdydzIHRhYmxlICYgYWRkZWQgdG8gYWNjdW11bGF0b3Jcbi8vIC0gc2luY2Ugd2luZG93cyBhcmUgZGlmZmVyZW50LCBzYW1lIHBvaW50IGluc2lkZSB0YWJsZXMgd29uJ3QgYmUgYWNjZXNzZWQgbW9yZSB0aGFuIG9uY2UgcGVyIGNhbGNcbi8vIC0gZWFjaCBtdWx0aXBsaWNhdGlvbiBpcyAnTWF0aC5jZWlsKENVUlZFX09SREVSIC8g8J2RiikgKyAxJyBwb2ludCBhZGRpdGlvbnMgKGZpeGVkIGZvciBhbnkgc2NhbGFyKVxuLy8gLSArMSB3aW5kb3cgaXMgbmVjY2Vzc2FyeSBmb3Igd05BRlxuLy8gLSB3TkFGIHJlZHVjZXMgdGFibGUgc2l6ZTogMnggbGVzcyBtZW1vcnkgKyAyeCBmYXN0ZXIgZ2VuZXJhdGlvbiwgYnV0IDEwJSBzbG93ZXIgbXVsdGlwbGljYXRpb25cbi8vIFRPRE86IFJlc2VhcmNoIHJldHVybmluZyAyZCBKUyBhcnJheSBvZiB3aW5kb3dzLCBpbnN0ZWFkIG9mIGEgc2luZ2xlIHdpbmRvdy4gVGhpcyB3b3VsZCBhbGxvd1xuLy8gd2luZG93cyB0byBiZSBpbiBkaWZmZXJlbnQgbWVtb3J5IGxvY2F0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIHdOQUYoYywgYml0cykge1xuICAgIGNvbnN0IGNvbnN0VGltZU5lZ2F0ZSA9IChjb25kaXRpb24sIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbmVnID0gaXRlbS5uZWdhdGUoKTtcbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbiA/IG5lZyA6IGl0ZW07XG4gICAgfTtcbiAgICBjb25zdCB2YWxpZGF0ZVcgPSAoVykgPT4ge1xuICAgICAgICBpZiAoIU51bWJlci5pc1NhZmVJbnRlZ2VyKFcpIHx8IFcgPD0gMCB8fCBXID4gYml0cylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgV3Jvbmcgd2luZG93IHNpemU9JHtXfSwgc2hvdWxkIGJlIFsxLi4ke2JpdHN9XWApO1xuICAgIH07XG4gICAgY29uc3Qgb3B0cyA9IChXKSA9PiB7XG4gICAgICAgIHZhbGlkYXRlVyhXKTtcbiAgICAgICAgY29uc3Qgd2luZG93cyA9IE1hdGguY2VpbChiaXRzIC8gVykgKyAxOyAvLyArMSwgYmVjYXVzZVxuICAgICAgICBjb25zdCB3aW5kb3dTaXplID0gMiAqKiAoVyAtIDEpOyAvLyAtMSBiZWNhdXNlIHdlIHNraXAgemVyb1xuICAgICAgICByZXR1cm4geyB3aW5kb3dzLCB3aW5kb3dTaXplIH07XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25zdFRpbWVOZWdhdGUsXG4gICAgICAgIC8vIG5vbi1jb25zdCB0aW1lIG11bHRpcGxpY2F0aW9uIGxhZGRlclxuICAgICAgICB1bnNhZmVMYWRkZXIoZWxtLCBuKSB7XG4gICAgICAgICAgICBsZXQgcCA9IGMuWkVSTztcbiAgICAgICAgICAgIGxldCBkID0gZWxtO1xuICAgICAgICAgICAgd2hpbGUgKG4gPiBfMG4pIHtcbiAgICAgICAgICAgICAgICBpZiAobiAmIF8xbilcbiAgICAgICAgICAgICAgICAgICAgcCA9IHAuYWRkKGQpO1xuICAgICAgICAgICAgICAgIGQgPSBkLmRvdWJsZSgpO1xuICAgICAgICAgICAgICAgIG4gPj49IF8xbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIHdOQUYgcHJlY29tcHV0YXRpb24gd2luZG93LiBVc2VkIGZvciBjYWNoaW5nLlxuICAgICAgICAgKiBEZWZhdWx0IHdpbmRvdyBzaXplIGlzIHNldCBieSBgdXRpbHMucHJlY29tcHV0ZSgpYCBhbmQgaXMgZXF1YWwgdG8gOC5cbiAgICAgICAgICogTnVtYmVyIG9mIHByZWNvbXB1dGVkIHBvaW50cyBkZXBlbmRzIG9uIHRoZSBjdXJ2ZSBzaXplOlxuICAgICAgICAgKiAyXijwnZGK4oiSMSkgKiAoTWF0aC5jZWlsKPCdkZsgLyDwnZGKKSArIDEpLCB3aGVyZTpcbiAgICAgICAgICogLSDwnZGKIGlzIHRoZSB3aW5kb3cgc2l6ZVxuICAgICAgICAgKiAtIPCdkZsgaXMgdGhlIGJpdGxlbmd0aCBvZiB0aGUgY3VydmUgb3JkZXIuXG4gICAgICAgICAqIEZvciBhIDI1Ni1iaXQgY3VydmUgYW5kIHdpbmRvdyBzaXplIDgsIHRoZSBudW1iZXIgb2YgcHJlY29tcHV0ZWQgcG9pbnRzIGlzIDEyOCAqIDMzID0gNDIyNC5cbiAgICAgICAgICogQHJldHVybnMgcHJlY29tcHV0ZWQgcG9pbnQgdGFibGVzIGZsYXR0ZW5lZCB0byBhIHNpbmdsZSBhcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgcHJlY29tcHV0ZVdpbmRvdyhlbG0sIFcpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgd2luZG93cywgd2luZG93U2l6ZSB9ID0gb3B0cyhXKTtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IHAgPSBlbG07XG4gICAgICAgICAgICBsZXQgYmFzZSA9IHA7XG4gICAgICAgICAgICBmb3IgKGxldCB3aW5kb3cgPSAwOyB3aW5kb3cgPCB3aW5kb3dzOyB3aW5kb3crKykge1xuICAgICAgICAgICAgICAgIGJhc2UgPSBwO1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKGJhc2UpO1xuICAgICAgICAgICAgICAgIC8vID0xLCBiZWNhdXNlIHdlIHNraXAgemVyb1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgd2luZG93U2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhc2UgPSBiYXNlLmFkZChwKTtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzLnB1c2goYmFzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAgPSBiYXNlLmRvdWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEltcGxlbWVudHMgZWMgbXVsdGlwbGljYXRpb24gdXNpbmcgcHJlY29tcHV0ZWQgdGFibGVzIGFuZCB3LWFyeSBub24tYWRqYWNlbnQgZm9ybS5cbiAgICAgICAgICogQHBhcmFtIFcgd2luZG93IHNpemVcbiAgICAgICAgICogQHBhcmFtIHByZWNvbXB1dGVzIHByZWNvbXB1dGVkIHRhYmxlc1xuICAgICAgICAgKiBAcGFyYW0gbiBzY2FsYXIgKHdlIGRvbid0IGNoZWNrIGhlcmUsIGJ1dCBzaG91bGQgYmUgbGVzcyB0aGFuIGN1cnZlIG9yZGVyKVxuICAgICAgICAgKiBAcmV0dXJucyByZWFsIGFuZCBmYWtlIChmb3IgY29uc3QtdGltZSkgcG9pbnRzXG4gICAgICAgICAqL1xuICAgICAgICB3TkFGKFcsIHByZWNvbXB1dGVzLCBuKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBtYXliZSBjaGVjayB0aGF0IHNjYWxhciBpcyBsZXNzIHRoYW4gZ3JvdXAgb3JkZXI/IHdOQUYgYmVoYXZpb3VzIGlzIHVuZGVmaW5lZCBvdGhlcndpc2VcbiAgICAgICAgICAgIC8vIEJ1dCBuZWVkIHRvIGNhcmVmdWxseSByZW1vdmUgb3RoZXIgY2hlY2tzIGJlZm9yZSB3TkFGLiBPUkRFUiA9PSBiaXRzIGhlcmVcbiAgICAgICAgICAgIGNvbnN0IHsgd2luZG93cywgd2luZG93U2l6ZSB9ID0gb3B0cyhXKTtcbiAgICAgICAgICAgIGxldCBwID0gYy5aRVJPO1xuICAgICAgICAgICAgbGV0IGYgPSBjLkJBU0U7XG4gICAgICAgICAgICBjb25zdCBtYXNrID0gQmlnSW50KDIgKiogVyAtIDEpOyAvLyBDcmVhdGUgbWFzayB3aXRoIFcgb25lczogMGIxMTExIGZvciBXPTQgZXRjLlxuICAgICAgICAgICAgY29uc3QgbWF4TnVtYmVyID0gMiAqKiBXO1xuICAgICAgICAgICAgY29uc3Qgc2hpZnRCeSA9IEJpZ0ludChXKTtcbiAgICAgICAgICAgIGZvciAobGV0IHdpbmRvdyA9IDA7IHdpbmRvdyA8IHdpbmRvd3M7IHdpbmRvdysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93ICogd2luZG93U2l6ZTtcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IFcgYml0cy5cbiAgICAgICAgICAgICAgICBsZXQgd2JpdHMgPSBOdW1iZXIobiAmIG1hc2spO1xuICAgICAgICAgICAgICAgIC8vIFNoaWZ0IG51bWJlciBieSBXIGJpdHMuXG4gICAgICAgICAgICAgICAgbiA+Pj0gc2hpZnRCeTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgYml0cyBhcmUgYmlnZ2VyIHRoYW4gbWF4IHNpemUsIHdlJ2xsIHNwbGl0IHRob3NlLlxuICAgICAgICAgICAgICAgIC8vICsyMjQgPT4gMjU2IC0gMzJcbiAgICAgICAgICAgICAgICBpZiAod2JpdHMgPiB3aW5kb3dTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHdiaXRzIC09IG1heE51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgbiArPSBfMW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRoaXMgY29kZSB3YXMgZmlyc3Qgd3JpdHRlbiB3aXRoIGFzc3VtcHRpb24gdGhhdCAnZicgYW5kICdwJyB3aWxsIG5ldmVyIGJlIGluZmluaXR5IHBvaW50OlxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGVhY2ggYWRkaXRpb24gaXMgbXVsdGlwbGllZCBieSAyICoqIFcsIGl0IGNhbm5vdCBjYW5jZWwgZWFjaCBvdGhlci4gSG93ZXZlcixcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBuZWdhdGUgbm93OiBpdCBpcyBwb3NzaWJsZSB0aGF0IG5lZ2F0ZWQgZWxlbWVudCBmcm9tIGxvdyB2YWx1ZVxuICAgICAgICAgICAgICAgIC8vIHdvdWxkIGJlIHRoZSBzYW1lIGFzIGhpZ2ggZWxlbWVudCwgd2hpY2ggd2lsbCBjcmVhdGUgY2FycnkgaW50byBuZXh0IHdpbmRvdy5cbiAgICAgICAgICAgICAgICAvLyBJdCdzIG5vdCBvYnZpb3VzIGhvdyB0aGlzIGNhbiBmYWlsLCBidXQgc3RpbGwgd29ydGggaW52ZXN0aWdhdGluZyBsYXRlci5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSdyZSBvbnRvIFplcm8gcG9pbnQuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHJhbmRvbSBwb2ludCBpbnNpZGUgY3VycmVudCB3aW5kb3cgdG8gZi5cbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQxID0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldDIgPSBvZmZzZXQgKyBNYXRoLmFicyh3Yml0cykgLSAxOyAvLyAtMSBiZWNhdXNlIHdlIHNraXAgemVyb1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmQxID0gd2luZG93ICUgMiAhPT0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25kMiA9IHdiaXRzIDwgMDtcbiAgICAgICAgICAgICAgICBpZiAod2JpdHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG1vc3QgaW1wb3J0YW50IHBhcnQgZm9yIGNvbnN0LXRpbWUgZ2V0UHVibGljS2V5XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLmFkZChjb25zdFRpbWVOZWdhdGUoY29uZDEsIHByZWNvbXB1dGVzW29mZnNldDFdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwID0gcC5hZGQoY29uc3RUaW1lTmVnYXRlKGNvbmQyLCBwcmVjb21wdXRlc1tvZmZzZXQyXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEpJVC1jb21waWxlciBzaG91bGQgbm90IGVsaW1pbmF0ZSBmIGhlcmUsIHNpbmNlIGl0IHdpbGwgbGF0ZXIgYmUgdXNlZCBpbiBub3JtYWxpemVaKClcbiAgICAgICAgICAgIC8vIEV2ZW4gaWYgdGhlIHZhcmlhYmxlIGlzIHN0aWxsIHVudXNlZCwgdGhlcmUgYXJlIHNvbWUgY2hlY2tzIHdoaWNoIHdpbGxcbiAgICAgICAgICAgIC8vIHRocm93IGFuIGV4Y2VwdGlvbiwgc28gY29tcGlsZXIgbmVlZHMgdG8gcHJvdmUgdGhleSB3b24ndCBoYXBwZW4sIHdoaWNoIGlzIGhhcmQuXG4gICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50IHRoZXJlIGlzIGEgd2F5IHRvIEYgYmUgaW5maW5pdHktcG9pbnQgZXZlbiBpZiBwIGlzIG5vdCxcbiAgICAgICAgICAgIC8vIHdoaWNoIG1ha2VzIGl0IGxlc3MgY29uc3QtdGltZTogYXJvdW5kIDEgYmlnaW50IG11bHRpcGx5LlxuICAgICAgICAgICAgcmV0dXJuIHsgcCwgZiB9O1xuICAgICAgICB9LFxuICAgICAgICB3TkFGQ2FjaGVkKFAsIG4sIHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgY29uc3QgVyA9IHBvaW50V2luZG93U2l6ZXMuZ2V0KFApIHx8IDE7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcHJlY29tcHV0ZXMgb24gYSBmaXJzdCBydW4sIHJldXNlIHRoZW0gYWZ0ZXJcbiAgICAgICAgICAgIGxldCBjb21wID0gcG9pbnRQcmVjb21wdXRlcy5nZXQoUCk7XG4gICAgICAgICAgICBpZiAoIWNvbXApIHtcbiAgICAgICAgICAgICAgICBjb21wID0gdGhpcy5wcmVjb21wdXRlV2luZG93KFAsIFcpO1xuICAgICAgICAgICAgICAgIGlmIChXICE9PSAxKVxuICAgICAgICAgICAgICAgICAgICBwb2ludFByZWNvbXB1dGVzLnNldChQLCB0cmFuc2Zvcm0oY29tcCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMud05BRihXLCBjb21wLCBuKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gV2UgY2FsY3VsYXRlIHByZWNvbXB1dGVzIGZvciBlbGxpcHRpYyBjdXJ2ZSBwb2ludCBtdWx0aXBsaWNhdGlvblxuICAgICAgICAvLyB1c2luZyB3aW5kb3dlZCBtZXRob2QuIFRoaXMgc3BlY2lmaWVzIHdpbmRvdyBzaXplIGFuZFxuICAgICAgICAvLyBzdG9yZXMgcHJlY29tcHV0ZWQgdmFsdWVzLiBVc3VhbGx5IG9ubHkgYmFzZSBwb2ludCB3b3VsZCBiZSBwcmVjb21wdXRlZC5cbiAgICAgICAgc2V0V2luZG93U2l6ZShQLCBXKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZVcoVyk7XG4gICAgICAgICAgICBwb2ludFdpbmRvd1NpemVzLnNldChQLCBXKTtcbiAgICAgICAgICAgIHBvaW50UHJlY29tcHV0ZXMuZGVsZXRlKFApO1xuICAgICAgICB9LFxuICAgIH07XG59XG4vKipcbiAqIFBpcHBlbmdlciBhbGdvcml0aG0gZm9yIG11bHRpLXNjYWxhciBtdWx0aXBsaWNhdGlvbiAoTVNNKS5cbiAqIE1TTSBpcyBiYXNpY2FsbHkgKFBhICsgUWIgKyBSYyArIC4uLikuXG4gKiAzMHggZmFzdGVyIHZzIG5haXZlIGFkZGl0aW9uIG9uIEw9NDA5NiwgMTB4IGZhc3RlciB3aXRoIHByZWNvbXB1dGVzLlxuICogRm9yIE49MjU0Yml0LCBMPTEsIGl0IGRvZXM6IDEwMjQgQUREICsgMjU0IERCTC4gRm9yIEw9NTogMTUzNiBBREQgKyAyNTQgREJMLlxuICogQWxnb3JpdGhtaWNhbGx5IGNvbnN0YW50LXRpbWUgKGZvciBzYW1lIEwpLCBldmVuIHdoZW4gMSBwb2ludCArIHNjYWxhciwgb3Igd2hlbiBzY2FsYXIgPSAwLlxuICogQHBhcmFtIGMgQ3VydmUgUG9pbnQgY29uc3RydWN0b3JcbiAqIEBwYXJhbSBmaWVsZCBmaWVsZCBvdmVyIENVUlZFLk4gLSBpbXBvcnRhbnQgdGhhdCBpdCdzIG5vdCBvdmVyIENVUlZFLlBcbiAqIEBwYXJhbSBwb2ludHMgYXJyYXkgb2YgTCBjdXJ2ZSBwb2ludHNcbiAqIEBwYXJhbSBzY2FsYXJzIGFycmF5IG9mIEwgc2NhbGFycyAoYWthIHByaXZhdGUga2V5cyAvIGJpZ2ludHMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaXBwZW5nZXIoYywgZmllbGQsIHBvaW50cywgc2NhbGFycykge1xuICAgIC8vIElmIHdlIHNwbGl0IHNjYWxhcnMgYnkgc29tZSB3aW5kb3cgKGxldCdzIHNheSA4IGJpdHMpLCBldmVyeSBjaHVuayB3aWxsIG9ubHlcbiAgICAvLyB0YWtlIDI1NiBidWNrZXRzIGV2ZW4gaWYgdGhlcmUgYXJlIDQwOTYgc2NhbGFycywgYWxzbyByZS11c2VzIGRvdWJsZS5cbiAgICAvLyBUT0RPOlxuICAgIC8vIC0gaHR0cHM6Ly9lcHJpbnQuaWFjci5vcmcvMjAyNC83NTAucGRmXG4gICAgLy8gLSBodHRwczovL3RjaGVzLmlhY3Iub3JnL2luZGV4LnBocC9UQ0hFUy9hcnRpY2xlL3ZpZXcvMTAyODdcbiAgICAvLyAwIGlzIGFjY2VwdGVkIGluIHNjYWxhcnNcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocG9pbnRzKSB8fCAhQXJyYXkuaXNBcnJheShzY2FsYXJzKSB8fCBzY2FsYXJzLmxlbmd0aCAhPT0gcG9pbnRzLmxlbmd0aClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcnJheXMgb2YgcG9pbnRzIGFuZCBzY2FsYXJzIG11c3QgaGF2ZSBlcXVhbCBsZW5ndGgnKTtcbiAgICBzY2FsYXJzLmZvckVhY2goKHMsIGkpID0+IHtcbiAgICAgICAgaWYgKCFmaWVsZC5pc1ZhbGlkKHMpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB3cm9uZyBzY2FsYXIgYXQgaW5kZXggJHtpfWApO1xuICAgIH0pO1xuICAgIHBvaW50cy5mb3JFYWNoKChwLCBpKSA9PiB7XG4gICAgICAgIGlmICghKHAgaW5zdGFuY2VvZiBjKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgd3JvbmcgcG9pbnQgYXQgaW5kZXggJHtpfWApO1xuICAgIH0pO1xuICAgIGNvbnN0IHdiaXRzID0gYml0TGVuKEJpZ0ludChwb2ludHMubGVuZ3RoKSk7XG4gICAgY29uc3Qgd2luZG93U2l6ZSA9IHdiaXRzID4gMTIgPyB3Yml0cyAtIDMgOiB3Yml0cyA+IDQgPyB3Yml0cyAtIDIgOiB3Yml0cyA/IDIgOiAxOyAvLyBpbiBiaXRzXG4gICAgY29uc3QgTUFTSyA9ICgxIDw8IHdpbmRvd1NpemUpIC0gMTtcbiAgICBjb25zdCBidWNrZXRzID0gbmV3IEFycmF5KE1BU0sgKyAxKS5maWxsKGMuWkVSTyk7IC8vICsxIGZvciB6ZXJvIGFycmF5XG4gICAgY29uc3QgbGFzdEJpdHMgPSBNYXRoLmZsb29yKChmaWVsZC5CSVRTIC0gMSkgLyB3aW5kb3dTaXplKSAqIHdpbmRvd1NpemU7XG4gICAgbGV0IHN1bSA9IGMuWkVSTztcbiAgICBmb3IgKGxldCBpID0gbGFzdEJpdHM7IGkgPj0gMDsgaSAtPSB3aW5kb3dTaXplKSB7XG4gICAgICAgIGJ1Y2tldHMuZmlsbChjLlpFUk8pO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNjYWxhcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxhciA9IHNjYWxhcnNbal07XG4gICAgICAgICAgICBjb25zdCB3Yml0cyA9IE51bWJlcigoc2NhbGFyID4+IEJpZ0ludChpKSkgJiBCaWdJbnQoTUFTSykpO1xuICAgICAgICAgICAgYnVja2V0c1t3Yml0c10gPSBidWNrZXRzW3diaXRzXS5hZGQocG9pbnRzW2pdKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzSSA9IGMuWkVSTzsgLy8gbm90IHVzaW5nIHRoaXMgd2lsbCBkbyBzbWFsbCBzcGVlZC11cCwgYnV0IHdpbGwgbG9zZSBjdFxuICAgICAgICAvLyBTa2lwIGZpcnN0IGJ1Y2tldCwgYmVjYXVzZSBpdCBpcyB6ZXJvXG4gICAgICAgIGZvciAobGV0IGogPSBidWNrZXRzLmxlbmd0aCAtIDEsIHN1bUkgPSBjLlpFUk87IGogPiAwOyBqLS0pIHtcbiAgICAgICAgICAgIHN1bUkgPSBzdW1JLmFkZChidWNrZXRzW2pdKTtcbiAgICAgICAgICAgIHJlc0kgPSByZXNJLmFkZChzdW1JKTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzdW0uYWRkKHJlc0kpO1xuICAgICAgICBpZiAoaSAhPT0gMClcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2luZG93U2l6ZTsgaisrKVxuICAgICAgICAgICAgICAgIHN1bSA9IHN1bS5kb3VibGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUJhc2ljKGN1cnZlKSB7XG4gICAgdmFsaWRhdGVGaWVsZChjdXJ2ZS5GcCk7XG4gICAgdmFsaWRhdGVPYmplY3QoY3VydmUsIHtcbiAgICAgICAgbjogJ2JpZ2ludCcsXG4gICAgICAgIGg6ICdiaWdpbnQnLFxuICAgICAgICBHeDogJ2ZpZWxkJyxcbiAgICAgICAgR3k6ICdmaWVsZCcsXG4gICAgfSwge1xuICAgICAgICBuQml0TGVuZ3RoOiAnaXNTYWZlSW50ZWdlcicsXG4gICAgICAgIG5CeXRlTGVuZ3RoOiAnaXNTYWZlSW50ZWdlcicsXG4gICAgfSk7XG4gICAgLy8gU2V0IGRlZmF1bHRzXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgICAgICAuLi5uTGVuZ3RoKGN1cnZlLm4sIGN1cnZlLm5CaXRMZW5ndGgpLFxuICAgICAgICAuLi5jdXJ2ZSxcbiAgICAgICAgLi4ueyBwOiBjdXJ2ZS5GcC5PUkRFUiB9LFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VydmUuanMubWFwIiwiLyohIG5vYmxlLWN1cnZlcyAtIE1JVCBMaWNlbnNlIChjKSAyMDIyIFBhdWwgTWlsbGVyIChwYXVsbWlsbHIuY29tKSAqL1xuLy8gU2hvcnQgV2VpZXJzdHJhc3MgY3VydmUuIFRoZSBmb3JtdWxhIGlzOiB5wrIgPSB4wrMgKyBheCArIGJcbmltcG9ydCB7IHZhbGlkYXRlQmFzaWMsIHdOQUYsIHBpcHBlbmdlciwgfSBmcm9tICcuL2N1cnZlLmpzJztcbmltcG9ydCAqIGFzIG1vZCBmcm9tICcuL21vZHVsYXIuanMnO1xuaW1wb3J0ICogYXMgdXQgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBlbnN1cmVCeXRlcywgbWVtb2l6ZWQsIGFib29sIH0gZnJvbSAnLi91dGlscy5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZVNpZ1Zlck9wdHMob3B0cykge1xuICAgIGlmIChvcHRzLmxvd1MgIT09IHVuZGVmaW5lZClcbiAgICAgICAgYWJvb2woJ2xvd1MnLCBvcHRzLmxvd1MpO1xuICAgIGlmIChvcHRzLnByZWhhc2ggIT09IHVuZGVmaW5lZClcbiAgICAgICAgYWJvb2woJ3ByZWhhc2gnLCBvcHRzLnByZWhhc2gpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVQb2ludE9wdHMoY3VydmUpIHtcbiAgICBjb25zdCBvcHRzID0gdmFsaWRhdGVCYXNpYyhjdXJ2ZSk7XG4gICAgdXQudmFsaWRhdGVPYmplY3Qob3B0cywge1xuICAgICAgICBhOiAnZmllbGQnLFxuICAgICAgICBiOiAnZmllbGQnLFxuICAgIH0sIHtcbiAgICAgICAgYWxsb3dlZFByaXZhdGVLZXlMZW5ndGhzOiAnYXJyYXknLFxuICAgICAgICB3cmFwUHJpdmF0ZUtleTogJ2Jvb2xlYW4nLFxuICAgICAgICBpc1RvcnNpb25GcmVlOiAnZnVuY3Rpb24nLFxuICAgICAgICBjbGVhckNvZmFjdG9yOiAnZnVuY3Rpb24nLFxuICAgICAgICBhbGxvd0luZmluaXR5UG9pbnQ6ICdib29sZWFuJyxcbiAgICAgICAgZnJvbUJ5dGVzOiAnZnVuY3Rpb24nLFxuICAgICAgICB0b0J5dGVzOiAnZnVuY3Rpb24nLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgZW5kbywgRnAsIGEgfSA9IG9wdHM7XG4gICAgaWYgKGVuZG8pIHtcbiAgICAgICAgaWYgKCFGcC5lcWwoYSwgRnAuWkVSTykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW5kb21vcnBoaXNtIGNhbiBvbmx5IGJlIGRlZmluZWQgZm9yIEtvYmxpdHogY3VydmVzIHRoYXQgaGF2ZSBhPTAnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGVuZG8gIT09ICdvYmplY3QnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZW5kby5iZXRhICE9PSAnYmlnaW50JyB8fFxuICAgICAgICAgICAgdHlwZW9mIGVuZG8uc3BsaXRTY2FsYXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZW5kb21vcnBoaXNtIHdpdGggYmV0YTogYmlnaW50IGFuZCBzcGxpdFNjYWxhcjogZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7IC4uLm9wdHMgfSk7XG59XG5jb25zdCB7IGJ5dGVzVG9OdW1iZXJCRTogYjJuLCBoZXhUb0J5dGVzOiBoMmIgfSA9IHV0O1xuLyoqXG4gKiBBU04uMSBERVIgZW5jb2RpbmcgdXRpbGl0aWVzLiBBU04gaXMgdmVyeSBjb21wbGV4ICYgZnJhZ2lsZS4gRm9ybWF0OlxuICpcbiAqICAgICBbMHgzMCAoU0VRVUVOQ0UpLCBieXRlbGVuZ3RoLCAweDAyIChJTlRFR0VSKSwgaW50TGVuZ3RoLCBSLCAweDAyIChJTlRFR0VSKSwgaW50TGVuZ3RoLCBTXVxuICpcbiAqIERvY3M6IGh0dHBzOi8vbGV0c2VuY3J5cHQub3JnL2RvY3MvYS13YXJtLXdlbGNvbWUtdG8tYXNuMS1hbmQtZGVyLywgaHR0cHM6Ly9sdWNhLm50b3Aub3JnL1RlYWNoaW5nL0FwcHVudGkvYXNuMS5odG1sXG4gKi9cbmV4cG9ydCBjb25zdCBERVIgPSB7XG4gICAgLy8gYXNuLjEgREVSIGVuY29kaW5nIHV0aWxzXG4gICAgRXJyOiBjbGFzcyBERVJFcnIgZXh0ZW5kcyBFcnJvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG0gPSAnJykge1xuICAgICAgICAgICAgc3VwZXIobSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIEJhc2ljIGJ1aWxkaW5nIGJsb2NrIGlzIFRMViAoVGFnLUxlbmd0aC1WYWx1ZSlcbiAgICBfdGx2OiB7XG4gICAgICAgIGVuY29kZTogKHRhZywgZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBFcnI6IEUgfSA9IERFUjtcbiAgICAgICAgICAgIGlmICh0YWcgPCAwIHx8IHRhZyA+IDI1NilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRSgndGx2LmVuY29kZTogd3JvbmcgdGFnJyk7XG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggJiAxKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFKCd0bHYuZW5jb2RlOiB1bnBhZGRlZCBkYXRhJyk7XG4gICAgICAgICAgICBjb25zdCBkYXRhTGVuID0gZGF0YS5sZW5ndGggLyAyO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gdXQubnVtYmVyVG9IZXhVbnBhZGRlZChkYXRhTGVuKTtcbiAgICAgICAgICAgIGlmICgobGVuLmxlbmd0aCAvIDIpICYgMTI4KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFKCd0bHYuZW5jb2RlOiBsb25nIGZvcm0gbGVuZ3RoIHRvbyBiaWcnKTtcbiAgICAgICAgICAgIC8vIGxlbmd0aCBvZiBsZW5ndGggd2l0aCBsb25nIGZvcm0gZmxhZ1xuICAgICAgICAgICAgY29uc3QgbGVuTGVuID0gZGF0YUxlbiA+IDEyNyA/IHV0Lm51bWJlclRvSGV4VW5wYWRkZWQoKGxlbi5sZW5ndGggLyAyKSB8IDEyOCkgOiAnJztcbiAgICAgICAgICAgIHJldHVybiBgJHt1dC5udW1iZXJUb0hleFVucGFkZGVkKHRhZyl9JHtsZW5MZW59JHtsZW59JHtkYXRhfWA7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHYgLSB2YWx1ZSwgbCAtIGxlZnQgYnl0ZXMgKHVucGFyc2VkKVxuICAgICAgICBkZWNvZGUodGFnLCBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB7IEVycjogRSB9ID0gREVSO1xuICAgICAgICAgICAgbGV0IHBvcyA9IDA7XG4gICAgICAgICAgICBpZiAodGFnIDwgMCB8fCB0YWcgPiAyNTYpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEUoJ3Rsdi5lbmNvZGU6IHdyb25nIHRhZycpO1xuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoIDwgMiB8fCBkYXRhW3BvcysrXSAhPT0gdGFnKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFKCd0bHYuZGVjb2RlOiB3cm9uZyB0bHYnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gZGF0YVtwb3MrK107XG4gICAgICAgICAgICBjb25zdCBpc0xvbmcgPSAhIShmaXJzdCAmIDEyOCk7IC8vIEZpcnN0IGJpdCBvZiBmaXJzdCBsZW5ndGggYnl0ZSBpcyBmbGFnIGZvciBzaG9ydC9sb25nIGZvcm1cbiAgICAgICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICAgICAgaWYgKCFpc0xvbmcpXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gZmlyc3Q7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBMb25nIGZvcm06IFtsb25nRmxhZygxYml0KSwgbGVuZ3RoTGVuZ3RoKDdiaXQpLCBsZW5ndGggKEJFKV1cbiAgICAgICAgICAgICAgICBjb25zdCBsZW5MZW4gPSBmaXJzdCAmIDEyNztcbiAgICAgICAgICAgICAgICBpZiAoIWxlbkxlbilcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEUoJ3Rsdi5kZWNvZGUobG9uZyk6IGluZGVmaW5pdGUgbGVuZ3RoIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAobGVuTGVuID4gNClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEUoJ3Rsdi5kZWNvZGUobG9uZyk6IGJ5dGUgbGVuZ3RoIGlzIHRvbyBiaWcnKTsgLy8gdGhpcyB3aWxsIG92ZXJmbG93IHUzMiBpbiBqc1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aEJ5dGVzID0gZGF0YS5zdWJhcnJheShwb3MsIHBvcyArIGxlbkxlbik7XG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aEJ5dGVzLmxlbmd0aCAhPT0gbGVuTGVuKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRSgndGx2LmRlY29kZTogbGVuZ3RoIGJ5dGVzIG5vdCBjb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgIGlmIChsZW5ndGhCeXRlc1swXSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEUoJ3Rsdi5kZWNvZGUobG9uZyk6IHplcm8gbGVmdG1vc3QgYnl0ZScpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYiBvZiBsZW5ndGhCeXRlcylcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gKGxlbmd0aCA8PCA4KSB8IGI7XG4gICAgICAgICAgICAgICAgcG9zICs9IGxlbkxlbjtcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoIDwgMTI4KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRSgndGx2LmRlY29kZShsb25nKTogbm90IG1pbmltYWwgZW5jb2RpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHYgPSBkYXRhLnN1YmFycmF5KHBvcywgcG9zICsgbGVuZ3RoKTtcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCAhPT0gbGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFKCd0bHYuZGVjb2RlOiB3cm9uZyB2YWx1ZSBsZW5ndGgnKTtcbiAgICAgICAgICAgIHJldHVybiB7IHYsIGw6IGRhdGEuc3ViYXJyYXkocG9zICsgbGVuZ3RoKSB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgLy8gaHR0cHM6Ly9jcnlwdG8uc3RhY2tleGNoYW5nZS5jb20vYS81NzczNCBMZWZ0bW9zdCBiaXQgb2YgZmlyc3QgYnl0ZSBpcyAnbmVnYXRpdmUnIGZsYWcsXG4gICAgLy8gc2luY2Ugd2UgYWx3YXlzIHVzZSBwb3NpdGl2ZSBpbnRlZ2VycyBoZXJlLiBJdCBtdXN0IGFsd2F5cyBiZSBlbXB0eTpcbiAgICAvLyAtIGFkZCB6ZXJvIGJ5dGUgaWYgZXhpc3RzXG4gICAgLy8gLSBpZiBuZXh0IGJ5dGUgZG9lc24ndCBoYXZlIGEgZmxhZywgbGVhZGluZyB6ZXJvIGlzIG5vdCBhbGxvd2VkIChtaW5pbWFsIGVuY29kaW5nKVxuICAgIF9pbnQ6IHtcbiAgICAgICAgZW5jb2RlKG51bSkge1xuICAgICAgICAgICAgY29uc3QgeyBFcnI6IEUgfSA9IERFUjtcbiAgICAgICAgICAgIGlmIChudW0gPCBfMG4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEUoJ2ludGVnZXI6IG5lZ2F0aXZlIGludGVnZXJzIGFyZSBub3QgYWxsb3dlZCcpO1xuICAgICAgICAgICAgbGV0IGhleCA9IHV0Lm51bWJlclRvSGV4VW5wYWRkZWQobnVtKTtcbiAgICAgICAgICAgIC8vIFBhZCB3aXRoIHplcm8gYnl0ZSBpZiBuZWdhdGl2ZSBmbGFnIGlzIHByZXNlbnRcbiAgICAgICAgICAgIGlmIChOdW1iZXIucGFyc2VJbnQoaGV4WzBdLCAxNikgJiAwYjEwMDApXG4gICAgICAgICAgICAgICAgaGV4ID0gJzAwJyArIGhleDtcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoICYgMSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRSgndW5leHBlY3RlZCBhc3NlcnRpb24nKTtcbiAgICAgICAgICAgIHJldHVybiBoZXg7XG4gICAgICAgIH0sXG4gICAgICAgIGRlY29kZShkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB7IEVycjogRSB9ID0gREVSO1xuICAgICAgICAgICAgaWYgKGRhdGFbMF0gJiAxMjgpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEUoJ0ludmFsaWQgc2lnbmF0dXJlIGludGVnZXI6IG5lZ2F0aXZlJyk7XG4gICAgICAgICAgICBpZiAoZGF0YVswXSA9PT0gMHgwMCAmJiAhKGRhdGFbMV0gJiAxMjgpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFKCdJbnZhbGlkIHNpZ25hdHVyZSBpbnRlZ2VyOiB1bm5lY2Vzc2FyeSBsZWFkaW5nIHplcm8nKTtcbiAgICAgICAgICAgIHJldHVybiBiMm4oZGF0YSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b1NpZyhoZXgpIHtcbiAgICAgICAgLy8gcGFyc2UgREVSIHNpZ25hdHVyZVxuICAgICAgICBjb25zdCB7IEVycjogRSwgX2ludDogaW50LCBfdGx2OiB0bHYgfSA9IERFUjtcbiAgICAgICAgY29uc3QgZGF0YSA9IHR5cGVvZiBoZXggPT09ICdzdHJpbmcnID8gaDJiKGhleCkgOiBoZXg7XG4gICAgICAgIHV0LmFieXRlcyhkYXRhKTtcbiAgICAgICAgY29uc3QgeyB2OiBzZXFCeXRlcywgbDogc2VxTGVmdEJ5dGVzIH0gPSB0bHYuZGVjb2RlKDB4MzAsIGRhdGEpO1xuICAgICAgICBpZiAoc2VxTGVmdEJ5dGVzLmxlbmd0aClcbiAgICAgICAgICAgIHRocm93IG5ldyBFKCdJbnZhbGlkIHNpZ25hdHVyZTogbGVmdCBieXRlcyBhZnRlciBwYXJzaW5nJyk7XG4gICAgICAgIGNvbnN0IHsgdjogckJ5dGVzLCBsOiByTGVmdEJ5dGVzIH0gPSB0bHYuZGVjb2RlKDB4MDIsIHNlcUJ5dGVzKTtcbiAgICAgICAgY29uc3QgeyB2OiBzQnl0ZXMsIGw6IHNMZWZ0Qnl0ZXMgfSA9IHRsdi5kZWNvZGUoMHgwMiwgckxlZnRCeXRlcyk7XG4gICAgICAgIGlmIChzTGVmdEJ5dGVzLmxlbmd0aClcbiAgICAgICAgICAgIHRocm93IG5ldyBFKCdJbnZhbGlkIHNpZ25hdHVyZTogbGVmdCBieXRlcyBhZnRlciBwYXJzaW5nJyk7XG4gICAgICAgIHJldHVybiB7IHI6IGludC5kZWNvZGUockJ5dGVzKSwgczogaW50LmRlY29kZShzQnl0ZXMpIH07XG4gICAgfSxcbiAgICBoZXhGcm9tU2lnKHNpZykge1xuICAgICAgICBjb25zdCB7IF90bHY6IHRsdiwgX2ludDogaW50IH0gPSBERVI7XG4gICAgICAgIGNvbnN0IHNlcSA9IGAke3Rsdi5lbmNvZGUoMHgwMiwgaW50LmVuY29kZShzaWcucikpfSR7dGx2LmVuY29kZSgweDAyLCBpbnQuZW5jb2RlKHNpZy5zKSl9YDtcbiAgICAgICAgcmV0dXJuIHRsdi5lbmNvZGUoMHgzMCwgc2VxKTtcbiAgICB9LFxufTtcbi8vIEJlIGZyaWVuZGx5IHRvIGJhZCBFQ01BU2NyaXB0IHBhcnNlcnMgYnkgbm90IHVzaW5nIGJpZ2ludCBsaXRlcmFsc1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBfMG4gPSBCaWdJbnQoMCksIF8xbiA9IEJpZ0ludCgxKSwgXzJuID0gQmlnSW50KDIpLCBfM24gPSBCaWdJbnQoMyksIF80biA9IEJpZ0ludCg0KTtcbmV4cG9ydCBmdW5jdGlvbiB3ZWllcnN0cmFzc1BvaW50cyhvcHRzKSB7XG4gICAgY29uc3QgQ1VSVkUgPSB2YWxpZGF0ZVBvaW50T3B0cyhvcHRzKTtcbiAgICBjb25zdCB7IEZwIH0gPSBDVVJWRTsgLy8gQWxsIGN1cnZlcyBoYXMgc2FtZSBmaWVsZCAvIGdyb3VwIGxlbmd0aCBhcyBmb3Igbm93LCBidXQgdGhleSBjYW4gZGlmZmVyXG4gICAgY29uc3QgRm4gPSBtb2QuRmllbGQoQ1VSVkUubiwgQ1VSVkUubkJpdExlbmd0aCk7XG4gICAgY29uc3QgdG9CeXRlcyA9IENVUlZFLnRvQnl0ZXMgfHxcbiAgICAgICAgKChfYywgcG9pbnQsIF9pc0NvbXByZXNzZWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBwb2ludC50b0FmZmluZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHV0LmNvbmNhdEJ5dGVzKFVpbnQ4QXJyYXkuZnJvbShbMHgwNF0pLCBGcC50b0J5dGVzKGEueCksIEZwLnRvQnl0ZXMoYS55KSk7XG4gICAgICAgIH0pO1xuICAgIGNvbnN0IGZyb21CeXRlcyA9IENVUlZFLmZyb21CeXRlcyB8fFxuICAgICAgICAoKGJ5dGVzKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zdCBoZWFkID0gYnl0ZXNbMF07XG4gICAgICAgICAgICBjb25zdCB0YWlsID0gYnl0ZXMuc3ViYXJyYXkoMSk7XG4gICAgICAgICAgICAvLyBpZiAoaGVhZCAhPT0gMHgwNCkgdGhyb3cgbmV3IEVycm9yKCdPbmx5IG5vbi1jb21wcmVzc2VkIGVuY29kaW5nIGlzIHN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgY29uc3QgeCA9IEZwLmZyb21CeXRlcyh0YWlsLnN1YmFycmF5KDAsIEZwLkJZVEVTKSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gRnAuZnJvbUJ5dGVzKHRhaWwuc3ViYXJyYXkoRnAuQllURVMsIDIgKiBGcC5CWVRFUykpO1xuICAgICAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgICAgICB9KTtcbiAgICAvKipcbiAgICAgKiB5wrIgPSB4wrMgKyBheCArIGI6IFNob3J0IHdlaWVyc3RyYXNzIGN1cnZlIGZvcm11bGFcbiAgICAgKiBAcmV0dXJucyB5wrJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB3ZWllcnN0cmFzc0VxdWF0aW9uKHgpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiIH0gPSBDVVJWRTtcbiAgICAgICAgY29uc3QgeDIgPSBGcC5zcXIoeCk7IC8vIHggKiB4XG4gICAgICAgIGNvbnN0IHgzID0gRnAubXVsKHgyLCB4KTsgLy8geDIgKiB4XG4gICAgICAgIHJldHVybiBGcC5hZGQoRnAuYWRkKHgzLCBGcC5tdWwoeCwgYSkpLCBiKTsgLy8geDMgKyBhICogeCArIGJcbiAgICB9XG4gICAgLy8gVmFsaWRhdGUgd2hldGhlciB0aGUgcGFzc2VkIGN1cnZlIHBhcmFtcyBhcmUgdmFsaWQuXG4gICAgLy8gV2UgY2hlY2sgaWYgY3VydmUgZXF1YXRpb24gd29ya3MgZm9yIGdlbmVyYXRvciBwb2ludC5cbiAgICAvLyBgYXNzZXJ0VmFsaWRpdHkoKWAgd29uJ3Qgd29yazogYGlzVG9yc2lvbkZyZWUoKWAgaXMgbm90IGF2YWlsYWJsZSBhdCB0aGlzIHBvaW50IGluIGJsczEyLTM4MS5cbiAgICAvLyBQcm9qZWN0aXZlUG9pbnQgY2xhc3MgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkIHlldC5cbiAgICBpZiAoIUZwLmVxbChGcC5zcXIoQ1VSVkUuR3kpLCB3ZWllcnN0cmFzc0VxdWF0aW9uKENVUlZFLkd4KSkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYmFkIGdlbmVyYXRvciBwb2ludDogZXF1YXRpb24gbGVmdCAhPSByaWdodCcpO1xuICAgIC8vIFZhbGlkIGdyb3VwIGVsZW1lbnRzIHJlc2lkZSBpbiByYW5nZSAxLi5uLTFcbiAgICBmdW5jdGlvbiBpc1dpdGhpbkN1cnZlT3JkZXIobnVtKSB7XG4gICAgICAgIHJldHVybiB1dC5pblJhbmdlKG51bSwgXzFuLCBDVVJWRS5uKTtcbiAgICB9XG4gICAgLy8gVmFsaWRhdGVzIGlmIHByaXYga2V5IGlzIHZhbGlkIGFuZCBjb252ZXJ0cyBpdCB0byBiaWdpbnQuXG4gICAgLy8gU3VwcG9ydHMgb3B0aW9ucyBhbGxvd2VkUHJpdmF0ZUtleUxlbmd0aHMgYW5kIHdyYXBQcml2YXRlS2V5LlxuICAgIGZ1bmN0aW9uIG5vcm1Qcml2YXRlS2V5VG9TY2FsYXIoa2V5KSB7XG4gICAgICAgIGNvbnN0IHsgYWxsb3dlZFByaXZhdGVLZXlMZW5ndGhzOiBsZW5ndGhzLCBuQnl0ZUxlbmd0aCwgd3JhcFByaXZhdGVLZXksIG46IE4gfSA9IENVUlZFO1xuICAgICAgICBpZiAobGVuZ3RocyAmJiB0eXBlb2Yga2V5ICE9PSAnYmlnaW50Jykge1xuICAgICAgICAgICAgaWYgKHV0LmlzQnl0ZXMoa2V5KSlcbiAgICAgICAgICAgICAgICBrZXkgPSB1dC5ieXRlc1RvSGV4KGtleSk7XG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgdG8gaGV4IHN0cmluZywgcGFkLiBFLmcuIFA1MjEgd291bGQgbm9ybSAxMzAtMTMyIGNoYXIgaGV4IHRvIDEzMi1jaGFyIGJ5dGVzXG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgfHwgIWxlbmd0aHMuaW5jbHVkZXMoa2V5Lmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGtleScpO1xuICAgICAgICAgICAga2V5ID0ga2V5LnBhZFN0YXJ0KG5CeXRlTGVuZ3RoICogMiwgJzAnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbnVtO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbnVtID1cbiAgICAgICAgICAgICAgICB0eXBlb2Yga2V5ID09PSAnYmlnaW50J1xuICAgICAgICAgICAgICAgICAgICA/IGtleVxuICAgICAgICAgICAgICAgICAgICA6IHV0LmJ5dGVzVG9OdW1iZXJCRShlbnN1cmVCeXRlcygncHJpdmF0ZSBrZXknLCBrZXksIG5CeXRlTGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHByaXZhdGUga2V5IG11c3QgYmUgJHtuQnl0ZUxlbmd0aH0gYnl0ZXMsIGhleCBvciBiaWdpbnQsIG5vdCAke3R5cGVvZiBrZXl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdyYXBQcml2YXRlS2V5KVxuICAgICAgICAgICAgbnVtID0gbW9kLm1vZChudW0sIE4pOyAvLyBkaXNhYmxlZCBieSBkZWZhdWx0LCBlbmFibGVkIGZvciBCTFNcbiAgICAgICAgdXQuYUluUmFuZ2UoJ3ByaXZhdGUga2V5JywgbnVtLCBfMW4sIE4pOyAvLyBudW0gaW4gcmFuZ2UgWzEuLk4tMV1cbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXNzZXJ0UHJqUG9pbnQob3RoZXIpIHtcbiAgICAgICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBQb2ludCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2plY3RpdmVQb2ludCBleHBlY3RlZCcpO1xuICAgIH1cbiAgICAvLyBNZW1vaXplZCB0b0FmZmluZSAvIHZhbGlkaXR5IGNoZWNrLiBUaGV5IGFyZSBoZWF2eS4gUG9pbnRzIGFyZSBpbW11dGFibGUuXG4gICAgLy8gQ29udmVydHMgUHJvamVjdGl2ZSBwb2ludCB0byBhZmZpbmUgKHgsIHkpIGNvb3JkaW5hdGVzLlxuICAgIC8vIENhbiBhY2NlcHQgcHJlY29tcHV0ZWQgWl4tMSAtIGZvciBleGFtcGxlLCBmcm9tIGludmVydEJhdGNoLlxuICAgIC8vICh4LCB5LCB6KSDiiIsgKHg9eC96LCB5PXkveilcbiAgICBjb25zdCB0b0FmZmluZU1lbW8gPSBtZW1vaXplZCgocCwgaXopID0+IHtcbiAgICAgICAgY29uc3QgeyBweDogeCwgcHk6IHksIHB6OiB6IH0gPSBwO1xuICAgICAgICAvLyBGYXN0LXBhdGggZm9yIG5vcm1hbGl6ZWQgcG9pbnRzXG4gICAgICAgIGlmIChGcC5lcWwoeiwgRnAuT05FKSlcbiAgICAgICAgICAgIHJldHVybiB7IHgsIHkgfTtcbiAgICAgICAgY29uc3QgaXMwID0gcC5pczAoKTtcbiAgICAgICAgLy8gSWYgaW52WiB3YXMgMCwgd2UgcmV0dXJuIHplcm8gcG9pbnQuIEhvd2V2ZXIgd2Ugc3RpbGwgd2FudCB0byBleGVjdXRlXG4gICAgICAgIC8vIGFsbCBvcGVyYXRpb25zLCBzbyB3ZSByZXBsYWNlIGludlogd2l0aCBhIHJhbmRvbSBudW1iZXIsIDEuXG4gICAgICAgIGlmIChpeiA9PSBudWxsKVxuICAgICAgICAgICAgaXogPSBpczAgPyBGcC5PTkUgOiBGcC5pbnYoeik7XG4gICAgICAgIGNvbnN0IGF4ID0gRnAubXVsKHgsIGl6KTtcbiAgICAgICAgY29uc3QgYXkgPSBGcC5tdWwoeSwgaXopO1xuICAgICAgICBjb25zdCB6eiA9IEZwLm11bCh6LCBpeik7XG4gICAgICAgIGlmIChpczApXG4gICAgICAgICAgICByZXR1cm4geyB4OiBGcC5aRVJPLCB5OiBGcC5aRVJPIH07XG4gICAgICAgIGlmICghRnAuZXFsKHp6LCBGcC5PTkUpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZaIHdhcyBpbnZhbGlkJyk7XG4gICAgICAgIHJldHVybiB7IHg6IGF4LCB5OiBheSB9O1xuICAgIH0pO1xuICAgIC8vIE5PVEU6IG9uIGV4Y2VwdGlvbiB0aGlzIHdpbGwgY3Jhc2ggJ2NhY2hlZCcgYW5kIG5vIHZhbHVlIHdpbGwgYmUgc2V0LlxuICAgIC8vIE90aGVyd2lzZSB0cnVlIHdpbGwgYmUgcmV0dXJuXG4gICAgY29uc3QgYXNzZXJ0VmFsaWRNZW1vID0gbWVtb2l6ZWQoKHApID0+IHtcbiAgICAgICAgaWYgKHAuaXMwKCkpIHtcbiAgICAgICAgICAgIC8vICgwLCAxLCAwKSBha2EgWkVSTyBpcyBpbnZhbGlkIGluIG1vc3QgY29udGV4dHMuXG4gICAgICAgICAgICAvLyBJbiBCTFMsIFpFUk8gY2FuIGJlIHNlcmlhbGl6ZWQsIHNvIHdlIGFsbG93IGl0LlxuICAgICAgICAgICAgLy8gKDAsIDAsIDApIGlzIHdyb25nIHJlcHJlc2VudGF0aW9uIG9mIFpFUk8gYW5kIGlzIGFsd2F5cyBpbnZhbGlkLlxuICAgICAgICAgICAgaWYgKENVUlZFLmFsbG93SW5maW5pdHlQb2ludCAmJiAhRnAuaXMwKHAucHkpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYmFkIHBvaW50OiBaRVJPJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU29tZSAzcmQtcGFydHkgdGVzdCB2ZWN0b3JzIHJlcXVpcmUgZGlmZmVyZW50IHdvcmRpbmcgYmV0d2VlbiBoZXJlICYgYGZyb21Db21wcmVzc2VkSGV4YFxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHAudG9BZmZpbmUoKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgeCwgeSBhcmUgdmFsaWQgZmllbGQgZWxlbWVudHNcbiAgICAgICAgaWYgKCFGcC5pc1ZhbGlkKHgpIHx8ICFGcC5pc1ZhbGlkKHkpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgcG9pbnQ6IHggb3IgeSBub3QgRkUnKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IEZwLnNxcih5KTsgLy8gecKyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gd2VpZXJzdHJhc3NFcXVhdGlvbih4KTsgLy8geMKzICsgYXggKyBiXG4gICAgICAgIGlmICghRnAuZXFsKGxlZnQsIHJpZ2h0KSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYmFkIHBvaW50OiBlcXVhdGlvbiBsZWZ0ICE9IHJpZ2h0Jyk7XG4gICAgICAgIGlmICghcC5pc1RvcnNpb25GcmVlKCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBwb2ludDogbm90IGluIHByaW1lLW9yZGVyIHN1Ymdyb3VwJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFByb2plY3RpdmUgUG9pbnQgd29ya3MgaW4gM2QgLyBwcm9qZWN0aXZlIChob21vZ2VuZW91cykgY29vcmRpbmF0ZXM6ICh4LCB5LCB6KSDiiIsgKHg9eC96LCB5PXkveilcbiAgICAgKiBEZWZhdWx0IFBvaW50IHdvcmtzIGluIDJkIC8gYWZmaW5lIGNvb3JkaW5hdGVzOiAoeCwgeSlcbiAgICAgKiBXZSdyZSBkb2luZyBjYWxjdWxhdGlvbnMgaW4gcHJvamVjdGl2ZSwgYmVjYXVzZSBpdHMgb3BlcmF0aW9ucyBkb24ndCByZXF1aXJlIGNvc3RseSBpbnZlcnNpb24uXG4gICAgICovXG4gICAgY2xhc3MgUG9pbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcihweCwgcHksIHB6KSB7XG4gICAgICAgICAgICB0aGlzLnB4ID0gcHg7XG4gICAgICAgICAgICB0aGlzLnB5ID0gcHk7XG4gICAgICAgICAgICB0aGlzLnB6ID0gcHo7XG4gICAgICAgICAgICBpZiAocHggPT0gbnVsbCB8fCAhRnAuaXNWYWxpZChweCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd4IHJlcXVpcmVkJyk7XG4gICAgICAgICAgICBpZiAocHkgPT0gbnVsbCB8fCAhRnAuaXNWYWxpZChweSkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd5IHJlcXVpcmVkJyk7XG4gICAgICAgICAgICBpZiAocHogPT0gbnVsbCB8fCAhRnAuaXNWYWxpZChweikpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd6IHJlcXVpcmVkJyk7XG4gICAgICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERvZXMgbm90IHZhbGlkYXRlIGlmIHRoZSBwb2ludCBpcyBvbi1jdXJ2ZS5cbiAgICAgICAgLy8gVXNlIGZyb21IZXggaW5zdGVhZCwgb3IgY2FsbCBhc3NlcnRWYWxpZGl0eSgpIGxhdGVyLlxuICAgICAgICBzdGF0aWMgZnJvbUFmZmluZShwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHAgfHwge307XG4gICAgICAgICAgICBpZiAoIXAgfHwgIUZwLmlzVmFsaWQoeCkgfHwgIUZwLmlzVmFsaWQoeSkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGFmZmluZSBwb2ludCcpO1xuICAgICAgICAgICAgaWYgKHAgaW5zdGFuY2VvZiBQb2ludClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2plY3RpdmUgcG9pbnQgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IGlzMCA9IChpKSA9PiBGcC5lcWwoaSwgRnAuWkVSTyk7XG4gICAgICAgICAgICAvLyBmcm9tQWZmaW5lKHg6MCwgeTowKSB3b3VsZCBwcm9kdWNlICh4OjAsIHk6MCwgejoxKSwgYnV0IHdlIG5lZWQgKHg6MCwgeToxLCB6OjApXG4gICAgICAgICAgICBpZiAoaXMwKHgpICYmIGlzMCh5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gUG9pbnQuWkVSTztcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSwgRnAuT05FKTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgeCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQWZmaW5lKCkueDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgeSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQWZmaW5lKCkueTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVGFrZXMgYSBidW5jaCBvZiBQcm9qZWN0aXZlIFBvaW50cyBidXQgZXhlY3V0ZXMgb25seSBvbmVcbiAgICAgICAgICogaW52ZXJzaW9uIG9uIGFsbCBvZiB0aGVtLiBJbnZlcnNpb24gaXMgdmVyeSBzbG93IG9wZXJhdGlvbixcbiAgICAgICAgICogc28gdGhpcyBpbXByb3ZlcyBwZXJmb3JtYW5jZSBtYXNzaXZlbHkuXG4gICAgICAgICAqIE9wdGltaXphdGlvbjogY29udmVydHMgYSBsaXN0IG9mIHByb2plY3RpdmUgcG9pbnRzIHRvIGEgbGlzdCBvZiBpZGVudGljYWwgcG9pbnRzIHdpdGggWj0xLlxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIG5vcm1hbGl6ZVoocG9pbnRzKSB7XG4gICAgICAgICAgICBjb25zdCB0b0ludiA9IEZwLmludmVydEJhdGNoKHBvaW50cy5tYXAoKHApID0+IHAucHopKTtcbiAgICAgICAgICAgIHJldHVybiBwb2ludHMubWFwKChwLCBpKSA9PiBwLnRvQWZmaW5lKHRvSW52W2ldKSkubWFwKFBvaW50LmZyb21BZmZpbmUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0cyBoYXNoIHN0cmluZyBvciBVaW50OEFycmF5IHRvIFBvaW50LlxuICAgICAgICAgKiBAcGFyYW0gaGV4IHNob3J0L2xvbmcgRUNEU0EgaGV4XG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZnJvbUhleChoZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IFAgPSBQb2ludC5mcm9tQWZmaW5lKGZyb21CeXRlcyhlbnN1cmVCeXRlcygncG9pbnRIZXgnLCBoZXgpKSk7XG4gICAgICAgICAgICBQLmFzc2VydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICByZXR1cm4gUDtcbiAgICAgICAgfVxuICAgICAgICAvLyBNdWx0aXBsaWVzIGdlbmVyYXRvciBwb2ludCBieSBwcml2YXRlS2V5LlxuICAgICAgICBzdGF0aWMgZnJvbVByaXZhdGVLZXkocHJpdmF0ZUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIFBvaW50LkJBU0UubXVsdGlwbHkobm9ybVByaXZhdGVLZXlUb1NjYWxhcihwcml2YXRlS2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTXVsdGlzY2FsYXIgTXVsdGlwbGljYXRpb25cbiAgICAgICAgc3RhdGljIG1zbShwb2ludHMsIHNjYWxhcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBwaXBwZW5nZXIoUG9pbnQsIEZuLCBwb2ludHMsIHNjYWxhcnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFwiUHJpdmF0ZSBtZXRob2RcIiwgZG9uJ3QgdXNlIGl0IGRpcmVjdGx5XG4gICAgICAgIF9zZXRXaW5kb3dTaXplKHdpbmRvd1NpemUpIHtcbiAgICAgICAgICAgIHduYWYuc2V0V2luZG93U2l6ZSh0aGlzLCB3aW5kb3dTaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBIHBvaW50IG9uIGN1cnZlIGlzIHZhbGlkIGlmIGl0IGNvbmZvcm1zIHRvIGVxdWF0aW9uLlxuICAgICAgICBhc3NlcnRWYWxpZGl0eSgpIHtcbiAgICAgICAgICAgIGFzc2VydFZhbGlkTWVtbyh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBoYXNFdmVuWSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgeSB9ID0gdGhpcy50b0FmZmluZSgpO1xuICAgICAgICAgICAgaWYgKEZwLmlzT2RkKVxuICAgICAgICAgICAgICAgIHJldHVybiAhRnAuaXNPZGQoeSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaWVsZCBkb2Vzbid0IHN1cHBvcnQgaXNPZGRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXBhcmUgb25lIHBvaW50IHRvIGFub3RoZXIuXG4gICAgICAgICAqL1xuICAgICAgICBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgICAgIGFzc2VydFByalBvaW50KG90aGVyKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcHg6IFgxLCBweTogWTEsIHB6OiBaMSB9ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IHsgcHg6IFgyLCBweTogWTIsIHB6OiBaMiB9ID0gb3RoZXI7XG4gICAgICAgICAgICBjb25zdCBVMSA9IEZwLmVxbChGcC5tdWwoWDEsIFoyKSwgRnAubXVsKFgyLCBaMSkpO1xuICAgICAgICAgICAgY29uc3QgVTIgPSBGcC5lcWwoRnAubXVsKFkxLCBaMiksIEZwLm11bChZMiwgWjEpKTtcbiAgICAgICAgICAgIHJldHVybiBVMSAmJiBVMjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogRmxpcHMgcG9pbnQgdG8gb25lIGNvcnJlc3BvbmRpbmcgdG8gKHgsIC15KSBpbiBBZmZpbmUgY29vcmRpbmF0ZXMuXG4gICAgICAgICAqL1xuICAgICAgICBuZWdhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucHgsIEZwLm5lZyh0aGlzLnB5KSwgdGhpcy5weik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVuZXMtQ29zdGVsbG8tQmF0aW5hIGV4Y2VwdGlvbi1mcmVlIGRvdWJsaW5nIGZvcm11bGEuXG4gICAgICAgIC8vIFRoZXJlIGlzIDMwJSBmYXN0ZXIgSmFjb2JpYW4gZm9ybXVsYSwgYnV0IGl0IGlzIG5vdCBjb21wbGV0ZS5cbiAgICAgICAgLy8gaHR0cHM6Ly9lcHJpbnQuaWFjci5vcmcvMjAxNS8xMDYwLCBhbGdvcml0aG0gM1xuICAgICAgICAvLyBDb3N0OiA4TSArIDNTICsgMyphICsgMipiMyArIDE1YWRkLlxuICAgICAgICBkb3VibGUoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGEsIGIgfSA9IENVUlZFO1xuICAgICAgICAgICAgY29uc3QgYjMgPSBGcC5tdWwoYiwgXzNuKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcHg6IFgxLCBweTogWTEsIHB6OiBaMSB9ID0gdGhpcztcbiAgICAgICAgICAgIGxldCBYMyA9IEZwLlpFUk8sIFkzID0gRnAuWkVSTywgWjMgPSBGcC5aRVJPOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgIGxldCB0MCA9IEZwLm11bChYMSwgWDEpOyAvLyBzdGVwIDFcbiAgICAgICAgICAgIGxldCB0MSA9IEZwLm11bChZMSwgWTEpO1xuICAgICAgICAgICAgbGV0IHQyID0gRnAubXVsKFoxLCBaMSk7XG4gICAgICAgICAgICBsZXQgdDMgPSBGcC5tdWwoWDEsIFkxKTtcbiAgICAgICAgICAgIHQzID0gRnAuYWRkKHQzLCB0Myk7IC8vIHN0ZXAgNVxuICAgICAgICAgICAgWjMgPSBGcC5tdWwoWDEsIFoxKTtcbiAgICAgICAgICAgIFozID0gRnAuYWRkKFozLCBaMyk7XG4gICAgICAgICAgICBYMyA9IEZwLm11bChhLCBaMyk7XG4gICAgICAgICAgICBZMyA9IEZwLm11bChiMywgdDIpO1xuICAgICAgICAgICAgWTMgPSBGcC5hZGQoWDMsIFkzKTsgLy8gc3RlcCAxMFxuICAgICAgICAgICAgWDMgPSBGcC5zdWIodDEsIFkzKTtcbiAgICAgICAgICAgIFkzID0gRnAuYWRkKHQxLCBZMyk7XG4gICAgICAgICAgICBZMyA9IEZwLm11bChYMywgWTMpO1xuICAgICAgICAgICAgWDMgPSBGcC5tdWwodDMsIFgzKTtcbiAgICAgICAgICAgIFozID0gRnAubXVsKGIzLCBaMyk7IC8vIHN0ZXAgMTVcbiAgICAgICAgICAgIHQyID0gRnAubXVsKGEsIHQyKTtcbiAgICAgICAgICAgIHQzID0gRnAuc3ViKHQwLCB0Mik7XG4gICAgICAgICAgICB0MyA9IEZwLm11bChhLCB0Myk7XG4gICAgICAgICAgICB0MyA9IEZwLmFkZCh0MywgWjMpO1xuICAgICAgICAgICAgWjMgPSBGcC5hZGQodDAsIHQwKTsgLy8gc3RlcCAyMFxuICAgICAgICAgICAgdDAgPSBGcC5hZGQoWjMsIHQwKTtcbiAgICAgICAgICAgIHQwID0gRnAuYWRkKHQwLCB0Mik7XG4gICAgICAgICAgICB0MCA9IEZwLm11bCh0MCwgdDMpO1xuICAgICAgICAgICAgWTMgPSBGcC5hZGQoWTMsIHQwKTtcbiAgICAgICAgICAgIHQyID0gRnAubXVsKFkxLCBaMSk7IC8vIHN0ZXAgMjVcbiAgICAgICAgICAgIHQyID0gRnAuYWRkKHQyLCB0Mik7XG4gICAgICAgICAgICB0MCA9IEZwLm11bCh0MiwgdDMpO1xuICAgICAgICAgICAgWDMgPSBGcC5zdWIoWDMsIHQwKTtcbiAgICAgICAgICAgIFozID0gRnAubXVsKHQyLCB0MSk7XG4gICAgICAgICAgICBaMyA9IEZwLmFkZChaMywgWjMpOyAvLyBzdGVwIDMwXG4gICAgICAgICAgICBaMyA9IEZwLmFkZChaMywgWjMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludChYMywgWTMsIFozKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW5lcy1Db3N0ZWxsby1CYXRpbmEgZXhjZXB0aW9uLWZyZWUgYWRkaXRpb24gZm9ybXVsYS5cbiAgICAgICAgLy8gVGhlcmUgaXMgMzAlIGZhc3RlciBKYWNvYmlhbiBmb3JtdWxhLCBidXQgaXQgaXMgbm90IGNvbXBsZXRlLlxuICAgICAgICAvLyBodHRwczovL2VwcmludC5pYWNyLm9yZy8yMDE1LzEwNjAsIGFsZ29yaXRobSAxXG4gICAgICAgIC8vIENvc3Q6IDEyTSArIDBTICsgMyphICsgMypiMyArIDIzYWRkLlxuICAgICAgICBhZGQob3RoZXIpIHtcbiAgICAgICAgICAgIGFzc2VydFByalBvaW50KG90aGVyKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcHg6IFgxLCBweTogWTEsIHB6OiBaMSB9ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IHsgcHg6IFgyLCBweTogWTIsIHB6OiBaMiB9ID0gb3RoZXI7XG4gICAgICAgICAgICBsZXQgWDMgPSBGcC5aRVJPLCBZMyA9IEZwLlpFUk8sIFozID0gRnAuWkVSTzsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICBjb25zdCBhID0gQ1VSVkUuYTtcbiAgICAgICAgICAgIGNvbnN0IGIzID0gRnAubXVsKENVUlZFLmIsIF8zbik7XG4gICAgICAgICAgICBsZXQgdDAgPSBGcC5tdWwoWDEsIFgyKTsgLy8gc3RlcCAxXG4gICAgICAgICAgICBsZXQgdDEgPSBGcC5tdWwoWTEsIFkyKTtcbiAgICAgICAgICAgIGxldCB0MiA9IEZwLm11bChaMSwgWjIpO1xuICAgICAgICAgICAgbGV0IHQzID0gRnAuYWRkKFgxLCBZMSk7XG4gICAgICAgICAgICBsZXQgdDQgPSBGcC5hZGQoWDIsIFkyKTsgLy8gc3RlcCA1XG4gICAgICAgICAgICB0MyA9IEZwLm11bCh0MywgdDQpO1xuICAgICAgICAgICAgdDQgPSBGcC5hZGQodDAsIHQxKTtcbiAgICAgICAgICAgIHQzID0gRnAuc3ViKHQzLCB0NCk7XG4gICAgICAgICAgICB0NCA9IEZwLmFkZChYMSwgWjEpO1xuICAgICAgICAgICAgbGV0IHQ1ID0gRnAuYWRkKFgyLCBaMik7IC8vIHN0ZXAgMTBcbiAgICAgICAgICAgIHQ0ID0gRnAubXVsKHQ0LCB0NSk7XG4gICAgICAgICAgICB0NSA9IEZwLmFkZCh0MCwgdDIpO1xuICAgICAgICAgICAgdDQgPSBGcC5zdWIodDQsIHQ1KTtcbiAgICAgICAgICAgIHQ1ID0gRnAuYWRkKFkxLCBaMSk7XG4gICAgICAgICAgICBYMyA9IEZwLmFkZChZMiwgWjIpOyAvLyBzdGVwIDE1XG4gICAgICAgICAgICB0NSA9IEZwLm11bCh0NSwgWDMpO1xuICAgICAgICAgICAgWDMgPSBGcC5hZGQodDEsIHQyKTtcbiAgICAgICAgICAgIHQ1ID0gRnAuc3ViKHQ1LCBYMyk7XG4gICAgICAgICAgICBaMyA9IEZwLm11bChhLCB0NCk7XG4gICAgICAgICAgICBYMyA9IEZwLm11bChiMywgdDIpOyAvLyBzdGVwIDIwXG4gICAgICAgICAgICBaMyA9IEZwLmFkZChYMywgWjMpO1xuICAgICAgICAgICAgWDMgPSBGcC5zdWIodDEsIFozKTtcbiAgICAgICAgICAgIFozID0gRnAuYWRkKHQxLCBaMyk7XG4gICAgICAgICAgICBZMyA9IEZwLm11bChYMywgWjMpO1xuICAgICAgICAgICAgdDEgPSBGcC5hZGQodDAsIHQwKTsgLy8gc3RlcCAyNVxuICAgICAgICAgICAgdDEgPSBGcC5hZGQodDEsIHQwKTtcbiAgICAgICAgICAgIHQyID0gRnAubXVsKGEsIHQyKTtcbiAgICAgICAgICAgIHQ0ID0gRnAubXVsKGIzLCB0NCk7XG4gICAgICAgICAgICB0MSA9IEZwLmFkZCh0MSwgdDIpO1xuICAgICAgICAgICAgdDIgPSBGcC5zdWIodDAsIHQyKTsgLy8gc3RlcCAzMFxuICAgICAgICAgICAgdDIgPSBGcC5tdWwoYSwgdDIpO1xuICAgICAgICAgICAgdDQgPSBGcC5hZGQodDQsIHQyKTtcbiAgICAgICAgICAgIHQwID0gRnAubXVsKHQxLCB0NCk7XG4gICAgICAgICAgICBZMyA9IEZwLmFkZChZMywgdDApO1xuICAgICAgICAgICAgdDAgPSBGcC5tdWwodDUsIHQ0KTsgLy8gc3RlcCAzNVxuICAgICAgICAgICAgWDMgPSBGcC5tdWwodDMsIFgzKTtcbiAgICAgICAgICAgIFgzID0gRnAuc3ViKFgzLCB0MCk7XG4gICAgICAgICAgICB0MCA9IEZwLm11bCh0MywgdDEpO1xuICAgICAgICAgICAgWjMgPSBGcC5tdWwodDUsIFozKTtcbiAgICAgICAgICAgIFozID0gRnAuYWRkKFozLCB0MCk7IC8vIHN0ZXAgNDBcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoWDMsIFkzLCBaMyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VidHJhY3Qob3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChvdGhlci5uZWdhdGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaXMwKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXF1YWxzKFBvaW50LlpFUk8pO1xuICAgICAgICB9XG4gICAgICAgIHdOQUYobikge1xuICAgICAgICAgICAgcmV0dXJuIHduYWYud05BRkNhY2hlZCh0aGlzLCBuLCBQb2ludC5ub3JtYWxpemVaKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTm9uLWNvbnN0YW50LXRpbWUgbXVsdGlwbGljYXRpb24uIFVzZXMgZG91YmxlLWFuZC1hZGQgYWxnb3JpdGhtLlxuICAgICAgICAgKiBJdCdzIGZhc3RlciwgYnV0IHNob3VsZCBvbmx5IGJlIHVzZWQgd2hlbiB5b3UgZG9uJ3QgY2FyZSBhYm91dFxuICAgICAgICAgKiBhbiBleHBvc2VkIHByaXZhdGUga2V5IGUuZy4gc2lnIHZlcmlmaWNhdGlvbiwgd2hpY2ggd29ya3Mgb3ZlciAqcHVibGljKiBrZXlzLlxuICAgICAgICAgKi9cbiAgICAgICAgbXVsdGlwbHlVbnNhZmUoc2MpIHtcbiAgICAgICAgICAgIHV0LmFJblJhbmdlKCdzY2FsYXInLCBzYywgXzBuLCBDVVJWRS5uKTtcbiAgICAgICAgICAgIGNvbnN0IEkgPSBQb2ludC5aRVJPO1xuICAgICAgICAgICAgaWYgKHNjID09PSBfMG4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIEk7XG4gICAgICAgICAgICBpZiAoc2MgPT09IF8xbilcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IHsgZW5kbyB9ID0gQ1VSVkU7XG4gICAgICAgICAgICBpZiAoIWVuZG8pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHduYWYudW5zYWZlTGFkZGVyKHRoaXMsIHNjKTtcbiAgICAgICAgICAgIC8vIEFwcGx5IGVuZG9tb3JwaGlzbVxuICAgICAgICAgICAgbGV0IHsgazFuZWcsIGsxLCBrMm5lZywgazIgfSA9IGVuZG8uc3BsaXRTY2FsYXIoc2MpO1xuICAgICAgICAgICAgbGV0IGsxcCA9IEk7XG4gICAgICAgICAgICBsZXQgazJwID0gSTtcbiAgICAgICAgICAgIGxldCBkID0gdGhpcztcbiAgICAgICAgICAgIHdoaWxlIChrMSA+IF8wbiB8fCBrMiA+IF8wbikge1xuICAgICAgICAgICAgICAgIGlmIChrMSAmIF8xbilcbiAgICAgICAgICAgICAgICAgICAgazFwID0gazFwLmFkZChkKTtcbiAgICAgICAgICAgICAgICBpZiAoazIgJiBfMW4pXG4gICAgICAgICAgICAgICAgICAgIGsycCA9IGsycC5hZGQoZCk7XG4gICAgICAgICAgICAgICAgZCA9IGQuZG91YmxlKCk7XG4gICAgICAgICAgICAgICAgazEgPj49IF8xbjtcbiAgICAgICAgICAgICAgICBrMiA+Pj0gXzFuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsxbmVnKVxuICAgICAgICAgICAgICAgIGsxcCA9IGsxcC5uZWdhdGUoKTtcbiAgICAgICAgICAgIGlmIChrMm5lZylcbiAgICAgICAgICAgICAgICBrMnAgPSBrMnAubmVnYXRlKCk7XG4gICAgICAgICAgICBrMnAgPSBuZXcgUG9pbnQoRnAubXVsKGsycC5weCwgZW5kby5iZXRhKSwgazJwLnB5LCBrMnAucHopO1xuICAgICAgICAgICAgcmV0dXJuIGsxcC5hZGQoazJwKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RhbnQgdGltZSBtdWx0aXBsaWNhdGlvbi5cbiAgICAgICAgICogVXNlcyB3TkFGIG1ldGhvZC4gV2luZG93ZWQgbWV0aG9kIG1heSBiZSAxMCUgZmFzdGVyLFxuICAgICAgICAgKiBidXQgdGFrZXMgMnggbG9uZ2VyIHRvIGdlbmVyYXRlIGFuZCBjb25zdW1lcyAyeCBtZW1vcnkuXG4gICAgICAgICAqIFVzZXMgcHJlY29tcHV0ZXMgd2hlbiBhdmFpbGFibGUuXG4gICAgICAgICAqIFVzZXMgZW5kb21vcnBoaXNtIGZvciBLb2JsaXR6IGN1cnZlcy5cbiAgICAgICAgICogQHBhcmFtIHNjYWxhciBieSB3aGljaCB0aGUgcG9pbnQgd291bGQgYmUgbXVsdGlwbGllZFxuICAgICAgICAgKiBAcmV0dXJucyBOZXcgcG9pbnRcbiAgICAgICAgICovXG4gICAgICAgIG11bHRpcGx5KHNjYWxhcikge1xuICAgICAgICAgICAgY29uc3QgeyBlbmRvLCBuOiBOIH0gPSBDVVJWRTtcbiAgICAgICAgICAgIHV0LmFJblJhbmdlKCdzY2FsYXInLCBzY2FsYXIsIF8xbiwgTik7XG4gICAgICAgICAgICBsZXQgcG9pbnQsIGZha2U7IC8vIEZha2UgcG9pbnQgaXMgdXNlZCB0byBjb25zdC10aW1lIG11bHRcbiAgICAgICAgICAgIGlmIChlbmRvKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBrMW5lZywgazEsIGsybmVnLCBrMiB9ID0gZW5kby5zcGxpdFNjYWxhcihzY2FsYXIpO1xuICAgICAgICAgICAgICAgIGxldCB7IHA6IGsxcCwgZjogZjFwIH0gPSB0aGlzLndOQUYoazEpO1xuICAgICAgICAgICAgICAgIGxldCB7IHA6IGsycCwgZjogZjJwIH0gPSB0aGlzLndOQUYoazIpO1xuICAgICAgICAgICAgICAgIGsxcCA9IHduYWYuY29uc3RUaW1lTmVnYXRlKGsxbmVnLCBrMXApO1xuICAgICAgICAgICAgICAgIGsycCA9IHduYWYuY29uc3RUaW1lTmVnYXRlKGsybmVnLCBrMnApO1xuICAgICAgICAgICAgICAgIGsycCA9IG5ldyBQb2ludChGcC5tdWwoazJwLnB4LCBlbmRvLmJldGEpLCBrMnAucHksIGsycC5weik7XG4gICAgICAgICAgICAgICAgcG9pbnQgPSBrMXAuYWRkKGsycCk7XG4gICAgICAgICAgICAgICAgZmFrZSA9IGYxcC5hZGQoZjJwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcCwgZiB9ID0gdGhpcy53TkFGKHNjYWxhcik7XG4gICAgICAgICAgICAgICAgcG9pbnQgPSBwO1xuICAgICAgICAgICAgICAgIGZha2UgPSBmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm9ybWFsaXplIGB6YCBmb3IgYm90aCBwb2ludHMsIGJ1dCByZXR1cm4gb25seSByZWFsIG9uZVxuICAgICAgICAgICAgcmV0dXJuIFBvaW50Lm5vcm1hbGl6ZVooW3BvaW50LCBmYWtlXSlbMF07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVmZmljaWVudGx5IGNhbGN1bGF0ZSBgYVAgKyBiUWAuIFVuc2FmZSwgY2FuIGV4cG9zZSBwcml2YXRlIGtleSwgaWYgdXNlZCBpbmNvcnJlY3RseS5cbiAgICAgICAgICogTm90IHVzaW5nIFN0cmF1c3MtU2hhbWlyIHRyaWNrOiBwcmVjb21wdXRhdGlvbiB0YWJsZXMgYXJlIGZhc3Rlci5cbiAgICAgICAgICogVGhlIHRyaWNrIGNvdWxkIGJlIHVzZWZ1bCBpZiBib3RoIFAgYW5kIFEgYXJlIG5vdCBHIChub3QgaW4gb3VyIGNhc2UpLlxuICAgICAgICAgKiBAcmV0dXJucyBub24temVybyBhZmZpbmUgcG9pbnRcbiAgICAgICAgICovXG4gICAgICAgIG11bHRpcGx5QW5kQWRkVW5zYWZlKFEsIGEsIGIpIHtcbiAgICAgICAgICAgIGNvbnN0IEcgPSBQb2ludC5CQVNFOyAvLyBObyBTdHJhdXNzLVNoYW1pciB0cmljazogd2UgaGF2ZSAxMCUgZmFzdGVyIEcgcHJlY29tcHV0ZXNcbiAgICAgICAgICAgIGNvbnN0IG11bCA9IChQLCBhIC8vIFNlbGVjdCBmYXN0ZXIgbXVsdGlwbHkoKSBtZXRob2RcbiAgICAgICAgICAgICkgPT4gKGEgPT09IF8wbiB8fCBhID09PSBfMW4gfHwgIVAuZXF1YWxzKEcpID8gUC5tdWx0aXBseVVuc2FmZShhKSA6IFAubXVsdGlwbHkoYSkpO1xuICAgICAgICAgICAgY29uc3Qgc3VtID0gbXVsKHRoaXMsIGEpLmFkZChtdWwoUSwgYikpO1xuICAgICAgICAgICAgcmV0dXJuIHN1bS5pczAoKSA/IHVuZGVmaW5lZCA6IHN1bTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDb252ZXJ0cyBQcm9qZWN0aXZlIHBvaW50IHRvIGFmZmluZSAoeCwgeSkgY29vcmRpbmF0ZXMuXG4gICAgICAgIC8vIENhbiBhY2NlcHQgcHJlY29tcHV0ZWQgWl4tMSAtIGZvciBleGFtcGxlLCBmcm9tIGludmVydEJhdGNoLlxuICAgICAgICAvLyAoeCwgeSwgeikg4oiLICh4PXgveiwgeT15L3opXG4gICAgICAgIHRvQWZmaW5lKGl6KSB7XG4gICAgICAgICAgICByZXR1cm4gdG9BZmZpbmVNZW1vKHRoaXMsIGl6KTtcbiAgICAgICAgfVxuICAgICAgICBpc1RvcnNpb25GcmVlKCkge1xuICAgICAgICAgICAgY29uc3QgeyBoOiBjb2ZhY3RvciwgaXNUb3JzaW9uRnJlZSB9ID0gQ1VSVkU7XG4gICAgICAgICAgICBpZiAoY29mYWN0b3IgPT09IF8xbilcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gTm8gc3ViZ3JvdXBzLCBhbHdheXMgdG9yc2lvbi1mcmVlXG4gICAgICAgICAgICBpZiAoaXNUb3JzaW9uRnJlZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNUb3JzaW9uRnJlZShQb2ludCwgdGhpcyk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lzVG9yc2lvbkZyZWUoKSBoYXMgbm90IGJlZW4gZGVjbGFyZWQgZm9yIHRoZSBlbGxpcHRpYyBjdXJ2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyQ29mYWN0b3IoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGg6IGNvZmFjdG9yLCBjbGVhckNvZmFjdG9yIH0gPSBDVVJWRTtcbiAgICAgICAgICAgIGlmIChjb2ZhY3RvciA9PT0gXzFuKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzOyAvLyBGYXN0LXBhdGhcbiAgICAgICAgICAgIGlmIChjbGVhckNvZmFjdG9yKVxuICAgICAgICAgICAgICAgIHJldHVybiBjbGVhckNvZmFjdG9yKFBvaW50LCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5VW5zYWZlKENVUlZFLmgpO1xuICAgICAgICB9XG4gICAgICAgIHRvUmF3Qnl0ZXMoaXNDb21wcmVzc2VkID0gdHJ1ZSkge1xuICAgICAgICAgICAgYWJvb2woJ2lzQ29tcHJlc3NlZCcsIGlzQ29tcHJlc3NlZCk7XG4gICAgICAgICAgICB0aGlzLmFzc2VydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICByZXR1cm4gdG9CeXRlcyhQb2ludCwgdGhpcywgaXNDb21wcmVzc2VkKTtcbiAgICAgICAgfVxuICAgICAgICB0b0hleChpc0NvbXByZXNzZWQgPSB0cnVlKSB7XG4gICAgICAgICAgICBhYm9vbCgnaXNDb21wcmVzc2VkJywgaXNDb21wcmVzc2VkKTtcbiAgICAgICAgICAgIHJldHVybiB1dC5ieXRlc1RvSGV4KHRoaXMudG9SYXdCeXRlcyhpc0NvbXByZXNzZWQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludC5CQVNFID0gbmV3IFBvaW50KENVUlZFLkd4LCBDVVJWRS5HeSwgRnAuT05FKTtcbiAgICBQb2ludC5aRVJPID0gbmV3IFBvaW50KEZwLlpFUk8sIEZwLk9ORSwgRnAuWkVSTyk7XG4gICAgY29uc3QgX2JpdHMgPSBDVVJWRS5uQml0TGVuZ3RoO1xuICAgIGNvbnN0IHduYWYgPSB3TkFGKFBvaW50LCBDVVJWRS5lbmRvID8gTWF0aC5jZWlsKF9iaXRzIC8gMikgOiBfYml0cyk7XG4gICAgLy8gVmFsaWRhdGUgaWYgZ2VuZXJhdG9yIHBvaW50IGlzIG9uIGN1cnZlXG4gICAgcmV0dXJuIHtcbiAgICAgICAgQ1VSVkUsXG4gICAgICAgIFByb2plY3RpdmVQb2ludDogUG9pbnQsXG4gICAgICAgIG5vcm1Qcml2YXRlS2V5VG9TY2FsYXIsXG4gICAgICAgIHdlaWVyc3RyYXNzRXF1YXRpb24sXG4gICAgICAgIGlzV2l0aGluQ3VydmVPcmRlcixcbiAgICB9O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVPcHRzKGN1cnZlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHZhbGlkYXRlQmFzaWMoY3VydmUpO1xuICAgIHV0LnZhbGlkYXRlT2JqZWN0KG9wdHMsIHtcbiAgICAgICAgaGFzaDogJ2hhc2gnLFxuICAgICAgICBobWFjOiAnZnVuY3Rpb24nLFxuICAgICAgICByYW5kb21CeXRlczogJ2Z1bmN0aW9uJyxcbiAgICB9LCB7XG4gICAgICAgIGJpdHMyaW50OiAnZnVuY3Rpb24nLFxuICAgICAgICBiaXRzMmludF9tb2ROOiAnZnVuY3Rpb24nLFxuICAgICAgICBsb3dTOiAnYm9vbGVhbicsXG4gICAgfSk7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoeyBsb3dTOiB0cnVlLCAuLi5vcHRzIH0pO1xufVxuLyoqXG4gKiBDcmVhdGVzIHNob3J0IHdlaWVyc3RyYXNzIGN1cnZlIGFuZCBFQ0RTQSBzaWduYXR1cmUgbWV0aG9kcyBmb3IgaXQuXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgRmllbGQgfSBmcm9tICdAbm9ibGUvY3VydmVzL2Fic3RyYWN0L21vZHVsYXInO1xuICogLy8gQmVmb3JlIHRoYXQsIGRlZmluZSBCaWdJbnQtczogYSwgYiwgcCwgbiwgR3gsIEd5XG4gKiBjb25zdCBjdXJ2ZSA9IHdlaWVyc3RyYXNzKHsgYSwgYiwgRnA6IEZpZWxkKHApLCBuLCBHeCwgR3ksIGg6IDFuIH0pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3ZWllcnN0cmFzcyhjdXJ2ZURlZikge1xuICAgIGNvbnN0IENVUlZFID0gdmFsaWRhdGVPcHRzKGN1cnZlRGVmKTtcbiAgICBjb25zdCB7IEZwLCBuOiBDVVJWRV9PUkRFUiB9ID0gQ1VSVkU7XG4gICAgY29uc3QgY29tcHJlc3NlZExlbiA9IEZwLkJZVEVTICsgMTsgLy8gZS5nLiAzMyBmb3IgMzJcbiAgICBjb25zdCB1bmNvbXByZXNzZWRMZW4gPSAyICogRnAuQllURVMgKyAxOyAvLyBlLmcuIDY1IGZvciAzMlxuICAgIGZ1bmN0aW9uIG1vZE4oYSkge1xuICAgICAgICByZXR1cm4gbW9kLm1vZChhLCBDVVJWRV9PUkRFUik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGludk4oYSkge1xuICAgICAgICByZXR1cm4gbW9kLmludmVydChhLCBDVVJWRV9PUkRFUik7XG4gICAgfVxuICAgIGNvbnN0IHsgUHJvamVjdGl2ZVBvaW50OiBQb2ludCwgbm9ybVByaXZhdGVLZXlUb1NjYWxhciwgd2VpZXJzdHJhc3NFcXVhdGlvbiwgaXNXaXRoaW5DdXJ2ZU9yZGVyLCB9ID0gd2VpZXJzdHJhc3NQb2ludHMoe1xuICAgICAgICAuLi5DVVJWRSxcbiAgICAgICAgdG9CeXRlcyhfYywgcG9pbnQsIGlzQ29tcHJlc3NlZCkge1xuICAgICAgICAgICAgY29uc3QgYSA9IHBvaW50LnRvQWZmaW5lKCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gRnAudG9CeXRlcyhhLngpO1xuICAgICAgICAgICAgY29uc3QgY2F0ID0gdXQuY29uY2F0Qnl0ZXM7XG4gICAgICAgICAgICBhYm9vbCgnaXNDb21wcmVzc2VkJywgaXNDb21wcmVzc2VkKTtcbiAgICAgICAgICAgIGlmIChpc0NvbXByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2F0KFVpbnQ4QXJyYXkuZnJvbShbcG9pbnQuaGFzRXZlblkoKSA/IDB4MDIgOiAweDAzXSksIHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhdChVaW50OEFycmF5LmZyb20oWzB4MDRdKSwgeCwgRnAudG9CeXRlcyhhLnkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZnJvbUJ5dGVzKGJ5dGVzKSB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBieXRlcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBoZWFkID0gYnl0ZXNbMF07XG4gICAgICAgICAgICBjb25zdCB0YWlsID0gYnl0ZXMuc3ViYXJyYXkoMSk7XG4gICAgICAgICAgICAvLyB0aGlzLmFzc2VydFZhbGlkaXR5KCkgaXMgZG9uZSBpbnNpZGUgb2YgZnJvbUhleFxuICAgICAgICAgICAgaWYgKGxlbiA9PT0gY29tcHJlc3NlZExlbiAmJiAoaGVhZCA9PT0gMHgwMiB8fCBoZWFkID09PSAweDAzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSB1dC5ieXRlc1RvTnVtYmVyQkUodGFpbCk7XG4gICAgICAgICAgICAgICAgaWYgKCF1dC5pblJhbmdlKHgsIF8xbiwgRnAuT1JERVIpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BvaW50IGlzIG5vdCBvbiBjdXJ2ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkyID0gd2VpZXJzdHJhc3NFcXVhdGlvbih4KTsgLy8gecKyID0geMKzICsgYXggKyBiXG4gICAgICAgICAgICAgICAgbGV0IHk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IEZwLnNxcnQoeTIpOyAvLyB5ID0gecKyIF4gKHArMSkvNFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoc3FydEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IHNxcnRFcnJvciBpbnN0YW5jZW9mIEVycm9yID8gJzogJyArIHNxcnRFcnJvci5tZXNzYWdlIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUG9pbnQgaXMgbm90IG9uIGN1cnZlJyArIHN1ZmZpeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGlzWU9kZCA9ICh5ICYgXzFuKSA9PT0gXzFuO1xuICAgICAgICAgICAgICAgIC8vIEVDRFNBXG4gICAgICAgICAgICAgICAgY29uc3QgaXNIZWFkT2RkID0gKGhlYWQgJiAxKSA9PT0gMTtcbiAgICAgICAgICAgICAgICBpZiAoaXNIZWFkT2RkICE9PSBpc1lPZGQpXG4gICAgICAgICAgICAgICAgICAgIHkgPSBGcC5uZWcoeSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGVuID09PSB1bmNvbXByZXNzZWRMZW4gJiYgaGVhZCA9PT0gMHgwNCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBGcC5mcm9tQnl0ZXModGFpbC5zdWJhcnJheSgwLCBGcC5CWVRFUykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBGcC5mcm9tQnl0ZXModGFpbC5zdWJhcnJheShGcC5CWVRFUywgMiAqIEZwLkJZVEVTKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQb2ludCBvZiBsZW5ndGggJHtsZW59IHdhcyBpbnZhbGlkLiBFeHBlY3RlZCAke2NvbXByZXNzZWRMZW59IGNvbXByZXNzZWQgYnl0ZXMgb3IgJHt1bmNvbXByZXNzZWRMZW59IHVuY29tcHJlc3NlZCBieXRlc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IG51bVRvTkJ5dGVTdHIgPSAobnVtKSA9PiB1dC5ieXRlc1RvSGV4KHV0Lm51bWJlclRvQnl0ZXNCRShudW0sIENVUlZFLm5CeXRlTGVuZ3RoKSk7XG4gICAgZnVuY3Rpb24gaXNCaWdnZXJUaGFuSGFsZk9yZGVyKG51bWJlcikge1xuICAgICAgICBjb25zdCBIQUxGID0gQ1VSVkVfT1JERVIgPj4gXzFuO1xuICAgICAgICByZXR1cm4gbnVtYmVyID4gSEFMRjtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplUyhzKSB7XG4gICAgICAgIHJldHVybiBpc0JpZ2dlclRoYW5IYWxmT3JkZXIocykgPyBtb2ROKC1zKSA6IHM7XG4gICAgfVxuICAgIC8vIHNsaWNlIGJ5dGVzIG51bVxuICAgIGNvbnN0IHNsY051bSA9IChiLCBmcm9tLCB0bykgPT4gdXQuYnl0ZXNUb051bWJlckJFKGIuc2xpY2UoZnJvbSwgdG8pKTtcbiAgICAvKipcbiAgICAgKiBFQ0RTQSBzaWduYXR1cmUgd2l0aCBpdHMgKHIsIHMpIHByb3BlcnRpZXMuIFN1cHBvcnRzIERFUiAmIGNvbXBhY3QgcmVwcmVzZW50YXRpb25zLlxuICAgICAqL1xuICAgIGNsYXNzIFNpZ25hdHVyZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHIsIHMsIHJlY292ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICAgICAgdGhpcy5zID0gcztcbiAgICAgICAgICAgIHRoaXMucmVjb3ZlcnkgPSByZWNvdmVyeTtcbiAgICAgICAgICAgIHRoaXMuYXNzZXJ0VmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwYWlyIChieXRlcyBvZiByLCBieXRlcyBvZiBzKVxuICAgICAgICBzdGF0aWMgZnJvbUNvbXBhY3QoaGV4KSB7XG4gICAgICAgICAgICBjb25zdCBsID0gQ1VSVkUubkJ5dGVMZW5ndGg7XG4gICAgICAgICAgICBoZXggPSBlbnN1cmVCeXRlcygnY29tcGFjdFNpZ25hdHVyZScsIGhleCwgbCAqIDIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTaWduYXR1cmUoc2xjTnVtKGhleCwgMCwgbCksIHNsY051bShoZXgsIGwsIDIgKiBsKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gREVSIGVuY29kZWQgRUNEU0Egc2lnbmF0dXJlXG4gICAgICAgIC8vIGh0dHBzOi8vYml0Y29pbi5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvNTc2NDQvd2hhdC1hcmUtdGhlLXBhcnRzLW9mLWEtYml0Y29pbi10cmFuc2FjdGlvbi1pbnB1dC1zY3JpcHRcbiAgICAgICAgc3RhdGljIGZyb21ERVIoaGV4KSB7XG4gICAgICAgICAgICBjb25zdCB7IHIsIHMgfSA9IERFUi50b1NpZyhlbnN1cmVCeXRlcygnREVSJywgaGV4KSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNpZ25hdHVyZShyLCBzKTtcbiAgICAgICAgfVxuICAgICAgICBhc3NlcnRWYWxpZGl0eSgpIHtcbiAgICAgICAgICAgIHV0LmFJblJhbmdlKCdyJywgdGhpcy5yLCBfMW4sIENVUlZFX09SREVSKTsgLy8gciBpbiBbMS4uTl1cbiAgICAgICAgICAgIHV0LmFJblJhbmdlKCdzJywgdGhpcy5zLCBfMW4sIENVUlZFX09SREVSKTsgLy8gcyBpbiBbMS4uTl1cbiAgICAgICAgfVxuICAgICAgICBhZGRSZWNvdmVyeUJpdChyZWNvdmVyeSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTaWduYXR1cmUodGhpcy5yLCB0aGlzLnMsIHJlY292ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZWNvdmVyUHVibGljS2V5KG1zZ0hhc2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgciwgcywgcmVjb3Zlcnk6IHJlYyB9ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGggPSBiaXRzMmludF9tb2ROKGVuc3VyZUJ5dGVzKCdtc2dIYXNoJywgbXNnSGFzaCkpOyAvLyBUcnVuY2F0ZSBoYXNoXG4gICAgICAgICAgICBpZiAocmVjID09IG51bGwgfHwgIVswLCAxLCAyLCAzXS5pbmNsdWRlcyhyZWMpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVjb3ZlcnkgaWQgaW52YWxpZCcpO1xuICAgICAgICAgICAgY29uc3QgcmFkaiA9IHJlYyA9PT0gMiB8fCByZWMgPT09IDMgPyByICsgQ1VSVkUubiA6IHI7XG4gICAgICAgICAgICBpZiAocmFkaiA+PSBGcC5PUkRFUilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlY292ZXJ5IGlkIDIgb3IgMyBpbnZhbGlkJyk7XG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSAocmVjICYgMSkgPT09IDAgPyAnMDInIDogJzAzJztcbiAgICAgICAgICAgIGNvbnN0IFIgPSBQb2ludC5mcm9tSGV4KHByZWZpeCArIG51bVRvTkJ5dGVTdHIocmFkaikpO1xuICAgICAgICAgICAgY29uc3QgaXIgPSBpbnZOKHJhZGopOyAvLyByXi0xXG4gICAgICAgICAgICBjb25zdCB1MSA9IG1vZE4oLWggKiBpcik7IC8vIC1ocl4tMVxuICAgICAgICAgICAgY29uc3QgdTIgPSBtb2ROKHMgKiBpcik7IC8vIHNyXi0xXG4gICAgICAgICAgICBjb25zdCBRID0gUG9pbnQuQkFTRS5tdWx0aXBseUFuZEFkZFVuc2FmZShSLCB1MSwgdTIpOyAvLyAoc3JeLTEpUi0oaHJeLTEpRyA9IC0oaHJeLTEpRyArIChzcl4tMSlcbiAgICAgICAgICAgIGlmICghUSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvaW50IGF0IGluZmluaWZ5Jyk7IC8vIHVuc2FmZSBpcyBmaW5lOiBubyBwcml2IGRhdGEgbGVha2VkXG4gICAgICAgICAgICBRLmFzc2VydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICByZXR1cm4gUTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTaWduYXR1cmVzIHNob3VsZCBiZSBsb3ctcywgdG8gcHJldmVudCBtYWxsZWFiaWxpdHkuXG4gICAgICAgIGhhc0hpZ2hTKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzQmlnZ2VyVGhhbkhhbGZPcmRlcih0aGlzLnMpO1xuICAgICAgICB9XG4gICAgICAgIG5vcm1hbGl6ZVMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNIaWdoUygpID8gbmV3IFNpZ25hdHVyZSh0aGlzLnIsIG1vZE4oLXRoaXMucyksIHRoaXMucmVjb3ZlcnkpIDogdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvLyBERVItZW5jb2RlZFxuICAgICAgICB0b0RFUlJhd0J5dGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0LmhleFRvQnl0ZXModGhpcy50b0RFUkhleCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0b0RFUkhleCgpIHtcbiAgICAgICAgICAgIHJldHVybiBERVIuaGV4RnJvbVNpZyh7IHI6IHRoaXMuciwgczogdGhpcy5zIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHBhZGRlZCBieXRlcyBvZiByLCB0aGVuIHBhZGRlZCBieXRlcyBvZiBzXG4gICAgICAgIHRvQ29tcGFjdFJhd0J5dGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0LmhleFRvQnl0ZXModGhpcy50b0NvbXBhY3RIZXgoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdG9Db21wYWN0SGV4KCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bVRvTkJ5dGVTdHIodGhpcy5yKSArIG51bVRvTkJ5dGVTdHIodGhpcy5zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB1dGlscyA9IHtcbiAgICAgICAgaXNWYWxpZFByaXZhdGVLZXkocHJpdmF0ZUtleSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBub3JtUHJpdmF0ZUtleVRvU2NhbGFyKHByaXZhdGVLZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBub3JtUHJpdmF0ZUtleVRvU2NhbGFyOiBub3JtUHJpdmF0ZUtleVRvU2NhbGFyLFxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvZHVjZXMgY3J5cHRvZ3JhcGhpY2FsbHkgc2VjdXJlIHByaXZhdGUga2V5IGZyb20gcmFuZG9tIG9mIHNpemVcbiAgICAgICAgICogKGdyb3VwTGVuICsgY2VpbChncm91cExlbiAvIDIpKSB3aXRoIG1vZHVsbyBiaWFzIGJlaW5nIG5lZ2xpZ2libGUuXG4gICAgICAgICAqL1xuICAgICAgICByYW5kb21Qcml2YXRlS2V5OiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBtb2QuZ2V0TWluSGFzaExlbmd0aChDVVJWRS5uKTtcbiAgICAgICAgICAgIHJldHVybiBtb2QubWFwSGFzaFRvRmllbGQoQ1VSVkUucmFuZG9tQnl0ZXMobGVuZ3RoKSwgQ1VSVkUubik7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIHByZWNvbXB1dGUgdGFibGUgZm9yIGFuIGFyYml0cmFyeSBFQyBwb2ludC4gTWFrZXMgcG9pbnQgXCJjYWNoZWRcIi5cbiAgICAgICAgICogQWxsb3dzIHRvIG1hc3NpdmVseSBzcGVlZC11cCBgcG9pbnQubXVsdGlwbHkoc2NhbGFyKWAuXG4gICAgICAgICAqIEByZXR1cm5zIGNhY2hlZCBwb2ludFxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBjb25zdCBmYXN0ID0gdXRpbHMucHJlY29tcHV0ZSg4LCBQcm9qZWN0aXZlUG9pbnQuZnJvbUhleChzb21lb25lc1B1YktleSkpO1xuICAgICAgICAgKiBmYXN0Lm11bHRpcGx5KHByaXZLZXkpOyAvLyBtdWNoIGZhc3RlciBFQ0RIIG5vd1xuICAgICAgICAgKi9cbiAgICAgICAgcHJlY29tcHV0ZSh3aW5kb3dTaXplID0gOCwgcG9pbnQgPSBQb2ludC5CQVNFKSB7XG4gICAgICAgICAgICBwb2ludC5fc2V0V2luZG93U2l6ZSh3aW5kb3dTaXplKTtcbiAgICAgICAgICAgIHBvaW50Lm11bHRpcGx5KEJpZ0ludCgzKSk7IC8vIDMgaXMgYXJiaXRyYXJ5LCBqdXN0IG5lZWQgYW55IG51bWJlciBoZXJlXG4gICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBwdWJsaWMga2V5IGZvciBhIHByaXZhdGUga2V5LiBDaGVja3MgZm9yIHZhbGlkaXR5IG9mIHRoZSBwcml2YXRlIGtleS5cbiAgICAgKiBAcGFyYW0gcHJpdmF0ZUtleSBwcml2YXRlIGtleVxuICAgICAqIEBwYXJhbSBpc0NvbXByZXNzZWQgd2hldGhlciB0byByZXR1cm4gY29tcGFjdCAoZGVmYXVsdCksIG9yIGZ1bGwga2V5XG4gICAgICogQHJldHVybnMgUHVibGljIGtleSwgZnVsbCB3aGVuIGlzQ29tcHJlc3NlZD1mYWxzZTsgc2hvcnQgd2hlbiBpc0NvbXByZXNzZWQ9dHJ1ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFB1YmxpY0tleShwcml2YXRlS2V5LCBpc0NvbXByZXNzZWQgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBQb2ludC5mcm9tUHJpdmF0ZUtleShwcml2YXRlS2V5KS50b1Jhd0J5dGVzKGlzQ29tcHJlc3NlZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFF1aWNrIGFuZCBkaXJ0eSBjaGVjayBmb3IgaXRlbSBiZWluZyBwdWJsaWMga2V5LiBEb2VzIG5vdCB2YWxpZGF0ZSBoZXgsIG9yIGJlaW5nIG9uLWN1cnZlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzUHJvYlB1YihpdGVtKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHV0LmlzQnl0ZXMoaXRlbSk7XG4gICAgICAgIGNvbnN0IHN0ciA9IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJztcbiAgICAgICAgY29uc3QgbGVuID0gKGFyciB8fCBzdHIpICYmIGl0ZW0ubGVuZ3RoO1xuICAgICAgICBpZiAoYXJyKVxuICAgICAgICAgICAgcmV0dXJuIGxlbiA9PT0gY29tcHJlc3NlZExlbiB8fCBsZW4gPT09IHVuY29tcHJlc3NlZExlbjtcbiAgICAgICAgaWYgKHN0cilcbiAgICAgICAgICAgIHJldHVybiBsZW4gPT09IDIgKiBjb21wcmVzc2VkTGVuIHx8IGxlbiA9PT0gMiAqIHVuY29tcHJlc3NlZExlbjtcbiAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBQb2ludClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVDREggKEVsbGlwdGljIEN1cnZlIERpZmZpZSBIZWxsbWFuKS5cbiAgICAgKiBDb21wdXRlcyBzaGFyZWQgcHVibGljIGtleSBmcm9tIHByaXZhdGUga2V5IGFuZCBwdWJsaWMga2V5LlxuICAgICAqIENoZWNrczogMSkgcHJpdmF0ZSBrZXkgdmFsaWRpdHkgMikgc2hhcmVkIGtleSBpcyBvbi1jdXJ2ZS5cbiAgICAgKiBEb2VzIE5PVCBoYXNoIHRoZSByZXN1bHQuXG4gICAgICogQHBhcmFtIHByaXZhdGVBIHByaXZhdGUga2V5XG4gICAgICogQHBhcmFtIHB1YmxpY0IgZGlmZmVyZW50IHB1YmxpYyBrZXlcbiAgICAgKiBAcGFyYW0gaXNDb21wcmVzc2VkIHdoZXRoZXIgdG8gcmV0dXJuIGNvbXBhY3QgKGRlZmF1bHQpLCBvciBmdWxsIGtleVxuICAgICAqIEByZXR1cm5zIHNoYXJlZCBwdWJsaWMga2V5XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0U2hhcmVkU2VjcmV0KHByaXZhdGVBLCBwdWJsaWNCLCBpc0NvbXByZXNzZWQgPSB0cnVlKSB7XG4gICAgICAgIGlmIChpc1Byb2JQdWIocHJpdmF0ZUEpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmcgbXVzdCBiZSBwcml2YXRlIGtleScpO1xuICAgICAgICBpZiAoIWlzUHJvYlB1YihwdWJsaWNCKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2Vjb25kIGFyZyBtdXN0IGJlIHB1YmxpYyBrZXknKTtcbiAgICAgICAgY29uc3QgYiA9IFBvaW50LmZyb21IZXgocHVibGljQik7IC8vIGNoZWNrIGZvciBiZWluZyBvbi1jdXJ2ZVxuICAgICAgICByZXR1cm4gYi5tdWx0aXBseShub3JtUHJpdmF0ZUtleVRvU2NhbGFyKHByaXZhdGVBKSkudG9SYXdCeXRlcyhpc0NvbXByZXNzZWQpO1xuICAgIH1cbiAgICAvLyBSRkM2OTc5OiBlbnN1cmUgRUNEU0EgbXNnIGlzIFggYnl0ZXMgYW5kIDwgTi4gUkZDIHN1Z2dlc3RzIG9wdGlvbmFsIHRydW5jYXRpbmcgdmlhIGJpdHMyb2N0ZXRzLlxuICAgIC8vIEZJUFMgMTg2LTQgNC42IHN1Z2dlc3RzIHRoZSBsZWZ0bW9zdCBtaW4obkJpdExlbiwgb3V0TGVuKSBiaXRzLCB3aGljaCBtYXRjaGVzIGJpdHMyaW50LlxuICAgIC8vIGJpdHMyaW50IGNhbiBwcm9kdWNlIHJlcz5OLCB3ZSBjYW4gZG8gbW9kKHJlcywgTikgc2luY2UgdGhlIGJpdExlbiBpcyB0aGUgc2FtZS5cbiAgICAvLyBpbnQyb2N0ZXRzIGNhbid0IGJlIHVzZWQ7IHBhZHMgc21hbGwgbXNncyB3aXRoIDA6IHVuYWNjZXB0YXRibGUgZm9yIHRydW5jIGFzIHBlciBSRkMgdmVjdG9yc1xuICAgIGNvbnN0IGJpdHMyaW50ID0gQ1VSVkUuYml0czJpbnQgfHxcbiAgICAgICAgZnVuY3Rpb24gKGJ5dGVzKSB7XG4gICAgICAgICAgICAvLyBGb3IgY3VydmVzIHdpdGggbkJpdExlbmd0aCAlIDggIT09IDA6IGJpdHMyb2N0ZXRzKGJpdHMyb2N0ZXRzKG0pKSAhPT0gYml0czJvY3RldHMobSlcbiAgICAgICAgICAgIC8vIGZvciBzb21lIGNhc2VzLCBzaW5jZSBieXRlcy5sZW5ndGggKiA4IGlzIG5vdCBhY3R1YWwgYml0TGVuZ3RoLlxuICAgICAgICAgICAgY29uc3QgbnVtID0gdXQuYnl0ZXNUb051bWJlckJFKGJ5dGVzKTsgLy8gY2hlY2sgZm9yID09IHU4IGRvbmUgaGVyZVxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBieXRlcy5sZW5ndGggKiA4IC0gQ1VSVkUubkJpdExlbmd0aDsgLy8gdHJ1bmNhdGUgdG8gbkJpdExlbmd0aCBsZWZ0bW9zdCBiaXRzXG4gICAgICAgICAgICByZXR1cm4gZGVsdGEgPiAwID8gbnVtID4+IEJpZ0ludChkZWx0YSkgOiBudW07XG4gICAgICAgIH07XG4gICAgY29uc3QgYml0czJpbnRfbW9kTiA9IENVUlZFLmJpdHMyaW50X21vZE4gfHxcbiAgICAgICAgZnVuY3Rpb24gKGJ5dGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kTihiaXRzMmludChieXRlcykpOyAvLyBjYW4ndCB1c2UgYnl0ZXNUb051bWJlckJFIGhlcmVcbiAgICAgICAgfTtcbiAgICAvLyBOT1RFOiBwYWRzIG91dHB1dCB3aXRoIHplcm8gYXMgcGVyIHNwZWNcbiAgICBjb25zdCBPUkRFUl9NQVNLID0gdXQuYml0TWFzayhDVVJWRS5uQml0TGVuZ3RoKTtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0byBieXRlcy4gQ2hlY2tzIGlmIG51bSBpbiBgWzAuLk9SREVSX01BU0stMV1gIGUuZy46IGBbMC4uMl4yNTYtMV1gLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGludDJvY3RldHMobnVtKSB7XG4gICAgICAgIHV0LmFJblJhbmdlKGBudW0gPCAyXiR7Q1VSVkUubkJpdExlbmd0aH1gLCBudW0sIF8wbiwgT1JERVJfTUFTSyk7XG4gICAgICAgIC8vIHdvcmtzIHdpdGggb3JkZXIsIGNhbiBoYXZlIGRpZmZlcmVudCBzaXplIHRoYW4gbnVtVG9GaWVsZCFcbiAgICAgICAgcmV0dXJuIHV0Lm51bWJlclRvQnl0ZXNCRShudW0sIENVUlZFLm5CeXRlTGVuZ3RoKTtcbiAgICB9XG4gICAgLy8gU3RlcHMgQSwgRCBvZiBSRkM2OTc5IDMuMlxuICAgIC8vIENyZWF0ZXMgUkZDNjk3OSBzZWVkOyBjb252ZXJ0cyBtc2cvcHJpdktleSB0byBudW1iZXJzLlxuICAgIC8vIFVzZWQgb25seSBpbiBzaWduLCBub3QgaW4gdmVyaWZ5LlxuICAgIC8vIE5PVEU6IHdlIGNhbm5vdCBhc3N1bWUgaGVyZSB0aGF0IG1zZ0hhc2ggaGFzIHNhbWUgYW1vdW50IG9mIGJ5dGVzIGFzIGN1cnZlIG9yZGVyLCB0aGlzIHdpbGwgYmUgd3JvbmcgYXQgbGVhc3QgZm9yIFA1MjEuXG4gICAgLy8gQWxzbyBpdCBjYW4gYmUgYmlnZ2VyIGZvciBQMjI0ICsgU0hBMjU2XG4gICAgZnVuY3Rpb24gcHJlcFNpZyhtc2dIYXNoLCBwcml2YXRlS2V5LCBvcHRzID0gZGVmYXVsdFNpZ09wdHMpIHtcbiAgICAgICAgaWYgKFsncmVjb3ZlcmVkJywgJ2Nhbm9uaWNhbCddLnNvbWUoKGspID0+IGsgaW4gb3B0cykpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NpZ24oKSBsZWdhY3kgb3B0aW9ucyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgIGNvbnN0IHsgaGFzaCwgcmFuZG9tQnl0ZXMgfSA9IENVUlZFO1xuICAgICAgICBsZXQgeyBsb3dTLCBwcmVoYXNoLCBleHRyYUVudHJvcHk6IGVudCB9ID0gb3B0czsgLy8gZ2VuZXJhdGVzIGxvdy1zIHNpZ3MgYnkgZGVmYXVsdFxuICAgICAgICBpZiAobG93UyA9PSBudWxsKVxuICAgICAgICAgICAgbG93UyA9IHRydWU7IC8vIFJGQzY5NzkgMy4yOiB3ZSBza2lwIHN0ZXAgQSwgYmVjYXVzZSB3ZSBhbHJlYWR5IHByb3ZpZGUgaGFzaFxuICAgICAgICBtc2dIYXNoID0gZW5zdXJlQnl0ZXMoJ21zZ0hhc2gnLCBtc2dIYXNoKTtcbiAgICAgICAgdmFsaWRhdGVTaWdWZXJPcHRzKG9wdHMpO1xuICAgICAgICBpZiAocHJlaGFzaClcbiAgICAgICAgICAgIG1zZ0hhc2ggPSBlbnN1cmVCeXRlcygncHJlaGFzaGVkIG1zZ0hhc2gnLCBoYXNoKG1zZ0hhc2gpKTtcbiAgICAgICAgLy8gV2UgY2FuJ3QgbGF0ZXIgY2FsbCBiaXRzMm9jdGV0cywgc2luY2UgbmVzdGVkIGJpdHMyaW50IGlzIGJyb2tlbiBmb3IgY3VydmVzXG4gICAgICAgIC8vIHdpdGggbkJpdExlbmd0aCAlIDggIT09IDAuIEJlY2F1c2Ugb2YgdGhhdCwgd2UgdW53cmFwIGl0IGhlcmUgYXMgaW50Mm9jdGV0cyBjYWxsLlxuICAgICAgICAvLyBjb25zdCBiaXRzMm9jdGV0cyA9IChiaXRzKSA9PiBpbnQyb2N0ZXRzKGJpdHMyaW50X21vZE4oYml0cykpXG4gICAgICAgIGNvbnN0IGgxaW50ID0gYml0czJpbnRfbW9kTihtc2dIYXNoKTtcbiAgICAgICAgY29uc3QgZCA9IG5vcm1Qcml2YXRlS2V5VG9TY2FsYXIocHJpdmF0ZUtleSk7IC8vIHZhbGlkYXRlIHByaXZhdGUga2V5LCBjb252ZXJ0IHRvIGJpZ2ludFxuICAgICAgICBjb25zdCBzZWVkQXJncyA9IFtpbnQyb2N0ZXRzKGQpLCBpbnQyb2N0ZXRzKGgxaW50KV07XG4gICAgICAgIC8vIGV4dHJhRW50cm9weS4gUkZDNjk3OSAzLjY6IGFkZGl0aW9uYWwgaycgKG9wdGlvbmFsKS5cbiAgICAgICAgaWYgKGVudCAhPSBudWxsICYmIGVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIEsgPSBITUFDX0soViB8fCAweDAwIHx8IGludDJvY3RldHMoeCkgfHwgYml0czJvY3RldHMoaDEpIHx8IGsnKVxuICAgICAgICAgICAgY29uc3QgZSA9IGVudCA9PT0gdHJ1ZSA/IHJhbmRvbUJ5dGVzKEZwLkJZVEVTKSA6IGVudDsgLy8gZ2VuZXJhdGUgcmFuZG9tIGJ5dGVzIE9SIHBhc3MgYXMtaXNcbiAgICAgICAgICAgIHNlZWRBcmdzLnB1c2goZW5zdXJlQnl0ZXMoJ2V4dHJhRW50cm9weScsIGUpKTsgLy8gY2hlY2sgZm9yIGJlaW5nIGJ5dGVzXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VlZCA9IHV0LmNvbmNhdEJ5dGVzKC4uLnNlZWRBcmdzKTsgLy8gU3RlcCBEIG9mIFJGQzY5NzkgMy4yXG4gICAgICAgIGNvbnN0IG0gPSBoMWludDsgLy8gTk9URTogbm8gbmVlZCB0byBjYWxsIGJpdHMyaW50IHNlY29uZCB0aW1lIGhlcmUsIGl0IGlzIGluc2lkZSB0cnVuY2F0ZUhhc2ghXG4gICAgICAgIC8vIENvbnZlcnRzIHNpZ25hdHVyZSBwYXJhbXMgaW50byBwb2ludCB3IHIvcywgY2hlY2tzIHJlc3VsdCBmb3IgdmFsaWRpdHkuXG4gICAgICAgIGZ1bmN0aW9uIGsyc2lnKGtCeXRlcykge1xuICAgICAgICAgICAgLy8gUkZDIDY5NzkgU2VjdGlvbiAzLjIsIHN0ZXAgMzogayA9IGJpdHMyaW50KFQpXG4gICAgICAgICAgICBjb25zdCBrID0gYml0czJpbnQoa0J5dGVzKTsgLy8gQ2Fubm90IHVzZSBmaWVsZHMgbWV0aG9kcywgc2luY2UgaXQgaXMgZ3JvdXAgZWxlbWVudFxuICAgICAgICAgICAgaWYgKCFpc1dpdGhpbkN1cnZlT3JkZXIoaykpXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBJbXBvcnRhbnQ6IGFsbCBtb2QoKSBjYWxscyBoZXJlIG11c3QgYmUgZG9uZSBvdmVyIE5cbiAgICAgICAgICAgIGNvbnN0IGlrID0gaW52TihrKTsgLy8ga14tMSBtb2QgblxuICAgICAgICAgICAgY29uc3QgcSA9IFBvaW50LkJBU0UubXVsdGlwbHkoaykudG9BZmZpbmUoKTsgLy8gcSA9IEdrXG4gICAgICAgICAgICBjb25zdCByID0gbW9kTihxLngpOyAvLyByID0gcS54IG1vZCBuXG4gICAgICAgICAgICBpZiAociA9PT0gXzBuKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vIENhbiB1c2Ugc2NhbGFyIGJsaW5kaW5nIGJeLTEoYm0gKyBiZHIpIHdoZXJlIGIg4oiIIFsxLHHiiJIxXSBhY2NvcmRpbmcgdG9cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vdGNoZXMuaWFjci5vcmcvaW5kZXgucGhwL1RDSEVTL2FydGljbGUvdmlldy83MzM3LzY1MDkuIFdlJ3ZlIGRlY2lkZWQgYWdhaW5zdCBpdDpcbiAgICAgICAgICAgIC8vIGEpIGRlcGVuZGVuY3kgb24gQ1NQUk5HIGIpIDE1JSBzbG93ZG93biBjKSBkb2Vzbid0IHJlYWxseSBoZWxwIHNpbmNlIGJpZ2ludHMgYXJlIG5vdCBDVFxuICAgICAgICAgICAgY29uc3QgcyA9IG1vZE4oaWsgKiBtb2ROKG0gKyByICogZCkpOyAvLyBOb3QgdXNpbmcgYmxpbmRpbmcgaGVyZVxuICAgICAgICAgICAgaWYgKHMgPT09IF8wbilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBsZXQgcmVjb3ZlcnkgPSAocS54ID09PSByID8gMCA6IDIpIHwgTnVtYmVyKHEueSAmIF8xbik7IC8vIHJlY292ZXJ5IGJpdCAoMiBvciAzLCB3aGVuIHEueCA+IG4pXG4gICAgICAgICAgICBsZXQgbm9ybVMgPSBzO1xuICAgICAgICAgICAgaWYgKGxvd1MgJiYgaXNCaWdnZXJUaGFuSGFsZk9yZGVyKHMpKSB7XG4gICAgICAgICAgICAgICAgbm9ybVMgPSBub3JtYWxpemVTKHMpOyAvLyBpZiBsb3dTIHdhcyBwYXNzZWQsIGVuc3VyZSBzIGlzIGFsd2F5c1xuICAgICAgICAgICAgICAgIHJlY292ZXJ5IF49IDE7IC8vIC8vIGluIHRoZSBib3R0b20gaGFsZiBvZiBOXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNpZ25hdHVyZShyLCBub3JtUywgcmVjb3ZlcnkpOyAvLyB1c2Ugbm9ybVMsIG5vdCBzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc2VlZCwgazJzaWcgfTtcbiAgICB9XG4gICAgY29uc3QgZGVmYXVsdFNpZ09wdHMgPSB7IGxvd1M6IENVUlZFLmxvd1MsIHByZWhhc2g6IGZhbHNlIH07XG4gICAgY29uc3QgZGVmYXVsdFZlck9wdHMgPSB7IGxvd1M6IENVUlZFLmxvd1MsIHByZWhhc2g6IGZhbHNlIH07XG4gICAgLyoqXG4gICAgICogU2lnbnMgbWVzc2FnZSBoYXNoIHdpdGggYSBwcml2YXRlIGtleS5cbiAgICAgKiBgYGBcbiAgICAgKiBzaWduKG0sIGQsIGspIHdoZXJlXG4gICAgICogICAoeCwgeSkgPSBHIMOXIGtcbiAgICAgKiAgIHIgPSB4IG1vZCBuXG4gICAgICogICBzID0gKG0gKyBkcikvayBtb2QgblxuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSBtc2dIYXNoIE5PVCBtZXNzYWdlLiBtc2cgbmVlZHMgdG8gYmUgaGFzaGVkIHRvIGBtc2dIYXNoYCwgb3IgdXNlIGBwcmVoYXNoYC5cbiAgICAgKiBAcGFyYW0gcHJpdktleSBwcml2YXRlIGtleVxuICAgICAqIEBwYXJhbSBvcHRzIGxvd1MgZm9yIG5vbi1tYWxsZWFibGUgc2lncy4gZXh0cmFFbnRyb3B5IGZvciBtaXhpbmcgcmFuZG9tbmVzcyBpbnRvIGsuIHByZWhhc2ggd2lsbCBoYXNoIGZpcnN0IGFyZy5cbiAgICAgKiBAcmV0dXJucyBzaWduYXR1cmUgd2l0aCByZWNvdmVyeSBwYXJhbVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNpZ24obXNnSGFzaCwgcHJpdktleSwgb3B0cyA9IGRlZmF1bHRTaWdPcHRzKSB7XG4gICAgICAgIGNvbnN0IHsgc2VlZCwgazJzaWcgfSA9IHByZXBTaWcobXNnSGFzaCwgcHJpdktleSwgb3B0cyk7IC8vIFN0ZXBzIEEsIEQgb2YgUkZDNjk3OSAzLjIuXG4gICAgICAgIGNvbnN0IEMgPSBDVVJWRTtcbiAgICAgICAgY29uc3QgZHJiZyA9IHV0LmNyZWF0ZUhtYWNEcmJnKEMuaGFzaC5vdXRwdXRMZW4sIEMubkJ5dGVMZW5ndGgsIEMuaG1hYyk7XG4gICAgICAgIHJldHVybiBkcmJnKHNlZWQsIGsyc2lnKTsgLy8gU3RlcHMgQiwgQywgRCwgRSwgRiwgR1xuICAgIH1cbiAgICAvLyBFbmFibGUgcHJlY29tcHV0ZXMuIFNsb3dzIGRvd24gZmlyc3QgcHVibGljS2V5IGNvbXB1dGF0aW9uIGJ5IDIwbXMuXG4gICAgUG9pbnQuQkFTRS5fc2V0V2luZG93U2l6ZSg4KTtcbiAgICAvLyB1dGlscy5wcmVjb21wdXRlKDgsIFByb2plY3RpdmVQb2ludC5CQVNFKVxuICAgIC8qKlxuICAgICAqIFZlcmlmaWVzIGEgc2lnbmF0dXJlIGFnYWluc3QgbWVzc2FnZSBoYXNoIGFuZCBwdWJsaWMga2V5LlxuICAgICAqIFJlamVjdHMgbG93UyBzaWduYXR1cmVzIGJ5IGRlZmF1bHQ6IHRvIG92ZXJyaWRlLFxuICAgICAqIHNwZWNpZnkgb3B0aW9uIGB7bG93UzogZmFsc2V9YC4gSW1wbGVtZW50cyBzZWN0aW9uIDQuMS40IGZyb20gaHR0cHM6Ly93d3cuc2VjZy5vcmcvc2VjMS12Mi5wZGY6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiB2ZXJpZnkociwgcywgaCwgUCkgd2hlcmVcbiAgICAgKiAgIFUxID0gaHNeLTEgbW9kIG5cbiAgICAgKiAgIFUyID0gcnNeLTEgbW9kIG5cbiAgICAgKiAgIFIgPSBVMeKLhUcgLSBVMuKLhVBcbiAgICAgKiAgIG1vZChSLngsIG4pID09IHJcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB2ZXJpZnkoc2lnbmF0dXJlLCBtc2dIYXNoLCBwdWJsaWNLZXksIG9wdHMgPSBkZWZhdWx0VmVyT3B0cykge1xuICAgICAgICBjb25zdCBzZyA9IHNpZ25hdHVyZTtcbiAgICAgICAgbXNnSGFzaCA9IGVuc3VyZUJ5dGVzKCdtc2dIYXNoJywgbXNnSGFzaCk7XG4gICAgICAgIHB1YmxpY0tleSA9IGVuc3VyZUJ5dGVzKCdwdWJsaWNLZXknLCBwdWJsaWNLZXkpO1xuICAgICAgICBpZiAoJ3N0cmljdCcgaW4gb3B0cylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignb3B0aW9ucy5zdHJpY3Qgd2FzIHJlbmFtZWQgdG8gbG93UycpO1xuICAgICAgICB2YWxpZGF0ZVNpZ1Zlck9wdHMob3B0cyk7XG4gICAgICAgIGNvbnN0IHsgbG93UywgcHJlaGFzaCB9ID0gb3B0cztcbiAgICAgICAgbGV0IF9zaWcgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBQO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZyA9PT0gJ3N0cmluZycgfHwgdXQuaXNCeXRlcyhzZykpIHtcbiAgICAgICAgICAgICAgICAvLyBTaWduYXR1cmUgY2FuIGJlIHJlcHJlc2VudGVkIGluIDIgd2F5czogY29tcGFjdCAoMipuQnl0ZUxlbmd0aCkgJiBERVIgKHZhcmlhYmxlLWxlbmd0aCkuXG4gICAgICAgICAgICAgICAgLy8gU2luY2UgREVSIGNhbiBhbHNvIGJlIDIqbkJ5dGVMZW5ndGggYnl0ZXMsIHdlIGNoZWNrIGZvciBpdCBmaXJzdC5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2lnID0gU2lnbmF0dXJlLmZyb21ERVIoc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZGVyRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZGVyRXJyb3IgaW5zdGFuY2VvZiBERVIuRXJyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGRlckVycm9yO1xuICAgICAgICAgICAgICAgICAgICBfc2lnID0gU2lnbmF0dXJlLmZyb21Db21wYWN0KHNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2cgPT09ICdvYmplY3QnICYmIHR5cGVvZiBzZy5yID09PSAnYmlnaW50JyAmJiB0eXBlb2Ygc2cucyA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHIsIHMgfSA9IHNnO1xuICAgICAgICAgICAgICAgIF9zaWcgPSBuZXcgU2lnbmF0dXJlKHIsIHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQQVJTRScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUCA9IFBvaW50LmZyb21IZXgocHVibGljS2V5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSAnUEFSU0UnKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgc2lnbmF0dXJlIG11c3QgYmUgU2lnbmF0dXJlIGluc3RhbmNlLCBVaW50OEFycmF5IG9yIGhleCBzdHJpbmdgKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG93UyAmJiBfc2lnLmhhc0hpZ2hTKCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChwcmVoYXNoKVxuICAgICAgICAgICAgbXNnSGFzaCA9IENVUlZFLmhhc2gobXNnSGFzaCk7XG4gICAgICAgIGNvbnN0IHsgciwgcyB9ID0gX3NpZztcbiAgICAgICAgY29uc3QgaCA9IGJpdHMyaW50X21vZE4obXNnSGFzaCk7IC8vIENhbm5vdCB1c2UgZmllbGRzIG1ldGhvZHMsIHNpbmNlIGl0IGlzIGdyb3VwIGVsZW1lbnRcbiAgICAgICAgY29uc3QgaXMgPSBpbnZOKHMpOyAvLyBzXi0xXG4gICAgICAgIGNvbnN0IHUxID0gbW9kTihoICogaXMpOyAvLyB1MSA9IGhzXi0xIG1vZCBuXG4gICAgICAgIGNvbnN0IHUyID0gbW9kTihyICogaXMpOyAvLyB1MiA9IHJzXi0xIG1vZCBuXG4gICAgICAgIGNvbnN0IFIgPSBQb2ludC5CQVNFLm11bHRpcGx5QW5kQWRkVW5zYWZlKFAsIHUxLCB1Mik/LnRvQWZmaW5lKCk7IC8vIFIgPSB1MeKLhUcgKyB1MuKLhVBcbiAgICAgICAgaWYgKCFSKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCB2ID0gbW9kTihSLngpO1xuICAgICAgICByZXR1cm4gdiA9PT0gcjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgQ1VSVkUsXG4gICAgICAgIGdldFB1YmxpY0tleSxcbiAgICAgICAgZ2V0U2hhcmVkU2VjcmV0LFxuICAgICAgICBzaWduLFxuICAgICAgICB2ZXJpZnksXG4gICAgICAgIFByb2plY3RpdmVQb2ludDogUG9pbnQsXG4gICAgICAgIFNpZ25hdHVyZSxcbiAgICAgICAgdXRpbHMsXG4gICAgfTtcbn1cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFNoYWxsdWUgYW5kIHZhbiBkZSBXb2VzdGlqbmUgbWV0aG9kIGZvciBhbnkgd2VpZXJzdHJhc3MgY3VydmUuXG4gKiBUT0RPOiBjaGVjayBpZiB0aGVyZSBpcyBhIHdheSB0byBtZXJnZSB0aGlzIHdpdGggdXZSYXRpbyBpbiBFZHdhcmRzOyBtb3ZlIHRvIG1vZHVsYXIuXG4gKiBiID0gVHJ1ZSBhbmQgeSA9IHNxcnQodSAvIHYpIGlmICh1IC8gdikgaXMgc3F1YXJlIGluIEYsIGFuZFxuICogYiA9IEZhbHNlIGFuZCB5ID0gc3FydChaICogKHUgLyB2KSkgb3RoZXJ3aXNlLlxuICogQHBhcmFtIEZwXG4gKiBAcGFyYW0gWlxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNXVUZwU3FydFJhdGlvKEZwLCBaKSB7XG4gICAgLy8gR2VuZXJpYyBpbXBsZW1lbnRhdGlvblxuICAgIGNvbnN0IHEgPSBGcC5PUkRFUjtcbiAgICBsZXQgbCA9IF8wbjtcbiAgICBmb3IgKGxldCBvID0gcSAtIF8xbjsgbyAlIF8ybiA9PT0gXzBuOyBvIC89IF8ybilcbiAgICAgICAgbCArPSBfMW47XG4gICAgY29uc3QgYzEgPSBsOyAvLyAxLiBjMSwgdGhlIGxhcmdlc3QgaW50ZWdlciBzdWNoIHRoYXQgMl5jMSBkaXZpZGVzIHEgLSAxLlxuICAgIC8vIFdlIG5lZWQgMm4gKiogYzEgYW5kIDJuICoqIChjMS0xKS4gV2UgY2FuJ3QgdXNlICoqOyBidXQgd2UgY2FuIHVzZSA8PC5cbiAgICAvLyAybiAqKiBjMSA9PSAybiA8PCAoYzEtMSlcbiAgICBjb25zdCBfMm5fcG93X2MxXzEgPSBfMm4gPDwgKGMxIC0gXzFuIC0gXzFuKTtcbiAgICBjb25zdCBfMm5fcG93X2MxID0gXzJuX3Bvd19jMV8xICogXzJuO1xuICAgIGNvbnN0IGMyID0gKHEgLSBfMW4pIC8gXzJuX3Bvd19jMTsgLy8gMi4gYzIgPSAocSAtIDEpIC8gKDJeYzEpICAjIEludGVnZXIgYXJpdGhtZXRpY1xuICAgIGNvbnN0IGMzID0gKGMyIC0gXzFuKSAvIF8ybjsgLy8gMy4gYzMgPSAoYzIgLSAxKSAvIDIgICAgICAgICAgICAjIEludGVnZXIgYXJpdGhtZXRpY1xuICAgIGNvbnN0IGM0ID0gXzJuX3Bvd19jMSAtIF8xbjsgLy8gNC4gYzQgPSAyXmMxIC0gMSAgICAgICAgICAgICAgICAjIEludGVnZXIgYXJpdGhtZXRpY1xuICAgIGNvbnN0IGM1ID0gXzJuX3Bvd19jMV8xOyAvLyA1LiBjNSA9IDJeKGMxIC0gMSkgICAgICAgICAgICAgICAgICAjIEludGVnZXIgYXJpdGhtZXRpY1xuICAgIGNvbnN0IGM2ID0gRnAucG93KFosIGMyKTsgLy8gNi4gYzYgPSBaXmMyXG4gICAgY29uc3QgYzcgPSBGcC5wb3coWiwgKGMyICsgXzFuKSAvIF8ybik7IC8vIDcuIGM3ID0gWl4oKGMyICsgMSkgLyAyKVxuICAgIGxldCBzcXJ0UmF0aW8gPSAodSwgdikgPT4ge1xuICAgICAgICBsZXQgdHYxID0gYzY7IC8vIDEuIHR2MSA9IGM2XG4gICAgICAgIGxldCB0djIgPSBGcC5wb3codiwgYzQpOyAvLyAyLiB0djIgPSB2XmM0XG4gICAgICAgIGxldCB0djMgPSBGcC5zcXIodHYyKTsgLy8gMy4gdHYzID0gdHYyXjJcbiAgICAgICAgdHYzID0gRnAubXVsKHR2Mywgdik7IC8vIDQuIHR2MyA9IHR2MyAqIHZcbiAgICAgICAgbGV0IHR2NSA9IEZwLm11bCh1LCB0djMpOyAvLyA1LiB0djUgPSB1ICogdHYzXG4gICAgICAgIHR2NSA9IEZwLnBvdyh0djUsIGMzKTsgLy8gNi4gdHY1ID0gdHY1XmMzXG4gICAgICAgIHR2NSA9IEZwLm11bCh0djUsIHR2Mik7IC8vIDcuIHR2NSA9IHR2NSAqIHR2MlxuICAgICAgICB0djIgPSBGcC5tdWwodHY1LCB2KTsgLy8gOC4gdHYyID0gdHY1ICogdlxuICAgICAgICB0djMgPSBGcC5tdWwodHY1LCB1KTsgLy8gOS4gdHYzID0gdHY1ICogdVxuICAgICAgICBsZXQgdHY0ID0gRnAubXVsKHR2MywgdHYyKTsgLy8gMTAuIHR2NCA9IHR2MyAqIHR2MlxuICAgICAgICB0djUgPSBGcC5wb3codHY0LCBjNSk7IC8vIDExLiB0djUgPSB0djReYzVcbiAgICAgICAgbGV0IGlzUVIgPSBGcC5lcWwodHY1LCBGcC5PTkUpOyAvLyAxMi4gaXNRUiA9IHR2NSA9PSAxXG4gICAgICAgIHR2MiA9IEZwLm11bCh0djMsIGM3KTsgLy8gMTMuIHR2MiA9IHR2MyAqIGM3XG4gICAgICAgIHR2NSA9IEZwLm11bCh0djQsIHR2MSk7IC8vIDE0LiB0djUgPSB0djQgKiB0djFcbiAgICAgICAgdHYzID0gRnAuY21vdih0djIsIHR2MywgaXNRUik7IC8vIDE1LiB0djMgPSBDTU9WKHR2MiwgdHYzLCBpc1FSKVxuICAgICAgICB0djQgPSBGcC5jbW92KHR2NSwgdHY0LCBpc1FSKTsgLy8gMTYuIHR2NCA9IENNT1YodHY1LCB0djQsIGlzUVIpXG4gICAgICAgIC8vIDE3LiBmb3IgaSBpbiAoYzEsIGMxIC0gMSwgLi4uLCAyKTpcbiAgICAgICAgZm9yIChsZXQgaSA9IGMxOyBpID4gXzFuOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCB0djUgPSBpIC0gXzJuOyAvLyAxOC4gICAgdHY1ID0gaSAtIDJcbiAgICAgICAgICAgIHR2NSA9IF8ybiA8PCAodHY1IC0gXzFuKTsgLy8gMTkuICAgIHR2NSA9IDJedHY1XG4gICAgICAgICAgICBsZXQgdHZ2NSA9IEZwLnBvdyh0djQsIHR2NSk7IC8vIDIwLiAgICB0djUgPSB0djRedHY1XG4gICAgICAgICAgICBjb25zdCBlMSA9IEZwLmVxbCh0dnY1LCBGcC5PTkUpOyAvLyAyMS4gICAgZTEgPSB0djUgPT0gMVxuICAgICAgICAgICAgdHYyID0gRnAubXVsKHR2MywgdHYxKTsgLy8gMjIuICAgIHR2MiA9IHR2MyAqIHR2MVxuICAgICAgICAgICAgdHYxID0gRnAubXVsKHR2MSwgdHYxKTsgLy8gMjMuICAgIHR2MSA9IHR2MSAqIHR2MVxuICAgICAgICAgICAgdHZ2NSA9IEZwLm11bCh0djQsIHR2MSk7IC8vIDI0LiAgICB0djUgPSB0djQgKiB0djFcbiAgICAgICAgICAgIHR2MyA9IEZwLmNtb3YodHYyLCB0djMsIGUxKTsgLy8gMjUuICAgIHR2MyA9IENNT1YodHYyLCB0djMsIGUxKVxuICAgICAgICAgICAgdHY0ID0gRnAuY21vdih0dnY1LCB0djQsIGUxKTsgLy8gMjYuICAgIHR2NCA9IENNT1YodHY1LCB0djQsIGUxKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGlzVmFsaWQ6IGlzUVIsIHZhbHVlOiB0djMgfTtcbiAgICB9O1xuICAgIGlmIChGcC5PUkRFUiAlIF80biA9PT0gXzNuKSB7XG4gICAgICAgIC8vIHNxcnRfcmF0aW9fM21vZDQodSwgdilcbiAgICAgICAgY29uc3QgYzEgPSAoRnAuT1JERVIgLSBfM24pIC8gXzRuOyAvLyAxLiBjMSA9IChxIC0gMykgLyA0ICAgICAjIEludGVnZXIgYXJpdGhtZXRpY1xuICAgICAgICBjb25zdCBjMiA9IEZwLnNxcnQoRnAubmVnKFopKTsgLy8gMi4gYzIgPSBzcXJ0KC1aKVxuICAgICAgICBzcXJ0UmF0aW8gPSAodSwgdikgPT4ge1xuICAgICAgICAgICAgbGV0IHR2MSA9IEZwLnNxcih2KTsgLy8gMS4gdHYxID0gdl4yXG4gICAgICAgICAgICBjb25zdCB0djIgPSBGcC5tdWwodSwgdik7IC8vIDIuIHR2MiA9IHUgKiB2XG4gICAgICAgICAgICB0djEgPSBGcC5tdWwodHYxLCB0djIpOyAvLyAzLiB0djEgPSB0djEgKiB0djJcbiAgICAgICAgICAgIGxldCB5MSA9IEZwLnBvdyh0djEsIGMxKTsgLy8gNC4geTEgPSB0djFeYzFcbiAgICAgICAgICAgIHkxID0gRnAubXVsKHkxLCB0djIpOyAvLyA1LiB5MSA9IHkxICogdHYyXG4gICAgICAgICAgICBjb25zdCB5MiA9IEZwLm11bCh5MSwgYzIpOyAvLyA2LiB5MiA9IHkxICogYzJcbiAgICAgICAgICAgIGNvbnN0IHR2MyA9IEZwLm11bChGcC5zcXIoeTEpLCB2KTsgLy8gNy4gdHYzID0geTFeMjsgOC4gdHYzID0gdHYzICogdlxuICAgICAgICAgICAgY29uc3QgaXNRUiA9IEZwLmVxbCh0djMsIHUpOyAvLyA5LiBpc1FSID0gdHYzID09IHVcbiAgICAgICAgICAgIGxldCB5ID0gRnAuY21vdih5MiwgeTEsIGlzUVIpOyAvLyAxMC4geSA9IENNT1YoeTIsIHkxLCBpc1FSKVxuICAgICAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogaXNRUiwgdmFsdWU6IHkgfTsgLy8gMTEuIHJldHVybiAoaXNRUiwgeSkgaXNRUiA/IHkgOiB5KmMyXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIE5vIGN1cnZlcyB1c2VzIHRoYXRcbiAgICAvLyBpZiAoRnAuT1JERVIgJSBfOG4gPT09IF81bikgLy8gc3FydF9yYXRpb181bW9kOFxuICAgIHJldHVybiBzcXJ0UmF0aW87XG59XG4vKipcbiAqIFNpbXBsaWZpZWQgU2hhbGx1ZS12YW4gZGUgV29lc3Rpam5lLVVsYXMgTWV0aG9kXG4gKiBodHRwczovL3d3dy5yZmMtZWRpdG9yLm9yZy9yZmMvcmZjOTM4MCNzZWN0aW9uLTYuNi4yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb0N1cnZlU2ltcGxlU1dVKEZwLCBvcHRzKSB7XG4gICAgbW9kLnZhbGlkYXRlRmllbGQoRnApO1xuICAgIGlmICghRnAuaXNWYWxpZChvcHRzLkEpIHx8ICFGcC5pc1ZhbGlkKG9wdHMuQikgfHwgIUZwLmlzVmFsaWQob3B0cy5aKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXBUb0N1cnZlU2ltcGxlU1dVOiBpbnZhbGlkIG9wdHMnKTtcbiAgICBjb25zdCBzcXJ0UmF0aW8gPSBTV1VGcFNxcnRSYXRpbyhGcCwgb3B0cy5aKTtcbiAgICBpZiAoIUZwLmlzT2RkKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZwLmlzT2RkIGlzIG5vdCBpbXBsZW1lbnRlZCEnKTtcbiAgICAvLyBJbnB1dDogdSwgYW4gZWxlbWVudCBvZiBGLlxuICAgIC8vIE91dHB1dDogKHgsIHkpLCBhIHBvaW50IG9uIEUuXG4gICAgcmV0dXJuICh1KSA9PiB7XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBsZXQgdHYxLCB0djIsIHR2MywgdHY0LCB0djUsIHR2NiwgeCwgeTtcbiAgICAgICAgdHYxID0gRnAuc3FyKHUpOyAvLyAxLiAgdHYxID0gdV4yXG4gICAgICAgIHR2MSA9IEZwLm11bCh0djEsIG9wdHMuWik7IC8vIDIuICB0djEgPSBaICogdHYxXG4gICAgICAgIHR2MiA9IEZwLnNxcih0djEpOyAvLyAzLiAgdHYyID0gdHYxXjJcbiAgICAgICAgdHYyID0gRnAuYWRkKHR2MiwgdHYxKTsgLy8gNC4gIHR2MiA9IHR2MiArIHR2MVxuICAgICAgICB0djMgPSBGcC5hZGQodHYyLCBGcC5PTkUpOyAvLyA1LiAgdHYzID0gdHYyICsgMVxuICAgICAgICB0djMgPSBGcC5tdWwodHYzLCBvcHRzLkIpOyAvLyA2LiAgdHYzID0gQiAqIHR2M1xuICAgICAgICB0djQgPSBGcC5jbW92KG9wdHMuWiwgRnAubmVnKHR2MiksICFGcC5lcWwodHYyLCBGcC5aRVJPKSk7IC8vIDcuICB0djQgPSBDTU9WKFosIC10djIsIHR2MiAhPSAwKVxuICAgICAgICB0djQgPSBGcC5tdWwodHY0LCBvcHRzLkEpOyAvLyA4LiAgdHY0ID0gQSAqIHR2NFxuICAgICAgICB0djIgPSBGcC5zcXIodHYzKTsgLy8gOS4gIHR2MiA9IHR2M14yXG4gICAgICAgIHR2NiA9IEZwLnNxcih0djQpOyAvLyAxMC4gdHY2ID0gdHY0XjJcbiAgICAgICAgdHY1ID0gRnAubXVsKHR2Niwgb3B0cy5BKTsgLy8gMTEuIHR2NSA9IEEgKiB0djZcbiAgICAgICAgdHYyID0gRnAuYWRkKHR2MiwgdHY1KTsgLy8gMTIuIHR2MiA9IHR2MiArIHR2NVxuICAgICAgICB0djIgPSBGcC5tdWwodHYyLCB0djMpOyAvLyAxMy4gdHYyID0gdHYyICogdHYzXG4gICAgICAgIHR2NiA9IEZwLm11bCh0djYsIHR2NCk7IC8vIDE0LiB0djYgPSB0djYgKiB0djRcbiAgICAgICAgdHY1ID0gRnAubXVsKHR2Niwgb3B0cy5CKTsgLy8gMTUuIHR2NSA9IEIgKiB0djZcbiAgICAgICAgdHYyID0gRnAuYWRkKHR2MiwgdHY1KTsgLy8gMTYuIHR2MiA9IHR2MiArIHR2NVxuICAgICAgICB4ID0gRnAubXVsKHR2MSwgdHYzKTsgLy8gMTcuICAgeCA9IHR2MSAqIHR2M1xuICAgICAgICBjb25zdCB7IGlzVmFsaWQsIHZhbHVlIH0gPSBzcXJ0UmF0aW8odHYyLCB0djYpOyAvLyAxOC4gKGlzX2d4MV9zcXVhcmUsIHkxKSA9IHNxcnRfcmF0aW8odHYyLCB0djYpXG4gICAgICAgIHkgPSBGcC5tdWwodHYxLCB1KTsgLy8gMTkuICAgeSA9IHR2MSAqIHUgIC0+IFogKiB1XjMgKiB5MVxuICAgICAgICB5ID0gRnAubXVsKHksIHZhbHVlKTsgLy8gMjAuICAgeSA9IHkgKiB5MVxuICAgICAgICB4ID0gRnAuY21vdih4LCB0djMsIGlzVmFsaWQpOyAvLyAyMS4gICB4ID0gQ01PVih4LCB0djMsIGlzX2d4MV9zcXVhcmUpXG4gICAgICAgIHkgPSBGcC5jbW92KHksIHZhbHVlLCBpc1ZhbGlkKTsgLy8gMjIuICAgeSA9IENNT1YoeSwgeTEsIGlzX2d4MV9zcXVhcmUpXG4gICAgICAgIGNvbnN0IGUxID0gRnAuaXNPZGQodSkgPT09IEZwLmlzT2RkKHkpOyAvLyAyMy4gIGUxID0gc2duMCh1KSA9PSBzZ24wKHkpXG4gICAgICAgIHkgPSBGcC5jbW92KEZwLm5lZyh5KSwgeSwgZTEpOyAvLyAyNC4gICB5ID0gQ01PVigteSwgeSwgZTEpXG4gICAgICAgIHggPSBGcC5kaXYoeCwgdHY0KTsgLy8gMjUuICAgeCA9IHggLyB0djRcbiAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWllcnN0cmFzcy5qcy5tYXAiLCIvKiEgbm9ibGUtY3VydmVzIC0gTUlUIExpY2Vuc2UgKGMpIDIwMjIgUGF1bCBNaWxsZXIgKHBhdWxtaWxsci5jb20pICovXG5pbXBvcnQgeyBobWFjIH0gZnJvbSAnQG5vYmxlL2hhc2hlcy9obWFjJztcbmltcG9ydCB7IGNvbmNhdEJ5dGVzLCByYW5kb21CeXRlcyB9IGZyb20gJ0Bub2JsZS9oYXNoZXMvdXRpbHMnO1xuaW1wb3J0IHsgd2VpZXJzdHJhc3MgfSBmcm9tICcuL2Fic3RyYWN0L3dlaWVyc3RyYXNzLmpzJztcbi8vIGNvbm5lY3RzIG5vYmxlLWN1cnZlcyB0byBub2JsZS1oYXNoZXNcbmV4cG9ydCBmdW5jdGlvbiBnZXRIYXNoKGhhc2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYXNoLFxuICAgICAgICBobWFjOiAoa2V5LCAuLi5tc2dzKSA9PiBobWFjKGhhc2gsIGtleSwgY29uY2F0Qnl0ZXMoLi4ubXNncykpLFxuICAgICAgICByYW5kb21CeXRlcyxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1cnZlKGN1cnZlRGVmLCBkZWZIYXNoKSB7XG4gICAgY29uc3QgY3JlYXRlID0gKGhhc2gpID0+IHdlaWVyc3RyYXNzKHsgLi4uY3VydmVEZWYsIC4uLmdldEhhc2goaGFzaCkgfSk7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoeyAuLi5jcmVhdGUoZGVmSGFzaCksIGNyZWF0ZSB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9zaG9ydHdfdXRpbHMuanMubWFwIiwiLyohIG5vYmxlLWN1cnZlcyAtIE1JVCBMaWNlbnNlIChjKSAyMDIyIFBhdWwgTWlsbGVyIChwYXVsbWlsbHIuY29tKSAqL1xuaW1wb3J0IHsgc2hhMjU2IH0gZnJvbSAnQG5vYmxlL2hhc2hlcy9zaGEyNTYnO1xuaW1wb3J0IHsgcmFuZG9tQnl0ZXMgfSBmcm9tICdAbm9ibGUvaGFzaGVzL3V0aWxzJztcbmltcG9ydCB7IGNyZWF0ZUN1cnZlIH0gZnJvbSAnLi9fc2hvcnR3X3V0aWxzLmpzJztcbmltcG9ydCB7IGNyZWF0ZUhhc2hlciwgaXNvZ2VueU1hcCB9IGZyb20gJy4vYWJzdHJhY3QvaGFzaC10by1jdXJ2ZS5qcyc7XG5pbXBvcnQgeyBGaWVsZCwgbW9kLCBwb3cyIH0gZnJvbSAnLi9hYnN0cmFjdC9tb2R1bGFyLmpzJztcbmltcG9ydCB7IGluUmFuZ2UsIGFJblJhbmdlLCBieXRlc1RvTnVtYmVyQkUsIGNvbmNhdEJ5dGVzLCBlbnN1cmVCeXRlcywgbnVtYmVyVG9CeXRlc0JFLCB9IGZyb20gJy4vYWJzdHJhY3QvdXRpbHMuanMnO1xuaW1wb3J0IHsgbWFwVG9DdXJ2ZVNpbXBsZVNXVSB9IGZyb20gJy4vYWJzdHJhY3Qvd2VpZXJzdHJhc3MuanMnO1xuY29uc3Qgc2VjcDI1NmsxUCA9IEJpZ0ludCgnMHhmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZWZmZmZmYzJmJyk7XG5jb25zdCBzZWNwMjU2azFOID0gQmlnSW50KCcweGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlYmFhZWRjZTZhZjQ4YTAzYmJmZDI1ZThjZDAzNjQxNDEnKTtcbmNvbnN0IF8xbiA9IEJpZ0ludCgxKTtcbmNvbnN0IF8ybiA9IEJpZ0ludCgyKTtcbmNvbnN0IGRpdk5lYXJlc3QgPSAoYSwgYikgPT4gKGEgKyBiIC8gXzJuKSAvIGI7XG4vKipcbiAqIOKImm4gPSBuXigocCsxKS80KSBmb3IgZmllbGRzIHAgPSAzIG1vZCA0LiBXZSB1bndyYXAgdGhlIGxvb3AgYW5kIG11bHRpcGx5IGJpdC1ieS1iaXQuXG4gKiAoUCsxbi80bikudG9TdHJpbmcoMikgd291bGQgcHJvZHVjZSBiaXRzIFsyMjN4IDEsIDAsIDIyeCAxLCA0eCAwLCAxMSwgMDBdXG4gKi9cbmZ1bmN0aW9uIHNxcnRNb2QoeSkge1xuICAgIGNvbnN0IFAgPSBzZWNwMjU2azFQO1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIGNvbnN0IF8zbiA9IEJpZ0ludCgzKSwgXzZuID0gQmlnSW50KDYpLCBfMTFuID0gQmlnSW50KDExKSwgXzIybiA9IEJpZ0ludCgyMik7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgY29uc3QgXzIzbiA9IEJpZ0ludCgyMyksIF80NG4gPSBCaWdJbnQoNDQpLCBfODhuID0gQmlnSW50KDg4KTtcbiAgICBjb25zdCBiMiA9ICh5ICogeSAqIHkpICUgUDsgLy8geF4zLCAxMVxuICAgIGNvbnN0IGIzID0gKGIyICogYjIgKiB5KSAlIFA7IC8vIHheN1xuICAgIGNvbnN0IGI2ID0gKHBvdzIoYjMsIF8zbiwgUCkgKiBiMykgJSBQO1xuICAgIGNvbnN0IGI5ID0gKHBvdzIoYjYsIF8zbiwgUCkgKiBiMykgJSBQO1xuICAgIGNvbnN0IGIxMSA9IChwb3cyKGI5LCBfMm4sIFApICogYjIpICUgUDtcbiAgICBjb25zdCBiMjIgPSAocG93MihiMTEsIF8xMW4sIFApICogYjExKSAlIFA7XG4gICAgY29uc3QgYjQ0ID0gKHBvdzIoYjIyLCBfMjJuLCBQKSAqIGIyMikgJSBQO1xuICAgIGNvbnN0IGI4OCA9IChwb3cyKGI0NCwgXzQ0biwgUCkgKiBiNDQpICUgUDtcbiAgICBjb25zdCBiMTc2ID0gKHBvdzIoYjg4LCBfODhuLCBQKSAqIGI4OCkgJSBQO1xuICAgIGNvbnN0IGIyMjAgPSAocG93MihiMTc2LCBfNDRuLCBQKSAqIGI0NCkgJSBQO1xuICAgIGNvbnN0IGIyMjMgPSAocG93MihiMjIwLCBfM24sIFApICogYjMpICUgUDtcbiAgICBjb25zdCB0MSA9IChwb3cyKGIyMjMsIF8yM24sIFApICogYjIyKSAlIFA7XG4gICAgY29uc3QgdDIgPSAocG93Mih0MSwgXzZuLCBQKSAqIGIyKSAlIFA7XG4gICAgY29uc3Qgcm9vdCA9IHBvdzIodDIsIF8ybiwgUCk7XG4gICAgaWYgKCFGcC5lcWwoRnAuc3FyKHJvb3QpLCB5KSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBzcXVhcmUgcm9vdCcpO1xuICAgIHJldHVybiByb290O1xufVxuY29uc3QgRnAgPSBGaWVsZChzZWNwMjU2azFQLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgeyBzcXJ0OiBzcXJ0TW9kIH0pO1xuLyoqXG4gKiBzZWNwMjU2azEgc2hvcnQgd2VpZXJzdHJhc3MgY3VydmUgYW5kIEVDRFNBIHNpZ25hdHVyZXMgb3ZlciBpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY3AyNTZrMSA9IGNyZWF0ZUN1cnZlKHtcbiAgICBhOiBCaWdJbnQoMCksIC8vIGVxdWF0aW9uIHBhcmFtczogYSwgYlxuICAgIGI6IEJpZ0ludCg3KSwgLy8gU2VlbSB0byBiZSByaWdpZDogYml0Y29pbnRhbGsub3JnL2luZGV4LnBocD90b3BpYz0yODk3OTUubXNnMzE4Mzk3NSNtc2czMTgzOTc1XG4gICAgRnAsIC8vIEZpZWxkJ3MgcHJpbWU6IDJuKioyNTZuIC0gMm4qKjMybiAtIDJuKio5biAtIDJuKio4biAtIDJuKio3biAtIDJuKio2biAtIDJuKio0biAtIDFuXG4gICAgbjogc2VjcDI1NmsxTiwgLy8gQ3VydmUgb3JkZXIsIHRvdGFsIGNvdW50IG9mIHZhbGlkIHBvaW50cyBpbiB0aGUgZmllbGRcbiAgICAvLyBCYXNlIHBvaW50ICh4LCB5KSBha2EgZ2VuZXJhdG9yIHBvaW50XG4gICAgR3g6IEJpZ0ludCgnNTUwNjYyNjMwMjIyNzczNDM2Njk1Nzg3MTg4OTUxNjg1MzQzMjYyNTA2MDM0NTM3Nzc1OTQxNzU1MDAxODczNjAzODkxMTY3MjkyNDAnKSxcbiAgICBHeTogQmlnSW50KCczMjY3MDUxMDAyMDc1ODgxNjk3ODA4MzA4NTEzMDUwNzA0MzE4NDQ3MTI3MzM4MDY1OTI0MzI3NTkzODkwNDMzNTc1NzMzNzQ4MjQyNCcpLFxuICAgIGg6IEJpZ0ludCgxKSwgLy8gQ29mYWN0b3JcbiAgICBsb3dTOiB0cnVlLCAvLyBBbGxvdyBvbmx5IGxvdy1TIHNpZ25hdHVyZXMgYnkgZGVmYXVsdCBpbiBzaWduKCkgYW5kIHZlcmlmeSgpXG4gICAgLyoqXG4gICAgICogc2VjcDI1NmsxIGJlbG9uZ3MgdG8gS29ibGl0eiBjdXJ2ZXM6IGl0IGhhcyBlZmZpY2llbnRseSBjb21wdXRhYmxlIGVuZG9tb3JwaGlzbS5cbiAgICAgKiBFbmRvbW9ycGhpc20gdXNlcyAyeCBsZXNzIFJBTSwgc3BlZWRzIHVwIHByZWNvbXB1dGF0aW9uIGJ5IDJ4IGFuZCBFQ0RIIC8ga2V5IHJlY292ZXJ5IGJ5IDIwJS5cbiAgICAgKiBGb3IgcHJlY29tcHV0ZWQgd05BRiBpdCB0cmFkZXMgb2ZmIDEvMiBpbml0IHRpbWUgJiAxLzMgcmFtIGZvciAyMCUgcGVyZiBoaXQuXG4gICAgICogRXhwbGFuYXRpb246IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxtaWxsci9lYjY3MDgwNjc5M2U4NGRmNjI4YTdjNDM0YTg3MzA2NlxuICAgICAqL1xuICAgIGVuZG86IHtcbiAgICAgICAgYmV0YTogQmlnSW50KCcweDdhZTk2YTJiNjU3YzA3MTA2ZTY0NDc5ZWFjMzQzNGU5OWNmMDQ5NzUxMmY1ODk5NWMxMzk2YzI4NzE5NTAxZWUnKSxcbiAgICAgICAgc3BsaXRTY2FsYXI6IChrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuID0gc2VjcDI1NmsxTjtcbiAgICAgICAgICAgIGNvbnN0IGExID0gQmlnSW50KCcweDMwODZkMjIxYTdkNDZiY2RlODZjOTBlNDkyODRlYjE1Jyk7XG4gICAgICAgICAgICBjb25zdCBiMSA9IC1fMW4gKiBCaWdJbnQoJzB4ZTQ0MzdlZDYwMTBlODgyODZmNTQ3ZmE5MGFiZmU0YzMnKTtcbiAgICAgICAgICAgIGNvbnN0IGEyID0gQmlnSW50KCcweDExNGNhNTBmN2E4ZTJmM2Y2NTdjMTEwOGQ5ZDQ0Y2ZkOCcpO1xuICAgICAgICAgICAgY29uc3QgYjIgPSBhMTtcbiAgICAgICAgICAgIGNvbnN0IFBPV18yXzEyOCA9IEJpZ0ludCgnMHgxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnKTsgLy8gKDJuKioxMjhuKS50b1N0cmluZygxNilcbiAgICAgICAgICAgIGNvbnN0IGMxID0gZGl2TmVhcmVzdChiMiAqIGssIG4pO1xuICAgICAgICAgICAgY29uc3QgYzIgPSBkaXZOZWFyZXN0KC1iMSAqIGssIG4pO1xuICAgICAgICAgICAgbGV0IGsxID0gbW9kKGsgLSBjMSAqIGExIC0gYzIgKiBhMiwgbik7XG4gICAgICAgICAgICBsZXQgazIgPSBtb2QoLWMxICogYjEgLSBjMiAqIGIyLCBuKTtcbiAgICAgICAgICAgIGNvbnN0IGsxbmVnID0gazEgPiBQT1dfMl8xMjg7XG4gICAgICAgICAgICBjb25zdCBrMm5lZyA9IGsyID4gUE9XXzJfMTI4O1xuICAgICAgICAgICAgaWYgKGsxbmVnKVxuICAgICAgICAgICAgICAgIGsxID0gbiAtIGsxO1xuICAgICAgICAgICAgaWYgKGsybmVnKVxuICAgICAgICAgICAgICAgIGsyID0gbiAtIGsyO1xuICAgICAgICAgICAgaWYgKGsxID4gUE9XXzJfMTI4IHx8IGsyID4gUE9XXzJfMTI4KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzcGxpdFNjYWxhcjogRW5kb21vcnBoaXNtIGZhaWxlZCwgaz0nICsgayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBrMW5lZywgazEsIGsybmVnLCBrMiB9O1xuICAgICAgICB9LFxuICAgIH0sXG59LCBzaGEyNTYpO1xuLy8gU2Nobm9yciBzaWduYXR1cmVzIGFyZSBzdXBlcmlvciB0byBFQ0RTQSBmcm9tIGFib3ZlLiBCZWxvdyBpcyBTY2hub3JyLXNwZWNpZmljIEJJUDAzNDAgY29kZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iaXRjb2luL2JpcHMvYmxvYi9tYXN0ZXIvYmlwLTAzNDAubWVkaWF3aWtpXG5jb25zdCBfMG4gPSBCaWdJbnQoMCk7XG4vKiogQW4gb2JqZWN0IG1hcHBpbmcgdGFncyB0byB0aGVpciB0YWdnZWQgaGFzaCBwcmVmaXggb2YgW1NIQTI1Nih0YWcpIHwgU0hBMjU2KHRhZyldICovXG5jb25zdCBUQUdHRURfSEFTSF9QUkVGSVhFUyA9IHt9O1xuZnVuY3Rpb24gdGFnZ2VkSGFzaCh0YWcsIC4uLm1lc3NhZ2VzKSB7XG4gICAgbGV0IHRhZ1AgPSBUQUdHRURfSEFTSF9QUkVGSVhFU1t0YWddO1xuICAgIGlmICh0YWdQID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdGFnSCA9IHNoYTI1NihVaW50OEFycmF5LmZyb20odGFnLCAoYykgPT4gYy5jaGFyQ29kZUF0KDApKSk7XG4gICAgICAgIHRhZ1AgPSBjb25jYXRCeXRlcyh0YWdILCB0YWdIKTtcbiAgICAgICAgVEFHR0VEX0hBU0hfUFJFRklYRVNbdGFnXSA9IHRhZ1A7XG4gICAgfVxuICAgIHJldHVybiBzaGEyNTYoY29uY2F0Qnl0ZXModGFnUCwgLi4ubWVzc2FnZXMpKTtcbn1cbi8vIEVDRFNBIGNvbXBhY3QgcG9pbnRzIGFyZSAzMy1ieXRlLiBTY2hub3JyIGlzIDMyOiB3ZSBzdHJpcCBmaXJzdCBieXRlIDB4MDIgb3IgMHgwM1xuY29uc3QgcG9pbnRUb0J5dGVzID0gKHBvaW50KSA9PiBwb2ludC50b1Jhd0J5dGVzKHRydWUpLnNsaWNlKDEpO1xuY29uc3QgbnVtVG8zMmIgPSAobikgPT4gbnVtYmVyVG9CeXRlc0JFKG4sIDMyKTtcbmNvbnN0IG1vZFAgPSAoeCkgPT4gbW9kKHgsIHNlY3AyNTZrMVApO1xuY29uc3QgbW9kTiA9ICh4KSA9PiBtb2QoeCwgc2VjcDI1NmsxTik7XG5jb25zdCBQb2ludCA9IHNlY3AyNTZrMS5Qcm9qZWN0aXZlUG9pbnQ7XG5jb25zdCBHbXVsQWRkID0gKFEsIGEsIGIpID0+IFBvaW50LkJBU0UubXVsdGlwbHlBbmRBZGRVbnNhZmUoUSwgYSwgYik7XG4vLyBDYWxjdWxhdGUgcG9pbnQsIHNjYWxhciBhbmQgYnl0ZXNcbmZ1bmN0aW9uIHNjaG5vcnJHZXRFeHRQdWJLZXkocHJpdikge1xuICAgIGxldCBkXyA9IHNlY3AyNTZrMS51dGlscy5ub3JtUHJpdmF0ZUtleVRvU2NhbGFyKHByaXYpOyAvLyBzYW1lIG1ldGhvZCBleGVjdXRlZCBpbiBmcm9tUHJpdmF0ZUtleVxuICAgIGxldCBwID0gUG9pbnQuZnJvbVByaXZhdGVLZXkoZF8pOyAvLyBQID0gZCfii4VHOyAwIDwgZCcgPCBuIGNoZWNrIGlzIGRvbmUgaW5zaWRlXG4gICAgY29uc3Qgc2NhbGFyID0gcC5oYXNFdmVuWSgpID8gZF8gOiBtb2ROKC1kXyk7XG4gICAgcmV0dXJuIHsgc2NhbGFyOiBzY2FsYXIsIGJ5dGVzOiBwb2ludFRvQnl0ZXMocCkgfTtcbn1cbi8qKlxuICogbGlmdF94IGZyb20gQklQMzQwLiBDb252ZXJ0IDMyLWJ5dGUgeCBjb29yZGluYXRlIHRvIGVsbGlwdGljIGN1cnZlIHBvaW50LlxuICogQHJldHVybnMgdmFsaWQgcG9pbnQgY2hlY2tlZCBmb3IgYmVpbmcgb24tY3VydmVcbiAqL1xuZnVuY3Rpb24gbGlmdF94KHgpIHtcbiAgICBhSW5SYW5nZSgneCcsIHgsIF8xbiwgc2VjcDI1NmsxUCk7IC8vIEZhaWwgaWYgeCDiiaUgcC5cbiAgICBjb25zdCB4eCA9IG1vZFAoeCAqIHgpO1xuICAgIGNvbnN0IGMgPSBtb2RQKHh4ICogeCArIEJpZ0ludCg3KSk7IC8vIExldCBjID0geMKzICsgNyBtb2QgcC5cbiAgICBsZXQgeSA9IHNxcnRNb2QoYyk7IC8vIExldCB5ID0gY14ocCsxKS80IG1vZCBwLlxuICAgIGlmICh5ICUgXzJuICE9PSBfMG4pXG4gICAgICAgIHkgPSBtb2RQKC15KTsgLy8gUmV0dXJuIHRoZSB1bmlxdWUgcG9pbnQgUCBzdWNoIHRoYXQgeChQKSA9IHggYW5kXG4gICAgY29uc3QgcCA9IG5ldyBQb2ludCh4LCB5LCBfMW4pOyAvLyB5KFApID0geSBpZiB5IG1vZCAyID0gMCBvciB5KFApID0gcC15IG90aGVyd2lzZS5cbiAgICBwLmFzc2VydFZhbGlkaXR5KCk7XG4gICAgcmV0dXJuIHA7XG59XG5jb25zdCBudW0gPSBieXRlc1RvTnVtYmVyQkU7XG4vKipcbiAqIENyZWF0ZSB0YWdnZWQgaGFzaCwgY29udmVydCBpdCB0byBiaWdpbnQsIHJlZHVjZSBtb2R1bG8tbi5cbiAqL1xuZnVuY3Rpb24gY2hhbGxlbmdlKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbW9kTihudW0odGFnZ2VkSGFzaCgnQklQMDM0MC9jaGFsbGVuZ2UnLCAuLi5hcmdzKSkpO1xufVxuLyoqXG4gKiBTY2hub3JyIHB1YmxpYyBrZXkgaXMganVzdCBgeGAgY29vcmRpbmF0ZSBvZiBQb2ludCBhcyBwZXIgQklQMzQwLlxuICovXG5mdW5jdGlvbiBzY2hub3JyR2V0UHVibGljS2V5KHByaXZhdGVLZXkpIHtcbiAgICByZXR1cm4gc2Nobm9yckdldEV4dFB1YktleShwcml2YXRlS2V5KS5ieXRlczsgLy8gZCc9aW50KHNrKS4gRmFpbCBpZiBkJz0wIG9yIGQn4omlbi4gUmV0IGJ5dGVzKGQn4ouFRylcbn1cbi8qKlxuICogQ3JlYXRlcyBTY2hub3JyIHNpZ25hdHVyZSBhcyBwZXIgQklQMzQwLiBWZXJpZmllcyBpdHNlbGYgYmVmb3JlIHJldHVybmluZyBhbnl0aGluZy5cbiAqIGF1eFJhbmQgaXMgb3B0aW9uYWwgYW5kIGlzIG5vdCB0aGUgc29sZSBzb3VyY2Ugb2YgayBnZW5lcmF0aW9uOiBiYWQgQ1NQUk5HIHdvbid0IGJlIGRhbmdlcm91cy5cbiAqL1xuZnVuY3Rpb24gc2Nobm9yclNpZ24obWVzc2FnZSwgcHJpdmF0ZUtleSwgYXV4UmFuZCA9IHJhbmRvbUJ5dGVzKDMyKSkge1xuICAgIGNvbnN0IG0gPSBlbnN1cmVCeXRlcygnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgIGNvbnN0IHsgYnl0ZXM6IHB4LCBzY2FsYXI6IGQgfSA9IHNjaG5vcnJHZXRFeHRQdWJLZXkocHJpdmF0ZUtleSk7IC8vIGNoZWNrcyBmb3IgaXNXaXRoaW5DdXJ2ZU9yZGVyXG4gICAgY29uc3QgYSA9IGVuc3VyZUJ5dGVzKCdhdXhSYW5kJywgYXV4UmFuZCwgMzIpOyAvLyBBdXhpbGlhcnkgcmFuZG9tIGRhdGEgYTogYSAzMi1ieXRlIGFycmF5XG4gICAgY29uc3QgdCA9IG51bVRvMzJiKGQgXiBudW0odGFnZ2VkSGFzaCgnQklQMDM0MC9hdXgnLCBhKSkpOyAvLyBMZXQgdCBiZSB0aGUgYnl0ZS13aXNlIHhvciBvZiBieXRlcyhkKSBhbmQgaGFzaC9hdXgoYSlcbiAgICBjb25zdCByYW5kID0gdGFnZ2VkSGFzaCgnQklQMDM0MC9ub25jZScsIHQsIHB4LCBtKTsgLy8gTGV0IHJhbmQgPSBoYXNoL25vbmNlKHQgfHwgYnl0ZXMoUCkgfHwgbSlcbiAgICBjb25zdCBrXyA9IG1vZE4obnVtKHJhbmQpKTsgLy8gTGV0IGsnID0gaW50KHJhbmQpIG1vZCBuXG4gICAgaWYgKGtfID09PSBfMG4pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc2lnbiBmYWlsZWQ6IGsgaXMgemVybycpOyAvLyBGYWlsIGlmIGsnID0gMC5cbiAgICBjb25zdCB7IGJ5dGVzOiByeCwgc2NhbGFyOiBrIH0gPSBzY2hub3JyR2V0RXh0UHViS2V5KGtfKTsgLy8gTGV0IFIgPSBrJ+KLhUcuXG4gICAgY29uc3QgZSA9IGNoYWxsZW5nZShyeCwgcHgsIG0pOyAvLyBMZXQgZSA9IGludChoYXNoL2NoYWxsZW5nZShieXRlcyhSKSB8fCBieXRlcyhQKSB8fCBtKSkgbW9kIG4uXG4gICAgY29uc3Qgc2lnID0gbmV3IFVpbnQ4QXJyYXkoNjQpOyAvLyBMZXQgc2lnID0gYnl0ZXMoUikgfHwgYnl0ZXMoKGsgKyBlZCkgbW9kIG4pLlxuICAgIHNpZy5zZXQocngsIDApO1xuICAgIHNpZy5zZXQobnVtVG8zMmIobW9kTihrICsgZSAqIGQpKSwgMzIpO1xuICAgIC8vIElmIFZlcmlmeShieXRlcyhQKSwgbSwgc2lnKSAoc2VlIGJlbG93KSByZXR1cm5zIGZhaWx1cmUsIGFib3J0XG4gICAgaWYgKCFzY2hub3JyVmVyaWZ5KHNpZywgbSwgcHgpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NpZ246IEludmFsaWQgc2lnbmF0dXJlIHByb2R1Y2VkJyk7XG4gICAgcmV0dXJuIHNpZztcbn1cbi8qKlxuICogVmVyaWZpZXMgU2Nobm9yciBzaWduYXR1cmUuXG4gKiBXaWxsIHN3YWxsb3cgZXJyb3JzICYgcmV0dXJuIGZhbHNlIGV4Y2VwdCBmb3IgaW5pdGlhbCB0eXBlIHZhbGlkYXRpb24gb2YgYXJndW1lbnRzLlxuICovXG5mdW5jdGlvbiBzY2hub3JyVmVyaWZ5KHNpZ25hdHVyZSwgbWVzc2FnZSwgcHVibGljS2V5KSB7XG4gICAgY29uc3Qgc2lnID0gZW5zdXJlQnl0ZXMoJ3NpZ25hdHVyZScsIHNpZ25hdHVyZSwgNjQpO1xuICAgIGNvbnN0IG0gPSBlbnN1cmVCeXRlcygnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgIGNvbnN0IHB1YiA9IGVuc3VyZUJ5dGVzKCdwdWJsaWNLZXknLCBwdWJsaWNLZXksIDMyKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBQID0gbGlmdF94KG51bShwdWIpKTsgLy8gUCA9IGxpZnRfeChpbnQocGspKTsgZmFpbCBpZiB0aGF0IGZhaWxzXG4gICAgICAgIGNvbnN0IHIgPSBudW0oc2lnLnN1YmFycmF5KDAsIDMyKSk7IC8vIExldCByID0gaW50KHNpZ1swOjMyXSk7IGZhaWwgaWYgciDiiaUgcC5cbiAgICAgICAgaWYgKCFpblJhbmdlKHIsIF8xbiwgc2VjcDI1NmsxUCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHMgPSBudW0oc2lnLnN1YmFycmF5KDMyLCA2NCkpOyAvLyBMZXQgcyA9IGludChzaWdbMzI6NjRdKTsgZmFpbCBpZiBzIOKJpSBuLlxuICAgICAgICBpZiAoIWluUmFuZ2UocywgXzFuLCBzZWNwMjU2azFOKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgZSA9IGNoYWxsZW5nZShudW1UbzMyYihyKSwgcG9pbnRUb0J5dGVzKFApLCBtKTsgLy8gaW50KGNoYWxsZW5nZShieXRlcyhyKXx8Ynl0ZXMoUCl8fG0pKSVuXG4gICAgICAgIGNvbnN0IFIgPSBHbXVsQWRkKFAsIHMsIG1vZE4oLWUpKTsgLy8gUiA9IHPii4VHIC0gZeKLhVBcbiAgICAgICAgaWYgKCFSIHx8ICFSLmhhc0V2ZW5ZKCkgfHwgUi50b0FmZmluZSgpLnggIT09IHIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIC1lUCA9PSAobi1lKVBcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIEZhaWwgaWYgaXNfaW5maW5pdGUoUikgLyBub3QgaGFzX2V2ZW5feShSKSAvIHgoUikg4omgIHIuXG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLyoqXG4gKiBTY2hub3JyIHNpZ25hdHVyZXMgb3ZlciBzZWNwMjU2azEuXG4gKi9cbmV4cG9ydCBjb25zdCBzY2hub3JyID0gLyogQF9fUFVSRV9fICovICgoKSA9PiAoe1xuICAgIGdldFB1YmxpY0tleTogc2Nobm9yckdldFB1YmxpY0tleSxcbiAgICBzaWduOiBzY2hub3JyU2lnbixcbiAgICB2ZXJpZnk6IHNjaG5vcnJWZXJpZnksXG4gICAgdXRpbHM6IHtcbiAgICAgICAgcmFuZG9tUHJpdmF0ZUtleTogc2VjcDI1NmsxLnV0aWxzLnJhbmRvbVByaXZhdGVLZXksXG4gICAgICAgIGxpZnRfeCxcbiAgICAgICAgcG9pbnRUb0J5dGVzLFxuICAgICAgICBudW1iZXJUb0J5dGVzQkUsXG4gICAgICAgIGJ5dGVzVG9OdW1iZXJCRSxcbiAgICAgICAgdGFnZ2VkSGFzaCxcbiAgICAgICAgbW9kLFxuICAgIH0sXG59KSkoKTtcbmNvbnN0IGlzb01hcCA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4gaXNvZ2VueU1hcChGcCwgW1xuICAgIC8vIHhOdW1cbiAgICBbXG4gICAgICAgICcweDhlMzhlMzhlMzhlMzhlMzhlMzhlMzhlMzhlMzhlMzhlMzhlMzhlMzhlMzhlMzhlMzhlMzhlMzhkYWFhYWE4YzcnLFxuICAgICAgICAnMHg3ZDNkNGM4MGJjMzIxZDViOWYzMTVjZWE3ZmQ0NGM1ZDU5NWQyZmMwYmY2M2I5MmRmZmYxMDQ0ZjE3YzY1ODEnLFxuICAgICAgICAnMHg1MzRjMzI4ZDIzZjIzNGU2ZTJhNDEzZGVjYTI1Y2FlY2U0NTA2MTQ0MDM3YzQwMzE0ZWNiZDBiNTNkOWRkMjYyJyxcbiAgICAgICAgJzB4OGUzOGUzOGUzOGUzOGUzOGUzOGUzOGUzOGUzOGUzOGUzOGUzOGUzOGUzOGUzOGUzOGUzOGUzOGRhYWFhYTg4YycsXG4gICAgXSxcbiAgICAvLyB4RGVuXG4gICAgW1xuICAgICAgICAnMHhkMzU3NzExOTNkOTQ5MThhOWNhMzRjY2JiN2I2NDBkZDg2Y2Q0MDk1NDJmODQ4N2Q5ZmU2Yjc0NTc4MWViNDliJyxcbiAgICAgICAgJzB4ZWRhZGM2ZjY0MzgzZGMxZGY3YzRiMmQ1MWI1NDIyNTQwNmQzNmI2NDFmNWU0MWJiYzUyYTU2NjEyYThjNmQxNCcsXG4gICAgICAgICcweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEnLCAvLyBMQVNUIDFcbiAgICBdLFxuICAgIC8vIHlOdW1cbiAgICBbXG4gICAgICAgICcweDRiZGExMmY2ODRiZGExMmY2ODRiZGExMmY2ODRiZGExMmY2ODRiZGExMmY2ODRiZGExMmY2ODRiOGUzOGUyM2MnLFxuICAgICAgICAnMHhjNzVlMGMzMmQ1Y2I3YzBmYTlkMGE1NGIxMmEwYTZkNTY0N2FiMDQ2ZDY4NmRhNmZkZmZjOTBmYzIwMWQ3MWEzJyxcbiAgICAgICAgJzB4MjlhNjE5NDY5MWY5MWE3MzcxNTIwOWVmNjUxMmU1NzY3MjI4MzBhMjAxYmUyMDE4YTc2NWU4NWE5ZWNlZTkzMScsXG4gICAgICAgICcweDJmNjg0YmRhMTJmNjg0YmRhMTJmNjg0YmRhMTJmNjg0YmRhMTJmNjg0YmRhMTJmNjg0YmRhMTJmMzhlMzhkODQnLFxuICAgIF0sXG4gICAgLy8geURlblxuICAgIFtcbiAgICAgICAgJzB4ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmVmZmZmZjkzYicsXG4gICAgICAgICcweDdhMDY1MzRiYjhiZGI0OWZkNWU5ZTY2MzI3MjJjMjk4OTQ2N2MxYmZjOGU4ZDk3OGRmYjQyNWQyNjg1YzI1NzMnLFxuICAgICAgICAnMHg2NDg0YWE3MTY1NDVjYTJjZjNhNzBjM2ZhOGZlMzM3ZTBhM2QyMTE2MmYwZDYyOTlhN2JmODE5MmJmZDJhNzZmJyxcbiAgICAgICAgJzB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMScsIC8vIExBU1QgMVxuICAgIF0sXG5dLm1hcCgoaSkgPT4gaS5tYXAoKGopID0+IEJpZ0ludChqKSkpKSkoKTtcbmNvbnN0IG1hcFNXVSA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4gbWFwVG9DdXJ2ZVNpbXBsZVNXVShGcCwge1xuICAgIEE6IEJpZ0ludCgnMHgzZjg3MzFhYmRkNjYxYWRjYTA4YTU1NThmMGY1ZDI3MmU5NTNkMzYzY2I2ZjBlNWQ0MDU0NDdjMDFhNDQ0NTMzJyksXG4gICAgQjogQmlnSW50KCcxNzcxJyksXG4gICAgWjogRnAuY3JlYXRlKEJpZ0ludCgnLTExJykpLFxufSkpKCk7XG5jb25zdCBodGYgPSAvKiBAX19QVVJFX18gKi8gKCgpID0+IGNyZWF0ZUhhc2hlcihzZWNwMjU2azEuUHJvamVjdGl2ZVBvaW50LCAoc2NhbGFycykgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gbWFwU1dVKEZwLmNyZWF0ZShzY2FsYXJzWzBdKSk7XG4gICAgcmV0dXJuIGlzb01hcCh4LCB5KTtcbn0sIHtcbiAgICBEU1Q6ICdzZWNwMjU2azFfWE1EOlNIQS0yNTZfU1NXVV9ST18nLFxuICAgIGVuY29kZURTVDogJ3NlY3AyNTZrMV9YTUQ6U0hBLTI1Nl9TU1dVX05VXycsXG4gICAgcDogRnAuT1JERVIsXG4gICAgbTogMSxcbiAgICBrOiAxMjgsXG4gICAgZXhwYW5kOiAneG1kJyxcbiAgICBoYXNoOiBzaGEyNTYsXG59KSkoKTtcbmV4cG9ydCBjb25zdCBoYXNoVG9DdXJ2ZSA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4gaHRmLmhhc2hUb0N1cnZlKSgpO1xuZXhwb3J0IGNvbnN0IGVuY29kZVRvQ3VydmUgPSAvKiBAX19QVVJFX18gKi8gKCgpID0+IGh0Zi5lbmNvZGVUb0N1cnZlKSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VjcDI1NmsxLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==