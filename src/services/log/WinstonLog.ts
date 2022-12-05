import { format, createLogger, transports } from 'winston';


const { combine, timestamp, label, prettyPrint, errors } = format;
const CATEGORY = "winston custom format";


const logger = createLogger({
    level: "debug",
    handleExceptions: true,
    handleRejections: true,
    format: combine(
        errors({ stack: true }),

        label({ label: CATEGORY }),
        timestamp({
            format: "MMM-DD-YYYY HH:mm:ss",
        }),
        prettyPrint()
    ),
    transports: [
        new transports.Http({
        host: '127.0.0.1',
        port: 3001,
        path: 'log',
        ssl: false
    }),
        new transports.File({
            dirname: 'logs',
            filename: 'debug.log'
        })
    ],
});

export default logger;