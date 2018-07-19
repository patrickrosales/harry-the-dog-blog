import { NgModule } from '@angular/core';

import { HarrySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HarrySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HarrySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HarrySharedCommonModule {}
