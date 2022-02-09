import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [MongooseModule.forRoot('mongodb://10.214.10.56:27017/brain?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
