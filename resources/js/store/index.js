import { createApp } from "vue";
import {createStore} from 'vuex';

import getters from "./getters";
import mutations from "./mutations";
import * as actions from "./actions";

export const store = createStore({
	modules: {

	},
	state: {
		tableData: [],
	},
	mutations,
	actions,
	getters
});

