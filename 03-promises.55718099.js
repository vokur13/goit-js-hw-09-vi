function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequire0e00;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequire0e00=i);var l=i("eWCmQ");const s={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),btn:document.querySelector('[type="submit"]')};s.form.addEventListener("submit",(function(o){o.preventDefault();const n=Number(s.delay.value);(t=0,i=n,new Promise(((e,o)=>{const n=Math.random()>.3;setTimeout((()=>{t+=1,n?e({position:t,delay:i}):o({position:t,delay:i})}),i)}))).then((({position:o,delay:n})=>(console.log(`✅ Fulfilled promise ${o} in ${n}ms`),e(l).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`),{position:o,delay:n})),(({position:o,delay:n})=>(console.log(`❌ Rejected promise ${o} in ${n}ms`),e(l).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`),{position:o,delay:n}))).then((({position:o,delay:n})=>(function(o,n){new Promise(((t,i)=>{const r=Number(s.step.value),a=Number(s.amount.value);let d=setInterval((()=>{const s=Math.random()>.3;o+=1,n+=r,s?(t({position:o,delay:n}),console.log(`✅ Fulfilled promise ${o} in ${n}ms`),e(l).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)):(i({position:o,delay:n}),console.log(`❌ Rejected promise ${o} in ${n}ms`),e(l).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)),o===a&&clearInterval(d)}),r)}))}(o,n),{position:o,delay:n}))).catch((({position:o,delay:n})=>{console.log(`❌ Rejected promise ${o} in ${n}ms`),e(l).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}));var t,i}));
//# sourceMappingURL=03-promises.55718099.js.map
