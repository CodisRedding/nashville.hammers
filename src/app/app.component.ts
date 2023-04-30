import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

import { DataStore } from '@aws-amplify/datastore';
import { Location } from '../models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'Nashville Hammers';

    constructor(private primengConfig: PrimeNGConfig) { }

    async ngOnInit() {
        this.primengConfig.ripple = true;

        // await DataStore.save(
        //     new Location({
        //         "address": "Lorem ipsum dolor sit amet",
        //         "doorOpenDateTime": "1970-01-01T12:30:23.999Z",
        //         "name": "Lorem ipsum dolor sit amet",
        //         "inviteOnly": true,
        //         "inviteOnlyProofToGainEntry": "Lorem ipsum dolor sit amet",
        //         "phone": "(555) 123-6789",
        //         "barTender": "Lorem ipsum dolor sit amet",
        //         "barTenderPhone": "(555) 123-6789",
        //         "canceled": true
        //     })
        // );
    }
}
