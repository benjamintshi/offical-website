
export default {
  data() {
    return {
      isVolunteer:false
    }

  },
  mounted(){

  },
  methods:{

    modifyInfo(){
      this.$emit('modify');
    }
  }
}
