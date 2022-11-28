import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/Login'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/BaseTable',
    name: 'BaseTable',
    component: () => import('@/views/dashboard/BaseTable.vue')
  },
  {
    path: '/BaseTableOne',
    name: 'BaseTableOne',
    component: () => import('@/views/Table/BaseTableOne.vue')
  },
  {
    path: '/BaseTableTwo',
    name: 'BaseTableTwo',
    component: () => import('@/views/Table/BaseTableTwo.vue')
  },
  {
    path: '/BaseForm',
    name: 'BaseForm',
    component: () => import('@/views/dashboard/BaseForm.vue')
  },
  {
    path: '/CourseTable',
    name: 'CourseTable',
    component: () => import('@/views/CourseTable.vue')
  },
  {
    path: '/CourseEdit',
    name: 'CourseEdit',
    component: () => import('@/views/dashboard/CourseEdit.vue')
  },
  {
    path: '/ScoreTable',
    name: 'ScoreTable',
    component: () => import('@/views/ScoreTable.vue')
  },
  {
    path: '/ScoreEdit',
    name: 'ScoreEdit',
    component: () => import('@/views/dashboard/ScoreEdit.vue')
  },
  {
    path: '/PracticeTable',
    name: 'PracticeTable',
    component: () => import('@/views/PracticeTable.vue')
  },
  {
    path: '/PracticeEdit',
    name: 'PracticeEdit',
    component: () => import('@/views/dashboard/PracticeEdit.vue')
  },
  {
    path: '/InformationTable',
    name: 'InformationTable',
    component: () => import('@/views/InformationTable.vue')
  },
  {
    path: '/InformationEdit',
    name: 'InformationEdit',
    component: () => import('@/views/dashboard/InformationEdit.vue')
  },
  {
    path: '/StudentHomepage',
    name: 'StudentHomepage',
    component: () => import('@/views/StudentHomepage.vue')
  },
  {
    path: '/ActivityEdit',
    name: 'ActivityEdit',
    component: () => import('@/views/dashboard/ActivityEdit.vue')
  },
  {
    path: '/Activity',
    name: 'Activity',
    component: () => import('@/views/dashboard/Activity.vue')
  },
  
  {
    path: '/Honor',
    name: 'Honor',
    component: () => import('@/views/dashboard/Honor.vue')
  },
  {
    path: '/HonorEdit',
    name: 'HonorEdit',
    component: () => import('@/views/dashboard/HonorEdit.vue')
  },
  {
    path: '/Attdence',
    name: 'Attdence',
    component: () => import('@/views/dashboard/Attdence.vue')
  },
  {
    path: '/AttdenceEdit',
    name: 'AttdenceEdit',
    component: () => import('@/views/dashboard/AttdenceEdit.vue')
  },
  {
    path: '/CourseInfo',
    name: 'CourseInfo',
    component: () => import('@/views/dashboard/CourseInfo.vue')
  },
  {
    path: '/CourseInfoEdit',
    name: 'CourseInfoEdit',
    component: () => import('@/views/dashboard/CourseInfoEdit.vue')
  },
  {
    path: '/FamilyMember',
    name: 'FamilyMember',
    component: () => import('@/views/dashboard/FamilyMember.vue')
  },
  {
    path: '/FamilyMemberEdit',
    name: 'FamilyMemberEdit',
    component: () => import('@/views/dashboard/FamilyMemberEdit.vue')
  },
  {
    path: '/Homework',
    name: 'Homework',
    component: () => import('@/views/dashboard/Homework.vue')
  },
  {
    path: '/HomeworkEdit',
    name: 'HomeworkEdit',
    component: () => import('@/views/dashboard/HomeworkEdit.vue')
  },
  {
    path: '/Count',
    name: 'Count',
    component: () => import('@/views/dashboard/Count.vue')
  },
  {
    path: '/CountEdit',
    name: 'CountEdit',
    component: () => import('@/views/dashboard/CountEdit.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
