import { Story, Meta } from '@storybook/angular/types-6-0';
import { OnboardingComponent } from '../app/onboarding/onboarding.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

export default {
  title: 'CSF/Onboarding Component',
  component: OnboardingComponent,
  decorators:[moduleMetadata( {declarations:[OnboardingComponent],
    imports: [
    BrowserModule, 
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], { useHash: true })
  ],
      providers: []})],
      parameters: {
      },
      argTypes: {
        backgroundColor: { control: 'color' },
        employeeForm:{backgroundColor: { control: 'color' }}
      },

} as Meta;

const Template: Story<OnboardingComponent> = (args) => ({
  component: OnboardingComponent,
  props: args,
});

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};


export const SubmitDocuments = Template.bind({});
SubmitDocuments.parameters={docs: { storyDescription: "This is the first part of the stepper form. In this, the user can uplaod the required documents in .pdf or.docx format. Once the document is uploaded, the user can also download it."},
viewport: {
  viewports: {
     ...MINIMAL_VIEWPORTS,
    ...customViewports,
  },
},};
// SubmitDocuments.argTypes={
//   employeeForm:{borderWidth: { control: { type: 'number', min: 0, max: 10 }}}
// }


SubmitDocuments.argTypes={toggle:{control:'boolean'},loadingState: {
  control: {
    type: 'inline-radio',
    options: ['loading', 'error', 'ready'],
  },width: { 
    control: { type: 'range', min: 400, max: 1200, step: 50 },
  },size: 'large'
}};


