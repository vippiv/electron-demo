<template>
    <div class="add-stock-black">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="股票名称" prop="stockName">
				<el-input v-model="ruleForm.stockName" placeholder="请输入内容"></el-input>
			</el-form-item>
			<el-form-item label="股票代码" prop="stockCode">
				<el-input v-model="ruleForm.stockCode" placeholder="请输入内容"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "AddStockBlack",
        data() {
        	return {
        		ruleForm: {
        			stockName: '',
        			stockCode: ''
        		},
        		rules: {
					stockName: [
						{ required: true, message: '请输入股票名称', trigger: 'blur' }
					],
					stockCode: [
						{ required: true, message: '请输入股票代码', trigger: 'blur' }
					]
				}
        	}
        },
        methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
        }
    }
</script>

<style scoped>

</style>
