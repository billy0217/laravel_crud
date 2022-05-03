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
						label-width="120px"
					>
						<el-form-item label="Name" prop="name" required>
							<el-input 
								v-model="form.name"
								placeholder="Employee Name"
							></el-input>
						</el-form-item>
						<el-form-item label="Email" prop="email" required>
							<el-input 
								v-model="form.email"
								type="email"
								placeholder="Email Address"
							></el-input>
						</el-form-item>
						<el-form-item label="Department" prop="department" required>
							<el-input 
								v-model="form.department"
								placeholder="Department Name"
							></el-input>
						</el-form-item>

						<el-form-item label="Section" prop="section" required>
							<el-input 
								v-model="form.section"
								placeholder="Section Name"
							></el-input>
						</el-form-item>
						
						<el-form-item>
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
		methods: {
			goBack(){
				window.location.href = "/employess";
			},

			saveForm(formName){
				alert(formName)
			}
		}
    }
</script>
