<template>
    <div class="stock-black-list">
    	<div class="search">
    		<el-button type="primary" @click='addStockBlack'>添加</el-button>
    	</div>
    	<div class="main">
			<el-table
			:data="tableData"
			border
			style="width: 100%">
				<el-table-column
					prop="id"
					label="序号"
					align="center"
					width="180">
				</el-table-column>
				<el-table-column
					prop="name"
					label="名称"
					align="center"
					width="180">
				</el-table-column>
				<el-table-column
					prop="code"
					align="center"
					label="编号">
				</el-table-column>
			</el-table>
		</div>
    </div>
</template>

<script>
    export default {
        name: "StockBlackList",
        data() {
        	return {
        		tableData: [
        			{
        				id: 1,
        				name: '美光科技',
        				code: 12512
        			},
        			{
        				id: 2,
        				name: '美林科技',
        				code: 363
        			}
        		]
        	}
        },
        methods: {
			addStockBlack() {
				this.$router.push({
					path: '/stock/black/add'
				})
			}
        }
    }
</script>

<style scoped>
	.stock-black-list .search{
		text-align:left;
		border-top:3px solid #e5e5e5;
		padding:15px;
		margin-bottom: 10px;
	}
	.stock-black-list .main{
		padding: 15px;
		border-top:3px solid #e5e5e5;
	}
</style>
