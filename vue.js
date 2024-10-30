const app = Vue.createApp({
data () {
  return {

    donecourses:
    [
    {Head: 'Done courses' },
    {courses: 'CHM 408', donebutton: 'undo' },
    {courses: 'CHM 406', donebutton: 'undo'  },
    {courses: 'ICH 402', donebutton: 'undo'  },
    {courses: 'ICH 404', donebutton: 'undo'  },
    {courses: 'ICH 416', donebutton: 'undo'}
  ],
    undonecourses:
    [
      {Head: 'Undone courses' },
      {courses: 'CHM 404', undobutton: 'do'  },
      {courses: 'CHM 402', undobutton: 'do'  },
      {courses: 'ICH 414', undobutton: 'do'  },
      {courses: 'CHM 412', undobutton: 'do'  },
      {courses: 'CHM 420', undobutton: 'do'  }

    ],
    newCourse: '',
    myInput: 'done'
  }
},
computed: {
   doneCount() {
     return this.donecourses.length - 1; // Exclude the header
   },
   totalCourses() {
     return this.donecourses.length + this.undonecourses.length - 2; // Exclude both headers
   }
 },
methods: {
  switchPosition(course, isDone) {
    if (isDone) {
      // Moving from donecourses to undonecourses
      this.donecourses = this.donecourses.filter(item => item !== course);
      this.undonecourses.push({ courses: course.courses, undobutton: 'do' });
    } else {
      // Moving from undonecourses to donecourses
      this.undonecourses = this.undonecourses.filter(item => item !== course);
      this.donecourses.push({ courses: course.courses, donebutton: 'undo' });
    }
  },
  addCourse() {
     if (this.newCourse.trim()) {
       // Add to myInput
       if (this.myInput === 'done') {
         this.donecourses.push({ courses: this.newCourse, donebutton: 'undo' });
       } else {
         this.undonecourses.push({ courses: this.newCourse, undobutton: 'do' });
       }
       // Clearing the input
       this.newCourse = '';
     }
   }
}
})
app.mount('#app')




//  if (this.donecourses[1].donebutton = true) {
//  this.donecourses[1].donebutton = this.undonecourses[1].undobutton
