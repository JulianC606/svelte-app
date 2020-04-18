<script>
  let skills = [
    {
      id: 1,
      name: 'HTML'
    },
    {
      id: 2,
      name: 'JavaScript'
    },
    {
      id: 3,
      name: 'CSS'
    }
  ]
</script>

<style>
  .Skills{
    display: flex;
    align-items: center;
    justify-content: center; 
  }
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li{
    display: inline;
  }

</style>

<div class="Skills">
  <h3>Habilidades</h3>
  <ul>
    {#each skills as { name }, i}
      <li>{ name }</li>
    {/each}
  </ul>
</div>