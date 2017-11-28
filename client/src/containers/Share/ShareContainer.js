import React, { Component } from 'react';
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import {LeftSide, RightSide} from './index';
import { setSelectedTags, setImageUpload, setImageUploadPlaceHolder, resetShare } from '../../redux/modules/shareReducer';
import './styles.css';
import firebase from '../../firebaseHelper';
import { storage } from '../../../../server/node_modules/firebase';
import { 
  Redirect
} from 'react-router-dom';

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

  submitShareItem = async () => {
    const { imageFile, selectedTags, user, mutate, shareDateNow, history } = this.props;
    const { itemTitle, itemDescription } = this.props.inputValues;
    var storageRef = firebase.storage().ref();
    const imageURL = await storageRef.child(`images/${user.id}/${imageFile.name}-${shareDateNow}`)
           .put(imageFile)
           .then((snapshot) => {
              return snapshot.downloadURL;
           })

    const allSelectedTagsID = selectedTags.map((tags) => tags.id);

    mutate({ 
      variables: { 
        title: itemTitle,
        description: itemDescription,
        imageurl: imageURL,
        tags: allSelectedTagsID,
        itemowner: user.id
      }
    })
    .then( res => {
      this.props.dispatch(resetShare());
      this.props.data.refetch();
      history.push('/')
    });
  }

  render() {
    const { itemTitle, itemDescription } = this.props.inputValues;
    const { dropdownList, selectedTags, shareDateNow, user, imageFile, imageData, stepIndex } = this.props;
    const { tags, loading } = this.props.data;
    console.log(this.props);
    return (
      <section className="share-container">
        <LeftSide itemTitle={itemTitle} itemDescription={itemDescription} selectedTags={selectedTags} shareDateNow={shareDateNow} user={user} imageData={imageData} />
        <RightSide itemTitle={itemTitle} itemDescription={itemDescription} stepIndex={stepIndex} dropdownList={!loading?tags:[]} handleChange={this.handleChange} selectedValue={selectedTags} handleImageUpload={this.handleImageUpload} imageData={imageData} submitShareItem={this.submitShareItem} />
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
const addCardItem = gql`
  mutation addCardItem(
    $title: String!
    $description: String
    $imageurl: String
    $tags: [String]
    $itemowner: ID!
  ) {
    addCardItem(
      title:$title
      description:$description
      imageurl:$imageurl
      tags:$tags
      itemowner:$itemowner
    ){
      title
      description
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

const TagsData = compose(graphql(fetchTagsData), graphql(addCardItem))(ShareContainer);

export default connect(mapStateToProps)(TagsData)