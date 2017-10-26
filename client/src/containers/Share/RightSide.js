import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { setNextStepIndex,setPrevStepIndex } from '../../redux/modules/shareReducer';
import { TextInput, TextArea } from '../../components/Share/TextInputs';

class RightSide extends React.Component {

  handleNext = () => {
    const {stepIndex} = this.props;
    this.props.dispatch(setNextStepIndex(stepIndex))
  };

  handlePrev = () => {
    const {stepIndex} = this.props;
    this.props.dispatch(setPrevStepIndex(stepIndex))
  };

  renderStepActions(step) {
    const {stepIndex} = this.props;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 3 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <RaisedButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
            secondary={true}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex} = this.props;

    return (
      <div className="share-stepper-container">
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Add Image</StepLabel>
            <StepContent>
              <p>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Add Title & Description</StepLabel>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
              <form>
                <Field
                  name="itemTitle"
                  type="text"
                  component={TextInput}
                />
                <Field
                  name="itemDescription"
                  type="text"
                  component={TextArea}
                />
              </form>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Categorize Your Item</StepLabel>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Confirm Things!</StepLabel>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}

const newItemForm = reduxForm({
  form:'newItemForm'
})(RightSide)

export default newItemForm;