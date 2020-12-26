import { Injectable } from '@nestjs/common';
import 'dotenv/config'

@Injectable()
export class ConfigService {
    private SENTRY_DNS: string = "";
    private NODE_ENV: string = "dev";
    private PORT: number;
    constructor() {
        const { SENTRY_DNS, NODE_ENV, PORT } = process.env
        this.SENTRY_DNS = SENTRY_DNS ? SENTRY_DNS : "";
        this.NODE_ENV = NODE_ENV ? NODE_ENV.toLowerCase() : "dev"
        this.PORT = PORT ? parseInt(PORT) : 3000;
    }

    getSentryDns(): string {
        return this.SENTRY_DNS;
    }

    getIsProduction(): boolean {
        return this.NODE_ENV == "production";
    }

    getPort(): number {
        return this.PORT
    }
}
