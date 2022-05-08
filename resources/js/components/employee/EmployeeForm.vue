<template>
    <div class="container">
        <el-card class="box-card">

				<template #header>
					<div class="card-header">
						<el-page-header :content="`${scope} form`" @back="goBack" />
					</div>
				</template>
				<div>
					<el-form
						ref="employeeForm"
						:model="form"
						label-position="top"
						label-width="120px"
					>
						<el-form-item label="Name" prop="name" required>
							<el-input 
								v-model="form.name"
								:readonly="readOnlyField"
								placeholder="Employee Name"
							></el-input>
						</el-form-item>
						<el-form-item label="Email" prop="email" required>
							<el-input 
								v-model="form.email"
								type="email"
								:readonly="readOnlyField"
								placeholder="Email Address"
							></el-input>
						</el-form-item>
						<el-form-item label="Department" prop="department" required>
							<el-input 
								v-model="form.department"
								:readonly="readOnlyField"
								placeholder="Department Name"
							></el-input>
						</el-form-item>

						<el-form-item label="Section" prop="section" required>
							<el-input 
								v-model="form.section"
								:readonly="readOnlyField"
								placeholder="Section Name"
							></el-input>
						</el-form-item>
						
						<el-form-item v-if="scope !='show'">
							<el-button type="primary" @click="saveForm('employeeForm')">
								Save
							</el-button>
						</el-form-item>
					</el-form>
				</div>
		</el-card>
    </div>
</template>	

<script>
    export default {
		name: 'employeeform',
        props: {
            scope: String,
			id: Number,
        },
		data() {
			return{
				form: {
					name: null,
					email: null,
					department: null,
					section: null,
				}
			}
		},
		computed: {
			readOnlyField(){
                return this.scope == 'show' ? true : false;
            }
		},
		mounted(){
			console.log(this.scope);
			if(this.scope == 'edit' || this.scope == 'show')
            {
                axios.get(`/fetch-employee-data/${this.id}`).then(res => {
					this.form = res.data.data
                });
            }
		},
		methods: {
			goBack(){
				window.location.href = "/employees";
			},
			saveForm(formName){
				this.$refs[formName].validate((valid) => {
                    if (valid) {

                        if(this.scope == 'create'){
                            this.$store.dispatch('saveEmployee', this.form);
                        }else{
							this.$store.dispatch('updateEmployee', {
								id: this.id,
								form: this.form,
							});
						}
                    } 
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
</style>

