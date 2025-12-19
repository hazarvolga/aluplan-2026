import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const transparentPngBase64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const filenameMap: Record<string, string> = {
  // Basic
  "csm_06_3DModeling_e83f7b4832.png": "src/assets/products/allplan-basic/3d-modeling.jpg",
  "csm_07_ViewsAndSections_feb418a4ca.png": "src/assets/products/allplan-basic/visualization.jpg",
  // Professional / Ultimate
  "csm_08_Reinforcement_cf8d04bb95.png": "src/assets/products/allplan-professional/precise-3d-reinforcement.png",
  "csm_09_Precast_1345b6c8b9.png": "src/assets/products/precast/wall-reinforcement.jpg",
  "csm_10_Steel_c9b24a3093.png": "src/assets/products/allplan-professional/steel-connections.jpg",
  "csm_11_Unlimited_Freeform_9b03808098.png": "src/assets/products/allplan-ultimate/parametric-modeling.jpg",
  // Infrastructure
  "csm_12_Terrain_f40a5044dc.png": "src/assets/products/allplan-professional/terrain-model.jpg",
  "csm_13_Road_b54aff2f40.png": "src/assets/products/allplan-ultimate/parametric-road-modeling.png",
  "csm_14_Utilities_378d4e11b9.png": "src/assets/products/allplan-professional/sewerage-utilities.jpg",
  // Site planning
  "csm_20_BIM2Site_86b23b21ec.png": "src/assets/products/allplan-ultimate/bim-2field.png",
};

function getContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  return "application/octet-stream";
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const parts = url.pathname.split("/");
    const filename = parts[parts.length - 1];
    const mapped = filenameMap[filename];
    if (mapped) {
      const repoRoot = process.cwd();
      const abs = path.join(repoRoot, mapped);
      const data = await fs.readFile(abs);
      return new NextResponse(data.buffer, {
        headers: {
          "Content-Type": getContentType(abs),
          "Cache-Control": "public, max-age=3600",
        },
      });
    }
  } catch (_err) {
    void _err;
  }
  const body = Buffer.from(transparentPngBase64, "base64");
  return new NextResponse(body.buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=60",
    },
  });
}
