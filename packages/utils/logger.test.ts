import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  type SpyInstance,
} from "vitest";
import {
  logger,
  exitWithError,
  createScopedLogger,
  ApplicationError,
} from "./logger.js";

describe("Logger", () => {
  let consoleErrorSpy: SpyInstance;
  let consoleWarnSpy: SpyInstance;
  let consoleInfoSpy: SpyInstance;
  let consoleDebugSpy: SpyInstance;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    consoleInfoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
    consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
    logger.configure({ level: "info", timestamps: true });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Logger singleton", () => {
    it("should return the same instance", () => {
      const instance1 = logger;
      const instance2 = logger;
      expect(instance1).toBe(instance2);
    });
  });

  describe("Log level filtering", () => {
    it("should log error messages at info level", () => {
      logger.configure({ level: "info", timestamps: false });
      logger.error("test error");
      expect(consoleErrorSpy).toHaveBeenCalledWith("[ERROR] test error");
    });

    it("should log warn messages at info level", () => {
      logger.configure({ level: "info", timestamps: false });
      logger.warn("test warning");
      expect(consoleWarnSpy).toHaveBeenCalledWith("[WARN] test warning");
    });

    it("should log info messages at info level", () => {
      logger.configure({ level: "info", timestamps: false });
      logger.info("test info");
      expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] test info");
    });

    it("should not log debug messages at info level", () => {
      logger.configure({ level: "info", timestamps: false });
      logger.debug("test debug");
      expect(consoleDebugSpy).not.toHaveBeenCalled();
    });

    it("should log debug messages at debug level", () => {
      logger.configure({ level: "debug", timestamps: false });
      logger.debug("test debug");
      expect(consoleDebugSpy).toHaveBeenCalledWith("[DEBUG] test debug");
    });

    it("should not log info messages at error level", () => {
      logger.configure({ level: "error", timestamps: false });
      logger.info("test info");
      expect(consoleInfoSpy).not.toHaveBeenCalled();
    });

    it("should not log warn messages at error level", () => {
      logger.configure({ level: "error", timestamps: false });
      logger.warn("test warning");
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it("should log error messages at error level", () => {
      logger.configure({ level: "error", timestamps: false });
      logger.error("test error");
      expect(consoleErrorSpy).toHaveBeenCalledWith("[ERROR] test error");
    });

    it("should log all messages at debug level", () => {
      logger.configure({ level: "debug", timestamps: false });
      logger.error("error");
      logger.warn("warn");
      logger.info("info");
      logger.debug("debug");

      expect(consoleErrorSpy).toHaveBeenCalledWith("[ERROR] error");
      expect(consoleWarnSpy).toHaveBeenCalledWith("[WARN] warn");
      expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] info");
      expect(consoleDebugSpy).toHaveBeenCalledWith("[DEBUG] debug");
    });

    it("should only log error and warn at warn level", () => {
      logger.configure({ level: "warn", timestamps: false });
      logger.error("error");
      logger.warn("warn");
      logger.info("info");
      logger.debug("debug");

      expect(consoleErrorSpy).toHaveBeenCalledWith("[ERROR] error");
      expect(consoleWarnSpy).toHaveBeenCalledWith("[WARN] warn");
      expect(consoleInfoSpy).not.toHaveBeenCalled();
      expect(consoleDebugSpy).not.toHaveBeenCalled();
    });
  });

  describe("Timestamp handling", () => {
    it("should include timestamps by default", () => {
      logger.configure({ level: "info", timestamps: true });
      logger.info("test");

      expect(consoleInfoSpy).toHaveBeenCalled();
      const call = consoleInfoSpy.mock.calls[0][0];
      expect(call).toMatch(/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[INFO\] test$/);
    });

    it("should not include timestamps when disabled", () => {
      logger.configure({ level: "info", timestamps: false });
      logger.info("test");

      expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] test");
    });

    it("should respect timestamp setting for all log levels", () => {
      logger.configure({ level: "debug", timestamps: false });

      logger.error("error");
      logger.warn("warn");
      logger.info("info");
      logger.debug("debug");

      expect(consoleErrorSpy).toHaveBeenCalledWith("[ERROR] error");
      expect(consoleWarnSpy).toHaveBeenCalledWith("[WARN] warn");
      expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] info");
      expect(consoleDebugSpy).toHaveBeenCalledWith("[DEBUG] debug");
    });
  });

  describe("Additional arguments", () => {
    it("should pass additional arguments to console methods", () => {
      logger.configure({ level: "info", timestamps: false });
      const obj = { key: "value" };
      const arr = [1, 2, 3];

      logger.error("error message", obj, arr);

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "[ERROR] error message",
        obj,
        arr
      );
    });

    it("should handle multiple arguments of different types", () => {
      logger.configure({ level: "info", timestamps: false });

      logger.info("test", 42, true, null, undefined, { nested: { obj: true } });

      expect(consoleInfoSpy).toHaveBeenCalledWith(
        "[INFO] test",
        42,
        true,
        null,
        undefined,
        { nested: { obj: true } }
      );
    });

    it("should handle Error objects as arguments", () => {
      logger.configure({ level: "error", timestamps: false });
      const error = new Error("test error");

      logger.error("An error occurred", error);

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "[ERROR] An error occurred",
        error
      );
    });
  });

  describe("Configuration", () => {
    it("should update log level only when specified", () => {
      logger.configure({ level: "debug", timestamps: false });
      logger.debug("should log");
      expect(consoleDebugSpy).toHaveBeenCalled();

      consoleDebugSpy.mockClear();
      logger.configure({ timestamps: true });
      logger.debug("should still log");
      expect(consoleDebugSpy).toHaveBeenCalled();
    });

    it("should update timestamps only when specified", () => {
      logger.configure({ level: "info", timestamps: true });
      logger.info("test");
      const withTimestamp = consoleInfoSpy.mock.calls[0][0];
      expect(withTimestamp).toMatch(/^\[/);

      consoleInfoSpy.mockClear();
      logger.configure({ level: "debug" });
      logger.info("test");
      const stillWithTimestamp = consoleInfoSpy.mock.calls[0][0];
      expect(stillWithTimestamp).toMatch(/^\[/);
    });

    it("should allow disabling timestamps explicitly", () => {
      logger.configure({ level: "info", timestamps: true });
      logger.configure({ timestamps: false });
      logger.info("test");

      expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] test");
    });
  });

  describe("Edge cases", () => {
    it("should handle empty string messages", () => {
      logger.configure({ level: "info", timestamps: false });
      logger.info("");

      expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] ");
    });

    it("should handle messages with newlines", () => {
      logger.configure({ level: "info", timestamps: false });
      logger.info("line1\nline2\nline3");

      expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] line1\nline2\nline3");
    });

    it("should handle messages with special characters", () => {
      logger.configure({ level: "info", timestamps: false });
      logger.info("Special: !@#$%^&*()[]{}|\\;:'\",.<>?/`~");

      expect(consoleInfoSpy).toHaveBeenCalledWith(
        "[INFO] Special: !@#$%^&*()[]{}|\\;:'\",.<>?/`~"
      );
    });

    it("should handle very long messages", () => {
      logger.configure({ level: "info", timestamps: false });
      const longMessage = "a".repeat(10000);
      logger.info(longMessage);

      expect(consoleInfoSpy).toHaveBeenCalledWith(`[INFO] ${longMessage}`);
    });

    it("should handle unicode characters", () => {
      logger.configure({ level: "info", timestamps: false });
      logger.info("Unicode: 你好 🌍 ñ é ü");

      expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] Unicode: 你好 🌍 ñ é ü");
    });
  });
});

