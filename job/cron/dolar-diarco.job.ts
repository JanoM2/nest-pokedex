// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';
// import { DolarDiarco } from 'src/pokemon/entities/dolar-diarco.entity';
// import { Injectable, Logger } from '@nestjs/common';

// import { getDolarDiarco } from 'src/pokemon/util/getDolarDiarco';
// import { Cron, CronExpression } from '@nestjs/schedule';

// @Injectable()
// export class DolarDiarcoJob {
//     constructor(
//         @InjectModel(DolarDiarco.name)
//         private readonly dolarDiarcoModel: Model<DolarDiarco>,
//     ) { }

//     private readonly logger = new Logger(DolarDiarcoJob.name);
//     @Cron(CronExpression.EVERY_30_SECONDS, {
//         timeZone: 'America/Argentina/Buenos_Aires',
//     })
//     async handleCron() {
//         this.logger.debug('Cron job Diarco dolar executed!');
//         try {
//             const [compra, fecha] = await getDolarDiarco();
//             const existingDiarco = await this.dolarDiarcoModel.findOne();
//             if (existingDiarco) {
//                 if (existingDiarco.compra !== compra) {
//                     await this.dolarDiarcoModel.findByIdAndUpdate(
//                         existingDiarco._id,
//                         { cierre: existingDiarco.compra, compra: compra },
//                     );

//                     this.logger.log(`Dolar Diarco updated: ${compra} (${fecha}) - previous value: ${existingDiarco.compra}`);
//                 }
//             } else {
//                 await this.dolarDiarcoModel.create({ compra: compra, cierre: compra });
//                 this.logger.log(`Dolar Diarco updated: ${compra} (${fecha})`);
//             }
//         } catch (error) {
//             this.logger.error(`Error updating Dolar Diarco: ${error.message}`);
//         }
//     }
// }