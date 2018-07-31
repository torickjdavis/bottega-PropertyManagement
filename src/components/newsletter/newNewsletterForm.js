import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage } from '../formFields';

class NewNewsletterForm extends Component {
	render() {
		
		const { handleSubmit, formTitle, newsletterToEdit } = this.props;
		const {
			fieldOnePlaceholder, fieldOneTitle,
			fieldTwoPlaceholder, fieldTwoTitle
			
		} = this.props;
		
		let title, body, imageUrl;

		if(newsletterToEdit)
		{
			title = newsletterToEdit.title;
			body = newsletterToEdit.body;
			imageUrl = newsletterToEdit.imageUrl;
		}
		
		return (
			<form onSubmit={ handleSubmit } className='newNewsletter-form'>
				<FormTitle text={formTitle}/>
				<Field
					className='newsletter-title'
					component={ FormInput }
					name='title'
					type='text'
					placeholder={fieldOnePlaceholder}
					title={fieldOneTitle}
					editValue={title ? title : null}
				/>
				<Field
					className='body'
					component={ FormTextArea }
					name='body'
					placeholder={fieldTwoPlaceholder}
					title={fieldTwoTitle}
					editValue={body ? body : null}
				/>
				<Field
					className="submit"
					small={true}
					alternative={true}
					component={ FormButton }
					name="submit"
					type="submit"
					title="Submit"
				/>
				<Field
					className="cancel"
					small={true}
					component={ FormButton }
					name="cancel"
					type="button"
					title="Cancel"
					onClick={this.props.onCancel}
				/>
				<Field
					className="image"
					component={ FormImage }
					name="image"
					// type="file" // always 'file'
					title="Image"
					imageUrl={imageUrl}
				/>
			</form>
		);
	}
}

NewNewsletterForm = reduxForm({
	form: 'newNewsletter'
})(NewNewsletterForm);

export default NewNewsletterForm;
