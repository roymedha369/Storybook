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

} as Meta;

const Template: Story<OnboardingComponent> = (args) => ({
  component: OnboardingComponent,
  props: args,
});

export const SubmitDocuments = Template.bind({});
SubmitDocuments.parameters={docs:{ storyDescription: "This is the first part of the stepper form. In this, the user can uplaod the required documents in .pdf or.docx format. Once the document is uploaded, the user can also download it."}};
