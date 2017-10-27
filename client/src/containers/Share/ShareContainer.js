import React, { Component } from 'react';
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {LeftSide, RightSide} from './index';
import { setSelectedTags } from '../../redux/modules/shareReducer';
import './styles.css';

class ShareContainer extends Component {
 
  handleChange = (event, index, value) => {
    this.props.dispatch(setSelectedTags(value));
  }

  render() {
    const { itemTitle, itemDescription } = this.props.inputValues;
    const { dropdownList, selectedTags,shareDateNow } = this.props
    const { tags, loading } = this.props.data
    return (
      <section className="share-container">
        <LeftSide itemTitle={itemTitle} itemDescription={itemDescription} selectedTags={selectedTags} shareDateNow={shareDateNow}/>
        <RightSide itemTitle={itemTitle} itemDescription={itemDescription} stepIndex={this.props.stepIndex} dropdownList={!loading?tags:[]} handleChange={this.handleChange} selectedValue={selectedTags}/>
      </section>
    );
  }
}

const fetchTagsData = gql`
  query{
    tags{
      id
      tagname
    }
  }
`

const mapStateToProps = state => { 
  const values = formValueSelector('newItemForm');
  return {
    inputValues: values(state, "itemTitle", "itemDescription"),
    stepIndex: state.share.stepIndex,
    selectedTags: state.share.selectedTags,
    shareDateNow: state.share.shareDateNow
  }
};

const TagsData = graphql(fetchTagsData)(ShareContainer);

export default connect(mapStateToProps)(TagsData)