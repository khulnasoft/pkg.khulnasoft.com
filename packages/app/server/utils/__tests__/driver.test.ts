import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  createUnstorageError,
  getBinding,
  getR2Binding,
} from "../driver.js";

describe("driver utilities", () => {
  describe("createUnstorageError", () => {
    it("should create an error with driver and message", () => {
      const error = createUnstorageError("test-driver", "test message");
      
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("[unstorage] [test-driver] test message");
    });

    it("should include driver name in error message", () => {
      const error = createUnstorageError("cloudflare-r2", "connection failed");
      
      expect(error.message).toContain("cloudflare-r2");
      expect(error.message).toContain("connection failed");
    });

    it("should accept error options", () => {
      const cause = new Error("Original error");
      const error = createUnstorageError("driver", "wrapped error", { cause });
      
      expect(error.cause).toBe(cause);
    });

    it("should handle empty message", () => {
      const error = createUnstorageError("driver", "");
      
      expect(error.message).toBe("[unstorage] [driver] ");
    });

    it("should handle special characters in message", () => {
      const error = createUnstorageError("driver", "Error: Invalid key `test@key`");
      
      expect(error.message).toContain("Invalid key `test@key`");
    });

    it("should have a stack trace", () => {
      const error = createUnstorageError("driver", "test");
      
      expect(error.stack).toBeDefined();
    });
  });

  describe("getBinding", () => {
    let originalGlobal: any;

    beforeEach(() => {
      originalGlobal = { ...(globalThis as any) };
    });

    afterEach(() => {
      Object.keys(globalThis as any).forEach((key) => {
        if (!(key in originalGlobal)) {
          delete (globalThis as any)[key];
        }
      });
    });

    it("should return binding object directly when passed as object", () => {
      const mockBinding = {
        get: vi.fn(),
        put: vi.fn(),
        delete: vi.fn(),
      };

      const result = getBinding(mockBinding as any);
      
      expect(result).toBe(mockBinding);
    });

    it("should retrieve binding from globalThis by name", () => {
      const mockBinding = {
        get: vi.fn(),
        put: vi.fn(),
        delete: vi.fn(),
      };
      (globalThis as any).MY_BINDING = mockBinding;

      const result = getBinding("MY_BINDING");
      
      expect(result).toBe(mockBinding);
    });

    it("should retrieve binding from globalThis.__env__ by name", () => {
      const mockBinding = {
        get: vi.fn(),
        put: vi.fn(),
        delete: vi.fn(),
      };
      (globalThis as any).__env__ = { MY_BINDING: mockBinding };

      const result = getBinding("MY_BINDING");
      
      expect(result).toBe(mockBinding);
    });

    it("should throw error when binding string is not found", () => {
      expect(() => getBinding("NON_EXISTENT_BINDING")).toThrow();
      expect(() => getBinding("NON_EXISTENT_BINDING")).toThrow(
        /Invalid binding.*NON_EXISTENT_BINDING/
      );
    });

    it("should throw error when binding is undefined", () => {
      (globalThis as any).UNDEFINED_BINDING = undefined;

      expect(() => getBinding("UNDEFINED_BINDING")).toThrow();
      expect(() => getBinding("UNDEFINED_BINDING")).toThrow(/Invalid binding/);
    });

    it("should throw error when binding is null", () => {
      (globalThis as any).NULL_BINDING = null;

      expect(() => getBinding("NULL_BINDING")).toThrow();
      expect(() => getBinding("NULL_BINDING")).toThrow(/Invalid binding/);
    });

    it("should throw error when binding missing get method", () => {
      const invalidBinding = {
        put: vi.fn(),
        delete: vi.fn(),
      };
      
      expect(() => getBinding(invalidBinding as any)).toThrow();
      expect(() => getBinding(invalidBinding as any)).toThrow(/get.*key is missing/);
    });

    it("should throw error when binding missing put method", () => {
      const invalidBinding = {
        get: vi.fn(),
        delete: vi.fn(),
      };
      
      expect(() => getBinding(invalidBinding as any)).toThrow();
      expect(() => getBinding(invalidBinding as any)).toThrow(/put.*key is missing/);
    });

    it("should throw error when binding missing delete method", () => {
      const invalidBinding = {
        get: vi.fn(),
        put: vi.fn(),
      };
      
      expect(() => getBinding(invalidBinding as any)).toThrow();
      expect(() => getBinding(invalidBinding as any)).toThrow(/delete.*key is missing/);
    });

    it("should accept binding with all required methods", () => {
      const validBinding = {
        get: vi.fn(),
        put: vi.fn(),
        delete: vi.fn(),
        list: vi.fn(), // optional method
      };

      expect(() => getBinding(validBinding as any)).not.toThrow();
    });

    it("should handle binding with additional properties", () => {
      const binding = {
        get: vi.fn(),
        put: vi.fn(),
        delete: vi.fn(),
        head: vi.fn(),
        list: vi.fn(),
        customMethod: vi.fn(),
      };

      const result = getBinding(binding as any);
      
      expect(result).toBe(binding);
      expect(result.customMethod).toBeDefined();
    });
  });

  describe("getR2Binding", () => {
    let originalGlobal: any;

    beforeEach(() => {
      originalGlobal = { ...(globalThis as any) };
    });

    afterEach(() => {
      Object.keys(globalThis as any).forEach((key) => {
        if (!(key in originalGlobal)) {
          delete (globalThis as any)[key];
        }
      });
    });

    it("should return R2Bucket binding with default name BUCKET", () => {
      const mockR2Binding = {
        get: vi.fn(),
        put: vi.fn(),
        delete: vi.fn(),
        list: vi.fn(),
      };
      (globalThis as any).BUCKET = mockR2Binding;

      const result = getR2Binding();
      
      expect(result).toBe(mockR2Binding);
    });

    it("should return R2Bucket binding with custom name", () => {
      const mockR2Binding = {
        get: vi.fn(),
        put: vi.fn(),
        delete: vi.fn(),
      };
      (globalThis as any).MY_R2_BUCKET = mockR2Binding;

      const result = getR2Binding("MY_R2_BUCKET");
      
      expect(result).toBe(mockR2Binding);
    });

    it("should accept R2Bucket object directly", () => {
      const mockR2Binding = {
        get: vi.fn(),
        put: vi.fn(),
        delete: vi.fn(),
        head: vi.fn(),
        list: vi.fn(),
      };

      const result = getR2Binding(mockR2Binding as any);
      
      expect(result).toBe(mockR2Binding);
    });

    it("should throw error when R2 binding not found", () => {
      expect(() => getR2Binding("NON_EXISTENT_R2")).toThrow();
      expect(() => getR2Binding("NON_EXISTENT_R2")).toThrow(/Invalid binding/);
    });

    it("should validate required methods on R2 binding", () => {
      const invalidR2 = {
        get: vi.fn(),
        // missing put and delete
      };

      expect(() => getR2Binding(invalidR2 as any)).toThrow();
    });

    it("should work with __env__ R2 bindings", () => {
      const mockR2Binding = {
        get: vi.fn(),
        put: vi.fn(),
        delete: vi.fn(),
      };
      (globalThis as any).__env__ = { R2_BUCKET: mockR2Binding };

      const result = getR2Binding("R2_BUCKET");
      
      expect(result).toBe(mockR2Binding);
    });
  });

  describe("Edge cases and error scenarios", () => {
    it("should handle empty binding name string", () => {
      expect(() => getBinding("")).toThrow();
    });

    it("should handle binding with null methods", () => {
      const badBinding = {
        get: null,
        put: vi.fn(),
        delete: vi.fn(),
      };

      expect(() => getBinding(badBinding as any)).toThrow();
    });

    it("should handle binding with undefined methods", () => {
      const badBinding = {
        get: undefined,
        put: vi.fn(),
        delete: vi.fn(),
      };

      expect(() => getBinding(badBinding as any)).toThrow();
    });

    it("should handle multiple missing methods", () => {
      const badBinding = {
        get: vi.fn(),
        // missing both put and delete
      };

      expect(() => getBinding(badBinding as any)).toThrow();
    });

    it("should preserve binding functionality", () => {
      const mockBinding = {
        get: vi.fn().mockResolvedValue("value"),
        put: vi.fn().mockResolvedValue(undefined),
        delete: vi.fn().mockResolvedValue(undefined),
      };

      const binding = getBinding(mockBinding as any);
      
      // Verify methods are still callable
      expect(typeof binding.get).toBe("function");
      expect(typeof binding.put).toBe("function");
      expect(typeof binding.delete).toBe("function");
    });
  });
});