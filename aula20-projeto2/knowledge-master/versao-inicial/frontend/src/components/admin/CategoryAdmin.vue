<template>
  <div class="category-admin">
    <b-form>
      <input type="hidden" id="category-id" v-model="category.id" />

      <b-row>
        <b-col xs="12">
          <b-form-group label="Nome:" label-for="category-name">
            <b-form-input
              id="category-name"
              type="text"
              v-model="category.name"
              required
              placeholder="Informe o Nome da Categoria..."
              :readonly="mode === 'remove'"
            ></b-form-input>
          </b-form-group>
        </b-col>
        </b-row>


      <b-row v-if="mode === 'save' ">
        <b-col xs="12">
          <b-form-group label="Categoria pai" label-for="category-parentId">
            <b-form-select id="category-parentId" :options="categories" v-model="category.parentId"></b-form-select>
          </b-form-group>
        </b-col>
       
      </b-row>

      <b-row v-else>
        <b-col xs="12">
          <b-form-group label="Categoria pai" label-for="category-parentId">
           <b-form-input
              id="category-name"
              type="text"
              v-model="category.path"
              required
             
              readonly
            ></b-form-input>
          </b-form-group>
        </b-col>
       
      </b-row>


    

      <b-row>
        <b-col xs="12">
          <b-button variant="primary" v-if="mode == 'save'" @click="save"
            >Salvar</b-button
          >
          <b-button variant="danger" v-if="mode == 'remove'" @click="remove"
            >Excluir</b-button
          >
          <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-col>
      </b-row>
    </b-form>
    <hr />
    <b-table hover striped :items="categories" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2"
          ><i class="fa fa-pencil"></i
        ></b-button>
        <b-button variant="danger" @click="loadCategory(data.item, 'remove')"
          ><i class="fa fa-trash"></i
        ></b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";
export default {
  name: "CategoryAdmin",
  data() {
    return {
      mode: "save",
      category: {},
      categories: [],
      fields: [
        { key: "id", label: "Código", sortable: true }, //comm sortable é possível fazer a ordenação dos nomes da tabela
        { key: "name", label: "Nome", sortable: true },
        { key: "path", label: "Caminho", sortable: true },
    
        { key: "actions", label: "Ações" },
      ],
    };
  },

  methods: {
    loadCategories() {
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then((res) => {
        //this.categories = res.data;
        this.categories = res.data.map(category =>{
          return {...category, value:category.id, text:category.path}
        })
      });
    },

    reset() {
      this.mode = "save";
      this.category = {};
      this.loadCategories();
    },
    save() {
      const method = this.category.id ? "put" : "post";
      const id = this.category.id ? `/${this.category.id}` : "";
      axios[method](`${baseApiUrl}/categories${id}`, this.category)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.category.id;
      axios
        .delete(`${baseApiUrl}/categories/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadCategory(category, mode = "save") {
      this.mode = mode;
      this.category = { ...category };
    },
  },

  mounted() {
    this.loadCategories();
  },
};
</script>

<style>
</style>

