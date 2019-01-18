import axios from 'axios';

export const postauth = (data) => {
	console.log('Я в то апи 1');
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "POST_AUTH"
		});
		console.log(data);
		axios({
		  method:'post',
		  url:'http://5086e6e7.ngrok.io/api/v1/users',
		  data: data
		})
		  .then(function(response) {
				console.log(response);
					dispatch({
					type: "POST_AUTH_OK",
					responseData: response.data,
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