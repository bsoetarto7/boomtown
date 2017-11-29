import React, { Component } from 'react';
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import {LeftSide, RightSide} from './index';
import { setSelectedTags, setImageUpload, setImageUploadPlaceHolder, resetShare } from '../../redux/modules/shareReducer';
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

  submitShareItem = async () => {
    const { imageFile, selectedTags, mutate, shareDateNow, history } = this.props;
    const { user } = this.props.data;
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
      },
      refetchQueries: [{
        query: gql`
          query{
            items{
              id
              title
              description
              imageurl
              tags{
                id
                tagname
              }
              itemowner{
                id
                fullname
                email
                bio
              }
              created
              borrower{
                id
                fullname
              }
            }
          }
        `
      }]
    })
    .then( res => {
      this.props.dispatch(resetShare());
      history.push('/')
    });
  }

  render() {
    const { itemTitle, itemDescription } = this.props.inputValues;
    const { selectedTags, shareDateNow, imageData, stepIndex } = this.props;
    const { tags, user, loading } = this.props.data;
    return (
      <section className="share-container">
        <LeftSide itemTitle={itemTitle} itemDescription={itemDescription} selectedTags={selectedTags} shareDateNow={shareDateNow} user={!loading ? user : {email:'', fullname:''}} imageData={imageData} />
        <RightSide itemTitle={itemTitle} itemDescription={itemDescription} stepIndex={stepIndex} dropdownList={!loading ? tags : []} handleChange={this.handleChange} selectedValue={selectedTags} handleImageUpload={this.handleImageUpload} imageData={imageData} submitShareItem={this.submitShareItem} />
      </section>
    );
  }
}

const fetchTagsUserData = gql`
  query fetchTagsUserData($id:ID!){
    tags{
      id
      tagname
    }
    user(id:$id){
      id
      email
      fullname
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

const TagsData = compose(graphql(fetchTagsUserData,{
  options: ownProps => ({
    variables:{
      id:ownProps.user.uid
    }
  })
}), graphql(addCardItem))(ShareContainer);

export default connect(mapStateToProps)(TagsData)