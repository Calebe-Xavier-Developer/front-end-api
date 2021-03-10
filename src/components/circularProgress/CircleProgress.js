import React, {Component} from 'react';
import  withStyles  from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    progress: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flex: '1'
    }
}
export class CircleProgress extends Component {
    render() {
        const { progressClasses } = this.props;
        return (
            <div className={progressClasses.progress}>
                <CircularProgress size={(this.props.size)? this.props.size : 40} color={(this.props.color) ? this.props.color :'primary'}/>
            </div>
        )
    }
}

export default withStyles(styles)(CircleProgress)