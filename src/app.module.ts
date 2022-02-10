import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb://10.214.10.56:27017/test?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')],
  controllers: [],
  providers: [],
})
export class AppModule { }
