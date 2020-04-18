<script>
  import { count } from '../store/store'

  const handleClick = () => {
    count.update( n => n + 1)
  }

</script>

<style>

  .BottonCount button{
    background: #f76027;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
    color: white
  }

</style>

<div class="BottonCount">
  <button on:click = {handleClick}>
    Click {$count === 0 ? '' : $count}
  </button>
</div>