describe("ApplicationError", () => {
  it("should create an error with message and default code", () => {
    const error = new ApplicationError("test error");
    expect(error.message).toBe("test error");
    expect(error.code).toBe(1);
    expect(error.name).toBe("ApplicationError");
  });

  it("should create an error with custom code", () => {
    const error = new ApplicationError("test error", 42);
    expect(error.message).toBe("test error");
    expect(error.code).toBe(42);
    expect(error.name).toBe("ApplicationError");
  });

  it("should be an instance of Error", () => {
    const error = new ApplicationError("test");
    expect(error).toBeInstanceOf(Error);
  });

  it("should have a stack trace", () => {
    const error = new ApplicationError("test");
    expect(error.stack).toBeDefined();
    expect(error.stack).toContain("ApplicationError");
  });

  it("should handle empty error message", () => {
    const error = new ApplicationError("");
    expect(error.message).toBe("");
    expect(error.code).toBe(1);
  });

  it("should handle zero as error code", () => {
    const error = new ApplicationError("test", 0);
    expect(error.code).toBe(0);
  });

  it("should handle negative error codes", () => {
    const error = new ApplicationError("test", -1);
    expect(error.code).toBe(-1);
  });
});

describe("exitWithError", () => {
  it("should throw ApplicationError with message", () => {
    expect(() => exitWithError("test error")).toThrow(ApplicationError);
    expect(() => exitWithError("test error")).toThrow("test error");
  });

  it("should throw ApplicationError with default code 1", () => {
    try {
      exitWithError("test error");
    } catch (error) {
      expect(error).toBeInstanceOf(ApplicationError);
      expect((error as ApplicationError).code).toBe(1);
    }
  });

  it("should throw ApplicationError with custom code", () => {
    try {
      exitWithError("test error", 42);
    } catch (error) {
      expect(error).toBeInstanceOf(ApplicationError);
      expect((error as ApplicationError).code).toBe(42);
    }
  });

  it("should never return (type check)", () => {
    expect(() => {
      exitWithError("test");
      return "should not reach here";
    }).toThrow();
  });

  it("should handle empty error message", () => {
    expect(() => exitWithError("")).toThrow(ApplicationError);
  });

  it("should handle very long error messages", () => {
    const longMessage = "error ".repeat(1000);
    try {
      exitWithError(longMessage);
    } catch (error) {
      expect(error).toBeInstanceOf(ApplicationError);
      expect((error as ApplicationError).message).toBe(longMessage);
    }
  });
});

