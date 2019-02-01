import axios from 'axios';

export const postauth = (data) => {
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "POST_AUTH"
		});
		axios({
		  method:'post',
		  url:'http://api.chukuruk.ru/api/v1/login',
		  data: data
		})
		  .then(function(response) {
					console.log(response)
					dispatch({
					type: "POST_AUTH_OK",
					responseData: response.data.token,
				});
		  })
		  .catch(function (error) {
			console.log(error)  
		   	dispatch({
				type: "POST_AUTH_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};