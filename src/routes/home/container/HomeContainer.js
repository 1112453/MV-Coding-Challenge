import Home from '../index';
import { connect } from 'react-redux';

import { 
    votePostUp,
    votePostDown
} from '../controller/HomeActions';

const mapStateToProps = (state) => (
    {
        list: state.home.list,
    }
)

const mapActionCreators = {
    votePostUp,
    votePostDown
}

export default connect(mapStateToProps, mapActionCreators)(Home);