
function hasEmpty(obj){
  for(let i in obj){
    if (obj[i] === ''){
      return true
    }
  }
  return false
}

Vue.component('student-list',{
  props: ['student'],
  template: '<li>ID：{{student.id}} ／ 名前：{{ student.name }} ／ コース：{{ student.course }} ／ 受講期：{{ student.season }}</li>'
})

var students = new Vue({
  el: '#student_list_area',
  data: {
    list: []
  }
})

var student = new Vue({
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
    lastStudentId: 0,
    studentId: 1
  },
  methods: {
    addStudetList: function (event){
      if (hasEmpty(student)){
        window.alert('入力されていない値があります。');
      }else{
        if (students.list.length > 0) {
          this.studentId = students.list[students.list.length-1].id + 1
        }
        students.list.push({id: this.studentId, name: student.name, course: student.course, season: student.season})
        document.registration_form.reset();
      }
    }
  }
})
