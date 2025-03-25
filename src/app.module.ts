import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CONFIG } from './config';

@Module({
  imports: [
    ConfigModule.forRoot(), //establecer las variables de entorno
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: CONFIG.db.DB_HOST,
      port: +CONFIG.db.DB_PORT,
      database: CONFIG.db.DB_NAME,
      username: CONFIG.db.DB_USERNAME,
      password: CONFIG.db.DB_PASSWORD,
      autoLoadEntities: true, //carga automaticamente las entidades que se van definiendo
      synchronize: true,
    }), //establecer typeorm en el proyecto
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
