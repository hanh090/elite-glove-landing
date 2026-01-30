import fs from "node:fs";
import path from "node:path";

// Read JSON content files directly - works both locally and in production builds
// No TinaCMS Cloud dependency needed for static site generation
function readContentFile(dirName: string, relativePath: string) {
  const contentDir = path.resolve(process.cwd(), "content");
  const filePath = path.join(contentDir, dirName, relativePath);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

// Build a query result matching TinaCMS client shape: { data: { [queryName]: content } }
// queryName must match what components expect (e.g. "siteSettings", not "site-settings")
function buildQueryResult(queryName: string, dirName: string, relativePath: string) {
  const content = readContentFile(dirName, relativePath);
  return { data: { [queryName]: content } };
}

// List all JSON files in a collection directory
function listCollectionFiles(dirName: string) {
  const contentDir = path.resolve(process.cwd(), "content");
  const collectionDir = path.join(contentDir, dirName);
  if (!fs.existsSync(collectionDir)) return [];
  return fs
    .readdirSync(collectionDir)
    .filter((f: string) => f.endsWith(".json"));
}

// Client that mimics TinaCMS client API but reads from local JSON files
const client = {
  queries: {
    siteSettings: (args: { relativePath: string }) =>
      buildQueryResult("siteSettings", "site-settings", args.relativePath),
    hero: (args: { relativePath: string }) =>
      buildQueryResult("hero", "hero", args.relativePath),
    about: (args: { relativePath: string }) =>
      buildQueryResult("about", "about", args.relativePath),
    products: (args: { relativePath: string }) =>
      buildQueryResult("products", "products", args.relativePath),
    productsConnection: () => {
      const files = listCollectionFiles("products");
      const edges = files.map((f: string) => ({
        node: readContentFile("products", f),
      }));
      return { data: { productsConnection: { edges } } };
    },
    features: (args: { relativePath: string }) =>
      buildQueryResult("features", "features", args.relativePath),
    specs: (args: { relativePath: string }) =>
      buildQueryResult("specs", "specs", args.relativePath),
    certifications: (args: { relativePath: string }) =>
      buildQueryResult("certifications", "certifications", args.relativePath),
    globalPresence: (args: { relativePath: string }) =>
      buildQueryResult("globalPresence", "global-presence", args.relativePath),
    contact: (args: { relativePath: string }) =>
      buildQueryResult("contact", "contact", args.relativePath),
  },
};

export default client;
