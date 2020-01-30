# Svelte Outside

Svelte Outside allows you to handle click events that occur outside of an element without having to wrap your elements inside of an component.

## Basic Usage

Using Svelte Outside is as simple as adding two lines of code. 

```svelte
<div use:clickOutside={handleClickEvent}>
	<p>Nested</p>
</div>

<script>
import clickOutside from "svelte-outside-click";

function handleClickEvent() {
	// Your code here
}
</script>
```