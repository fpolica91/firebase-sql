import * as functions from 'firebase-functions';
import 'reflect-metadata';
import { connection } from './config'
import { Hippo } from './entities/Hippo';
import { Hat } from './entities/Hats'

export const createHippo = functions.https.onRequest(async (request, response) => {

  const { name, weight } = request.body;

  try {
    const connect = await connection();

    const repo = connect.getRepository(Hippo);

    const newHippo = new Hippo();
    newHippo.name = name;
    newHippo.weight = weight;


    const savedHippo = await repo.save(newHippo);

    response.send(savedHippo);

  } catch (error) {
    response.send(error)
  }

});

export const getHippos = functions.https.onRequest(async (request, response) => {

  const connect = await connection();
  const hippoRepo = connect.getRepository(Hippo);

  const hipposWearingHats = await hippoRepo
    .createQueryBuilder('hippo')
    .leftJoinAndSelect('hippo.hats', 'hat')
    .getMany();

  response.send(hipposWearingHats);



});

export const createHat = functions.https.onRequest(async (request, response) => {

  const { owner, color } = request.body;
  console.log(owner)
  const connect = await connection();
  const hatRespoitory = connect.getRepository(Hat);

  const newHat = new Hat();
  newHat.owner = owner;
  newHat.color = color;

  const savedHat = await hatRespoitory.save(newHat);
  response.send(savedHat);
});