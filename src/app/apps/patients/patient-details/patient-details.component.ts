import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ExamResultService } from 'src/app/shared/services/examResult.service';
import { MidicalHistoryService } from 'src/app/shared/services/medicalHistory.service';
import { PatientService } from 'src/app/shared/services/patient.service';


@Component({
    selector: 'app-patient-details',
    templateUrl: './patient-details.component.html',
    styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {


    id: number
    patient: any
    description: string
    history: any = []
    examsResult:any=[]
    examResult={result:'',examType:''}

    constructor(
        private patientService: PatientService,
        private activeRoute: ActivatedRoute,
        private medicalHistpryService: MidicalHistoryService,
        private message: NzMessageService,
        private modalService: NzModalService,
        private examResultService:ExamResultService
    ) { }


    ngOnInit(): void {
        this.activeRoute.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
        });

        this.getPatientDetails()
        this.getPatientExamResult()
        this.getPatientHistory()
    }

    getPatientHistory() {
        this.medicalHistpryService.getMedicalHistoryPatient(this.id).subscribe(res => {
            this.history = res
        })
    }
    getPatientExamResult() {
        this.examResultService.getExamResultPatient(this.id).subscribe(res => {
            this.examsResult = res
        })
    }

    addHistory() {
        this.medicalHistpryService.create({ description: this.description, patientID: this.id }).subscribe(res => {
            this.message.success("Added Succeffly")
            this.description=""
            this.getPatientHistory()
        })

    }

    showNewProject(newProjectContent: TemplateRef<{}>) {
        const modal = this.modalService.create({
            nzTitle: 'Create New Exam Result',
            nzContent: newProjectContent,
            nzFooter: [
                {
                    label: 'Create Exam Result',
                    type: 'primary',
                    onClick: () =>  this.createExamResult()
                },
            ],
            nzWidth: 800
        })    
    }

    createExamResult(){

        this.examResultService.create({ ...this.examResult, patientID: this.id }).subscribe(res => {
            this.message.success("Added Succeffly")
           this.modalService.closeAll()
           this.examResult.examType=''
           this.examResult.result=''
            this.getPatientExamResult()
        })
        

    }
    getPatientDetails() {
        this.patientService.getPatientDetails(this.id).subscribe(res => {
            this.patient = res
        })
    }


    skillListData = ['Sketch', 'Marvel', 'Photoshop', 'Illustrator', 'Web Design', 'Mobile App Design', 'User Interface', 'User Experience']

    expListData = [
        {
            img: 'assets/images/others/adobe-thumb.png',
            title: 'UI/UX Designer',
            company: 'Adobe Inc.',
            date: 'Jul 2018'
        },
        {
            img: 'assets/images/others/amazon-thumb.png',
            title: 'Product Developer',
            company: 'Amazon.com Inc.',
            date: 'Jul-2017 - Jul 2018'
        },
        {
            img: 'assets/images/others/nvidia-thumb.png',
            title: 'Interface Designer',
            company: 'Nvidia Corporation',
            date: 'Jul-2016 - Jul 2017'
        }
    ]

    eduListData = [
        {
            img: 'assets/images/others/cambridge-thumb.png',
            degree: 'MSt in Social Innovation',
            school: 'Cambridge University',
            date: 'Jul-2012 - Jul 2016'
        },
        {
            img: 'assets/images/others/phillips-academy-thumb.png',
            degree: '',
            school: 'Phillips Academy',
            date: 'Jul-2005 - Jul 2011'
        }
    ]

    editorConfig = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'align': [] }],
            ['link', 'image']
        ]
    };
    connectedListData = [
        {
            name: 'Erin Gonzales',
            src: 'assets/images/avatars/thumb-1.jpg',
            title: 'UI/UX Designer'
        },
        {
            name: 'Darryl Day',
            src: 'assets/images/avatars/thumb-2.jpg',
            title: 'Software Engineer'
        },
        {
            name: 'Marshall Nichols',
            src: 'assets/images/avatars/thumb-3.jpg',
            title: 'Product Manager'
        },
        {
            name: 'Riley Newman',
            src: 'assets/images/avatars/thumb-6.jpg',
            title: 'Data Analyst'
        }
    ];

    projectListData = [
        {
            name: 'Coffee Finder App',
            img: 'assets/images/others/coffee-app-thumb.jpg',
            desc: 'It is a long established fact that a reader will be distracted by the readable content.',
            status: 'In Progress',
            participate: [
                {
                    name: 'Eugene Jordan',
                    img: 'assets/images/avatars/thumb-6.jpg'
                },
                {
                    name: 'Pamela',
                    img: 'assets/images/avatars/thumb-7.jpg'
                }
            ]
        },
        {
            name: 'Weather App',
            img: 'assets/images/others/weather-app-thumb.jpg',
            desc: 'It is a long established fact that a reader will be distracted by the readable content.',
            status: 'Completed',
            participate: [
                {
                    name: 'Lillian Stone',
                    img: 'assets/images/avatars/thumb-8.jpg'
                },
                {
                    name: 'Victor Terry',
                    img: 'assets/images/avatars/thumb-9.jpg'
                },
                {
                    name: 'Wilma Young',
                    img: 'assets/images/avatars/thumb-10.jpg'
                }
            ]
        },
        {
            name: 'Music App',
            img: 'assets/images/others/music-app-thumb.jpg',
            desc: 'Protein, iron, and calcium are some of the nutritional benefits associated with cheeseburgers.',
            status: 'Completed',
            participate: [
                {
                    name: 'Lillian Stone',
                    img: 'assets/images/avatars/thumb-2.jpg'
                },
                {
                    name: 'Wilma Young',
                    img: 'assets/images/avatars/thumb-4.jpg'
                }
            ]
        }
    ];
    

    reviewListData = [
        {
            name: 'Lillian Stone',
            img: 'assets/images/avatars/thumb-8.jpg',
            date: '28th Jul 2018',
            rating: 5,
            review: 'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.'
        },
        {
            name: 'Victor Terry',
            img: 'assets/images/avatars/thumb-9.jpg',
            date: '28th Jul 2018',
            rating: 4,
            review: 'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.'
        },
        {
            name: 'Wilma Young',
            img: 'assets/images/avatars/thumb-10.jpg',
            date: '28th Jul 2018',
            rating: 5,
            review: 'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.'
        }
    ]
}    
