# repeat helper 

Simple repeat helper for dust.js

## Definition

```
{@repeat times=5 start=1 }
{$key}. Body
{/repeat}


```
## Examples

```
{@repeat times=14 }Na{/repeat}... Batman
```

## Usage
Depends on dustjs-helpers module to be loaded first since it adds it's definition to the
the dust.helpers property.

In node.js:

require('dustjs-helper-repeat');

In browser:

If not using require, load the JS some other way and call it with the dust object. As noted earlier,
dustjs-helpers must be loaded earlier.

