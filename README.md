# SurveyBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Part 2

Data Service:

1. Change variable name and its type from data: any to questionForm: FormGroup
2. Change the method name from sendData to sendForm
3. Change the parameters name and type from \_data:any to \_questionForm: FormGroup

App Module:

1. Import ReactiveFormsModule

Form Builder Component:

1. Change variable name and type from question: string to questionForm: FormGroup
2. Implement OnInit
3. Inject formBuilder
4. Inside ngOnInit, initialize formBuilder.group to this.questionForm
5. Change the method name from sendData to sendForm
6. Inside the sendForm method, change the dataService method and parameters from sendData(question) to sendForm(questionForm)

Form Builder Template:

1. Bind the form to formGroup=questionForm
2. Bind the ngSubmit to sendForm
3. Change the binding of ngModel to formControlName
4. Change button type to submit

Survey Form Component:

1. At the assignment of dataValue to this.question, change dataValue to dataValue.value['question']
