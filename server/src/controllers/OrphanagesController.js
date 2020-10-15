"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Yup = __importStar(require("yup"));
const Orphanage_1 = __importDefault(require("../models/Orphanage"));
const orphanage_view_1 = __importDefault(require("../views/orphanage_view"));
exports.default = {
    async index(request, response) {
        const orphanagesRepository = typeorm_1.getRepository(Orphanage_1.default);
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });
        return response.json(orphanage_view_1.default.renderMany(orphanages));
    },
    async show(request, response) {
        const { id } = request.params;
        const orphanagesRepository = typeorm_1.getRepository(Orphanage_1.default);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });
        return response.json(orphanage_view_1.default.render(orphanage));
    },
    async create(request, response) {
        const { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, } = request.body;
        const orphanagesRepository = typeorm_1.getRepository(Orphanage_1.default);
        const requestImages = request.files;
        const images = requestImages.map(image => {
            return { path: image.filename };
        });
        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            images,
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        });
        await schema.validate(data, {
            abortEarly: false
        });
        const orphanage = orphanagesRepository.create(data);
        await orphanagesRepository.save(orphanage);
        return response.status(201).json(orphanage);
    }
};
