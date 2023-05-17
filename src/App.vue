<template>
  <div class="menu">
    <input @click="showMenu" class="menu__input" type="radio" name="menu" id="create" value="create" checked>
    <label class="menu__create" for="create">
        <h1>Добавить нового игрока</h1>
    </label>
    <input @click="showMenu" class="menu__input" type="radio" name="menu" id="edit" value="edit">
    <label class="menu__edit" for="edit">  
        <h1>Редактирование игроков</h1>
    </label>
  </div>
  <CreatePlayer @create-player="createPlayers" :playersList="playersList" @set-create-player-error="setCreatePlayerError"
  v-show="showCreate" />
  <EditPlayers @change-name="changeName" @plus-life="plusLife" @minus-life="minusLife" :playersList="playersList"
  v-show="showEdit" />
</template>

<script>
import CreatePlayer from './components/CreatePlayer.vue'
import EditPlayers from './components/EditPlayers.vue'

export default {
  name: 'App',
  components: {
    CreatePlayer,
    EditPlayers
  },
  data() {
    return {
      playersList: [],
      showCreate: true,
      showEdit: false,
    }
  },

  methods: {
    createPlayers(name, life) {
      this.playersList.push({
          'name': name,
          'life': life,
      })
    },
    
    showMenu() {
      let radios = document.getElementsByName('menu');
      for (let radio of radios) {
        if (radio.checked) {
          if (radio.value === 'create') {
            this.showCreate = true
            this.showEdit = false
          } else if(radio.value === 'edit') {
            this.showEdit = true
            this.showCreate = false
          }
        }
      }
    },

    changeName (index, newName) {
      this.playersList[index].name = newName
    },

    plusLife (index) {
      this.playersList[index].life++
    },

    minusLife (index) {
      if(this.playersList[index].life > 0) {
        this.playersList[index].life--
      } else {
        this.playersList[index].life = 0
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 600px;
}

.menu {
  display: flex;
  justify-content: space-around;
}

.menu__input {
  display: none;
}

.menu__create,
.menu__edit {
  transition: 0.2s;
  font-size: 10px;
  opacity: 0.6;
}

.menu__create:hover,
.menu__edit:hover {
  cursor: pointer;
  opacity: 0.9;
}

input[type="radio"]:checked + label {
  border-bottom: 1px solid;
  padding-bottom: 7px;
  opacity: 1;
}

</style>
