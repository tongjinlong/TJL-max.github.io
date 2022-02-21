import{d as n}from"./app.58969aa0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="html5\u7684\u79BB\u7EBF\u50A8\u5B58\u7684\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#html5\u7684\u79BB\u7EBF\u50A8\u5B58\u7684\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> HTML5\u7684\u79BB\u7EBF\u50A8\u5B58\u7684\u5DE5\u4F5C\u539F\u7406</h2><p>\u79BB\u7EBF\u5B58\u50A8\u6307\u7684\u662F\uFF1A\u5728\u7528\u6237\u6CA1\u6709\u4E0E\u56E0\u7279\u7F51\u8FDE\u63A5\u65F6\uFF0C\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\u7AD9\u70B9\u6216\u5E94\u7528\uFF0C\u5728\u7528\u6237\u4E0E\u56E0\u7279\u7F51\u8FDE\u63A5\u65F6\uFF0C\u66F4\u65B0\u7528\u6237\u673A\u5668\u4E0A\u7684\u7F13\u5B58\u6587\u4EF6\u3002</p><p>**\u539F\u7406\uFF1A**HTML5\u7684\u79BB\u7EBF\u5B58\u50A8\u662F\u57FA\u4E8E\u4E00\u4E2A\u65B0\u5EFA\u7684 <code>.appcache</code> \u6587\u4EF6\u7684\u7F13\u5B58\u673A\u5236(\u4E0D\u662F\u5B58\u50A8\u6280\u672F)\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u6587\u4EF6\u4E0A\u7684\u89E3\u6790\u6E05\u5355\u79BB\u7EBF\u5B58\u50A8\u8D44\u6E90\uFF0C\u8FD9\u4E9B\u8D44\u6E90\u5C31\u4F1A\u50CFcookie\u4E00\u6837\u88AB\u5B58\u50A8\u4E86\u4E0B\u6765\u3002\u4E4B\u540E\u5F53\u7F51\u7EDC\u5728\u5904\u4E8E\u79BB\u7EBF\u72B6\u6001\u4E0B\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u901A\u8FC7\u88AB\u79BB\u7EBF\u5B58\u50A8\u7684\u6570\u636E\u8FDB\u884C\u9875\u9762\u5C55\u793A</p><p><strong>\u4F7F\u7528\u65B9\u6CD5\uFF1A</strong> \uFF081\uFF09\u521B\u5EFA\u4E00\u4E2A\u548C html \u540C\u540D\u7684 manifest \u6587\u4EF6\uFF0C\u7136\u540E\u5728\u9875\u9762\u5934\u90E8\u52A0\u5165 manifest \u5C5E\u6027\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span> <span class="token attr-name">manifest</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.manifest<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\uFF082\uFF09\u5728 <code>cache.manifest</code> \u6587\u4EF6\u4E2D\u7F16\u5199\u9700\u8981\u79BB\u7EBF\u5B58\u50A8\u7684\u8D44\u6E90\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>CACHE MANIFEST
    #v0.11
    CACHE:
    js/app.js
    css/style.css
    NETWORK:
    resourse/logo.png
    FALLBACK:
    / /offline.html

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><strong>CACHE</strong>: \u8868\u793A\u9700\u8981\u79BB\u7EBF\u5B58\u50A8\u7684\u8D44\u6E90\u5217\u8868\uFF0C\u7531\u4E8E\u5305\u542B manifest \u6587\u4EF6\u7684\u9875\u9762\u5C06\u88AB\u81EA\u52A8\u79BB\u7EBF\u5B58\u50A8\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u628A\u9875\u9762\u81EA\u8EAB\u4E5F\u5217\u51FA\u6765\u3002</li><li><strong>NETWORK</strong>: \u8868\u793A\u5728\u5B83\u4E0B\u9762\u5217\u51FA\u6765\u7684\u8D44\u6E90\u53EA\u6709\u5728\u5728\u7EBF\u7684\u60C5\u51B5\u4E0B\u624D\u80FD\u8BBF\u95EE\uFF0C\u4ED6\u4EEC\u4E0D\u4F1A\u88AB\u79BB\u7EBF\u5B58\u50A8\uFF0C\u6240\u4EE5\u5728\u79BB\u7EBF\u60C5\u51B5\u4E0B\u65E0\u6CD5\u4F7F\u7528\u8FD9\u4E9B\u8D44\u6E90\u3002\u4E0D\u8FC7\uFF0C\u5982\u679C\u5728 CACHE \u548C NETWORK \u4E2D\u6709\u4E00\u4E2A\u76F8\u540C\u7684\u8D44\u6E90\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8D44\u6E90\u8FD8\u662F\u4F1A\u88AB\u79BB\u7EBF\u5B58\u50A8\uFF0C\u4E5F\u5C31\u662F\u8BF4 CACHE \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002</li><li><strong>FALLBACK</strong>: \u8868\u793A\u5982\u679C\u8BBF\u95EE\u7B2C\u4E00\u4E2A\u8D44\u6E90\u5931\u8D25\uFF0C\u90A3\u4E48\u5C31\u4F7F\u7528\u7B2C\u4E8C\u4E2A\u8D44\u6E90\u6765\u66FF\u6362\u4ED6\uFF0C\u6BD4\u5982\u4E0A\u9762\u8FD9\u4E2A\u6587\u4EF6\u8868\u793A\u7684\u5C31\u662F\u5982\u679C\u8BBF\u95EE\u6839\u76EE\u5F55\u4E0B\u4EFB\u4F55\u4E00\u4E2A\u8D44\u6E90\u5931\u8D25\u4E86\uFF0C\u90A3\u4E48\u5C31\u53BB\u8BBF\u95EE offline.html \u3002</li></ul><p>\uFF083\uFF09\u5728\u79BB\u7EBF\u72B6\u6001\u65F6\uFF0C\u64CD\u4F5C <code>window.applicationCache</code> \u8FDB\u884C\u79BB\u7EBF\u7F13\u5B58\u7684\u64CD\u4F5C\u3002</p><p><strong>\u5982\u4F55\u66F4\u65B0\u7F13\u5B58\uFF1A</strong></p><p>\uFF081\uFF09\u66F4\u65B0 manifest \u6587\u4EF6</p><p>\uFF082\uFF09\u901A\u8FC7 javascript \u64CD\u4F5C</p><p>\uFF083\uFF09\u6E05\u9664\u6D4F\u89C8\u5668\u7F13\u5B58</p><p><strong>\u6CE8\u610F\u4E8B\u9879\uFF1A</strong></p><p>\uFF081\uFF09\u6D4F\u89C8\u5668\u5BF9\u7F13\u5B58\u6570\u636E\u7684\u5BB9\u91CF\u9650\u5236\u53EF\u80FD\u4E0D\u592A\u4E00\u6837\uFF08\u67D0\u4E9B\u6D4F\u89C8\u5668\u8BBE\u7F6E\u7684\u9650\u5236\u662F\u6BCF\u4E2A\u7AD9\u70B9 5MB\uFF09\u3002</p><p>\uFF082\uFF09\u5982\u679C manifest \u6587\u4EF6\uFF0C\u6216\u8005\u5185\u90E8\u5217\u4E3E\u7684\u67D0\u4E00\u4E2A\u6587\u4EF6\u4E0D\u80FD\u6B63\u5E38\u4E0B\u8F7D\uFF0C\u6574\u4E2A\u66F4\u65B0\u8FC7\u7A0B\u90FD\u5C06\u5931\u8D25\uFF0C\u6D4F\u89C8\u5668\u7EE7\u7EED\u5168\u90E8\u4F7F\u7528\u8001\u7684\u7F13\u5B58\u3002</p><p>\uFF083\uFF09\u5F15\u7528 manifest \u7684 html \u5FC5\u987B\u4E0E manifest \u6587\u4EF6\u540C\u6E90\uFF0C\u5728\u540C\u4E00\u4E2A\u57DF\u4E0B\u3002</p><p>\uFF084\uFF09FALLBACK \u4E2D\u7684\u8D44\u6E90\u5FC5\u987B\u548C manifest \u6587\u4EF6\u540C\u6E90\u3002</p><p>\uFF085\uFF09\u5F53\u4E00\u4E2A\u8D44\u6E90\u88AB\u7F13\u5B58\u540E\uFF0C\u8BE5\u6D4F\u89C8\u5668\u76F4\u63A5\u8BF7\u6C42\u8FD9\u4E2A\u7EDD\u5BF9\u8DEF\u5F84\u4E5F\u4F1A\u8BBF\u95EE\u7F13\u5B58\u4E2D\u7684\u8D44\u6E90\u3002</p><p>\uFF086\uFF09\u7AD9\u70B9\u4E2D\u7684\u5176\u4ED6\u9875\u9762\u5373\u4F7F\u6CA1\u6709\u8BBE\u7F6E manifest \u5C5E\u6027\uFF0C\u8BF7\u6C42\u7684\u8D44\u6E90\u5982\u679C\u5728\u7F13\u5B58\u4E2D\u4E5F\u4ECE\u7F13\u5B58\u4E2D\u8BBF\u95EE\u3002</p><p>\uFF087\uFF09\u5F53 manifest \u6587\u4EF6\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u8D44\u6E90\u8BF7\u6C42\u672C\u8EAB\u4E5F\u4F1A\u89E6\u53D1\u66F4\u65B0\u3002</p><h2 id="\u6D4F\u89C8\u5668\u662F\u5982\u4F55\u5BF9-html5-\u7684\u79BB\u7EBF\u50A8\u5B58\u8D44\u6E90\u8FDB\u884C\u7BA1\u7406\u548C\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u662F\u5982\u4F55\u5BF9-html5-\u7684\u79BB\u7EBF\u50A8\u5B58\u8D44\u6E90\u8FDB\u884C\u7BA1\u7406\u548C\u52A0\u8F7D" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u662F\u5982\u4F55\u5BF9 HTML5 \u7684\u79BB\u7EBF\u50A8\u5B58\u8D44\u6E90\u8FDB\u884C\u7BA1\u7406\u548C\u52A0\u8F7D\uFF1F</h2><ul><li><strong>\u5728\u7EBF\u7684\u60C5\u51B5\u4E0B</strong>\uFF0C\u6D4F\u89C8\u5668\u53D1\u73B0 html \u5934\u90E8\u6709 manifest \u5C5E\u6027\uFF0C\u5B83\u4F1A\u8BF7\u6C42 manifest \u6587\u4EF6\uFF0C\u5982\u679C\u662F\u7B2C\u4E00\u6B21\u8BBF\u95EE\u9875\u9762 \uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u5C31\u4F1A\u6839\u636E manifest \u6587\u4EF6\u7684\u5185\u5BB9\u4E0B\u8F7D\u76F8\u5E94\u7684\u8D44\u6E90\u5E76\u4E14\u8FDB\u884C\u79BB\u7EBF\u5B58\u50A8\u3002\u5982\u679C\u5DF2\u7ECF\u8BBF\u95EE\u8FC7\u9875\u9762\u5E76\u4E14\u8D44\u6E90\u5DF2\u7ECF\u8FDB\u884C\u79BB\u7EBF\u5B58\u50A8\u4E86\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u5C31\u4F1A\u4F7F\u7528\u79BB\u7EBF\u7684\u8D44\u6E90\u52A0\u8F7D\u9875\u9762\uFF0C\u7136\u540E\u6D4F\u89C8\u5668\u4F1A\u5BF9\u6BD4\u65B0\u7684 manifest \u6587\u4EF6\u4E0E\u65E7\u7684 manifest \u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u6CA1\u6709\u53D1\u751F\u6539\u53D8\uFF0C\u5C31\u4E0D\u505A\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u5982\u679C\u6587\u4EF6\u6539\u53D8\u4E86\uFF0C\u5C31\u4F1A\u91CD\u65B0\u4E0B\u8F7D\u6587\u4EF6\u4E2D\u7684\u8D44\u6E90\u5E76\u8FDB\u884C\u79BB\u7EBF\u5B58\u50A8\u3002</li><li><strong>\u79BB\u7EBF\u7684\u60C5\u51B5\u4E0B</strong>\uFF0C\u6D4F\u89C8\u5668\u4F1A\u76F4\u63A5\u4F7F\u7528\u79BB\u7EBF\u5B58\u50A8\u7684\u8D44\u6E90\u3002</li></ul>`,23);function t(p,l){return e}var o=s(a,[["render",t]]);export{o as default};