(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{handler:()=>P});const o=e=>(...t)=>0===t.length?e():t.reduce(((e,t)=>e(t)),e),n=o((e=>t=>e===t)),i=o((e=>t=>e!==t)),a=(o((e=>t=>n(b(e))(b(t)))),o((e=>t=>i(b(e))(b(t)))),n(!0),n(!1),o((e=>t=>t>e)),o((e=>t=>t<e)),o((e=>t=>t>=e)),o((e=>t=>t<=e)),o((e=>t=>n(g(t))(e)))),r=o((e=>t=>i(g(t))(e))),s=a("string"),h=(r("string"),a("boolean"),r("boolean"),n(null)),l=(i(null),a("undefined")),u=(r("undefined"),a("number"),r("number"),a("object")),d=(r("object"),Array.isArray),y=a("function"),c=(r("function"),o((e=>t=>n(p(t))(e)))),m=(o((e=>t=>!c(e)(t))),n(0),i(0),o((e=>t=>t.map(e)))),g=(o((e=>t=>t.flatMap(e))),o((e=>t=>o=>t.map(e).ap(o))),o((e=>t=>o=>n=>t.map(e).ap(o).ap(n))),o((e=>t=>s(t)||d(t)?t.concat(e):u(t)?{...t,...e}:void 0)),o((e=>t=>t.includes(e))),o((e=>t=>w(t.indexOf(e)))),o((e=>t=>w(t.lastIndexOf(e)))),o((e=>t=>o=>o in e?e[o]:f((t=>e[o]=t))(t(o)))),e=>typeof e),p=e=>e.length,f=o((e=>t=>(e(t),t))),w=(f(console.log),f((e=>console.log(b(e)))),e=>n(-1)(e)?void 0:e),b=e=>{return l(e)?"undefined":h(e)?"null":y(e)?(t=e).name?t.name:String(t):d(e)?(e=>`[${I(", ")(m(b)(e))}]`)(e):u(e)?(e=>y(e.inspect)?e.inspect():`{${I(", ")(m(I(": "))(m((t=>[t,b(e[t])]))(T(e))))}}`)(e):s(e)?(e=>`'${e}'`)(e):String(e);var t},v=(o((e=>t=>e.test(t))),o((e=>t=>o=>o.substr(t,e))),o((e=>t=>t.startsWith(e))),o((e=>t=>t.endsWith(e))),o((e=>t=>t.repeat(e))),o((e=>t=>o=>o.replace(t,e))),o((e=>t=>w(t.search(e)))),o((e=>t=>t.split(e))),e=>e.toUpperCase()),k=o((e=>t=>o=>o.reduce(t,e))),I=(o((e=>t=>o=>o.reduceRight(t,e))),o((e=>t=>t.filter(e))),o((e=>t=>o=>k([])(((o,n)=>e(n)?o.push(t(n))&&o:o))(o))),o((e=>t=>t.find(e))),o((e=>t=>w(t.findIndex(e)))),o((e=>t=>t.join(e)))),T=Object.keys,j=(Object.entries,o((e=>t=>t.every(e))),o((e=>t=>o=>o.slice(t,e))),o((e=>t=>t.some(e))),o((e=>t=>[...t].sort(e)))),x=(j(((e,t)=>(e=>t=>e<t?-1:e>t?1:0)(v(e))(v(t)))),j(((e,t)=>(e=>t=>e<t?1:e>t?-1:0)(v(e))(v(t)))),j(((e,t)=>e-t)),j(((e,t)=>t-e)),o((e=>t=>k({})(((t,o)=>(t[e(o)]=t[e(o)]||[]).push(o)&&t))(t))),e=>e[Math.floor(Math.random()*p(e))]);o((e=>t=>o=>o.isNothing()?e():t(o.value))),o((e=>t=>o=>o.isFailure()?e(o.value):t(o.value)));const O={"Steve Jobs":["Innovation distinguishes between a leader and a follower.","Design is not just what it looks like and feels like. Design is how it works.","Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful… that’s what matters to me.","Don’t let the noise of others’ opinions drown out your own inner voice.","Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.","Sometimes life's going to hit you in the head with a brick. Don't lose faith. I'm convinced that the only thing that kept me going was that I loved what I did.","The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.","People who know what they are talking about don't need PowerPoint."],"Albert Einstein":["Creativity is intelligence having fun.","Try not to become a man of success, but rather try to become a man of value.","Great spirits have always encountered violent opposition from mediocre minds.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.","If you can't explain it to a six year old, you don't understand it yourself.","Anyone who has never made a mistake has never tried anything new.","Never memorize something that you can look up.","A clever person solves a problem. A wise person avoids it.","Any fool can know. The point is to understand.","The measure of intelligence is the ability to change.","It is not that I'm so smart. But I stay with the questions much longer."],"Bill Gates":["I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.","If you can't make it good, at least make it look good.","Your most unhappy customers are your greatest source of learning.","Most people overestimate what they can do in one year and underestimate what they can do in ten years.","Success is a lousy teacher. It seduces smart people into thinking they can't lose.","If you give people tools, and they use their natural abilities and their curiosity, they will develop things in ways that will surprise you very much beyond what you might have expected.","As we look ahead into the next century, leaders will be those who empower others.","Measuring programming progress by lines of code is like measuring aircraft building progress by weight.","Our success has really been based on partnerships from the very beginning.","The vision is really about empowering workers giving them all the information about what’s going on so they can do a lot more than they’ve done in the past","Some people may call me a nerd. I claim the label with pride."],"Jeff Bezos":["If you decide that you’re going to do only the things you know are going to work, you’re going to leave a lot of opportunity on the table.","Life’s too short to hang out with people who aren’t resourceful.","People who are right most of the time are people who change their minds often.","The thing that motivates me is a very common form of motivation. And that is, with other folks counting on me, it’s so easy to be motivated.","Cleverness is a gift, kindness is a choice.","A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.","The common question that gets asked in business is, ‘why?’ That’s a good question, but an equally valid question is, ‘why not?’","If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.","The best customer service is if the customer doesn’t need to call you, doesn’t need to talk to you. It just works.","Obsess about customers, not competitors.","Your brand is what other people say about you when you’re not in the room.","If you double the number of experiments you do per year you’re going to double your inventiveness.","Be stubborn on vision, but flexible on details.","We can’t be in survival mode. We have to be in growth mode.","Work hard, have fun, make history.","The keys to success are patience, persistence, and obsessive attention to detail","All of my best decisions in business and in life have been made with heart, intuition, guts… not analysis."],"Elon Musk":["When something is important enough, you do it even if the odds are not in your favour.","My proceeds from the PayPal acquisition were $180 million. I put $100 million in SpaceX, $70m in Tesla, and $10m in Solar City. I had to borrow money for rent.","You should take the approach that you’re wrong. Your goal is to be less wrong.","You get paid in direct proportion to the difficulty of problems you solve.","Constantly seek criticism. A well thought out critique of whatever you’re doing is as valuable as gold.","It is possible for ordinary people to choose to be extraordinary.","If you need inspiration, don't do it.","The first step is to establish that something is possible then probability will occur.","One of the biggest mistakes we made was trying to automate things that are super easy for a person to do, but super hard for a robot to do.","If you buy a ticket to hell, it isn't fair to blame hell."],"Walt Disney":["Whatever you do, do it well. Do it so well that when people see you do it, they will want to come back and see you do it again, and they will want to bring others and show them how well you do what you do.","The difference between winning and losing is most often not quitting.","Some dream it, some do it, some do both.","You can be happy or you can be unhappy. It's just according to the way you look at things.","Just as writers write the books they always wished they could read, Walt built the playground his inner child had always wanted to explore.","If you can ddream it, you can do it.","Laughter is timeless, imagination has no age, dreams are forever.","The way to get started is to quit talking and begin doing.","Why worry? If you’ve done the very best you can, then worrying won’t make it any better.","I don’t make pictures just to make money. I make money to make more pictures."]};function S(e,t,o,n,i,a,r){try{var s=e[a](r),h=s.value}catch(e){return void o(e)}s.done?t(h):Promise.resolve(h).then(n,i)}var P=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{statusCode:200,body:JSON.stringify((t=O,o=void 0,o=x(T(t)),{quote:x(t[o]),author:o}))});case 1:case"end":return e.stop()}var t,o}),e)})),function(){var t=this,o=arguments;return new Promise((function(n,i){var a=e.apply(t,o);function r(e){S(a,n,i,r,s,"next",e)}function s(e){S(a,n,i,r,s,"throw",e)}r(void 0)}))});return function(e,o){return t.apply(this,arguments)}}(),A=exports;for(var M in t)A[M]=t[M];t.__esModule&&Object.defineProperty(A,"__esModule",{value:!0})})();