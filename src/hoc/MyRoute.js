import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const WithFooter = withStyles((theme) => ({
	mainContent: {
		backgroundColor: theme.palette.common.globalBackground,
		maxHeight: '100%'
	},
	footer_placeHolder: {
		width: '100%',
		height: '86px',
		[theme.breakpoints.down('641')]: {
			height: '82px'
		},
		[theme.breakpoints.down('481')]: {
			height: '64px'
		},
		[theme.breakpoints.down('421')]: {
			height: '54px'
		},
		[theme.breakpoints.down('381')]: {
			height: '50px'
		},
		[theme.breakpoints.down('361')]: {
			height: '48px'
		},
		[theme.breakpoints.down('321')]: {
			height: '43px'
		}
	}
}))((props) => {
	const { children, classes } = props;
	return (
		<div className={classes.mainContent}>
			{children}
			<div className={classes.footer_placeHolder} />
		</div>
	);
});

const NewDiv1 = withStyles((theme) => ({
	mainContent3: {
		height: 'calc(100% - 86px)',
		[theme.breakpoints.down('641')]: {
			height: 'calc(100% - 82px)'
		},
		[theme.breakpoints.down('481')]: {
			height: 'calc(100% - 64px)'
		},
		[theme.breakpoints.down('421')]: {
			height: 'calc(100% - 54px)'
		},
		[theme.breakpoints.down('381')]: {
			height: 'calc(100% - 50px)'
		},
		[theme.breakpoints.down('361')]: {
			height: 'calc(100% - 48px)'
		},
		[theme.breakpoints.down('321')]: {
			height: 'calc(100% - 43px)'
		}
	},
	withProgressBar3: {
		height: 'calc(100% - 86px - 45px)',
		[theme.breakpoints.down('641')]: {
			height: 'calc(100% - 82px - 42px)'
		},
		[theme.breakpoints.down('481')]: {
			height: 'calc(100% - 64px - 38px)'
		},
		[theme.breakpoints.down('421')]: {
			height: 'calc(100% - 54px - 38px)'
		},
		[theme.breakpoints.down('381')]: {
			height: 'calc(100% - 50px - 35px)'
		},
		[theme.breakpoints.down('361')]: {
			height: 'calc(100% - 48px - 35px)'
		},
		[theme.breakpoints.down('321')]: {
			height: 'calc(100% - 43px - 31px)'
		}
	}
}))((props) => {
	const { children, classes, billUploadStatus } = props;
	return (
		<div className={billUploadStatus ? classes.withProgressBar3 : classes.mainContent3}>
			{children}
		</div>
	);
});

const NewDiv2 = withStyles((theme) => ({
	mainContent3: {
		height: 'calc(100% - 86px - 86px)',
		[theme.breakpoints.down('641')]: {
			height: 'calc(100% - 82px - 82px)'
		},
		[theme.breakpoints.down('481')]: {
			height: 'calc(100% - 64px - 64px)'
		},
		[theme.breakpoints.down('421')]: {
			height: 'calc(100% - 54px - 54px)'
		},
		[theme.breakpoints.down('381')]: {
			height: 'calc(100% - 50px - 50px)'
		},
		[theme.breakpoints.down('361')]: {
			height: 'calc(100% - 48px - 48px)'
		},
		[theme.breakpoints.down('321')]: {
			height: 'calc(100% - 43px - 43px)'
		}
	},
	withProgressBar3: {
		height: 'calc(100% - 86px - 86px - 45px)',
		[theme.breakpoints.down('641')]: {
			height: 'calc(100% - 82px - 82px - 42px)'
		},
		[theme.breakpoints.down('481')]: {
			height: 'calc(100% - 64px - 64px - 38px)'
		},
		[theme.breakpoints.down('421')]: {
			height: 'calc(100% - 54px - 54px - 38px)'
		},
		[theme.breakpoints.down('381')]: {
			height: 'calc(100% - 50px - 50px - 35px)'
		},
		[theme.breakpoints.down('361')]: {
			height: 'calc(100% - 48px - 48px - 35px)'
		},
		[theme.breakpoints.down('321')]: {
			height: 'calc(100% - 43px - 43px - 31px)'
		}
	}
}))((props) => {
	const { children, classes, billUploadStatus } = props;
	return (
		<div className={billUploadStatus ? classes.withProgressBar3 : classes.mainContent3}>
			{children}
		</div>
	);
});

const FullHeight = withStyles((theme) => ({
	mainContent: {
		backgroundColor: theme.palette.common.globalBackground,
		maxHeight: '100%'
	},
}))((props) => {
	const { children, classes, billUploadStatus } = props;
	return (
		<div className={classes.mainContent}>
			{children}
		</div>
	);
});

const MyRoute = (props) => {
	if (props.normalHeight) {
		return <NewDiv1 billUploadStatus={props.billUploadStatus}>{props.children}</NewDiv1>
	}
	if (props.fullHeight) {
		return <FullHeight billUploadStatus={props.billUploadStatus}>{props.children}</FullHeight>;
	}
	if (props.normalHeightWithFooter) {
		return <NewDiv2 billUploadStatus={props.billUploadStatus}>{props.children}</NewDiv2>
	}
	return <WithFooter billUploadStatus={props.billUploadStatus}>{props.children}</WithFooter>
};

export default MyRoute;