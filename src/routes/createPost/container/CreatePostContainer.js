import CreatePost from '../index';
import { connect } from 'react-redux';

import {
    createPost
} from '../../home/controller/HomeActions';

const mapStateToProps = (state) => (
    {
    }
)

const mapActionCreators = {
    createPost
}

export default connect(mapStateToProps, mapActionCreators)(CreatePost);