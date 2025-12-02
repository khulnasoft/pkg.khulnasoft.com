import { describe, it, expect, vi, beforeEach } from "vitest";
import { joinKeys } from "unstorage";

// Mock the dependencies
vi.mock("unstorage", () => ({
  createStorage: vi.fn((config) => ({
    ...config,
    mockStorage: true,
  })),
  joinKeys: vi.fn((...keys) => keys.filter(Boolean).join(":")),
  prefixStorage: vi.fn((storage, prefix) => ({
    ...storage,
    prefix,
  })),
}));

vi.mock("unstorage/drivers/cloudflare-r2-binding", () => ({
  default: vi.fn((config) => config),
}));

vi.mock("unstorage/drivers/utils/cloudflare", () => ({
  getR2Binding: vi.fn((name) => ({ bindingName: name })),
}));

describe("bucket utilities", () => {
  const mockEvent = {
    context: {
      cloudflare: {
        env: {
          ENV: "production",
        },
      },
    },
  };

  const mockDevEvent = {
    context: {
      cloudflare: {
        env: {
          ENV: "development",
        },
      },
    },
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("baseKey", () => {
    it("should export baseKey constant", async () => {
      const { baseKey } = await import("../bucket.js");
      expect(baseKey).toBe("bucket");
    });
  });

  describe("useBinding", () => {
    it("should return PROD_CR_BUCKET for production environment", async () => {
      const { useBinding } = await import("../bucket.js");
      const { getR2Binding } = await import("unstorage/drivers/utils/cloudflare");

      useBinding(mockEvent as any);

      expect(getR2Binding).toHaveBeenCalledWith("PROD_CR_BUCKET");
    });

    it("should return CR_BUCKET for non-production environment", async () => {
      const { useBinding } = await import("../bucket.js");
      const { getR2Binding } = await import("unstorage/drivers/utils/cloudflare");

      useBinding(mockDevEvent as any);

      expect(getR2Binding).toHaveBeenCalledWith("CR_BUCKET");
    });
  });

  describe("setItemStream", () => {
    it("should call binding.put with correct parameters", async () => {
      const { setItemStream } = await import("../bucket.js");
      
      const mockStream = new ReadableStream();
      const mockPut = vi.fn();
      const mockBinding = { put: mockPut };

      vi.mocked(await import("unstorage/drivers/utils/cloudflare")).getR2Binding = vi.fn(
        () => mockBinding as any
      );

      await setItemStream(mockEvent as any, "base", "key", mockStream);

      expect(mockPut).toHaveBeenCalledWith("base:key", mockStream, undefined);
    });

    it("should pass R2PutOptions to binding.put", async () => {
      const { setItemStream } = await import("../bucket.js");
      
      const mockStream = new ReadableStream();
      const mockPut = vi.fn();
      const mockBinding = { put: mockPut };
      const mockOptions = { httpMetadata: { contentType: "application/json" } };

      vi.mocked(await import("unstorage/drivers/utils/cloudflare")).getR2Binding = vi.fn(
        () => mockBinding as any
      );

      await setItemStream(
        mockEvent as any,
        "base",
        "key",
        mockStream,
        mockOptions as any
      );

      expect(mockPut).toHaveBeenCalledWith("base:key", mockStream, mockOptions);
    });

    it("should join base and key correctly", async () => {
      const { setItemStream } = await import("../bucket.js");
      
      const mockStream = new ReadableStream();
      const mockPut = vi.fn();
      const mockBinding = { put: mockPut };

      vi.mocked(await import("unstorage/drivers/utils/cloudflare")).getR2Binding = vi.fn(
        () => mockBinding as any
      );

      await setItemStream(mockEvent as any, "mybase", "mykey", mockStream);

      const joinKeysMock = vi.mocked(joinKeys);
      expect(joinKeysMock).toHaveBeenCalledWith("mybase", "mykey");
    });
  });

  describe("getItemStream", () => {
    it("should call binding.get and return body", async () => {
      const { getItemStream } = await import("../bucket.js");
      
      const mockBody = new ReadableStream();
      const mockGet = vi.fn().mockResolvedValue({ body: mockBody });
      const mockBinding = { get: mockGet };

      vi.mocked(await import("unstorage/drivers/utils/cloudflare")).getR2Binding = vi.fn(
        () => mockBinding as any
      );

      const result = await getItemStream(mockEvent as any, "base", "key");

      expect(mockGet).toHaveBeenCalledWith("base:key", undefined);
      expect(result).toBe(mockBody);
    });

    it("should return undefined when object not found", async () => {
      const { getItemStream } = await import("../bucket.js");
      
      const mockGet = vi.fn().mockResolvedValue(null);
      const mockBinding = { get: mockGet };

      vi.mocked(await import("unstorage/drivers/utils/cloudflare")).getR2Binding = vi.fn(
        () => mockBinding as any
      );

      const result = await getItemStream(mockEvent as any, "base", "key");

      expect(result).toBeUndefined();
    });

    it("should pass R2GetOptions to binding.get", async () => {
      const { getItemStream } = await import("../bucket.js");
      
      const mockBody = new ReadableStream();
      const mockGet = vi.fn().mockResolvedValue({ body: mockBody });
      const mockBinding = { get: mockGet };
      const mockOptions = { range: { offset: 0, length: 100 } };

      vi.mocked(await import("unstorage/drivers/utils/cloudflare")).getR2Binding = vi.fn(
        () => mockBinding as any
      );

      await getItemStream(mockEvent as any, "base", "key", mockOptions as any);

      expect(mockGet).toHaveBeenCalledWith("base:key", mockOptions);
    });
  });

  describe("Bucket prefix functions", () => {
    it("useWorkflowsBucket should have correct key", async () => {
      const { useWorkflowsBucket } = await import("../bucket.js");
      
      expect(useWorkflowsBucket.key).toBe("workflow");
    });

    it("usePackagesBucket should have correct key", async () => {
      const { usePackagesBucket } = await import("../bucket.js");
      
      expect(usePackagesBucket.key).toBe("package");
    });

    it("useTemplatesBucket should have correct key", async () => {
      const { useTemplatesBucket } = await import("../bucket.js");
      
      expect(useTemplatesBucket.key).toBe("template");
    });

    it("useCursorsBucket should have correct key", async () => {
      const { useCursorsBucket } = await import("../bucket.js");
      
      expect(useCursorsBucket.key).toBe("cursor");
    });

    it("useDownloadedAtBucket should have correct key", async () => {
      const { useDownloadedAtBucket } = await import("../bucket.js");
      
      expect(useDownloadedAtBucket.key).toBe("downloaded-at");
    });

    it("should have correct base paths", async () => {
      const {
        useBucket,
        useWorkflowsBucket,
        usePackagesBucket,
        useTemplatesBucket,
        useCursorsBucket,
        useDownloadedAtBucket,
      } = await import("../bucket.js");

      expect(useBucket.base).toBe("bucket");
      expect(useWorkflowsBucket.base).toBe("bucket:workflow");
      expect(usePackagesBucket.base).toBe("bucket:package");
      expect(useTemplatesBucket.base).toBe("bucket:template");
      expect(useCursorsBucket.base).toBe("bucket:cursor");
      expect(useDownloadedAtBucket.base).toBe("bucket:downloaded-at");
    });
  });

  describe("Edge cases", () => {
    it("should handle empty base in setItemStream", async () => {
      const { setItemStream } = await import("../bucket.js");
      
      const mockStream = new ReadableStream();
      const mockPut = vi.fn();
      const mockBinding = { put: mockPut };

      vi.mocked(await import("unstorage/drivers/utils/cloudflare")).getR2Binding = vi.fn(
        () => mockBinding as any
      );

      await setItemStream(mockEvent as any, "", "key", mockStream);

      // Should still call put with the key
      expect(mockPut).toHaveBeenCalled();
    });

    it("should handle special characters in keys", async () => {
      const { setItemStream } = await import("../bucket.js");
      
      const mockStream = new ReadableStream();
      const mockPut = vi.fn();
      const mockBinding = { put: mockPut };

      vi.mocked(await import("unstorage/drivers/utils/cloudflare")).getR2Binding = vi.fn(
        () => mockBinding as any
      );

      await setItemStream(
        mockEvent as any,
        "base",
        "key/with/slashes@special",
        mockStream
      );

      expect(mockPut).toHaveBeenCalled();
    });

    it("should handle null return from R2 get", async () => {
      const { getItemStream } = await import("../bucket.js");
      
      const mockGet = vi.fn().mockResolvedValue(null);
      const mockBinding = { get: mockGet };

      vi.mocked(await import("unstorage/drivers/utils/cloudflare")).getR2Binding = vi.fn(
        () => mockBinding as any
      );

      const result = await getItemStream(mockEvent as any, "base", "key");

      expect(result).toBeUndefined();
    });
  });
});