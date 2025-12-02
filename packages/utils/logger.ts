/**
 * Log levels in order of verbosity
 */
const LOG_LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
} as const;

type LogLevel = keyof typeof LOG_LEVELS;

interface LoggerOptions {
  /**
   * The minimum log level to output
   * @default 'info'
   */
  level?: LogLevel;

  /**
   * Whether to include timestamps in log messages
   * @default true
   */
  timestamps?: boolean;
}

/**
 * A simple logger with different log levels and formatting
 */
class Logger {
  private level: LogLevel;
  private timestamps: boolean;
  private static instance: Logger;

  private constructor(options: LoggerOptions = {}) {
    this.level = options.level ?? "info";
    this.timestamps = options.timestamps ?? true;
  }

  /**
   * Get the singleton instance of the logger
   */
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  /**
   * Configure the logger instance
   */
  public configure(options: LoggerOptions): void {
    if (options.level) this.level = options.level;
    if (options.timestamps !== undefined) this.timestamps = options.timestamps;
  }

  /**
   * Log an error message
   */
  public error(message: string, ...args: unknown[]): void {
    this.log("error", message, ...args);
  }

  /**
   * Log a warning message
   */
  public warn(message: string, ...args: unknown[]): void {
    this.log("warn", message, ...args);
  }

  /**
   * Log an informational message
   */
  public info(message: string, ...args: unknown[]): void {
    this.log("info", message, ...args);
  }

  /**
   * Log a debug message
   */
  public debug(message: string, ...args: unknown[]): void {
    this.log("debug", message, ...args);
  }

  private log(level: LogLevel, message: string, ...args: unknown[]): void {
    if (!this.shouldLog(level)) return;

    const timestamp = this.timestamps ? `[${new Date().toISOString()}] ` : "";
    const prefix = `[${level.toUpperCase()}]`;
    const logMessage = `${timestamp}${prefix} ${message}`;

    switch (level) {
      case "error":
        console.error(logMessage, ...args);
        break;
      case "warn":
        console.warn(logMessage, ...args);
        break;
      case "info":
        console.info(logMessage, ...args);
        break;
      case "debug":
        console.debug(logMessage, ...args);
        break;
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return LOG_LEVELS[level] <= LOG_LEVELS[this.level];
  }
}

/**
 * Global logger instance
 */
export const logger = Logger.getInstance();

/**
 * Exit the process with an error message and status code
 */
export class ApplicationError extends Error {
  constructor(
    message: string,
    public readonly code: number = 1,
  ) {
    super(message);
    this.name = "ApplicationError";
  }
}

export function exitWithError(message: string, code = 1): never {
  throw new ApplicationError(message, code);
}

/**
 * Create a scoped logger with a specific prefix
 */
export function createScopedLogger(scope: string) {
  return {
    error: (message: string, ...args: unknown[]) =>
      logger.error(`[${scope}] ${message}`, ...args),
    warn: (message: string, ...args: unknown[]) =>
      logger.warn(`[${scope}] ${message}`, ...args),
    info: (message: string, ...args: unknown[]) =>
      logger.info(`[${scope}] ${message}`, ...args),
    debug: (message: string, ...args: unknown[]) =>
      logger.debug(`[${scope}] ${message}`, ...args),
  };
}
