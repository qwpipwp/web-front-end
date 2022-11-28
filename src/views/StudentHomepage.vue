<template>
    <Navi />
    <div ref="imageTofile" class="PDF">
    <el-row :gutter="0" style="display: flex">
      <el-col :span="18">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="学生姓名">{{form.studentName}}</el-descriptions-item>
          <el-descriptions-item label="学号">{{form.studentNum}}</el-descriptions-item>
          <el-descriptions-item label="性别">{{getSex(form.sex)}}</el-descriptions-item>
          <el-descriptions-item label="学院">{{form.dept}}</el-descriptions-item>
          <el-descriptions-item label="出生日期">{{form.birthday}}</el-descriptions-item>
          <el-descriptions-item label="年龄">{{form.age}}</el-descriptions-item>
        </el-descriptions>
      </el-col>
      <el-col :span="6" style="align-items: stretch">
        <div class="imgBox">
          <img class="devImg" fit="fill" :src="require('@/assets/1.jpg')" />
        </div>
      </el-col>
      </el-row>
    </div>
<el-button class="button-dalod" size="mini" title="生成图片" @click="getPDF()" icon="el-icon-download"></el-button>
  </template>

<script>
import Navi from "@/components/Navi";
import htmlToPdf from "@/utils/getPDF.js";
import { studentEditInit,getAuthHeader, } from "@/service/genServ.js";
export default {
  name: "StudentHomepage",
  data() {
    return {
      form: {
        studentNum: "",
        studentName: "",
        sex: "",
        age: "",
        dept: "",
        birthday: "",
      },
      authHeader: getAuthHeader(),
      image0: "",
      sexList:[],
      formName: "个人信息",
    };
  },
  components: {
    Navi,
  },
  created() {
    this.id = 1;
    this.fetchData();
  },
  methods: {
    fetchData() {
      studentEditInit({ id: this.id }).then((res) => {
        this.form = res.data.form;
        this.sexList = res.data.sexList;
        this.image0 = res.data.image0;
      });
    },
    getSex(sex){
      if(sex == "1"){
        this.sex = "男"; 
      }else{
        this.sex = "女";
      }
      return this.sex;
    },
        getPDF(){
          htmlToPdf.downloadPDF(document.querySelector(".PDF"),"个人主页");
        },
  }
};
</script>


  <style scoped>
  .imgBox {
  border: 1px solid #ebeef5;
  border-left: none;
  width: 100%;
  height: 100%;
  position: relative;
  }
  </style>
  