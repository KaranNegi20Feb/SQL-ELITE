Implicit Conversion (Automatic / Coercion)
JS automatically converts types behind the scenes.
  10 + "5"   // "105"
"5" * 2   // 10
true + 1   // 2  (true = 1)
false + 1  // 1  (false = 0)
Number(null)  // 0
Number(undefined)   // NaN

"5" - 1   // 4      (string becomes number)
"5" + 1   // "51"   (string wins)


Explicit Conversion (Manual conversion)
You tell JS to convert the value.

Number("10")     // 10
parseInt("10")   // 10
parseFloat("10.5") // 10.5

String(10)      // "10"
(10).toString() // "10"

Boolean(1)    // true
Boolean(0)    // false
Boolean("")   // false
Boolean("hi") // true
👉 Boolean() checks truthy/falsy


Truthy Values
Everything is truthy except:
0, "", null, undefined, false, NaN
