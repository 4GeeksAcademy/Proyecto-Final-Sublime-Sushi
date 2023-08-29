import jwt_decode from "jwt-decode";
 
const apiUrl = process.env.BACKEND_URL
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			preferenceId:null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			userLogin: async(email, password)=> {
				const resp = await getActions().apiFetch("/login", "POST", { email, password })
				console.log(resp)
				if(resp.code >= 400){
					return resp
				}
				setStore({
					accessToken: resp.data.accessToken,
					refreshToken: resp.data.refreshToken,
				})
				localStorage.setItem("accessToken", resp.data.accessToken)
				localStorage.setItem("refreshToken", resp.data.refreshToken)
				return resp
			},

			userLogout: async()=> {
				const resp = await getActions().apiFetchProtected("/logout", "POST")
				if(resp.code >= 400){
					return resp
				}
				setStore({
					accessToken: null,
					refreshToken: null
				})
				localStorage.removeItem("accessToken")
				localStorage.removeItem("refreshToken")
				return resp
			},

			userSignup: async(email, password, first_name, last_name, phone) => {
				const resp = await getActions().apiFetch("/signup", "POST", {email, password, first_name, last_name, phone})
				if(resp.code >= 400) {
					return resp
				}
				localStorage.setItem("accessToken", resp.data.accessToken)
				return resp
			},

			loadToken: async() => {
				let accessToken = localStorage.getItem("accessToken")
				let refreshToken = localStorage.getItem("refreshToken")
				if(!accessToken){
					if(refreshToken){
						var refreshDecoded = jwt_decode(refreshToken)
						let refreshExpired = new Date(refreshDecoded.exp * 1000) < new Date()
						if(refreshExpired){
							localStorage.removeItem("accessToken")
							localStorage.removeItem("refreshToken")
							return
						}
					}
				}
				setStore({
					accessToken: accessToken,
					refreshToken: refreshToken
				})
				//Puedo verificar la vigencia del token antes de cargarlo al store
				let expired=true
				try{
					var decoded = jwt_decode(accessToken);
					expired = new Date(decoded.exp * 1000) < new Date()
				}catch{

				}
				console.log({ expired })
				if (expired) {
					await getActions().refreshToken()
				}
			},

			requestPasswordRecovery: async(email)=> {
				const resp = await getActions().apiFetch("/recoverypassword", "POST", {email})
				return resp
			},

			changePasswordRecovery : async (passwordToken, password) => { 
				let resp = await fetch(apiUrl + "/changepassword", {
					method: "POST",
					body: JSON.stringify({password}),
					headers: {
						"Content-type": "application/json",
						"Authorization": `Bearer ${passwordToken}`
					}
				})
				if (!resp.ok) {
					console.error(`${resp.status}: ${resp.statusText}`)
					return { code: resp.status, error: `${resp.status}: ${resp.statusText}`}
				}
				let data = await resp.json()
				return { code: resp.status, data}
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await getActions().apiFetch("/hello")
					setStore({ message: resp.data.message })
					// don't forget to return something, that is how the async resolves
					//return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			apiFetch: async (endpoint, method="GET", body={}) => { //ERROR
				const headers = {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Authorization": `Bearer ${localStorage.getItem('accessToken')}`
				}
				let response = await fetch(apiUrl + endpoint, method == "GET" ? {
					headers: headers
				} : {
					method,
					body: JSON.stringify(body),
					mode: 'cors',
					headers: headers
				})
				if(!response.ok) {
					console.error(`${response.status}: ${response.statusText}`)
					return { code: response.status }
				}

				let data = await response.json()
				return { code: response.status, data }
			},
			
			apiFetchProtected: async (endpoint, method = "GET", body = {}) => {
				let params = {
					headers: {
						"Authorization": `Bearer ${getStore().accessToken}`
					}
				}
				if (method !== "GET") {
					params.method = method
					params.body = JSON.stringify(body)
					params.headers["Content-Type"] = "application/json"
				}
				let resp = await fetch(apiUrl + endpoint, params)
				let data = await resp.json()
				if (!resp.ok) {
					// Verificar si el token ha expirado
					if(data.msg=="Token has expired"){
						//Aqui se solicita un nuevo token de acceso
						await getActions().refreshToken()
						params.headers.Authorization = `Bearer ${getStore().accessToken}`

						// Se repite la peticion con el token nuevo
						resp = await fetch(apiUrl + endpoint, params)
						data = await resp.json()
						if (!resp.ok) {
							console.error(`${resp.status}: ${resp.statusText}`)
							return { code: resp.status, error: `${resp.status}: ${resp.statusText}` }
						}
					} else {
						console.error(`${resp.status}: ${resp.statusText}`)
						return { code: resp.status, error: `${resp.status}: ${resp.statusText}` }
					}
				}
				return { code: resp.status, data }
			},

			refreshToken: async ()=>{
				let resp = await fetch (apiUrl + "/refresh",{
					method:"POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer" + getStore().refreshToken
					}
				})
				if (!resp.ok){
					console.error(`${resp.status}: ${resp.statusText}`)
					return { code: resp.status, error: `${resp.status}: ${resp.statusText}` }
				}
				let data = await resp.json()
				setStore({
					accessToken:data.accessToken,
					refreshToken:data.refreshToken
				})
				localStorage.setItem("accessToken", data.accessToken)
				localStorage.setItem("refreshToken", data.refreshToken)
			},

			createPreference: async () => {
				try {
					const response = await fetch("http://127.0.0.1:5000/create_preference", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						title: "New York",
						description: "Uramaki de Salmon, Palta y Queso Philadelphia, Coronado con semillas de sésamo tostado",
						price: 500,
						quantity: 1,
						currency_id: "$",
					}),
					});

					if (response.ok) {
					console.log("El response vino ok del back end y tiene esta info: ", response)
					const data = await response.json();
					const { id } = data;
					console.log("ESTE ES EL FAMOSO ID: ", id)
					let store = getStore()
					setStore({...store , preferenceId: id})
					let store2 = getStore()
					console.log("Este es el contenido de id en el store: ",store2.preferenceId.id)
					return id;
					} else {
					console.error("Error creating preference, o sea response.ok dio false en flux.js");
					}
				} catch (error) {
					console.error(error);
				}

			  }

			
			  

			/*apiFetchProtected: async (endpoint, method = "GET", body = {}) => {
				let resp = await fetch(apiUrl + endpoint, method == "GET" ? undefined : {
					method,
					body: JSON.stringify(body),
					headers: {
						"Content-type": "application/json",
						"Authorization": `Bearer ${getStore().accessToken}`
					}
				})
				if (!resp.ok) {
					// Verificar si el token ha expirado
					
					//Si el token expira se debe usar el refresh token para obteer un nuevo access token
					console.error(`${resp.status}: ${resp.statusText}`)
					return { code: resp.status, error: `${resp.status}: ${resp.statusText}`}
				}
				let data = await resp.json()
				return { code: resp.status, data}
			}*/
		}
	};
};

export default getState;
