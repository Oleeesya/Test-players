<template>
<div>
  <div
    v-for="(item, index) in playersList"
    :key="index"
    class="edit row"
  >
      <input class="edit__name" id="name" :value="isValidName ? item.name : playersList[index].name" @input="event => changeName(index, event.target.value, item.name)">
      <button class="edit__button" href="#" @click.prevent="minusLife(index)">-</button>
      <span class="edit__lifeCount">{{item.life}}</span>
      <button class="edit__button" href="#" @click.prevent="plusLife(index)">+</button>
  </div>
  
  <h2>Рейтинг</h2>
  <table>
    <tr
    v-for="(item, index) in rating"
    :key="index"
    >
    <td v-text="`${rating.map(element => element.life ).indexOf(item.life) + 1}`"></td>
    <td>У игрока <b>{{item.name}}</b> {{item.life}} жизней</td>
  </tr>
  </table>
</div>
</template>

<script>
export default {
  name: 'EditPlayers',

  props: {
    playersList: {
      type: Array
    },
  },
  
  data () {
    return {
      isValidName: true
    };
  },
  
  computed: {
    rating () {
      let stableSort = (arr, compare) => arr
          .map((item, index) => ({item, index}))
          .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
          .map(({item}) => item)

      return stableSort(this.playersList, (a, b) => b.life - a.life);
    }
  },
  
  methods: {
    plusLife (index) {
      this.$emit('plus-life', index);
    },

    minusLife (index) {
      this.$emit('minus-life', index);
    },
    
    changeName(index, newName) {
      this.isValidName = true
      if(this.playersList.filter(item => this.playersList.indexOf(item) !== index).map(item => item.name).includes(newName)) {
          alert('Пользователь с таким именем уже существует');
          this.isValidName = false
          return
      }      
      this.$emit('change-name', index, newName);
      return newName
    }
  },
}
</script>

<style lang="scss">
    .row {
        display: flex;
        align-items: center;
        margin-top: 20px;

        input {
            margin-right: 12px;
            width: 100%;
            height: 24px;
        }

        .life {
          margin: 0 12px;
        }
    }

    table {
      width: 100%;
      border-spacing: 7px 11px;

      td {
        border: 1px solid #bdbdbd;
        padding: 0.375rem 0.75rem;
      }
    }

    .edit__name {
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

    .edit__name::placeholder {
      color: #212529;
      opacity: 0.4;
    }

    .edit__name:focus {
      color: #212529;
      background-color: #fff;
      border-color: #bdbdbd;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }

    .edit__name:disabled,
    .edit__name[readonly] {
      background-color: #f5f5f5;
      opacity: 1;
    }

    .edit__lifeCount {
      width: 10%;
    }

    .edit__button {
        background-color: #eee;
        border-radius: 0.25rem;
        border: 0 solid #eee;
        height: 38px;
        padding: 0;
        width: 10%;
        color: #2c3e50;
    }

    .edit__button:hover {
        cursor: pointer;
        opacity: 0.7;
    }


</style>