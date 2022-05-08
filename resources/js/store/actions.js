import { ref, getCurrentInstance } from 'vue'
import axios from 'axios';
import { ElNotification , ElLoading} from 'element-plus'

let loader = null;
const app = getCurrentInstance();

function displayLoader(loadingText = 'Loading...') {
	console.log('loading');
	ElLoading.service({
		lock: true,
		text: loadingText,
		background: 'rgba(255,255,255,0.85)',
	});
}

function removeLoader(loadingText = 'Loading...') {
	ElLoading.service({
		lock: true,
		text: loadingText,
		background: 'rgba(255,255,255,0.85)',
	}).close();
}

export const saveEmployee = ({commit}, payload) => {
	displayLoader();

	axios.post(`/save-employee`, payload).then(res => {

		ElNotification({
			title: 'Success',
			message: 'Employee added Successfully',
			type: 'success',
		})

		removeLoader();

		setTimeout(() => {
            window.location.href = '/employees'
        }, 2000);
	})
}

export const getEmployeesData = ({ commit }, payload) => {
    axios.post(`/get-employee-data`, payload)
        .then(response => {
            commit('setTableData', response.data);
        })
}

export const updateEmployee = ({commit}, payload) => {
	displayLoader('Update employee');

	axios.put(`/update-employee/${payload.id}`, payload.form).then(res => {

		ElNotification({
			title: 'Success',
			message: 'Employee updated Successfully',
			type: 'success',
		})

		removeLoader();

		setTimeout(() => {
            window.location.href = '/employees'
        }, 2000);
	})
}

export const deleteEmployee = ({commit}, payload) => {
	displayLoader('Deleting employee');

	axios.delete(`/delete-employee/${payload.id}`).then(res => {

		ElNotification({
			title: 'Success',
			message: res.data.message,
			type: 'success',
		})

		removeLoader();

	})
}