type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: unknown;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private formatMessage(level: LogLevel, message: string, data?: unknown): LogEntry {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      data,
    };
  }

  private log(level: LogLevel, message: string, data?: unknown) {
    const entry = this.formatMessage(level, message, data);

    if (this.isDevelopment) {
      const colorMap = {
        info: '\x1b[36m', // Cyan
        warn: '\x1b[33m', // Yellow
        error: '\x1b[31m', // Red
        debug: '\x1b[90m', // Gray
      };
      const reset = '\x1b[0m';
      
      console[level](
        `${colorMap[level]}[${entry.timestamp}] [${level.toUpperCase()}]${reset} ${message}`,
        data || ''
      );
    } else {
      // In production, we would send this to a logging service (e.g., Sentry, Datadog)
      // For now, we just JSON stringify it to stdout for log collectors
      console.log(JSON.stringify(entry));
    }
  }

  info(message: string, data?: unknown) {
    this.log('info', message, data);
  }

  warn(message: string, data?: unknown) {
    this.log('warn', message, data);
  }

  error(message: string, error?: unknown) {
    this.log('error', message, {
      error: error instanceof Error ? {
        message: error.message,
        stack: error.stack,
        name: error.name
      } : error
    });
  }

  debug(message: string, data?: unknown) {
    this.log('debug', message, data);
  }
}

export const logger = new Logger();