describe("createScopedLogger", () => {
  let consoleErrorSpy: SpyInstance;
  let consoleWarnSpy: SpyInstance;
  let consoleInfoSpy: SpyInstance;
  let consoleDebugSpy: SpyInstance;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    consoleInfoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
    consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

    logger.configure({ level: "debug", timestamps: false });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should create a scoped logger with prefix", () => {
    const scopedLogger = createScopedLogger("test-scope");
    scopedLogger.info("test message");

    expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] [test-scope] test message");
  });

  it("should add scope prefix to error messages", () => {
    const scopedLogger = createScopedLogger("error-scope");
    scopedLogger.error("error occurred");

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "[ERROR] [error-scope] error occurred"
    );
  });

  it("should add scope prefix to warn messages", () => {
    const scopedLogger = createScopedLogger("warn-scope");
    scopedLogger.warn("warning message");

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "[WARN] [warn-scope] warning message"
    );
  });

  it("should add scope prefix to debug messages", () => {
    const scopedLogger = createScopedLogger("debug-scope");
    scopedLogger.debug("debug info");

    expect(consoleDebugSpy).toHaveBeenCalledWith(
      "[DEBUG] [debug-scope] debug info"
    );
  });

  it("should pass additional arguments through", () => {
    const scopedLogger = createScopedLogger("scope");
    const obj = { key: "value" };
    scopedLogger.info("message", obj);

    expect(consoleInfoSpy).toHaveBeenCalledWith(
      "[INFO] [scope] message",
      obj
    );
  });

  it("should handle empty scope name", () => {
    const scopedLogger = createScopedLogger("");
    scopedLogger.info("test");

    expect(consoleInfoSpy).toHaveBeenCalledWith("[INFO] [] test");
  });

  it("should handle scope names with special characters", () => {
    const scopedLogger = createScopedLogger("my-app:module:sub");
    scopedLogger.info("test");

    expect(consoleInfoSpy).toHaveBeenCalledWith(
      "[INFO] [my-app:module:sub] test"
    );
  });

  it("should respect global log level", () => {
    logger.configure({ level: "warn", timestamps: false });
    const scopedLogger = createScopedLogger("scope");

    scopedLogger.info("should not log");
    scopedLogger.warn("should log");

    expect(consoleInfoSpy).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledWith("[WARN] [scope] should log");
  });

  it("should create multiple independent scoped loggers", () => {
    const logger1 = createScopedLogger("scope1");
    const logger2 = createScopedLogger("scope2");

    logger1.info("from scope1");
    logger2.info("from scope2");

    expect(consoleInfoSpy).toHaveBeenNthCalledWith(
      1,
      "[INFO] [scope1] from scope1"
    );
    expect(consoleInfoSpy).toHaveBeenNthCalledWith(
      2,
      "[INFO] [scope2] from scope2"
    );
  });

  it("should work with timestamps enabled", () => {
    logger.configure({ level: "info", timestamps: true });
    const scopedLogger = createScopedLogger("scope");
    scopedLogger.info("test");

    expect(consoleInfoSpy).toHaveBeenCalled();
    const call = consoleInfoSpy.mock.calls[0][0];
    expect(call).toMatch(/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[INFO\] \[scope\] test$/);
  });

  it("should handle scope with unicode characters", () => {
    const scopedLogger = createScopedLogger("测试-scope-🔧");
    scopedLogger.info("message");

    expect(consoleInfoSpy).toHaveBeenCalledWith(
      "[INFO] [测试-scope-🔧] message"
    );
  });

  it("should handle very long scope names", () => {
    const longScope = "scope-".repeat(100);
    const scopedLogger = createScopedLogger(longScope);
    scopedLogger.info("test");

    expect(consoleInfoSpy).toHaveBeenCalledWith(
      `[INFO] [${longScope}] test`
    );
  });
});