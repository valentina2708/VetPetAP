import { createTheme } from '@mui/material';

export const Colors = {
	primary: '#427D9D',
	secondary: '#164863',
	success: '#9BBEC8',
	info: '#DDF2FD',
	info2:'#E9601C',
	dark: '#0e1b20', 
	light: '#aaa',
	muted: '#abafb3',
	border: '#DDDFE1',
	'@mui/material': '#2F3D4A',
	
	/// ////////////
	// Grays
	/// ////////////
	dim_grey: '#696969',
	dove_gray: '#d5d5d5',
	body_bg: '#f3f6f9',
	light_gray: 'rgb(230,230,230)',
	/// ////////////
	// Solid Color
	/// ////////////
	white: '#fff',
	black: '#000',
};

const theme = createTheme({
	typography: {
		fontFamily: ['Poppins', 'Roboto'].join(','),
	},
	container: {
		bgColor: 'black',
	},
	palette: {
		primary: {
			main: Colors.primary,
		},
		secondary: {
			main: Colors.secondary,
		},
	},
});

export default theme;
