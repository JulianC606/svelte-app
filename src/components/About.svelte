<script>
  import Button from './Button.svelte'

  let someText = `Frontend Developer at Fintech`
  let count = 0
  let styles = { darkMode: false }



  // Handler
  const handlerClick = () => {
    count += 1  
  }

  const toggle = () => {
    styles.darkMode = !styles.darkMode
    window.document.body.classList.toggle("dark-mode")
  }

</script>

<style>

p{
  color: var(--theme-color)
}

</style>

<div class="About">

  {#if !styles.darkMode}
    <p>
      {someText}
    </p>
  {:else}
    <p>
      Hello DarkMode
    </p>
  {/if}

  <Button 
    text="Click" 
    {count}
    on:click={handlerClick}
  />

  <Button 
    text='DarkMode'
    on:click={toggle}
  />

</div>