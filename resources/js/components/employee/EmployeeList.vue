<template>
    <div class="container">
        <el-card class="box-card">

				<template #header>
					<div class="card-header">
						Employee Data
						<a href="/add-employee">
							<el-button type="primary" class="float-right" >Add Employee</el-button>
						</a>
					</div>
				</template>
				<div>
					<el-table 
						:data="tableData"
						style="width: 100%"
						height="500"
					>
						<el-table-column label="Name" sortable prop="name" />
						<el-table-column label="Email" prop="email" />
						<el-table-column label="Department" prop="department" />
						<el-table-column label="Section" prop="section" />
						
						<el-table-column align="right">
							<template #header>
								<el-input v-model="search" size="small" placeholder="Type to search" />
							</template>
							<template #default="scope">
								<el-button size="small" type="info"
									@click="showEmployee(scope.$index, scope.row)"
								>
									Show
								</el-button>
								<el-button size="small" type="success"
									@click="editEmployee(scope.$index, scope.row)"
								>
									Edit
								</el-button>
								<el-button
									size="small"
									type="danger"
									@click="deleteEmployee(scope.$index, scope.row)">
									Delete
								</el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>
		</el-card>
    </div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import { ElMessage, ElMessageBox } from 'element-plus'
    export default {
		name: 'employee-form',
        props: {
            scope: String,
			id: Number,
        },
		mounted(){
			const loading = this.$loading({
				
				lock: true,
				text: 'loading...',
				background: 'rgba(255,255,255,0.85)',
			});

			this.$store.dispatch('getEmployeesData', {searchQuery: this.search});

			loading.close();
		},
		watch: {
			search: function(keyword){
                this.$store.dispatch('getEmployeesData', {searchQuery: this.search});
            }
		},
		computed:{
		
			...mapGetters({
				tableData:"tableData"
			})
			
        },
		data() {
			return{
				search: null,
				form: {
					name: null,
					email: null,
					department: null,
					section: null,
				}
			}
		},
		methods: {
			editEmployee(index, row){
				window.location.href="/edit-employee/"+row.id+'/edit';
			},

			showEmployee(index, row){
				window.location.href="/show-employee/"+row.id+'';
			},

			deleteEmployee(index, row){
				ElMessageBox.confirm(
					'Are you sure, You want to delete this emplyee',
					'Warning',
					{
						confirmButtonText: 'OK',
						cancelButtonText: 'Cancel',
						type: 'warning',
					}
				)
				.then(() => {

					this.$store.dispatch('deleteEmployee', {
						id: row.id
					})

					this.$store.dispatch('getEmployeesData');

					ElMessage({
						type: 'success',
						message: 'Delete completed',
					})
				})
				.catch(() => {
					ElMessage({
						type: 'info',
						message: 'Delete canceled',
					})
				})
			}
		}
    }
</script>

<style scoped>
	.card-header{
		background: none;
		border: none;
	}
	.float-right {
		float: right;
	}
</style>
