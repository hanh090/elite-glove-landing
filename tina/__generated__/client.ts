import fs from "node:fs";
import path from "node:path";

// Read JSON content files directly from filesystem
function readContentFile(dirName: string, relativePath: string) {
  const contentDir = path.resolve(process.cwd(), "content");
  const filePath = path.join(contentDir, dirName, relativePath);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function buildQueryResult(queryName: string, dirName: string, relativePath: string) {
  return { data: { [queryName]: readContentFile(dirName, relativePath) } };
}

function listCollectionFiles(dirName: string) {
  const dir = path.join(path.resolve(process.cwd(), "content"), dirName);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f: string) => f.endsWith(".json"));
}

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
      const edges = files.map((f: string) => ({ node: readContentFile("products", f) }));
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
