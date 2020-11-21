# フォントの埋め込み
HTMLの\<head>に以下を記述。
```HTML
<script>
  (function(d) {
    var config = {
      kitId: 'ynw1ntm',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>
```
## Josefin Slab
**追加されたフォント**
- Regular
```css
font-family: josefin-slab,serif;
font-weight: 400;
font-style: normal;
```

- Bold
```css
font-family: josefin-slab,serif;
font-weight: 700;
font-style: normal;
```
- Italic
```css
font-family: josefin-slab,serif;
font-weight: 400;
font-style: italic;
```
- Bold Italic
```css
font-family: josefin-slab,serif;
font-weight: 700;
font-style: italic;
```

## Josefin sans
**追加されたフォント**
- Semi Bold
```css
font-family: josefin-sans,sans-serif;
font-weight: 600;
font-style: normal;
```

## Mrs Eaves
**追加されたフォント**
- OT Roman
```css
font-family: mrs-eaves,serif;
font-weight: 400;
font-style: normal;
```

## A-OTF リュウミン
**追加されたフォント**
```css
font-family: a-otf-midashi-mi-ma31-pr6n,serif;
font-weight: 600;
font-style: normal;
```

## FOT 筑紫B丸ゴシック
**追加されたフォント**
- R
```css
font-family: fot-tsukubrdgothic-std,sans-serif;
font-weight: 400;
font-style: normal;
```
- B
```css
font-family: fot-tsukubrdgothic-std,sans-serif;
font-weight: 700;
font-style: normal;
```

## DNP 秀英初号明朝
**追加されたフォント**
```css
font-family: dnp-shuei-shogomincho-std,sans-serif;
font-weight: 700;
font-style: normal;
```
## A-OTF 見出しミン
**追加されたフォント**
```css
font-family: a-otf-midashi-mi-ma31-pr6n,serif;
font-weight: 600;
font-style: normal;
```
