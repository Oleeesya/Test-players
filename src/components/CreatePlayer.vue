<template>
    <form class="create row">
        <input class="create__input" id="name" type="text" v-model="players_name" placeholder="Имя"/>
        <input class="create__input" id="life" type="number" min="0" v-model="players_life" placeholder="Жизней" />
        <button class="create__btn" type="submit" v-on:click="createPlayer">Создать</button>
    </form>
</template>


<script>
export default {
  name: 'CreatePlayer',
  
  data () {
    return {
      players_name: '',
      players_life: '',
    };
  },
  
  methods: {
    createPlayer(e) {
        e.preventDefault()
        if(this.players_name === '' || this.players_name === undefined) {
            alert('Укажите имя');
            return;
        }

        if(this.players_life === '' || this.players_life === undefined) {
            alert('Укажите количество жизней');
            return;
        }

        if(this.players_life <= 0) {
            alert('Значение не может быть меньше или равно нулю');
            return;
        }

        this.$emit('players-list', this.players_name, this.players_life);

        this.players_name = '';
        this.players_life = '';
    }
  },
}
</script>

<style lang="scss">
    .row {
        display: flex;
        margin-top: 20px;

        input {
            margin-right: 12px;
            width: 60%;
            height: 24px;
        }
    }

    #life {
        width: 20%;
    }

    .create__input {
      display: block;
      width: 100%;
      height: calc(2.25rem + 2px);
      padding: 0.375rem 0.75rem;
      font-family: inherit;
      font-size: 0.9rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #bdbdbd;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .create__input::placeholder {
      color: #212529;
      opacity: 0.4;
    }

    .create__input:focus {
      color: #212529;
      background-color: #fff;
      border-color: #bdbdbd;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }

    .create__input:disabled,
    .create__input[readonly] {
      background-color: #f5f5f5;
      opacity: 1;
    }

    .create__btn {
        background-color: #eee;
        border-radius: 0.25rem;
        border: 0 solid #eee;
        height: 38px;
        width: 20%;
        padding: 0.375rem 0.75rem;
        color: #2c3e50;
    }

    .create__btn:hover {
        cursor: pointer;
        opacity: 0.7;
    }
</style>
