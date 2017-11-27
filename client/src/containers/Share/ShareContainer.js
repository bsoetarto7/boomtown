import React, { Component } from 'react';
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {LeftSide, RightSide} from './index';
import { setSelectedTags, setImageUpload, setImageUploadPlaceHolder } from '../../redux/modules/shareReducer';
import './styles.css';
import firebase from '../../firebaseHelper';

class ShareContainer extends Component {
 
  handleChange = (event, index, value) => {
    this.props.dispatch(setSelectedTags(value));
  }

  handleImageUpload = (input) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      this.props.dispatch(setImageUpload(input.target.files[0]));
      reader.onload = (e) => {
        this.props.dispatch(setImageUploadPlaceHolder(e.target.result));
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  }

  render() {
    const { itemTitle, itemDescription } = this.props.inputValues;
    const { dropdownList, selectedTags, shareDateNow, user, imageFile, imageData } = this.props;
    const { tags, loading } = this.props.data;

    return (
      <section className="share-container">
        <LeftSide itemTitle={itemTitle} itemDescription={itemDescription} selectedTags={selectedTags} shareDateNow={shareDateNow} user={user} imageData={imageData} />
        <RightSide itemTitle={itemTitle} itemDescription={itemDescription} stepIndex={this.props.stepIndex} dropdownList={!loading?tags:[]} handleChange={this.handleChange} selectedValue={selectedTags} handleImageUpload={this.handleImageUpload} imageData={imageData} />
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
    shareDateNow: state.share.shareDateNow,
    user: state.login.user,
    imageFile: state.share.imageFile,
    imageData: state.share.imageData
  }
};

const TagsData = graphql(fetchTagsData)(ShareContainer);

export default connect(mapStateToProps)(TagsData)