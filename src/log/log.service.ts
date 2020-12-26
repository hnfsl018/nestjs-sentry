import { Injectable } from '@nestjs/common';
import * as Sentry from '@sentry/minimal';
@Injectable()
export class LogService {

    constructor() { }

    captureException(exception, scopes = {}) {
        Sentry.withScope(scope => {
            for (const key of Object.keys(scopes)) {
                scope.setExtra(key, scopes[key])
            }
            Sentry.captureException(exception)
        })
    }
}
