Vue.component('student-list',{
  props: ['student'],
  template: '<li>ID：{{student.id}}／名前：{{ student.name }}</li>'
})

var sampleList = new Vue({
  el: '#student_list_area',
  data: {
    studentList: [
      { id:0, name: '田中　太郎' },
      { id:1, name: '吉田　兼行' },
      { id:2, name: '松永　久秀' }
    ]
  }
})

var studentProperty = new Vue({
  el: '#registration_form',
  data: {
    name: '',
    course: '',
    season: ''
  }
})

var sampleButton = new Vue({
  el: '#push',
  data: {
    counter: 0
  },
  methods: {
    addStudetList: function (event){
      sampleList.studentList.push({id:3, name: studentProperty.name})
    }
  }
})
